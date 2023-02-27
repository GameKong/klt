"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-09-16 17:28:25
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-16 18:20:20
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuffRemove = void 0;
const ISkillReport_1 = require("../../../skill/model/ISkillReport");
const BattleBridge_1 = require("../BattleBridge");
const BattleLogger_1 = require("../BattleLogger");
class BuffRemove {
    /**
    * 移除指定BUFF
    * @param target 技能受击者
    * @param buffId 施放BUFF的编号
    */
    static rbBuffId(target, buffId) {
        var buff = target.RoleSkillLearned.buffs.get(buffId);
        if (buff) {
            return this.buff(buff);
        }
        return null;
    }
    /** 移除指定类型BUFF */
    static byIsGain(target, isGain) {
        var buffs = target.RoleSkillLearned.buffs;
        if (buffs.size > 0) {
            var effects = [];
            buffs.forEach(buff => {
                if (buff.BuffModel.table.isGain == isGain) {
                    effects.push(this.buff(buff));
                }
            });
            return effects;
        }
        return null;
    }
    /**
     * 删除陷阱
     * @param buff BUFF对象
     */
    static trap(buff) {
        var trigger = buff.BuffModel.casting;
        BattleLogger_1.BattleLogger.log(`【移除】【${trigger.caster.RoleModel.nickname}】施放的【${buff.BuffModel.table.name}】陷阱`);
        trigger.caster.RoleSkillLearned.traps.delete(buff.BuffModel.id);
        if (BattleBridge_1.BattleBridge.server) {
            buff.destroy();
            return null;
        }
        else {
            var effect = new ISkillReport_1.EffectBuff();
            effect.addto = false;
            effect.buff = buff;
            return effect;
        }
    }
    /** BUFF持续时间结束 */
    static buff(buff) {
        var trigger = buff.BuffModel.casting;
        var target = trigger.target;
        try {
            BattleLogger_1.BattleLogger.log(`【移除】【${trigger.caster.RoleModel.nickname}】的【${trigger.skill.SkillModel.table.name}】技能向【${target.RoleModel.nickname}】施放的【${buff.BuffModel.table.name}】BUFF`);
        }
        catch (_a) {
            // BUFF施放者可能在施放后，BUFF效果还没有结束时，就退出房间
        }
        target.RoleSkillLearned.buffs.delete(buff.BuffModel.id);
        if (BattleBridge_1.BattleBridge.server) {
            buff.destroy();
            return null;
        }
        else {
            var effect = new ISkillReport_1.EffectBuff();
            effect.addto = false;
            effect.buff = buff;
            return effect;
        }
    }
    /** 目标死亡移除所有BUFF */
    static byTargetDead(target) {
        var buffs = target.RoleSkillLearned.buffs;
        if (buffs.size > 0) {
            var effects = [];
            buffs.forEach(buff => {
                effects.push(this.buff(buff));
            });
            buffs.clear();
            return effects;
        }
        return null;
    }
}
exports.BuffRemove = BuffRemove;
