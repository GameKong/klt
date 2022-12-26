import { Asset, JsonAsset, log, warn } from "cc";
import { dh } from "../dh";
import { BaseManager } from "./baseManager";
import { EventType } from "./eventManager";
import { LoadList } from "./resManager";

/**基础配置表，启动就加载 */
let base_config_list: string[] = [
    "test1",
    "test2"
]

/**事件管理器 */
export class ConfigManager extends BaseManager {
    static readonly Instance: ConfigManager = new ConfigManager();

    /**已加载的配置表 */
    configs = {}

    /**初始化配置表管理器 */
    init() {
        super.init();
    }

    /**加载基础配置表 */
    async loadBaseConfig() {
        await this.loadConfigs(base_config_list, this.progressCallBack());
    }

    /**加载基础配置表 */
    async loadConfigs(config_list: string[], callback?:Function) {
        let load_list: LoadList = {
            bundle_name: "config",
            res_list: new Map([
                [JsonAsset, config_list]
            ])
        }

        let json_assets: JsonAsset[] = (await dh.resManager.loadResList(load_list, callback))[0] as JsonAsset[]
        json_assets.forEach((json_asset: JsonAsset) => {
            let name = json_asset.name;
            this.configs[name] = json_asset.json;
            dh.resManager.release(json_asset)
        })
    }

    /**获取配置表 */
    get(name) {
        return this.configs[name];
    }

    /**加载进度回调 */
    progressCallBack() {
        let total_num = 1;
        let load_num = 0;
        
        let callback = (assets: Asset[]) => {
            load_num += 1;
            let progress = load_num / total_num;
            dh.eventManager.dispatchEvent(EventType.LoadResProgress, progress);
        }

        return callback
    }
}
