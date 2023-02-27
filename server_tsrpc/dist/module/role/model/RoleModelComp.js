"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-05-20 14:04:45
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-01 11:24:15
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModelComp = void 0;
const ECS_1 = require("../../../core/ecs/ECS");
const RoleNumericMap_1 = require("./attribute/RoleNumericMap");
/** 房间连接状态数据 */
let RoleModelComp = class RoleModelComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 玩家帐号数据 */
        this.user = null;
        /** 角色所在房间 */
        this.room = null;
        /** 游戏房间连接 */
        this.conn = null;
        /** 玩家信息 */
        this.info = null;
        /** 玩家位置数据 */
        this.state = null;
        /** 角色属性 */
        this.attributes = new RoleNumericMap_1.RoleNumericMap();
    }
    get nickname() {
        return this.info.nickname;
    }
    reset() {
        this.user = null;
        this.room = null;
        this.info = null;
        this.state = null;
        this.attributes.reset();
        this.conn.role = null;
        this.conn.room = null;
        this.conn.close();
        this.conn = null;
    }
};
RoleModelComp = __decorate([
    ECS_1.ecs.register('RoleModel')
], RoleModelComp);
exports.RoleModelComp = RoleModelComp;
