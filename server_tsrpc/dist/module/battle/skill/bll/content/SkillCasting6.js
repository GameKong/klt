"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-18 15:58:16
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-22 16:14:03
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCasting6 = void 0;
const BuffAdd_1 = require("../../../common/bll/buff/BuffAdd");
const SkillCasting_1 = require("../SkillCasting");
/** 陷阱技能 */
class SkillCasting6 extends SkillCasting_1.SkillCasting {
    autoSelectTarget() {
        this.target = this.caster.RoleView.node.position.clone();
        return true;
    }
    checkDistance() {
        return true;
    }
    onCasting() {
        BuffAdd_1.BuffAdd.trap(this.caster, this.target, this.skill, 4);
    }
}
exports.SkillCasting6 = SkillCasting6;
