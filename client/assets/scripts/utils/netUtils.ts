import { WECHAT } from "cc/env";
import { HttpClient as HttpClient_Browser, WsClient as WsClient_Browser } from 'tsrpc-browser';
import { HttpClient as HttpClient_Miniapp, WsClient as WsClient_Miniapp } from 'tsrpc-miniapp';
import { BaseResponse } from "../shared/protocols/base";
import { serviceProto as ServiceProtoGate} from "../shared/protocols/ServiceProtoGate";
import { serviceProto as ServiceProtoMatch} from "../shared/protocols/ServiceProtoMatch";
import { serviceProto as ServiceProtoRoom} from "../shared/protocols/ServiceProtoRoom";
import { GameServerConfig } from "../globals/gConst";
import { Security } from "../shared/models/Security";
import { ShareConfig } from "../shared/models/ShareConfig";
import { dh } from "../dh";

/** TSRPC网络模块 */
export class NetUtils {
    /** 创建连接网关服务器 Http 客户端 */
    createHttpGate() {
        let http_gate = new (WECHAT ? HttpClient_Miniapp : HttpClient_Browser)(ServiceProtoGate, {
            server: `${ShareConfig.https ? "https" : "http"}://${GameServerConfig.gate}`,
            json: ShareConfig.json,
            logger: console,
        });
        this.flowClientApi(http_gate);
        this.flowAuth(http_gate);
        
        return http_gate
    }

    /** 创建连接匹配服务器 Http 客户端 */
    createHttpMatch() {
        let http_match = new (WECHAT ? HttpClient_Miniapp : HttpClient_Browser)(ServiceProtoMatch, {
            server: GameServerConfig.match,
            json: ShareConfig.json,
            logger: console
        });
        this.flowClientApi(http_match);
        this.flowAuth(http_match);
        
        return http_match
    }

    /**
     *  创建连接房间服务器 Websocket 客户端
     * @param serverUrl 服务器地址
     * @returns WsClient
     */
    createWscRoom(serverUrl: string) {
        // 创建客户端与房间服务器的 WebSocket 连接
        let ws_room = new (WECHAT ? WsClient_Miniapp : WsClient_Browser)(ServiceProtoRoom, {
            server: serverUrl,
            heartbeat: {
                interval: GameServerConfig.heartbeat_interval,
                timeout: GameServerConfig.heartbeat_timeout
            },
            json: ShareConfig.json,
            // logger: console,
            // logMsg: true,
        });
        this.flowClientMsg(ws_room);
        this.flowAuth(ws_room);

        return ws_room;
    }

    /** HTTP 客户端协议数据加密、解密 */
    private flowClientApi(hc: any) {
        if (!ShareConfig.security) return;

        hc.flows.preSendDataFlow.push(v => {
            if (v.data instanceof Uint8Array) {
                v.data = Security.encrypt(v.data);
            }
            return v;
        });

        // 在处理接收到的数据之前，通常要进行加密/解密
        hc.flows.preRecvDataFlow.push(v => {
            if (v.data instanceof Uint8Array) {
                v.data = Security.decrypt(v.data);
            }
            return v;
        });
    }

    /** WebSocket 客户端协议数据加密、解密 */
    private flowClientMsg(wsc: any) {
        if (!ShareConfig.security) return;

        // 发送 Message 之前
        wsc.flows.preSendMsgFlow.push(v => {
            if (v.data instanceof Uint8Array) {
                v.data = Security.encrypt(v.data);
            }
            return v;
        });

        // 触发 Message 监听事件之前
        wsc.flows.preRecvMsgFlow.push(v => {
            if (v.data instanceof Uint8Array) {
                v.data = Security.decrypt(v.data);
            }
            return v;
        });
    }

    /** 帐号登录令牌验证是否逻辑（帐号中加入登录令牌，服务器通过令牌解析玩家数据，如果存在就是已登录） */
    private flowAuth(client: any) {              // HttpClient WsClient
        // 执行 callApi 之前协议中插入登录令牌
        client.flows.preCallApiFlow.push(v => {
            // 请求前插入登录令牌
            let ssoToken = dh.storageManager.get('SSO_TOKEN');
            if (ssoToken) {
                v.req.__ssoToken = ssoToken;
            }
            return v;
        })

        // 将 callApi 的结果返回给调用方之后将登录令牌存到本地（收到协议时将登录令牌存到本地）
        client.flows.postApiReturnFlow.push(v => {
            if (v.return.isSucc) {
                let res = v.return.res as BaseResponse;

                // 请求成功后刷新登录令牌
                if (res.__ssoToken !== undefined) {
                    dh.storageManager.set('SSO_TOKEN', res.__ssoToken);
                }
            }
            // 登录令牌过期时删除客户端登录令牌（可跳转到登录界面）
            else if (v.return.err.code === 'NEED_LOGIN') {
                dh.storageManager.remove('SSO_TOKEN');
            }
            return v;
        });
    }
}