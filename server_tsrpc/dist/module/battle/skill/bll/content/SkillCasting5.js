"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-18 15:58:16
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-22 16:14:03
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCasting5 = void 0;
const Role_1 = require("../../../../role/Role");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const BuffAdd_1 = require("../../../common/bll/buff/BuffAdd");
const SkillCasting_1 = require("../SkillCasting");
/** 腐蚀光环 */
class SkillCasting5 extends SkillCasting_1.SkillCasting {
    autoSelectTarget() {
        this.target = this.caster;
        return true;
    }
    onCasting() {
        if (this.target instanceof Role_1.Role) {
            var sr = BattleReport_1.BattleReport.casting(this, this.target);
            var buff = BuffAdd_1.BuffAdd.dot(this.caster, this.target, this.skill, 2);
            BattleReport_1.BattleReport.skill(sr, this.target, buff);
        }
    }
}
exports.SkillCasting5 = SkillCasting5;
