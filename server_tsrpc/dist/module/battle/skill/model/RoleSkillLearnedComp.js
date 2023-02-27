"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSkillLearnedComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-08-15 15:39:14
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 11:28:23
 */
const ECS_1 = require("../../../../core/ecs/ECS");
/** 角色已学会技能配置 */
let RoleSkillLearnedComp = class RoleSkillLearnedComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 角色已学会技能 */
        this.skills = new Map();
        /** 角色身上的持续效果 */
        this.buffs = new Map();
        /** 角色施放的陷阱技能 */
        this.traps = new Map();
        /** 服务器派发的战斗技能随机种子 */
        this.seed = 0;
        /** 随机数生成器 */
        this.seedrandom = null;
    }
    reset() {
        this.skills.clear();
        this.buffs.forEach(buff => {
            buff.destroy();
        });
        this.buffs.clear();
    }
};
RoleSkillLearnedComp = __decorate([
    ECS_1.ecs.register('RoleSkillLearned')
], RoleSkillLearnedComp);
exports.RoleSkillLearnedComp = RoleSkillLearnedComp;
