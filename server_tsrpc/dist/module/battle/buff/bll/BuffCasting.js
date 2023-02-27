"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuffCasting = void 0;
/** 状态效果触发逻辑 */
class BuffCasting {
    constructor() {
        /** 施放效果的技能 */
        this.skill = null;
        /** 当前施放的技能 */
        this.buff = null;
        /** 效果施放者 */
        this.caster = null;
        /** 效果受击者 */
        this.target = null;
        /** BUFF当前层数 */
        this.layer = 0;
        /** 状态效果受击战报 */
        this.hits = [];
    }
    /** ----------效果触发事件---------- */
    /** 间隔固定时间触发 */
    onInterval() { }
    /** 自己释放释放技能时触发 */
    onCasting() { }
    /** 目标受击时触发 */
    onHit() { }
    /** 目标死亡时触发 */
    onDead() { }
}
exports.BuffCasting = BuffCasting;
