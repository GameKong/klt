import Proto from "./pb_logic.js";

export const enum MessageType {
    HeartBeat = 1,
    C2SHello = 2,
    S2CHi = 3,
}

// 客户端主动发起的请求 和 服务器主动推送事件
export const MessageConfig = {
    [MessageType.HeartBeat]: {
        type: 1,
        req: Proto.pbreq_heartbeat,
        rsp: Proto.pbrsp_heartbeat
    },
    [MessageType.C2SHello]: {
        type: 2,
        req: Proto.pbreq_hellow,
        rsp: Proto.pbrsp_hellow
    },
    [MessageType.S2CHi]: {
        type: 3,
        rsp: Proto.pbrsp_hi,
    },
}