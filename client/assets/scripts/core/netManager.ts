import { BaseManager } from "./baseManager"
import { dh } from "../dh";
import { NetUtils } from "../utils/netUtils";
import { HttpClient as HttpClient_Browser, WsClient as WsClient_Browser } from 'tsrpc-browser';
import { HttpClient as HttpClient_Miniapp, WsClient as WsClient_Miniapp } from 'tsrpc-miniapp';
import { ServiceType as ServiceTypeGate, serviceProto as ServiceProtoGate } from "../shared/protocols/ServiceProtoGate";
import { ServiceType as ServiceTypeMatch, serviceProto as ServiceProtoMatch } from "../shared/protocols/ServiceProtoMatch";
import { ServiceType as ServiceTypeRoom, serviceProto as ServiceProtoRoom } from "../shared/protocols/ServiceProtoRoom";
import { WECHAT } from "cc/env";
import { ShareConfig } from "../shared/models/ShareConfig";
import { GameServerConfig } from "../globals/gClass";
import { RoomData } from "../data/roomData";

/**网络管理器 */
export class NetManager extends BaseManager {
    static readonly Instance: NetManager = new NetManager();

    /** 连接网关服务器 Http 客户端 */
    http_gate: HttpClient_Miniapp<ServiceTypeGate> | HttpClient_Browser<ServiceTypeGate> = null!;

    /** 连接匹配服务器 Http 客户端 */
    http_match: HttpClient_Miniapp<ServiceTypeMatch> | HttpClient_Browser<ServiceTypeMatch> = null!;

    /** 连接房间服务器 Websocket 客户端 */
    websocket_room: WsClient_Miniapp<ServiceTypeRoom> | WsClient_Browser<ServiceTypeRoom> = null!;

    private net_utils: NetUtils;

    constructor() {
        super();
        this.net_utils = new NetUtils();
    }

    /**初始化网络管理器 */
    init() {
        super.init();
        this.createHttpGate();
    }

        /** 创建连接网关服务器 Http 客户端 */
    createHttpGate() {
        let http_gate = new (WECHAT ? HttpClient_Miniapp : HttpClient_Browser)(ServiceProtoGate, {
            server: `${ShareConfig.https ? "https" : "http"}://${GameServerConfig.gate}`,
            json: ShareConfig.json,
            logger: console,
        });
        this.net_utils.flowAll(http_gate)

        this.http_gate = http_gate
    }

    /** 创建连接匹配服务器 Http 客户端 */
    createHttpMatch() {
        let http_match = new (WECHAT ? HttpClient_Miniapp : HttpClient_Browser)(ServiceProtoMatch, {
            server: GameServerConfig.match_url,
            json: ShareConfig.json,
            logger: console
        });
        this.net_utils.flowAll(http_match)

        this.http_match = http_match
    }

    /**
     *  创建连接房间服务器 Websocket 客户端
     * @returns WsClient
     */
    createWscRoom() {
        // 创建客户端与房间服务器的 WebSocket 连接
        let ws_room = new (WECHAT ? WsClient_Miniapp : WsClient_Browser)(ServiceProtoRoom, {
            server: RoomData.serverUrl,
            heartbeat: {
                interval: GameServerConfig.heartbeat_interval,
                timeout: GameServerConfig.heartbeat_timeout
            },
            json: ShareConfig.json,
            // logger: console,
            // logMsg: true,
        });
        this.net_utils.flowClientMsg(ws_room);
        this.net_utils.flowAuth(ws_room);
        this.net_utils.flowSwallowTouch(ws_room);
        this.net_utils.flowPostDisconnect(ws_room);
        
        this.websocket_room = ws_room
    }

}


