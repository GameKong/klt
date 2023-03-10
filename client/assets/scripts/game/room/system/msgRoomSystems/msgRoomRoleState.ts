import { Vec3 } from "cc";
import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoomComp } from "../../component/roomComp";
import { RoomEntity } from "../../roomEntity";
import { RoomUtil } from "../RoomUtil";


/** 
 * 玩家状态同步逻辑 
 * 1、验证数据正确性
 */
@ECS.register('MsgRoomRoleState')
export class MsgRoomRoleStateComp extends ECS.Comp {
    reset(): void { }
}

export class MsgRoomRoleStateSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(MsgRoomRoleStateComp);
    }

    entityEnter(e: RoomEntity): void {
        dh.netManager.websocket_room.listenMsg(`server/RoomRoleState`, v => {
            for (let uid in v.states) {
                let us = v.states[uid];
                const role = e.get(RoomComp).roles.get(uid);
                if (!RoomUtil.isOwner(role)) {
                    // 是否正处于技能位移动画状态      
                    if (role && !role.has(RoleSkillShiftingComp)) {
                        const rv = role.RoleView;
                        if (Vec3.squaredDistance(rv.node.position, us.pos) > 2) {
                            // 缓动移动到与服务器同步的位置
                            rv.moveTween(us);
                        }
                    }
                }
            }
        });
    }
}