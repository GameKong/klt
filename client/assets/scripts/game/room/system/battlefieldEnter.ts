// import { EventMessage } from "../../../../../extensions/oops-plugin-framework/assets/core/common/event/EventMessage";
// import { oops } from "../../../../../extensions/oops-plugin-framework/assets/core/Oops";
// import { ECS } from "../../../../../extensions/oops-plugin-framework/assets/libs/ECS/ECS";
// import { BattleBridge } from "../../battle/common/bll/BattleBridge";
// import { Room } from "../Room";
import { ECS } from "../../../ecs/ECS";
import { RoomEntity } from "../roomEntity";
import { RoomUtil } from "./RoomUtil";

/** 进入战场 */
@ECS.register('BattlefieldEnter')
export class BattlefieldEnterComp extends ECS.Comp {
    reset() { }
}

export class BattlefieldEnterSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem, ECS.IEntityRemoveSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(BattlefieldEnterComp);
    }

    entityEnter(e: RoomEntity): void {
        // 进入战场触发所有角色被动技能
        // BattleBridge.roles.forEach(role => {
        //     role.RoleSkillLearned.skills.forEach(skill => {
        //         skill.SkillModel.casting.onPassive();
        //     });
        // });

        // oops.message.on(EventMessage.GAME_ENTER, this.onHandler, this);
    }

    entityRemove(e: RoomEntity): void {
        // oops.message.off(EventMessage.GAME_ENTER, this.onHandler, this);
    }

    private onHandler(event: string, args: any) {
        // switch (event) {
        //     case EventMessage.GAME_ENTER:
        //         RoomUtil.resetRolesHp();
        //         break;
        // }
    }
}