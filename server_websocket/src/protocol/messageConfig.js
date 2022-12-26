"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageConfig = void 0;
const pb_logic_js_1 = __importDefault(require("./pb_logic.js"));
// 客户端主动发起的请求 和 服务器主动推送事件
exports.MessageConfig = {
    [1 /* MessageType.HeartBeat */]: {
        type: 1,
        req: pb_logic_js_1.default.pbreq_heartbeat,
        rsp: pb_logic_js_1.default.pbrsp_heartbeat
    },
    [2 /* MessageType.C2SHello */]: {
        type: 2,
        req: pb_logic_js_1.default.pbreq_hellow,
        rsp: pb_logic_js_1.default.pbrsp_hellow
    },
    [3 /* MessageType.S2CHi */]: {
        type: 3,
        rsp: pb_logic_js_1.default.pbrsp_hi,
    },
};
