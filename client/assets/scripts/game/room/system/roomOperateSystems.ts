import { ECS } from "../../../ecs/ECS"
import { RoomOwnerEnterSystem } from "./roomOperateSystems/roomOwnerEnter";
import { RoomOwnerLeaveSystem } from "./roomOperateSystems/roomOwnerLeave";

export class RoomOperateSystems extends ECS.System{
    constructor() {
        super();

        this.add(new RoomOwnerEnterSystem());
        this.add(new RoomOwnerLeaveSystem());
    }
}