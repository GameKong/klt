"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-06-28 17:57:23
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:29:15
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonFactory = void 0;
const chalk_1 = __importDefault(require("chalk"));
const tsrpc_1 = require("tsrpc");
const Security_1 = require("../../shared/models/Security");
const ShareConfig_1 = require("../../shared/models/ShareConfig");
const ServiceProtoGate_1 = require("../../shared/protocols/ServiceProtoGate");
const ServiceProtoMatch_1 = require("../../shared/protocols/ServiceProtoMatch");
const ServiceProtoRoom_1 = require("../../shared/protocols/ServiceProtoRoom");
const Account_1 = require("../account/Account");
const Config_1 = require("../config/Config");
const CommonUtil_1 = require("./CommonUtil");
/** TSRPC 客户端、服务器对象工厂 */
class CommonFactory {
    /** 创建 Http 网关服务端对象 */
    static createHsGate() {
        var options = {
            port: parseInt(Config_1.Config.gate.port),
            json: ShareConfig_1.ShareConfig.json,
            https: CommonUtil_1.CommonUtil.getCertificate()
        };
        var hs = new tsrpc_1.HttpServer(ServiceProtoGate_1.serviceProto, options);
        this.flowServerApi(hs);
        return hs;
    }
    /** 创建 Http 匹配服务端对象 */
    static createHsMatch() {
        var options = {
            port: parseInt(Config_1.Config.match.port),
            json: ShareConfig_1.ShareConfig.json,
            https: CommonUtil_1.CommonUtil.getCertificate()
        };
        var hs = new tsrpc_1.HttpServer(ServiceProtoMatch_1.serviceProto, options);
        this.flowServerApi(hs);
        Account_1.account.checkAuth(hs); // 检查客户端身份
        return hs;
    }
    /** 创建 Websocket 房间服务器 */
    static createWssRoom() {
        let options = {
            port: parseInt(Config_1.Config.room.port),
            logMsg: Config_1.Config.room.logMsg,
            json: ShareConfig_1.ShareConfig.json,
            wss: CommonUtil_1.CommonUtil.getCertificate()
        };
        let wss = new tsrpc_1.WsServer(ServiceProtoRoom_1.serviceProto, options);
        this.flowServerMsg(wss);
        Account_1.account.checkAuth(wss); // 检查客户端身份
        return wss;
    }
    /**
     * 创建 Websocket 匹配服务连接房间服务器的客户端
     * @param serverUrl     房间 Websocket 服务器地址
     * @param server        匹配服务器对象
     * @returns WsClient
     */
    static createWscRoom(serverUrl, server) {
        let wsc = new tsrpc_1.WsClient(ServiceProtoRoom_1.serviceProto, {
            server: serverUrl,
            logger: new tsrpc_1.PrefixLogger({
                logger: server.logger,
                prefixs: [chalk_1.default.green(`房间服务器 ${serverUrl}`)]
            }),
            heartbeat: {
                interval: Config_1.Config.room.heartbeat_interval,
                timeout: Config_1.Config.room.heartbeat_timeout
            },
            logMsg: Config_1.Config.room.logMsg
        });
        this.flowClientMsg(wsc);
        return wsc;
    }
    /** 创建匹配服务器的 Http 客户端连接 */
    static createHcMatch(serverUrl) {
        let url = `${ShareConfig_1.ShareConfig.https ? "https" : "http"}://${serverUrl}/`;
        let hc = new tsrpc_1.HttpClient(ServiceProtoMatch_1.serviceProto, { server: url });
        this.flowClientApi(hc);
        return hc;
    }
    /** HTTP 服务端协议数据加密、解密 */
    static flowServerApi(hs) {
        if (!ShareConfig_1.ShareConfig.security)
            return;
        // 在将数据发送到网络之前，通常要进行加密/解密
        hs.flows.preSendDataFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.encrypt(v.data);
            }
            return v;
        });
        // 在处理接收到的数据之前，通常要进行加密/解密
        hs.flows.preRecvDataFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.decrypt(v.data);
            }
            return v;
        });
    }
    /** HTTP 客户端协议数据加密、解密 */
    static flowClientApi(hc) {
        if (!ShareConfig_1.ShareConfig.security)
            return;
        hc.flows.preSendDataFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.encrypt(v.data);
            }
            return v;
        });
        // 在处理接收到的数据之前，通常要进行加密/解密
        hc.flows.preRecvDataFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.decrypt(v.data);
            }
            return v;
        });
    }
    /** WebSocket 服务器协议数据加密、解密 */
    static flowServerMsg(wss) {
        if (!ShareConfig_1.ShareConfig.security)
            return;
        wss.flows.preSendMsgFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.encrypt(v.data);
            }
            return v;
        });
        // 在处理 MsgCall 之前
        wss.flows.preMsgCallFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.decrypt(v.data);
            }
            return v;
        });
    }
    /** WebSocket 客户端协议数据加密、解密 */
    static flowClientMsg(wsc) {
        if (!ShareConfig_1.ShareConfig.security)
            return;
        // 发送 Message 之前
        wsc.flows.preSendMsgFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.encrypt(v.data);
            }
            return v;
        });
        // 触发 Message 监听事件之前
        wsc.flows.preRecvMsgFlow.push((v) => {
            if (v.data instanceof Uint8Array) {
                v.data = Security_1.Security.decrypt(v.data);
            }
            return v;
        });
    }
}
exports.CommonFactory = CommonFactory;
