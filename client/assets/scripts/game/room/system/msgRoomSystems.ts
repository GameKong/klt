import { ECS } from "../../../ecs/ECS"
import { MsgRoleAttackSystem } from "./msgRoomSystems/msgRoleAttack";
import { MsgRoleChatSystem } from "./msgRoomSystems/msgRoleChat";
import { MsgRoleJoinSystem } from "./msgRoomSystems/msgRoleJoin";
import { MsgRoleLeaveSystem } from "./msgRoomSystems/msgRoleLeave";
import { MsgRoleMoveSystem } from "./msgRoomSystems/msgRoleMove";
import { MsgRoleReviveSystem } from "./msgRoomSystems/msgRoleRevive";
import { MsgRoomRoleStateSystem } from "./msgRoomSystems/msgRoomRoleState";
import { RoomNetMsgSystem } from "./msgRoomSystems/roomNetMsg";

export class MsgRoomSystems extends ECS.System{
    constructor() {
        super();
        this.add(new RoomNetMsgSystem());
        this.add(new MsgRoomRoleStateSystem());
        this.add(new MsgRoleJoinSystem());
        this.add(new MsgRoleLeaveSystem());
        this.add(new MsgRoleChatSystem());
        this.add(new MsgRoleMoveSystem());
        this.add(new MsgRoleAttackSystem());
        this.add(new MsgRoleReviveSystem());
    }
}