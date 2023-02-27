"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-09-09 13:37:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-15 09:38:53
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleShifting = void 0;
const vec3_1 = require("../../../common/math/vec3");
const ISkillReport_1 = require("../../skill/model/ISkillReport");
/** 角色位移效果 */
class RoleShifting {
    /** 冲锋 */
    static charge(caster, target) {
        var caster_node = caster.RoleView.node;
        var target_node = target.RoleView.node;
        var effect = new ISkillReport_1.EffectShifting();
        // 施放者与目标的方向->归一化->取反->距离放大（可选）
        var dir = vec3_1.Vec3.subtract(new vec3_1.Vec3, target_node.position, caster_node.position).normalize().negative();
        // 避免重合
        effect.pos = vec3_1.Vec3.add(new vec3_1.Vec3, target_node.position, dir);
        return effect;
    }
}
exports.RoleShifting = RoleShifting;
