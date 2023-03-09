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
import { UIManager } from './core/uiManager';
import { LoggerManager } from './core/loggerManager';

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

    /**当前运行状态 */
    state: number = 0;

    /**是否正在加载 */
    loading: boolean = false;


    onLoad() {
        UIHelper.resize();
    }

    async start() {
        this.initManager();

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

        LoggerManager.Instance.init()
        dh.loggerManager = LoggerManager.Instance;

        ScheduleManager.Instance.init()
        dh.scheduleManager = ScheduleManager.Instance;

        ResManager.Instance.init()
        dh.resManager = ResManager.Instance;

        ConfigManager.Instance.init()
        dh.configManager = ConfigManager.Instance;

        NetManager.Instance.init()
        dh.netManager = NetManager.Instance;
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

        /**热更后，加载资源，运行主场景 */
        this.initLoadUI();
        this.loadResAndRun();
    }
}

