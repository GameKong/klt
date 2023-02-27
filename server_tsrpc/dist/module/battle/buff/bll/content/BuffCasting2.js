"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuffCasting2 = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-09-13 16:46:10
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-16 17:12:41
 */
const RoleAttack_1 = require("../../../common/bll/attribute/RoleAttack");
const BattleBridge_1 = require("../../../common/bll/BattleBridge");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const BuffCasting_1 = require("../BuffCasting");
/** 腐蚀光环BUFF效果 */
class BuffCasting2 extends BuffCasting_1.BuffCasting {
    onInterval() {
        for (let i = 0; i < BattleBridge_1.BattleBridge.roles.array.length; i++) {
            var target = BattleBridge_1.BattleBridge.roles.array[i];
            if (target != this.caster && !target.die) {
                var effect = RoleAttack_1.RoleAttack.buff(this.buff, target, -100);
                BattleReport_1.BattleReport.buff(this.hits, target, effect);
            }
        }
    }
}
exports.BuffCasting2 = BuffCasting2;
