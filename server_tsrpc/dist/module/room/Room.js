"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsRoomSystem = exports.Room = void 0;
const ECS_1 = require("../../core/ecs/ECS");
const serverRoomEntry_1 = require("../../serverRoomEntry");
const BattleBridge_1 = require("../battle/common/bll/BattleBridge");
const TableBuff_1 = require("../common/table/TableBuff");
const TableSkill_1 = require("../common/table/TableSkill");
const BattlefieldEnter_1 = require("./bll/BattlefieldEnter");
const RoomBroadcastRoleState_1 = require("./bll/RoomBroadcastRoleState");
const RoomRoleUtil_1 = require("./bll/RoomRoleUtil");
const BattlefieldModelComp_1 = require("./model/BattlefieldModelComp");
const RoomModelComp_1 = require("./model/RoomModelComp");
/**
 * 游戏房间
 * 1、状态同步，实时广播玩家游戏中状态（例：位置信息）
 *    优点：
 *          1、服务器可以做逻辑验证
 *    缺点：
 *          1、数据包较大，网络传输较慢时
 *          2、如果与玩家自己的客户端做和解逻辑，容易出现位置信息作弊情况。
 *          3、如果不做和解逻辑，玩家不会被服务器数据拽回来感觉卡顿效果
 *          4、其它玩家做插值移动时，与客户端自己做平滑移动效果略差一点
 * 2、帧同步：
 *    优点：
 *          1、只传输玩家操作状态，数据包小
 *          2、网络正常情况下、玩家移动动画体验较好，所有玩家移动逻辑都是客户端计算
 *    缺点：
 *          1、断线重连接时，需要补帧同步玩家状态
 *          2、客户端随机都是伪随即保持多端计算结果同步
 *          3、网络卡时，玩家玩法控制角色，会朝向一个方向移动（可选策略）
 */
let Room = class Room extends ECS_1.ecs.Entity {
    get logger() {
        return this.RoomModel.logger;
    }
    init() {
        this.addComponents(RoomModelComp_1.RoomModelComp, RoomBroadcastRoleState_1.RoomBroadcastRoleStateComp, BattlefieldModelComp_1.BattlefieldModelComp, BattlefieldEnter_1.BattlefieldEnterComp);
        BattleBridge_1.BattleBridge.roles = this.RoomModel.members;
    }
    destroy() {
        this.remove(RoomBroadcastRoleState_1.RoomBroadcastRoleStateComp);
        super.destroy();
    }
    /** 添加房间中玩家 */
    addRole(conn, user) {
        return RoomRoleUtil_1.RoomRoleUtil.addRole(this, conn, user);
    }
    /** 移除房间中玩家 */
    removeRole(conn) {
        RoomRoleUtil_1.RoomRoleUtil.removeRole(conn);
    }
    /** 添加房间中非玩家角色 */
    addNpc(nickname, pos, rotation) {
        RoomRoleUtil_1.RoomRoleUtil.addNpc(this, nickname, pos, rotation);
    }
    /** 房间内消息广播 */
    broadcastMsg(msgName, msg) {
        serverRoomEntry_1.sr.ServerRoomModel.wssRoom.broadcastMsg(msgName, msg, this.RoomModel.conns);
    }
};
Room = __decorate([
    ECS_1.ecs.register(`Room`)
], Room);
exports.Room = Room;
class EcsRoomSystem extends ECS_1.ecs.System {
    constructor() {
        super();
        TableSkill_1.TableSkill.load();
        TableBuff_1.TableBuff.load();
        this.add(new RoomBroadcastRoleState_1.RoomBroadcastRoleStateSystem());
        this.add(new BattlefieldEnter_1.BattlefieldEnterSystem());
    }
}
exports.EcsRoomSystem = EcsRoomSystem;
