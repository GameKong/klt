import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoomComp } from "../../component/roomComp";
import { RoomEntity } from "../../roomEntity";

/** 其它角色离开房间 */
@ECS.register('MsgRoleLeave')
export class MsgRoleLeaveComp extends ECS.Comp {
    reset(): void { }
}

export class MsgRoleLeaveSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(MsgRoleLeaveComp);
    }

    entityEnter(e: RoomEntity): void {
        dh.netManager.websocket_room.listenMsg(`server/RoleLeave`, v => {
            // e.get(RoomComp).vm.amount--;

            var role = e.get(RoomComp).roles.get(v.roleInfo.id);
            if (role) {
                dh.loggerManager.logBusiness(`【房间】离开玩家【${role.RoleModel.nickname}】`);
                e.get(RoomComp).roles.delete(v.roleInfo.id);
                role.destroy();
            }
        });
    }
}