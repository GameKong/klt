"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-09-16 16:52:53
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-16 18:22:22
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrapTriggerSystem = exports.TrapTriggerComp = void 0;
const ECS_1 = require("../../../../core/ecs/ECS");
const Timer_1 = require("../../../../core/Timer");
/** 陷阱圆形范围触发触发器 */
let TrapTriggerComp = class TrapTriggerComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 目标位置 */
        this.target = null;
        /** 延时器 */
        this._timerDelay = new Timer_1.Timer();
        /** 技能持续时间计时器 */
        this._timerDuration = new Timer_1.Timer();
        /** 延时后启动陷阱触发验证 */
        this._startUp = false;
    }
    /** 技能间隔触发时间 */
    set delay(value) {
        this._timerDelay.step = value / 1000;
        this._timerDelay.reset();
    }
    /** 技能持续时间 */
    set duration(value) {
        this._timerDuration.step = value / 1000;
        this._timerDuration.reset();
    }
    reset() {
        this.target = null;
        this._startUp = false;
        this._timerDelay.reset();
        this._timerDuration.reset();
    }
};
TrapTriggerComp = __decorate([
    ECS_1.ecs.register('TrapTrigger')
], TrapTriggerComp);
exports.TrapTriggerComp = TrapTriggerComp;
class TrapTriggerSystem extends ECS_1.ecs.ComblockSystem {
    filter() {
        return ECS_1.ecs.allOf(TrapTriggerComp);
    }
    update(e) {
        var bi = e.get(TrapTriggerComp);
        var bm = e.BuffModel;
        if (!bi._startUp) {
            if (bi._timerDelay.update(this.dt))
                bi._startUp = true;
        }
        else {
            bm.casting.target = bi.target;
            bm.casting.onInterval();
        }
        // 陷阱持续时间结束
        if (bi._timerDuration.update(this.dt)) {
            e.destroy();
        }
    }
}
exports.TrapTriggerSystem = TrapTriggerSystem;
