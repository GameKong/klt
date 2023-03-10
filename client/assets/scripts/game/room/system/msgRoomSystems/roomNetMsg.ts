import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoomEntity } from "../../roomEntity";
import { MsgRoleAttackComp } from "./msgRoleAttack";
import { MsgRoleChatComp } from "./msgRoleChat";
import { MsgRoleJoinComp } from "./msgRoleJoin";
import { MsgRoleLeaveComp } from "./msgRoleLeave";
import { MsgRoleMoveComp } from "./msgRoleMove";
import { MsgRoleReviveComp } from "./msgRoleRevive";
import { MsgRoomRoleStateComp } from "./msgRoomRoleState";

/** 进入或离开房间，增减组件。从而增减网络消息监听组建 */
@ECS.register('RoomNetMsg')
export class RoomNetMsgComp extends ECS.Comp {
    reset(): void { }
}

export class RoomNetMsgSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem, ECS.IEntityRemoveSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(RoomNetMsgComp);
    }

    entityEnter(e: RoomEntity): void {
        e.add(MsgRoomRoleStateComp);     // 监视服务器角色状态数据
        e.add(MsgRoleJoinComp);          // 监视它角色加入房间
        e.add(MsgRoleLeaveComp);         // 监视它角色离开房间
        e.add(MsgRoleChatComp);          // 监视角色聊天
        e.add(MsgRoleMoveComp);          // 监视角色移动命令
        e.add(MsgRoleAttackComp);        // 监视角色攻击命令
        e.add(MsgRoleReviveComp);        // 监视角色复活命令
    }

    entityRemove(e: RoomEntity): void {
        dh.netManager.websocket_room.disconnect();

        e.remove(MsgRoomRoleStateComp);
        e.remove(MsgRoleJoinComp);
        e.remove(MsgRoleLeaveComp);
        e.remove(MsgRoleChatComp);
        e.remove(MsgRoleMoveComp);
        e.remove(MsgRoleAttackComp);
        e.remove(MsgRoleReviveComp);
    }
}