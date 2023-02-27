"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuffCasting1 = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-09-13 16:46:10
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-16 17:12:41
 */
const RoleAttack_1 = require("../../../common/bll/attribute/RoleAttack");
const BattleReport_1 = require("../../../common/bll/BattleReport");
const BuffCasting_1 = require("../BuffCasting");
/** 流血BUFF效果 */
class BuffCasting1 extends BuffCasting_1.BuffCasting {
    onInterval() {
        var effect = RoleAttack_1.RoleAttack.buff(this.buff, this.target, -10);
        BattleReport_1.BattleReport.buff(this.hits, this.target, effect);
    }
}
exports.BuffCasting1 = BuffCasting1;
