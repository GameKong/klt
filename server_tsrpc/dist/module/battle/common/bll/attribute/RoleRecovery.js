"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-24 16:27:29
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-13 17:19:13
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRecovery = void 0;
const RoleEnum_1 = require("../../../../role/model/RoleEnum");
const ISkillReport_1 = require("../../../skill/model/ISkillReport");
const BattleLogger_1 = require("../BattleLogger");
/** 角色恢复技能计算流程 */
class RoleRecovery {
    /** 回复生命计算 */
    static normal(caster, target) {
        var effect = new ISkillReport_1.EffectRecovery();
        // 恢复生命值
        effect.value = caster.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.ap).value;
        var hp = target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp);
        var hpMax = target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hpMax).value;
        hp.skill += effect.value;
        if (hp.value > hpMax) {
            hp.skill = hpMax;
        }
        effect.hp = hp.value;
        effect.hpMax = hpMax;
        // 日志
        BattleLogger_1.BattleLogger.log(`【${caster.RoleModel.nickname}】恢复【${target.RoleModel.nickname}】【${effect.value}】点生命,【${target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp).value}/${target.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hpMax).value}】`);
        return effect;
    }
}
exports.RoleRecovery = RoleRecovery;
