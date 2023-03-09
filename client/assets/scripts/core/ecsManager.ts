import { log, warn } from "cc";
import { ECS } from "../ecs/ECS";
import { ECSRootSystem } from "../ecs/ECSSystem";
import { GConst } from "../globals/gConst";
import { BaseManager } from "./baseManager";

/**ECS管理器 */
export class EcsManager extends BaseManager {
    static readonly Instance: EcsManager = new EcsManager();

    root_system: ECS.RootSystem = new ECS.RootSystem();
    
    /**初始化ECS管理器 */
    init() {
        super.init();
        this.initEcsSystem();
    }

    protected async initEcsSystem() {
        let root_system = this.root_system;
        // root_system.add(new EcsInitializeSystem());
        // root_system.add(new EcsRoomSystem());
        // root_system.add(new EcsSceneSystem());
        // root_system.add(new EcsRoleSystem());
        // root_system.add(new EcsSkillSystem());
        // root_system.add(new EcsBuffSystem());

        root_system.init();

        setInterval(() => {
            root_system.execute(GConst.EcsExcuteTime);
        }, GConst.EcsExcuteTime);
    }
}
