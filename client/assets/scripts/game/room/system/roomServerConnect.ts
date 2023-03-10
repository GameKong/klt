import { dh } from "../../../dh";
import { ECS } from "../../../ecs/ECS";
import { RoomComp } from "../component/roomComp";
import { RoomEntity } from "../roomEntity";
import { RoomNetMsgComp } from "./msgRoomSystems/roomNetMsg";
import { RoomOwnerEnterComp } from "./roomOperateSystems/roomOwnerEnter";
import { RoomOwnerLeaveComp } from './roomOperateSystems/roomOwnerLeave';

/** 连接房间服务器 */
@ECS.register('RoomServerConnect')
export class RoomServerConnectComp extends ECS.Comp {
    reset(): void { }
}

export class RoomServerConnectSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(RoomServerConnectComp);
    }

    async entityEnter(e: RoomEntity) {
        let rm = e.get(RoomComp);

        // 创建连接房间服务器 Websocket 客户端
        dh.netManager.createWscRoom(e);

        // 连接房间服务器
        let resConnect = await dh.netManager.websocket_room.connect();
        if (!resConnect.isSucc) {
            dh.loggerManager.logBusiness(resConnect.errMsg, '【房间】连接房间服务器失败');
            e.remove(RoomServerConnectComp);
            return;
        }

        let retRoomJoin = await dh.netManager.websocket_room.callApi(`RoomJoin`, {
            roomId: rm.roomId,
            userId: 1//smc.initialize.AccountModel.key
        });

        if (retRoomJoin.isSucc) {
            e.add(RoomNetMsgComp);
            // e.add(RoomOwnerEnterComp).data = retRoomJoin.res;
        }
        else {
            dh.loggerManager.logBusiness(retRoomJoin.err, '【房间】房间加入失败');
        }

        e.remove(RoomServerConnectComp);
    }
}