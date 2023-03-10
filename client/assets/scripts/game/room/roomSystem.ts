import { ECS } from "../../ecs/ECS";
import { MsgRoomSystems } from "./system/msgRoomSystems";
import { RoomOperateSystems } from "./system/roomOperateSystems";

/** 房间相关系统 */
export class ECSRoomSystem extends ECS.System {
    constructor() {
        super();

        this.add(new MsgRoomSystems());
        this.add(new RoomOperateSystems());
        // this.add(new RoomServerConnectSystem());
        // this.add(new BattlefieldEnterSystem()); 

  }
}

