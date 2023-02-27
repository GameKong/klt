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
exports.BuffIntervalSystem = exports.BuffIntervalComp = void 0;
const ECS_1 = require("../../../../core/ecs/ECS");
const Timer_1 = require("../../../../core/Timer");
const BattleReport_1 = require("../../common/bll/BattleReport");
const BuffRemove_1 = require("../../common/bll/buff/BuffRemove");
/** BUFF间隔触发器 */
let BuffIntervalComp = class BuffIntervalComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        this._timerInterval = new Timer_1.Timer();
        this._timerDuration = new Timer_1.Timer();
    }
    /** 技能间隔触发时间 */
    set interval(value) {
        this._timerInterval.step = value / 1000;
        this._timerInterval.reset();
    }
    /** 技能持续时间 */
    set duration(value) {
        this._timerDuration.step = value / 1000;
        this._timerDuration.reset();
    }
    reset() {
        this._timerInterval.reset();
        this._timerDuration.reset();
    }
};
BuffIntervalComp = __decorate([
    ECS_1.ecs.register('BuffInterval')
], BuffIntervalComp);
exports.BuffIntervalComp = BuffIntervalComp;
class BuffIntervalSystem extends ECS_1.ecs.ComblockSystem {
    filter() {
        return ECS_1.ecs.allOf(BuffIntervalComp);
    }
    update(e) {
        var bm = e.BuffModel;
        var bi = e.get(BuffIntervalComp);
        if (bi._timerInterval.update(this.dt)) {
            // 固定间隔时间触发BUFF效果
            bm.casting.onInterval();
        }
        if (bi._timerDuration.update(this.dt)) {
            // 持续时间到时移除BUFF
            var effect = BuffRemove_1.BuffRemove.buff(e);
            BattleReport_1.BattleReport.buff(bm.casting.hits, bm.casting.target, effect);
            e.remove(BuffIntervalComp);
        }
    }
}
exports.BuffIntervalSystem = BuffIntervalSystem;
