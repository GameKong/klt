"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-15 18:26:43
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-15 09:42:38
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSelector = void 0;
const vec3_1 = require("../../../common/math/vec3");
const BattleBridge_1 = require("./BattleBridge");
/** 角色选择器 */
class RoleSelector {
    /** 获取所有角色集合 */
    static all() {
        return BattleBridge_1.BattleBridge.roles;
    }
    /** 根据技能施放者阵营选择所有敌对角色 */
    static hostile() {
        return null;
    }
    /** 根据技能施放者阵营选择所有友军角色 */
    static friendly() {
        return null;
    }
    /** 获取距离自定目标最近的其它目标 */
    static nearest(caster) {
        var temp = Number.MAX_VALUE;
        var current; // 当前距离
        var t = null; // 找到的目标
        // 选择最近存活的玩家
        BattleBridge_1.BattleBridge.roles.forEach(p => {
            if (caster != p && !p.die) {
                current = vec3_1.Vec3.distance(p.RoleView.node.position, caster.RoleView.node.position);
                if (current < temp) {
                    temp = current;
                    t = p;
                }
            }
        });
        return t;
    }
}
exports.RoleSelector = RoleSelector;
