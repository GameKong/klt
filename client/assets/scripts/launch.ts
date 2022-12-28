import { _decorator, Component, Node, director, ProgressBar, Label, UITransform, NodeEventType, native } from 'cc';
import { dh } from './dh';
import { EventManager, EventType } from './core/eventManager';
import { ResManager } from './core/resManager';
import { UIManager } from './core/uiManager';
import { ScheduleManager } from './core/scheduleManager';
import { ConfigManager } from './core/configManager';
import { UIHelper } from './tools/uiHelper';
import { BaseUI } from './gui/baseUI';
import { NetManager } from './core/netManager';

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

    onLoad() {
        UIHelper.resize();
    }

    start() {
        this.initManager();

        // 添加监听器
        this.addEventListener()

        // 热更
        this.hotUpdate()
    }

    /**初始化管理器 */
    initManager() {
        // 同步管理器初始化
        EventManager.Instance.init()
        ScheduleManager.Instance.init()
        ResManager.Instance.init()
        ConfigManager.Instance.init()
        NetManager.Instance.init()

        dh.eventManager = EventManager.Instance;
        dh.scheduleManager = ScheduleManager.Instance;
        dh.resManager = ResManager.Instance;
        dh.configManager = ConfigManager.Instance;
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
}

