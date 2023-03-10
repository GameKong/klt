import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { UIID } from "../../../../gui/uiDefines";
import { RoomComp } from "../../component/roomComp";
import { RoomEntity } from "../../roomEntity";
import { RoomNetMsgComp } from "../msgRoomSystems/roomNetMsg";

/** 自己离开房间后续逻辑 */
@ECS.register('RoomOwnerLeave')
export class RoomOwnerLeaveComp extends ECS.Comp {
    reset(): void { }
}

export class RoomOwnerLeaveSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(RoomOwnerLeaveComp);
    }

    entityEnter(e: RoomEntity): void {
        e.remove(RoomNetMsgComp);

        // 房间数据清理
        e.get(RoomComp).reset();

        // 卸载地图
        // smc.scene.unload();

        // 打开匹配界面
        dh.uiManager.open(UIID.Match);

        // 关闭角色只界面
        // dh.uiManager.closeUI.remove(UIID.Demo_Role_Controller);

        e.remove(RoomOwnerLeaveComp);

        dh.loggerManager.logBusiness("【房间】自己离开");
    }
}