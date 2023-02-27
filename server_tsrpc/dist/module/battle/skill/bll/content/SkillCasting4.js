"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-18 15:58:16
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:24:12
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCasting4 = void 0;
const Role_1 = require("../../../../role/Role");
const RoleRecovery_1 = require("../../../common/bll/attribute/RoleRecovery");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const SkillCasting_1 = require("../SkillCasting");
/** 恢复生命 */
class SkillCasting4 extends SkillCasting_1.SkillCasting {
    onCasting() {
        if (this.target instanceof Role_1.Role) {
            // 技能施放战报
            var sr = BattleReport_1.BattleReport.casting(this, this.target);
            // 恢复数值计算
            var effect = RoleRecovery_1.RoleRecovery.normal(this.caster, this.target);
            // 技能受击战报
            BattleReport_1.BattleReport.skill(sr, this.target, effect);
        }
    }
}
exports.SkillCasting4 = SkillCasting4;
