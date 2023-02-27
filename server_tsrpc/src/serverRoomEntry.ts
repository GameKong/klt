/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 12:05:45
 */
import { ecs } from "./core/ecs/ECS";
import { CommonUtil } from "./module/common/CommonUtil";
import { Config } from "./module/config/Config";
import { ServerRoom } from "./server/room/ServerRoom";
import { ServerRoomSystem } from "./server/room/ServerRoomSystem";

/** 房间服务器对象 */
export var sr: ServerRoom = null!;

function main() {
    if (Config.localHttpsAndWss) process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    CommonUtil.init(new ServerRoomSystem());

    sr = ecs.getEntity<ServerRoom>(ServerRoom);
    sr.start()
}

main();