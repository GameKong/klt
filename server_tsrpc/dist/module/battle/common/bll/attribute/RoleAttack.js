"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-18 11:44:34
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-13 17:22:06
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAttack = void 0;
const RoleEnum_1 = require("../../../../role/model/RoleEnum");
const Role_1 = require("../../../../role/Role");
const ISkillReport_1 = require("../../../skill/model/ISkillReport");
const BattleLogger_1 = require("../BattleLogger");
/** 角色攻击流程计算 */
class RoleAttack {
    /** 普通攻击伤害计算 */
    static normal(caster, target) {
        var effect = new ISkillReport_1.EffectDamage();
        // 初始伤害值
        effect.value = -caster.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.ad).value;
        // 攻击类型计算（招架、格档、闪避、暴击、免伤）（后续扩展）
        // 护盾计算流程（后续扩展）
        effect.state = this.damage(target, effect.value);
        effect.hp = target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp).value;
        effect.hpMax = target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hpMax).value;
        // 日志
        BattleLogger_1.BattleLogger.log(`【${caster.RoleModel.nickname}】攻击【${target.RoleModel.nickname}】造成【${effect.value}】点伤害,【${target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp).value}/${target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hpMax).value}】`);
        return effect;
    }
    /** BUFF攻击伤害计算 */
    static buff(buff, target, value) {
        if (target instanceof Role_1.Role) {
            var effect = new ISkillReport_1.EffectDamage();
            effect.value = value;
            effect.state = RoleAttack.damage(target, effect.value);
            effect.hp = target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp).value;
            effect.hpMax = target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hpMax).value;
            // 日志
            BattleLogger_1.BattleLogger.log(`【BUFF】【${buff.BuffModel.table.name}】对【${target.RoleModel.nickname}】造成【${effect.value}】点伤害,【${target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp).value}/${target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hpMax).value}】`);
            return effect;
        }
        return null;
    }
    /**
     * 伤害扣除
     * @param target 受击目标
     * @param value  伤害值
     */
    static damage(target, value) {
        var hp = target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp);
        hp.skill += value;
        if (hp.value <= 0) {
            hp.skill = 0;
            // 复活
            target.revive();
            return ISkillReport_1.StateType.Die;
        }
        else {
            return ISkillReport_1.StateType.Alive;
        }
    }
}
exports.RoleAttack = RoleAttack;
