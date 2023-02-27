"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuffCasting4 = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-09-13 16:46:10
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-16 17:12:41
 */
const vec3_1 = require("../../../../common/math/vec3");
const RoleAttack_1 = require("../../../common/bll/attribute/RoleAttack");
const BattleBridge_1 = require("../../../common/bll/BattleBridge");
const BuffRemove_1 = require("../../../common/bll/buff/BuffRemove");
const BuffCasting_1 = require("../BuffCasting");
/** 陷阱效果 */
class BuffCasting4 extends BuffCasting_1.BuffCasting {
    onInterval() {
        var bm = this.buff.BuffModel;
        for (let i = 0; i < BattleBridge_1.BattleBridge.roles.array.length; i++) {
            var target = BattleBridge_1.BattleBridge.roles.array[i];
            if (!target.die && target != bm.casting.caster) {
                // 玩家与敌人的方向向量
                var d = vec3_1.Vec3.distance(bm.casting.target, target.RoleView.node.position);
                // 陷阱触发范围
                if (d <= 1.5) {
                    RoleAttack_1.RoleAttack.buff(this.buff, target, -99);
                    BuffRemove_1.BuffRemove.trap(this.buff);
                    break;
                }
            }
        }
    }
}
exports.BuffCasting4 = BuffCasting4;
