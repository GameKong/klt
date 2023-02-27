"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-06-30 10:37:02
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-12 15:36:18
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModelComp = void 0;
const ECS_1 = require("../../../core/ecs/ECS");
/** 匹配数据 */
let AccountModelComp = class AccountModelComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 在线用户数据 */
        this.users = new Map();
        /** 用户通行证信息 */
        this.ssoTokens = {};
    }
    reset() {
        this.users.clear();
        this.ssoTokens = {};
    }
};
AccountModelComp = __decorate([
    ECS_1.ecs.register('AccountModel')
], AccountModelComp);
exports.AccountModelComp = AccountModelComp;
