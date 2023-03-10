/*
 * @Author: dgflash
 * @Date: 2022-05-16 18:38:07
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-14 10:36:50
 */
import { v3 } from "cc";
import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoomComp } from "../../component/roomComp";
import { RoomEntity } from "../../roomEntity";
import { RoomUtil } from "../RoomUtil";

/** 角色位置同步 */
@ECS.register('MsgRoleMove')
export class MsgRoleMoveComp extends ECS.Comp {
    reset(): void { }
}

export class MsgRoleMoveSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(MsgRoleMoveComp);
    }

    entityEnter(e: RoomEntity): void {
        // dh.netManager.websocket_room.listenMsg(`server/RoleMove`, v => {
        //     let role = e.get(RoomComp).roles.get(v.state.uid);
        //     if (role && role.RoleView) {
        //         if (v.state.target) {
        //             let pos = v3(v.state.target.x, v.state.target.y, v.state.target.z);

        //             // 移动到技能施放范围后触发技能
        //             if (RoomUtil.isOwner(role) && v.state.skillId) {
        //                 let skill = role.RoleSkillLearned.skills.get(v.state.skillId);
        //                 role.RoleView.moveTouch(pos, skill.SkillModel.table.distance, () => {
        //                     role.attackCmd(v.state.skillId);
        //                 });
        //             }
        //             // 目标位置移动
        //             else {
        //                 role.RoleView.moveTouch(pos);
        //             }
        //         }
        //         else {
        //             // 摇杆移动
        //             if (v.state.joystick) {
        //                 role.RoleView.moveJoystick(v.state);
        //             }
        //             // 停止移动
        //             else {
        //                 role.RoleView.idle();
        //             }
        //         }
        //     }
        // });
    }
}