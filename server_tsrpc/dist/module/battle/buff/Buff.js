"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-16 10:06:35
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 11:41:14
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsBuffSystem = exports.Buff = void 0;
const ECS_1 = require("../../../core/ecs/ECS");
const BuffInterval_1 = require("./bll/BuffInterval");
const TrapTrigger_1 = require("./bll/TrapTrigger");
const BuffModelComp_1 = require("./model/BuffModelComp");
/**
 * 状态类技能
 * 1、技能添加状态效果
 * 2、技能移除状态效果
 * 3、自定义状态效果逻辑
 * 4、持续间隔出发、功能标记、持续属性变化
 */
let Buff = class Buff extends ECS_1.ecs.Entity {
    /** 实始添加的数据层组件 */
    init() {
        this.addComponents(BuffModelComp_1.BuffModelComp);
    }
    destroy() {
        this.remove(BuffInterval_1.BuffIntervalComp);
        this.remove(TrapTrigger_1.TrapTriggerComp);
        super.destroy();
    }
};
Buff = __decorate([
    ECS_1.ecs.register(`Buff`)
], Buff);
exports.Buff = Buff;
class EcsBuffSystem extends ECS_1.ecs.System {
    constructor() {
        super();
        this.add(new BuffInterval_1.BuffIntervalSystem());
        this.add(new TrapTrigger_1.TrapTriggerSystem());
    }
}
exports.EcsBuffSystem = EcsBuffSystem;
