"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRoleState = void 0;
/** 客户端发数据同步当前玩家状态数据 */
class MsgRoleState {
    static listenMsg(e) {
        e.RoleModel.conn.listenMsg(`client/RoleState`, call => {
            var msg = call.msg;
            var state = e.RoleModel.state;
            state.pos = msg.pos;
            state.rotation = msg.rotation;
            state.action = msg.action;
        });
    }
    static unlistenMsg(e) {
        e.RoleModel.conn.unlistenMsgAll(`client/RoleState`);
    }
}
exports.MsgRoleState = MsgRoleState;
