"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlefieldModelComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-08-17 16:22:27
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 13:39:58
 */
const ECS_1 = require("../../../core/ecs/ECS");
/** 数据层对象 */
let BattlefieldModelComp = class BattlefieldModelComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 当前准备释放的技能 */
        this.readyCastSkill = null;
        /** 间隔触发状态效果 */
        this.buffs = new Map();
    }
    reset() {
        this.readyCastSkill = null;
    }
};
BattlefieldModelComp = __decorate([
    ECS_1.ecs.register('BattlefieldModel')
], BattlefieldModelComp);
exports.BattlefieldModelComp = BattlefieldModelComp;
