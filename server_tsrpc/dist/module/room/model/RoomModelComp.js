"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModelComp = void 0;
const Collection_1 = require("../../../core/collection/Collection");
const ECS_1 = require("../../../core/ecs/ECS");
/** 游戏房间数据 */
let RoomModelComp = class RoomModelComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 日志前缀 */
        this.logger = null;
        /** 游戏房间数据 */
        this.data = null;
        /** 游戏房间所有回话状态（用于广播数据参数） */
        this.conns = [];
        /** 用于同步位置数据的玩家状态 */
        this.states = {};
        /** 游戏房间所有成员详细信息 */
        this.members = new Collection_1.Collection();
    }
    reset() {
        this.logger = null;
        this.data = null;
        this.conns.splice(0, this.conns.length);
        for (let uid in this.states)
            delete this.states[uid];
    }
};
RoomModelComp = __decorate([
    ECS_1.ecs.register('RoomModel')
], RoomModelComp);
exports.RoomModelComp = RoomModelComp;
