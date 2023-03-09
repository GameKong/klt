/*
 * @Author: dgflash
 * @Date: 2022-06-22 18:37:06
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-12 15:32:37
 */
import { ecs } from "./core/ecs/ECS";
import { CommonUtil } from "./module/common/CommonUtil";
import { Config } from "./module/config/Config";
import { ServerGate } from "./servers/gate/ServerGate";
import { ServerGateSystem } from "./servers/gate/ServerGateSystem";

/** 网关服务器对象 */
export var sg: ServerGate = null!

function main() {
    if (Config.localHttpsAndWss) process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    CommonUtil.init(new ServerGateSystem());

    sg = ecs.getEntity<ServerGate>(ServerGate);
    sg.start()
}

main();