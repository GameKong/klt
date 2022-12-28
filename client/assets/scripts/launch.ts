import { _decorator, Component, screen, Node, director, ProgressBar, Label, UITransform, NodeEventType, native, ResolutionPolicy, view } from 'cc';

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

    resize() {
        let dr = {
            width: 1280,
            height: 768
        };

        var s = screen.windowSize;
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;

        if ((rw / rh) > (dr.width / dr.height)) {
            // 如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
        }
        else {
            // 如果更短，则用定宽
            finalW = dr.width;
            finalH = finalW * rh / rw;
        }

        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
    }

    onLoad() {
        this.resize();
    }

    start() {
        this.initManager();
    }

    /**初始化管理器 */
    initManager() {

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
        director.loadScene("main");
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

