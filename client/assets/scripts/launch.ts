import { _decorator, Component, ProgressBar, Label, UITransform, NodeEventType, ScrollView, Prefab, instantiate, Button, EventHandler } from 'cc';
import { dh } from './dh';
import { EventManager, EventType } from './core/eventManager';
import { ResManager } from './core/resManager';
import { ScheduleManager } from './core/scheduleManager';
import { ConfigManager } from './core/configManager';
import { UIHelper } from './tools/uiHelper';
import { NetManager } from './core/netManager';
import { StorageManager } from './core/storageManager';
import { LocalDataKeyIV } from './globals/gConst';
import { UIID } from './gui/uiDefines';
import { ResGameArea } from './shared/protocols/gate/PtlGameArea';
import { AreaCell } from './areaCell';
import { UIManager } from './core/uiManager';

const { ccclass, property } = _decorator;

interface IRunState {
    state: number;
    desc_string: string;
    progress_max: number;
}

/** 运行状态 */
let RunState: IRunState[] = [
    /**配置表加载 */
    {
        state: 1,
        desc_string: "配置表加载中...",
        progress_max: 0.3,
    },
    /**资源加载 */
    {
        state: 2,
        desc_string: "初始资源加载中...",
        progress_max: 0.7,
    },
    /**场景加载 */
    {
        state: 3,
        desc_string: "场景加载中...",
        progress_max: 1,
    }
]

@ccclass('Launch')
export class Launch extends Component {
    /**描述文本 */
    @property({ type: Label })
    desc: Label;

    /**进度条 */
    @property({ type: ProgressBar })
    loading_bar: ProgressBar;

    /**区服列表 */
    @property({ type: ScrollView })
    area_list: ScrollView;

    @property({ type: Prefab })
    prefab_area!: Prefab;

    /**当前运行状态 */
    state: number = 0;

    /**是否正在加载 */
    loading: boolean = false;

    /**选择的区服 */
    select_area: ResGameArea["area"][number];

    onLoad() {
        UIHelper.resize();
    }

    async start() {
        this.initManager();

        await this.initSyncManager()

        // 添加监听器
        this.addEventListener()

        // 热更
        this.hotUpdate()

    }

    /**初始化管理器 */
    initManager() {
        // 同步管理器初始化
        StorageManager.Instance.init(LocalDataKeyIV.key, LocalDataKeyIV.iv)
        dh.storageManager = StorageManager.Instance;

        EventManager.Instance.init()
        dh.eventManager = EventManager.Instance;

        ScheduleManager.Instance.init()
        dh.scheduleManager = ScheduleManager.Instance;

        ResManager.Instance.init()
        dh.resManager = ResManager.Instance;

        ConfigManager.Instance.init()
        dh.configManager = ConfigManager.Instance;

        NetManager.Instance.init()
        dh.netManager = NetManager.Instance;
    }


    async initSyncManager() {
        await UIManager.Instance.init()
        dh.uiManager = UIManager.Instance;
    }

    /**初始化加载UI */
    initLoadUI() {
        this.node.getChildByName("tipNode").active = false;
        this.node.getChildByName("loadNode").active = true;
        this.loading_bar.totalLength = this.loading_bar.getComponent(UITransform).width;
        this.desc.string = RunState[this.state].desc_string;
    }

    /**添加监听器 */
    addEventListener() {
        /**点击进入游戏 */
        this.node.on(NodeEventType.TOUCH_START, () => {
            if (!this.select_area) {
                dh.uiManager.toast(`请先选择服务器`);
                return
            }
            
            if (this.loading) {
                return
            }

            this.loading = true
            this.initLoadUI();
            this.loadResAndRun();
        }, this);

        /**加载资源更新UI */
        dh.eventManager.on(EventType.LoadResProgress, this.updateUI, this);
    }

    /**加载基础资源然后启动主场景 */
    async loadResAndRun() {
        await dh.configManager.loadBaseConfig();
        await dh.resManager.loadBaseRes();
        await dh.resManager.loadMainScene();
    }

    /**更新UI */
    updateUI(event, progress) {
        this.loading_bar.progress = progress * RunState[this.state].progress_max;
        console.log(progress * RunState[this.state].progress_max)
        if (progress >= 1) {
            this.state += 1;
            this.desc.string = RunState[this.state].desc_string;
        }
    }

    /** 热更 */
    hotUpdate() {
        // if (NATIVE) {
        // console.log(2)
        //     let storagePath = native.fileUtils.getWritablePath() + "hot"
        //     let am = native.AssetsManager.create('', storagePath); 
        // }

    }

    /** 获取区服信息 */
    async initGameArea() {
        var ret = await dh.netManager.http_gate.callApi(`GameArea`, {});
        if (!ret.isSucc) {
            dh.uiManager.toast(`拉区服务器列表失败，${ret.err}`)
            this.setSelectPanelVisible(false);
            return
        }

        this.setSelectPanelVisible(true)
        this.area_list.content!.removeAllChildren();

        for (let area_info of ret.res.area) {
            let node = instantiate(this.prefab_area);
            this.area_list.content!.addChild(node);

            let cell = node.getComponent(AreaCell);
            cell.options = {
                area: area_info,
                onClick: (select_area) => {
                    this.select_area = select_area
                    this.setSelectPanelVisible(false);
                    this.node.getChildByPath("tipNode/desc").active = true;
                    this.node.getChildByPath("tipNode/server_name").getComponent(Label).string = select_area.name
                }
            }
        }

    }

    setSelectPanelVisible(visible){
        this.area_list.node.parent.active = visible;
    }
}

