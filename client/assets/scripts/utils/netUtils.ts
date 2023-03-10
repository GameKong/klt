import { WECHAT } from "cc/env";
import { ApiReturn, HttpClient as HttpClient_Browser, WsClient as WsClient_Browser } from 'tsrpc-browser';
import { HttpClient as HttpClient_Miniapp, WsClient as WsClient_Miniapp } from 'tsrpc-miniapp';
import { BaseResponse } from "../shared/protocols/base";

import { Security } from "../shared/models/Security";
import { ShareConfig } from "../shared/models/ShareConfig";
import { dh } from "../dh";
import { UIHelper } from "../tools/uiHelper";
import { DbUrl } from "../shared/models/dbUrl";
import { GLocalKey } from "../globals/gLocalKey";
import { Account } from "../data/account";
import { RoomEntity } from "../game/room/roomEntity";
import { RoomOwnerLeaveComp } from "../game/room/system/roomOperateSystems/roomOwnerLeave";

/** TSRPC网络模块 */
export class NetUtils {
    /** HTTP 客户端协议数据加密、解密 */
    public flowClientApi(hc: any) {
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
    public flowClientMsg(wsc: any) {
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
    public flowAuth(client: any) {              // HttpClient WsClient
        // 执行 callApi 之前协议中插入登录令牌
        client.flows.preCallApiFlow.push(v => {
            // 请求前插入登录令牌
            let ssoToken = Account.ssoToken; // dh.storageManager.get(GLocalKey.SsoToken);
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
                    Account.ssoToken = res.__ssoToken // dh.storageManager.set(GLocalKey.SsoToken, res.__ssoToken);
                }
            }
            // 登录令牌过期时删除客户端登录令牌（可跳转到登录界面）
            else if (v.return.err.code === 'NEED_LOGIN') {
                dh.storageManager.remove(GLocalKey.SsoToken);
            }
            return v;
        });
    }

    /** 发送消息前加屏蔽层，接受消息后删除屏蔽层 */
    public flowSwallowTouch(client: any) {
        // 执行 callApi 加屏蔽层
        client.flows.preCallApiFlow.push(v => {
            dh.uiManager.layer_swallow.disableTouches();
            return v;
        })

        // 将 callApi 的结果返回给调用方之后删除屏蔽层
        client.flows.postApiReturnFlow.push(v => {
            dh.uiManager.layer_swallow.enableTouches();
            return v;
        });
    }

    /** 发接受消息后弹提示 */
    public flowTips(client: any) {
        // 将 callApi 的结果返回给调用方之后，有错误谈错误提示
        client.flows.postApiReturnFlow.push(v => {
            let ret: ApiReturn<any> = v.return as ApiReturn<any>;
            if (!ret.isSucc) {
                UIHelper.toastError(ret.err?.code)
            }

            return v;
        });
    }

    /** 所有发送接收数据flow流程处理 */
    public flowAll(client: any) {
        this.flowClientApi(client);
        this.flowAuth(client);
        this.flowSwallowTouch(client);
        this.flowTips(client);
    }

    /** 客户端与服务器断开事件 */
    public flowPostDisconnect(client: any, e:RoomEntity) {
        client.flows.postDisconnectFlow.push(v => {
            // 非客户端手动断开时处理（例：网络错误、服务器关闭）
            if (!v.isManual) {
                dh.uiManager.toast("服务器维护");
                e.add(RoomOwnerLeaveComp);
            }
            return v;
        });
    }

    public static parseServerUrl(area_info: DbUrl) {
        let url = `${ShareConfig.https ? "https" : "http"}://${area_info.url}:${area_info.port}/`
        return url
    }
}