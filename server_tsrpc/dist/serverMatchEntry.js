"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sm = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-23 10:22:08
 */
const ECS_1 = require("./core/ecs/ECS");
const CommonUtil_1 = require("./module/common/CommonUtil");
const Config_1 = require("./module/config/Config");
const ServerMatch_1 = require("./server/match/ServerMatch");
const ServerMatchSystem_1 = require("./server/match/ServerMatchSystem");
/** 匹配服务器对象 */
exports.sm = null;
function main() {
    if (Config_1.Config.localHttpsAndWss)
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    CommonUtil_1.CommonUtil.init(new ServerMatchSystem_1.ServerMatchSystem());
    exports.sm = ECS_1.ecs.getEntity(ServerMatch_1.ServerMatch);
    exports.sm.start();
}
main();
