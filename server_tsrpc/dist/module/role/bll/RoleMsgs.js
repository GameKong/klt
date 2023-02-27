"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMsgs = void 0;
const MsgRoleAttack_1 = require("./msg/MsgRoleAttack");
const MsgRoleMove_1 = require("./msg/MsgRoleMove");
const MsgRoleState_1 = require("./msg/MsgRoleState");
/**
 * 玩家连接对象管理
 * 1、处理各种游戏协议逻辑
 */
class RoleMsgs {
    static add(e) {
        MsgRoleState_1.MsgRoleState.listenMsg(e);
        MsgRoleMove_1.MsgRoleMove.listenMsg(e);
        MsgRoleAttack_1.MsgRoleAttack.listenMsg(e);
    }
    static remove(e) {
        MsgRoleState_1.MsgRoleState.unlistenMsg(e);
        MsgRoleMove_1.MsgRoleMove.unlistenMsg(e);
        MsgRoleAttack_1.MsgRoleAttack.unlistenMsg(e);
    }
}
exports.RoleMsgs = RoleMsgs;
