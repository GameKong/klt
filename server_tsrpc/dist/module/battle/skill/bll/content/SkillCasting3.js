"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-19 21:08:26
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:24:07
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCasting3 = void 0;
const Role_1 = require("../../../../role/Role");
const RoleAttack_1 = require("../../../common/bll/attribute/RoleAttack");
const BattleBridge_1 = require("../../../common/bll/BattleBridge");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const SkillCasting_1 = require("../SkillCasting");
/** 链锁闪电 */
class SkillCasting3 extends SkillCasting_1.SkillCasting {
    onCasting() {
        if (this.target instanceof Role_1.Role) {
            var sr = BattleReport_1.BattleReport.casting(this, this.target);
            // 选中房间所有其它玩家攻击，开发者可自定义细节逻辑
            for (let i = 0; i < BattleBridge_1.BattleBridge.roles.array.length; i++) {
                var target = BattleBridge_1.BattleBridge.roles.array[i];
                if (target != this.caster && !target.die) {
                    // 攻击数值计算
                    var effect = RoleAttack_1.RoleAttack.normal(this.caster, target);
                    // 技能受击战报
                    BattleReport_1.BattleReport.skill(sr, this.target, effect);
                }
            }
        }
    }
}
exports.SkillCasting3 = SkillCasting3;
