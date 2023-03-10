import { ECS } from "../../ecs/ECS";
import { RoomEntity } from "../room/roomEntity";

/** 游戏模块 */
@ECS.register('SingleComp')
export class SingleComp extends ECS.Comp {
    /** 房间entity */
    room_entity: RoomEntity = null!;

    reset() { }
}

export let Single = ECS.getSingleton(SingleComp);