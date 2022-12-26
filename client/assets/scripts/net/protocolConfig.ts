import Proto from "./protocol/pb_logic.js";

export const enum MessageType {
    HeartBeat = "HeartBeat",
    C2SHello = "C2SHello",
    S2CHi = "S2CHi",
}

// 客户端主动发起的请求
export const C2SConfig = {
    [MessageType.HeartBeat]: {
        type: 1,
        req: Proto.pbreq_heartbeat
    },
    [MessageType.C2SHello]: {
        type: 2,
        req: Proto.pbreq_hellow,
        rsp: Proto.pbrsp_hellow
    },
}

// 服务器主动推送事件
export const S2CConfig = {
    [MessageType.HeartBeat]: {
        type: 1,
        rsp: Proto.pbrsp_heartbeat,
    },
    [MessageType.S2CHi]: {
        type: 3,
        rsp: Proto.pbrsp_hi,
    },
}