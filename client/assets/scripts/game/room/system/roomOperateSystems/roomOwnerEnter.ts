import { dh } from "../../../../dh";
import { ECS } from "../../../../ecs/ECS";
import { RoleCampType } from "../../../../globals/gConst";
import { RoomComp } from "../../component/roomComp";
import { RoomEntity } from "../../roomEntity";
import { RoomUtil } from "../RoomUtil";

/** 自己加入房间 - 初始化游戏世界数据 */
@ECS.register('RoomOwnerEnter')
export class RoomOwnerEnterComp extends ECS.Comp {
    // data: ResRoomJoin = null;

    reset(): void {
        // this.data = null!;
    }
}

export class RoomOwnerEnterSystem extends ECS.ComblockSystem implements ECS.IEntityEnterSystem {
    filter(): ECS.IMatcher {
        return ECS.allOf(RoomOwnerEnterComp);
    }

    async entityEnter(e: RoomEntity) {
        // // 初始化房间信息
        // this.initRoomInit(e);
        // // 初始化游戏世界
        // this.initWorld();
        // // 初始化游戏中玩家
        // this.initPlayers(e);
        // // 初始化游戏中非玩家角色
        // this.initNpcs(e);

        // // 设置桥接数据
        // BattleBridge.owner = e.get(RoomComp).owner;
        // BattleBridge.roles = e.get(RoomComp).roles;
        // e.add(BattlefieldEnterComp);

        // e.remove(RoomOwnerEnterComp);
    }

    /** 初始化房间信息 */
    initRoomInit(e: RoomEntity) {
        // var data = e.get(RoomOwnerEnterComp).data;

        // // 绑定房间显示数据
        // e.get(RoomComp).vm = {
        //     server: e.get(RoomComp).serverUrl,
        //     name: data.room.name,
        //     max: data.room.max,
        //     amount: data.room.roles.length,
        //     ping: dh.netManager.websocket_room.lastHeartbeatLatency
        // }
        // e.get(RoomComp).vmAdd();
    }

    /** 初始化游戏世界 */
    initWorld() {
        // 创建三维摄像机管理对象
        // smc.camera = ECS.getEntity<Camera>(Camera);

        // // 创建游戏地图管理对象
        // smc.scene = ECS.getEntity<Scene>(Scene);
        // smc.scene.load("an");
    }

    /** 初始化游戏中玩家 */
    initPlayers(e: RoomEntity) {
        // var data = e.get(RoomOwnerEnterComp).data;

        // // 添加其它玩家
        // data.room.roles.forEach(d => {
        //     let role = RoomUtil.roleCreate(d);

        //     if (data.roleId == d.roleInfo.id) {

        //         role.RoleModel.camp = RoleCampType.Friendly;
        //         smc.room.RoomModel.owner = role;

        //         // 同步客户端状态组件
        //         role.RoleView.node.addComponent(RoleUpdateState);
        //         // 设置跟随摄像机
        //         smc.camera.setFollow(role.RoleView.node);
        //         // 添加遥感控制
        //         role.loadUIJoystick();
        //         // 添加点击地图控制
        //         role.loadUITouchMove();
        //     }
        //     else {
        //         role.RoleModel.camp = RoleCampType.Enemy;
        //     }
        //     role.loadUITop();
        // });
    }

    /** 初始化游戏中非玩家角色 */
    initNpcs(e: RoomEntity) {
        // var data = e.get(RoomOwnerEnterComp).data;
        // // 添加其它玩家
        // data.room.npcs.forEach(d => {
        //     let npc = RoomUtil.roleCreate(d);
        //     npc.RoleModel.camp = RoleCampType.Enemy;
        //     npc.RoleView.lootAt(smc.room.RoomModel.owner.RoleView.node.position);
        //     npc.loadUITop();
        // });
    }
}