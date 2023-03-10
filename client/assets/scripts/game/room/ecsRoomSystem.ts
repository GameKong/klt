import { ECS } from "../../ecs/ECS";
import { MsgRoomSystems } from "./system/msgRoomSystems";

/** 房间相关系统 */
export class RoomSystem extends ECS.System {
    constructor() {
        super();

        this.add(new MsgRoomSystems());
  }
}

