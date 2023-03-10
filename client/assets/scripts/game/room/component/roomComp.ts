import { ECS } from "../../../ecs/ECS";
import { Collection } from "../../../libs/Collection";

@ECS.register("RoomComp")
export class RoomComp extends ECS.Comp{
    /** 房间编号 */
    roomId: string = null!;
    /** 房间服务器地址 */
    serverUrl: string = null!;
    /** 玩家自己名 */
    nickname: string = null;

    /** 玩家自己 */
    owner: Role = null!;
    /** 房间所有玩家 */
    roles: Collection<string, Role> = new Collection();

    reset(): void {
        // 清理地图上的玩家
        // this.roles.forEach(r => {
        //     r.destroy();
        // });
        // this.roles.clear();

        // this.vmRemove();
        // this.roomId = null!;
        // this.serverUrl = null!;
        // this.nickname = null;
        // this.owner = null;
    }
}