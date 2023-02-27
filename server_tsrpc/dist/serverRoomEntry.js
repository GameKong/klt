"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sr = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 12:05:45
 */
const ECS_1 = require("./core/ecs/ECS");
const CommonUtil_1 = require("./module/common/CommonUtil");
const Config_1 = require("./module/config/Config");
const ServerRoom_1 = require("./server/room/ServerRoom");
const ServerRoomSystem_1 = require("./server/room/ServerRoomSystem");
/** 房间服务器对象 */
exports.sr = null;
function main() {
    if (Config_1.Config.localHttpsAndWss)
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    CommonUtil_1.CommonUtil.init(new ServerRoomSystem_1.ServerRoomSystem());
    exports.sr = ECS_1.ecs.getEntity(ServerRoom_1.ServerRoom);
    exports.sr.start();
}
main();
