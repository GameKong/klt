import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoomComp } from "../../component/roomComp";
import { RoomEntity } from "../../roomEntity";

/** 角色复活 */
@ECS.register('MsgRoleRevive')
export class MsgRoleReviveComp extends ECS.Comp {
    reset(): void { }
}

export class MsgRoleReviveSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(MsgRoleReviveComp);
    }

    entityEnter(e: RoomEntity): void {
        dh.netManager.websocket_room.listenMsg(`server/RoleRevive`, v => {
            let target = e.get(RoomComp).roles.get(v.uid);
            if (target == null) {
                dh.loggerManager.logNet(`编号为【${v.uid}】的角色不存在`);
                return;
            }

            dh.loggerManager.logNet(`收到【${target.RoleModel.nickname}】复活`);
        });
    }
}