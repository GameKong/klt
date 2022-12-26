import * as WebSocket from "ws"
import { IncomingMessage } from "http"
import { ProtoParse } from "./protocol/protoParse"

export class Server {
    server?: WebSocket.Server;

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

    onConnect(client_ws: WebSocket, request: IncomingMessage) {
        let length = request.rawHeaders.length;
        console.log(`${request.rawHeaders[length - 3]}: connect!`);

        let that = this;
        client_ws.on("message", function (message: WebSocket.RawData, isBinary: boolean) {
            that.onClientMessage(client_ws, message, isBinary);
        });
        client_ws.on("close", function (code: number, reason: Buffer) {
            that.onClientClose(client_ws, code, reason);
        });
        client_ws.on("error", function (error: Error) {
            that.onClientError(client_ws, error);
        });
    }

    onServerClose() {
        console.log("server close");
    }

    onServerError(error: Error) {
        console.log(error.message);
    }

    onClientMessage(client_ws: WebSocket, message: WebSocket.RawData, isBinary: boolean) {
        ProtoParse.onMessage(client_ws, message);
    }

    onClientClose(client_ws: WebSocket, code: number, reason: Buffer) {
        console.log("connect close:", code);
    }

    onClientError(client_ws: WebSocket, error: Error) {
        console.log(error.message);
    }
}

function main() {
    let server = new Server();
    server.run();
}

main();

export default Server;