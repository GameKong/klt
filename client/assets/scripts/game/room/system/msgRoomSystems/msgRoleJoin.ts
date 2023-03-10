/*
 * @Author: dgflash
 * @Date: 2022-05-13 14:04:06
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-09 15:50:29
 */
import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoleCampType } from "../../../../globals/gConst";
import { RoomComp } from "../../component/roomComp";
import { RoomEntity } from "../../roomEntity";
import { Room } from "../Room";
import { RoomUtil } from "../RoomUtil";

/** 其它角色加入房间 */
@ECS.register('MsgRoleJoin')
export class MsgRoleJoinComp extends ECS.Comp {
    reset(): void { }
}

export class MsgRoleJoinSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(MsgRoleJoinComp);
    }

    entityEnter(e: RoomEntity): void {
        dh.netManager.websocket_room.listenMsg(`server/RoleJoin`, v => {
            var data = v.role;
            if (RoomUtil.isOwner(data.roleInfo)) {
                e.get(RoomComp).vm.amount++;
                if (!e.get(RoomComp).roles.has(data.roleInfo.id)) {
                    let role = RoomUtil.roleCreate(data);
                    role.RoleModel.camp = RoleCampType.Enemy;
                    role.loadUITop();
                    dh.loggerManager.logBusiness(`【房间】加入玩家【${role.RoleModel.nickname}】`);
                }
            }
        });
    }
}