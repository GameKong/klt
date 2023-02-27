"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRoleMove = void 0;
/** 客户端发数据房间转发移动命令（摇杆方向、目标方向） */
class MsgRoleMove {
    static listenMsg(e) {
        e.RoleModel.conn.listenMsg(`client/RoleMove`, call => {
            const conn = call.conn;
            e.RoleModel.conn.room.broadcastMsg(`server/RoleMove`, {
                state: {
                    uid: conn.role.RoleModel.state.id,
                    ...call.msg
                }
            });
        });
    }
    static unlistenMsg(e) {
        e.RoleModel.conn.unlistenMsgAll(`client/RoleMove`);
    }
}
exports.MsgRoleMove = MsgRoleMove;
