"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomBroadcastRoleStateSystem = exports.RoomBroadcastRoleStateComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-05-16 17:21:57
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-23 16:04:37
 */
const ECS_1 = require("../../../core/ecs/ECS");
const Config_1 = require("../../config/Config");
/** 房间所有玩家状态广播 */
let RoomBroadcastRoleStateComp = class RoomBroadcastRoleStateComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        this._interval = null;
    }
    reset() {
        clearInterval(this._interval);
    }
};
RoomBroadcastRoleStateComp = __decorate([
    ECS_1.ecs.register('RoomBroadcastPlayerState')
], RoomBroadcastRoleStateComp);
exports.RoomBroadcastRoleStateComp = RoomBroadcastRoleStateComp;
class RoomBroadcastRoleStateSystem extends ECS_1.ecs.ComblockSystem {
    filter() {
        return ECS_1.ecs.allOf(RoomBroadcastRoleStateComp);
    }
    entityEnter(e) {
        let comp = e.get(RoomBroadcastRoleStateComp);
        comp._interval = setInterval(() => {
            if (e.RoomModel.conns.length > 0) {
                e.broadcastMsg(`server/RoomRoleState`, {
                    states: e.RoomModel.states
                });
            }
        }, Config_1.Config.room.broadcast_player_state_rate);
    }
}
exports.RoomBroadcastRoleStateSystem = RoomBroadcastRoleStateSystem;
