/*
 * @Author: dgflash
 * @Date: 2022-05-12 19:32:02
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-23 16:10:16
 */

import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoomEntity } from "../../roomEntity";

/** 房间内角色之间聊天 */
@ECS.register('MsgRoleChat')
export class MsgRoleChatComp extends ECS.Comp {
    reset(): void { }
}

export class MsgRoleChatSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(MsgRoleChatComp);
    }

    entityEnter(e: RoomEntity): void {
        dh.netManager.websocket_room.listenMsg(`server/Chat`, v => {
            dh.uiManager.toast(`${v.roleInfo.nickname}:${v.content}`);
        });
    }
}