import { MessageType, MessageConfig } from "./messageConfig";
import * as WebSocket from "ws"


/**网络管理器 */
export class ProtoParse {
    /**数据头+数据的总长度 所占字节数 */
    static first_length: number = 2;

    /**c2s数据头所占字节数 */
    static c2s_head_length: number = 3;

    /**s2c数据头所占字节数 */
    static s2c_head_length: number = 1;

    /**是否为小端存储数据 */
    static little_endian: boolean = 0x01020304 >> 24 == 4;

    static onMessage(client_ws: WebSocket, message: WebSocket.RawData) {
        /**将数据转成arraybuffer */
        let u8_array = new Uint8Array(message as Buffer)
        let array_buffer = u8_array.buffer

        let view = new DataView(array_buffer)

        /**数据总长度 占2字节*/
        let message_len = view.getUint16(0, ProtoParse.little_endian)

        /**消息类型 占1字节*/
        let type = view.getUint8(2)

        /**玩家sid 占2字节*/
        let sid = view.getUint16(3)

        /**逻辑数据的长度 */
        let content_length = message_len - ProtoParse.c2s_head_length;

        /**逻辑数据字节序列的起始索引 */
        let begin = ProtoParse.first_length + ProtoParse.c2s_head_length

        let buf = new Uint8Array(content_length)
        for (let i = 0; i < buf.length; i++) {
            buf[i] = view.getUint8(begin + i)
        }

        /**解析数据 */
        let config = MessageConfig[type]
        if (!config || !config.req) {
            throw new Error(`protocol type error: ${type}, or no req feild`)
        }

        let msg = config.req.decode(buf, content_length);
        console.log(`server receive data: ${JSON.stringify(msg)}`)

        /**以下为测试代码 */
        if (type == MessageType.C2SHello) {
            ProtoParse.send(client_ws)
        }
    }

    static send(client_ws: WebSocket) {
        let config = MessageConfig[MessageType.C2SHello];

        /**使用pb编码数据 */
        let data = { hellowc: 888666 };
        let content = config.rsp.encode(data).finish()

        /**数据总长度=数据头长度+数据长度 */
        let message_len = ProtoParse.s2c_head_length + content.length;

        /**包含记录长度的总发送数据长度 */
        let buffer_len = ProtoParse.first_length + message_len;

        /**逻辑数据字节序列的起始索引 */
        let begin = ProtoParse.first_length + ProtoParse.s2c_head_length

        /**发送的buffer */
        let buffer = new ArrayBuffer(buffer_len)

        /**操作buffer的dataview对象 */
        let view = new DataView(buffer)
        /**数据长度2字节 */
        view.setUint16(0, message_len, ProtoParse.little_endian)
        /**消息类型1字节 */
        view.setUint8(2, config.type)
        /**发送的数据字节数组 */
        for (let i = 0; i < content.length; i++) {
            view.setUint8(begin + i, content[i])
        }

        /**发送数据 */
        client_ws.send(buffer);
    }
}


