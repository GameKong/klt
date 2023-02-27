"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlefieldEnterSystem = exports.BattlefieldEnterComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-08-16 14:07:00
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 13:47:33
 */
const ECS_1 = require("../../../core/ecs/ECS");
const BattleBridge_1 = require("../../battle/common/bll/BattleBridge");
/** 进入战场 */
let BattlefieldEnterComp = class BattlefieldEnterComp extends ECS_1.ecs.Comp {
    reset() { }
};
BattlefieldEnterComp = __decorate([
    ECS_1.ecs.register('BattlefieldEnter')
], BattlefieldEnterComp);
exports.BattlefieldEnterComp = BattlefieldEnterComp;
class BattlefieldEnterSystem extends ECS_1.ecs.ComblockSystem {
    filter() {
        return ECS_1.ecs.allOf(BattlefieldEnterComp);
    }
    entityEnter(e) {
        // 进入战场触发所有角色被动技能
        BattleBridge_1.BattleBridge.roles.forEach(role => {
            role.RoleSkillLearned.skills.forEach(skill => {
                skill.SkillModel.casting.onPassive();
            });
        });
    }
}
exports.BattlefieldEnterSystem = BattlefieldEnterSystem;
