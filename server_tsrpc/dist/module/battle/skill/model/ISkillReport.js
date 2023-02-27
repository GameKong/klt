"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-15 18:51:00
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-21 17:33:53
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateType = exports.DamageType = exports.EffectRevive = exports.EffectTrap = exports.EffectBuff = exports.EffectShifting = exports.EffectRecovery = exports.EffectDamage = void 0;
/** 伤害效果 */
class EffectDamage {
    constructor() {
        /** 生命上限 */
        this.hpMax = 0;
        /** 当前生命（为零时死亡） */
        this.hp = 0;
        /** 角色状态  */
        this.state = StateType.Alive;
        /** 伤害值（负为伤害，正为恢复） */
        this.value = 0;
    }
}
exports.EffectDamage = EffectDamage;
/** 恢复生命效果 */
class EffectRecovery {
    constructor() {
        /** 生命上限 */
        this.hpMax = 0;
        /** 当前生命 */
        this.hp = 0;
        /** 回复生命 */
        this.value = 0;
    }
}
exports.EffectRecovery = EffectRecovery;
/** 位移效果 */
class EffectShifting {
    constructor() {
        /** 目标位置 */
        this.pos = null;
    }
}
exports.EffectShifting = EffectShifting;
/** 持续状态类效果 */
class EffectBuff {
    constructor() {
        /** 是否为添加到目标身上（true为添加，false移除） */
        this.addto = true;
        /** BUFF效果 */
        this.buff = null;
    }
}
exports.EffectBuff = EffectBuff;
/** 陷阱状态类效果 */
class EffectTrap {
    constructor() {
        /** 是否为添加到目标身上（true为添加，false移除） */
        this.addto = true;
        /** BUFF效果 */
        this.buff = null;
        /** 初始位置 */
        this.target = null;
    }
}
exports.EffectTrap = EffectTrap;
/** 复活效果 */
class EffectRevive {
    constructor() {
        /** 复活类型（0为技能复活，1为定时服务器复活） */
        this.type = 1;
    }
}
exports.EffectRevive = EffectRevive;
/** 伤害变化类型 */
var DamageType;
(function (DamageType) {
    /** 标准 */
    DamageType[DamageType["Normal"] = 0] = "Normal";
    /** 招架 */
    DamageType[DamageType["Parry"] = 1] = "Parry";
    /** 格挡 */
    DamageType[DamageType["Block"] = 2] = "Block";
    /** 偏斜 */
    DamageType[DamageType["Skew"] = 3] = "Skew";
    /** 暴击 */
    DamageType[DamageType["Critical"] = 4] = "Critical";
    /** 免伤 */
    DamageType[DamageType["immune"] = 5] = "immune";
})(DamageType = exports.DamageType || (exports.DamageType = {}));
/** 角色状态类型 */
var StateType;
(function (StateType) {
    /** 存活 */
    StateType[StateType["Alive"] = 0] = "Alive";
    /** 死亡 */
    StateType[StateType["Die"] = 1] = "Die";
    /** 复活 */
    StateType[StateType["Revive"] = 2] = "Revive";
})(StateType = exports.StateType || (exports.StateType = {}));
