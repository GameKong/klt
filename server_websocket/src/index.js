"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const WebSocket = __importStar(require("ws"));
const protoParse_1 = require("./protocol/protoParse");
class Server {
    constructor() {
    }
    run() {
        let server = new WebSocket.Server({ port: 3000 });
        /**服务器连接 关闭 错误事件处理 */
        server.on("listening", this.onListening.bind(this));
        server.on("connection", this.onConnect.bind(this));
        server.on("close", this.onServerClose.bind(this));
        server.on("error", this.onServerError.bind(this));
        this.server = server;
    }
    onListening() {
        console.log("服务器启动完毕！开始侦听");
    }
    onConnect(client_ws, request) {
        let length = request.rawHeaders.length;
        console.log(`${request.rawHeaders[length - 3]}: connect!`);
        let that = this;
        client_ws.on("message", function (message, isBinary) {
            that.onClientMessage(client_ws, message, isBinary);
        });
        client_ws.on("close", function (code, reason) {
            that.onClientClose(client_ws, code, reason);
        });
        client_ws.on("error", function (error) {
            that.onClientError(client_ws, error);
        });
    }
    onServerClose() {
        console.log("server close");
    }
    onServerError(error) {
        console.log(error.message);
    }
    onClientMessage(client_ws, message, isBinary) {
        protoParse_1.ProtoParse.onMessage(client_ws, message);
    }
    onClientClose(client_ws, code, reason) {
        console.log("connect close:", code);
    }
    onClientError(client_ws, error) {
        console.log(error.message);
    }
}
exports.Server = Server;
function main() {
    let server = new Server();
    server.run();
}
main();
exports.default = Server;
