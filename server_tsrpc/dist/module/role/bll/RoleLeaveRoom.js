"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleLeaveRoom = void 0;
/** 玩家离开房间 */
class RoleLeaveRoom {
    static leave(e) {
        let pm = e.RoleModel;
        let room = pm.conn.room;
        room.logger.log('玩家离开房间', pm.state);
        // 广播玩家离开房间
        room.broadcastMsg(`server/RoleLeave`, {
            time: new Date,
            roleInfo: pm.info
        });
        // 移除房间中的玩家
        room.removeRole(pm.conn);
    }
}
exports.RoleLeaveRoom = RoleLeaveRoom;
