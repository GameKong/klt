"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleReport = void 0;
const BattleBridge_1 = require("./BattleBridge");
/** 技能动画战报 */
class BattleReport {
    /** 生成一次施放技能战报 */
    static casting(sc, target) {
        if (BattleBridge_1.BattleBridge.server)
            return null;
        // 生成战报
        if (sc) {
            var sr = {
                caster: sc.caster,
                target: target,
                skill: sc.skill,
                hits: []
            };
            sc.srs.push(sr);
        }
        else {
            // 服务器推送复活命令时的战报
            var sr = {
                caster: null,
                target: target,
                skill: null,
                hits: []
            };
        }
        return sr;
    }
    /** 生成技能产生的受击效果战报 */
    static skill(sr, target, effect) {
        if (BattleBridge_1.BattleBridge.server)
            return null;
        sr.hits.push({ target: target, effect });
    }
    /** 生成BUFF产添加或移除战报 */
    static buff(hits, target, effect) {
        if (BattleBridge_1.BattleBridge.server)
            return null;
        hits.push({ target: target, effect });
    }
}
exports.BattleReport = BattleReport;
