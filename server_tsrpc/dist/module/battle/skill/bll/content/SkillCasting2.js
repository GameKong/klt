"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-09-13 15:21:30
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:24:03
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCasting2 = void 0;
const Role_1 = require("../../../../role/Role");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const BuffAdd_1 = require("../../../common/bll/buff/BuffAdd");
const SkillCasting_1 = require("../SkillCasting");
/** 持续流血 */
class SkillCasting2 extends SkillCasting_1.SkillCasting {
    onCasting() {
        if (this.target instanceof Role_1.Role) {
            // 技能施放战报
            var sr = BattleReport_1.BattleReport.casting(this, this.target);
            // 攻击数值计算
            var effect = BuffAdd_1.BuffAdd.dot(this.caster, this.target, this.skill, 1);
            // 技能受击战报
            BattleReport_1.BattleReport.skill(sr, this.target, effect);
        }
    }
}
exports.SkillCasting2 = SkillCasting2;
