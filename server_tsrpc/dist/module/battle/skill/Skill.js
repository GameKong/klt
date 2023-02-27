"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsSkillSystem = exports.Skill = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-11-18 17:47:56
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 11:26:54
 */
const ECS_1 = require("../../../core/ecs/ECS");
const SkillModelComp_1 = require("./model/SkillModelComp");
/** 技能 */
let Skill = class Skill extends ECS_1.ecs.Entity {
    init() {
        this.addComponents(SkillModelComp_1.SkillModelComp);
    }
};
Skill = __decorate([
    ECS_1.ecs.register(`Skill`)
], Skill);
exports.Skill = Skill;
class EcsSkillSystem extends ECS_1.ecs.System {
    constructor() {
        super();
    }
}
exports.EcsSkillSystem = EcsSkillSystem;
