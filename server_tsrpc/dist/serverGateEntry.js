"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sg = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-06-22 18:37:06
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-12 15:32:37
 */
const ECS_1 = require("./core/ecs/ECS");
const CommonUtil_1 = require("./module/common/CommonUtil");
const Config_1 = require("./module/config/Config");
const ServerGate_1 = require("./server/gate/ServerGate");
const ServerGateSystem_1 = require("./server/gate/ServerGateSystem");
/** 网关服务器对象 */
exports.sg = null;
function main() {
    if (Config_1.Config.localHttpsAndWss)
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    CommonUtil_1.CommonUtil.init(new ServerGateSystem_1.ServerGateSystem());
    exports.sg = ECS_1.ecs.getEntity(ServerGate_1.ServerGate);
    exports.sg.start();
}
main();
