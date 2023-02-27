"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-16 14:19:05
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:23:59
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCasting1 = void 0;
const Role_1 = require("../../../../role/Role");
const RoleAttack_1 = require("../../../common/bll/attribute/RoleAttack");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const SkillCasting_1 = require("../SkillCasting");
/** 普通攻击 */
class SkillCasting1 extends SkillCasting_1.SkillCasting {
    onCasting() {
        if (this.target instanceof Role_1.Role) {
            // 技能施放战报
            var sr = BattleReport_1.BattleReport.casting(this, this.target);
            // 攻击数值计算
            var effect = RoleAttack_1.RoleAttack.normal(this.caster, this.target);
            // 技能受击战报
            BattleReport_1.BattleReport.skill(sr, this.target, effect);
        }
    }
}
exports.SkillCasting1 = SkillCasting1;
