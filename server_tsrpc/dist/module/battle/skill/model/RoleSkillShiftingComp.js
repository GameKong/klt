"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-09-09 14:24:52
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-16 11:20:20
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSkillShiftingComp = void 0;
const ECS_1 = require("../../../../core/ecs/ECS");
/**
 * 角色技能位移状态
 * 1、处于位移状态时，不触发与服务器的位置修正
 * 2、使用ECS组件的目的是方便后续扩展其它业务逻辑
 */
let RoleSkillShiftingComp = class RoleSkillShiftingComp extends ECS_1.ecs.Comp {
    reset() {
    }
};
RoleSkillShiftingComp = __decorate([
    ECS_1.ecs.register('RoleSkillShifting')
], RoleSkillShiftingComp);
exports.RoleSkillShiftingComp = RoleSkillShiftingComp;
