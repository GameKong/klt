"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-18 15:58:16
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:24:16
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCasting7 = void 0;
const Role_1 = require("../../../../role/Role");
const RoleAttack_1 = require("../../../common/bll/attribute/RoleAttack");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const RoleShifting_1 = require("../../../common/bll/RoleShifting");
const SkillCasting_1 = require("../SkillCasting");
/** 冲锋攻击 */
class SkillCasting7 extends SkillCasting_1.SkillCasting {
    onCasting() {
        if (this.target instanceof Role_1.Role) {
            var sr = BattleReport_1.BattleReport.casting(this, this.target);
            // 冲锋效果
            var es = RoleShifting_1.RoleShifting.charge(this.caster, this.target);
            BattleReport_1.BattleReport.skill(sr, this.target, es);
            // 攻击数值计算
            var ea = RoleAttack_1.RoleAttack.normal(this.caster, this.target);
            BattleReport_1.BattleReport.skill(sr, this.target, ea);
        }
    }
}
exports.SkillCasting7 = SkillCasting7;
