import { BaseManager } from "./baseManager"
import { dh } from "../dh";
import { NetUtils } from "../utils/netUtils";
import { HttpClient as HttpClient_Browser, WsClient as WsClient_Browser } from 'tsrpc-browser';
import { HttpClient as HttpClient_Miniapp, WsClient as WsClient_Miniapp } from 'tsrpc-miniapp';
import { ServiceType as ServiceTypeGate } from "../shared/protocols/ServiceProtoGate";
import { ServiceType as ServiceTypeMatch } from "../shared/protocols/ServiceProtoMatch";
import { ServiceType as ServiceTypeRoom } from "../shared/protocols/ServiceProtoRoom";

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
        this.http_gate = this.net_utils.createHttpGate()
    }
}


