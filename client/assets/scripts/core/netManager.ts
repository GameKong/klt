import { BaseManager } from "./baseManager"
import { MessageType, C2SConfig, S2CConfig } from "../net/protocolConfig";
import { dh } from "../dh";
import Proto from "../net/protocol/pb_logic";

export interface Request<C2S, S2C> {
    /**message类型 */
    type: MessageType;
    /**发送的数据 */
    data?: C2S;
    /**收到消息的回调函数 */
    callback?: (data: S2C) => void
}

/**网络管理器 */
export class NetManager extends BaseManager {
    static readonly Instance: NetManager = new NetManager();

    /**地址、端口、websocket */
    private host: string = 'ws://127.0.0.1';
    private port: number = 3000;
    private ws: WebSocket;

    /**数据头+数据的总长度 所占字节数 */
    private first_length: number = 2;

    /**数据头 所占字节数 */
    private head_length: number = 3;

    /**是否为小端存储数据 */
    private little_endian: boolean = 0x01020304 >> 24 == 4

    /**连接超时计时器 */
    private time_out_id?: NodeJS.Timeout;

    /**心跳计时器 */
    private heart_id?: NodeJS.Timeout;

    /**客户端正在请求过程中的列表 */
    private requests: Request<any, any>[] = [];

    private sid: number = 16;

    /**初始化网络管理器 */
    init() {
        super.init();

        this.connect();
    }

    public connect(callback?: () => void) {
        let ws = new WebSocket(`${this.host}:${this.port}`);
        ws.binaryType = "arraybuffer"
        ws.onopen = (event: Event) => this.onConnect(event, callback);
        ws.onmessage = (event: MessageEvent) => this.onMessage(event);
        ws.onerror = (event: Event) => this.onError(event);
        ws.onclose = (event: CloseEvent) => this.onClose(event);
        this.ws = ws;

        this.setTimeOutTimer()
    }

    private onConnect(event: Event, callback?: () => void) {
        console.log("Connection open")
        this.clearTimeOutTimer()
        // this.startHeart();
        this.test();
        if (callback) {
            callback()
        }
    }

    private onError(event: Event) {
        console.log(`Connection error: ${event.type}`);
        this.ws = null;
    }

    private onClose(event: CloseEvent) {
        console.log('Connection closed');
        this.ws = null;
    }

    private onTimeOut() {
        console.log('Connection timeout');
        this.close()
    }

    private onMessage(message: MessageEvent<ArrayBuffer>) {
        let view = new DataView(message.data)

        /**数据总长度 占2字节*/
        let message_len = view.getUint16(0, this.little_endian)

        /**消息类型 占1字节*/
        let type = view.getUint8(2)

        let content_length = message_len - 1;
        let buf = new Uint8Array(content_length)
        for (let i = 0; i < buf.length; i++) {
            buf[i] = view.getUint8(3 + i)
        }

        /**服务器主动推送 */
        let is_s2c = false
        for (let key in S2CConfig) {
            let config = S2CConfig[key]
            if (config.type == type) {
                let msg = config.rsp.decode(buf, content_length)
                dh.eventManager.dispatchEvent(key, msg)
                is_s2c = true
                break
            }
        }

        /**客户端请求，服务器给的响应 */
        if (!is_s2c) {
            for (let index = 0; index < this.requests.length; index++) {
                let request = this.requests[index]
                let config = C2SConfig[request.type]
                if (config.type == type) {
                    let msg = config.rsp.decode(buf, content_length)
                    let callback = request.callback
                    this.requests.splice(index, 1)
                    console.log(`client receive data: ${JSON.stringify(msg)}`)
                    if (callback) {
                        callback(msg)
                    }
                    break
                }
            }
        }
    }

    send<C2S, S2C>(req: Request<C2S, S2C>) {
        if (!this.isConnected()) {
            return
        }

        let config = C2SConfig[req.type]
        if (!config) {
            throw new Error(`protocol type error: ${req.type}`)
        }

        /**使用pb编码数据 */
        let content = config.req.encode(req.data).finish()

        /**总长度=数据头长度+数据长度 */
        let message_len = this.head_length + content.length;
        let buffer_len = this.first_length + message_len;
        let buffer = new ArrayBuffer(buffer_len)
        let view = new DataView(buffer)
        /**数据长度2字节 */
        view.setUint16(0, message_len, this.little_endian)
        /**消息类型1字节 */
        view.setUint8(2, config.type)
        /**玩家sid2字节 */
        view.setUint16(3, this.sid, this.little_endian)
        /**发送的数据字节数组 */
        for (let i = 0; i < content.length; i++) {
            view.setUint8(5 + i, content[i])
        }

        /**加入到requests队列 */
        this.requests.push(req)

        /**发送数据 */
        this.ws.send(buffer)
    }

    /** 关闭连接 */
    private close() {
        if (this.isConnecting() || this.isConnected()) {
            this.ws.close();
            this.ws = null;
        }
    }

    /** 是否正在连接 */
    private isConnecting() {
        return this.ws && this.ws.readyState === WebSocket.CONNECTING
    }

    /** 是否已连接 */
    private isConnected() {
        return this.ws && this.ws.readyState === WebSocket.OPEN
    }

    /**连接超时回调 */
    setTimeOutTimer() {
        this.time_out_id = setTimeout(() => {
            this.onTimeOut()
        }, 8000);
    }

    /**清除连接超时id */
    clearTimeOutTimer() {
        if (this.time_out_id) {
            clearTimeout(this.time_out_id);
            this.time_out_id = null;
        }
    }

    startHeart() {
        this.heart_id = setInterval(() => {
            this.send<Proto.Ipbreq_heartbeat, Proto.Ipbrsp_heartbeat>({
                type: MessageType.HeartBeat,
                data: {
                    echo2s: 123543,
                },
            })
        }, 1000)
    }

    stopHeart() {
        if (this.heart_id) {
            clearInterval(this.heart_id);
            this.heart_id = null;
        }
    }

    test() {
        setInterval(() => {
            this.send<Proto.Ipbreq_hellow, Proto.Ipbrsp_hellow>({
                type: MessageType.C2SHello,
                data: {
                    hellows: 99902,
                },
            })
        }, 1000)
    }
}


