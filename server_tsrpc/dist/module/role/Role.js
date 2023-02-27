"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-05-20 14:03:53
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-14 12:30:50
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const ECS_1 = require("../../core/ecs/ECS");
const RoleSkillLearnedComp_1 = require("../battle/skill/model/RoleSkillLearnedComp");
const RoleLeaveRoom_1 = require("./bll/RoleLeaveRoom");
const RoleMsgs_1 = require("./bll/RoleMsgs");
const RoleEnum_1 = require("./model/RoleEnum");
const RoleModelComp_1 = require("./model/RoleModelComp");
const RoleViewComp_1 = require("./model/RoleViewComp");
/** 房间中玩家连接对象 */
let Role = class Role extends ECS_1.ecs.Entity {
    /**
     * 是否死亡
     * return true为死亡;false为存活
     */
    get die() {
        return this.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp).value == 0;
    }
    init() {
        this.addComponents(RoleModelComp_1.RoleModelComp, RoleViewComp_1.RoleViewComp, RoleSkillLearnedComp_1.RoleSkillLearnedComp);
    }
    /** 离开房间 */
    leave() {
        RoleLeaveRoom_1.RoleLeaveRoom.leave(this);
    }
    /** 添加监听消息 */
    addMsgs() {
        RoleMsgs_1.RoleMsgs.add(this);
    }
    /** 删除监听消息 */
    removeMsgs() {
        RoleMsgs_1.RoleMsgs.remove(this);
    }
    /** 死亡后3秒复活 */
    revive() {
        if (this.die) {
            console.log(`【${this.RoleModel.nickname}】3秒后复活`);
            var hp = this.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hp);
            var hpMax = this.RoleModel.attributes.get(RoleEnum_1.RoleAttributeType.hpMax);
            hp.skill = hpMax.value;
            setTimeout(() => {
                var msg = { uid: this.RoleModel.info.id };
                this.RoleModel.room.broadcastMsg(`server/RoleRevive`, msg);
            }, 3000);
        }
    }
    /** 释放角色对象 */
    destroy() {
        this.remove(RoleSkillLearnedComp_1.RoleSkillLearnedComp);
        super.destroy();
    }
};
Role = __decorate([
    ECS_1.ecs.register(`Role`)
], Role);
exports.Role = Role;
