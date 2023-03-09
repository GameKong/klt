import { Node } from "cc";

/**
 * 
 * UIConfig
 * kongl
 * Wed Nov 02 2022 10:46:20 GMT+0800 (中国标准时间)
 * uiDefines.ts
 * db://assets/scripts/gui/uiDefines.ts
 *
 */

/*** 界面回调参数对象定义 */
export interface UICallbacks {
    /**
     * 节点添加到层级以后的回调
     * @param node   当前界面节点
     * @param params 外部传递参数
     */
    onOpen?: (node: Node, params: any) => void,

    /**
     * 窗口节点 destroy 之后回调
     * @param node   当前界面节点
     * @param params 外部传递参数
     */
    onClosed?: (node: Node | null, params: any) => void,

    /** 
     * 注意：调用`delete`或`$delete`才会触发此回调，如果`this.node.destroy()`，该回调将直接忽略。
     * 
     * 如果指定onBeforeClose，则next必须调用，否则节点不会被正常删除。
     * 
     * 比如希望节点做一个FadeOut然后删除，则可以在`onBeforeClose`当中播放action动画，动画结束后调用next
     * @param node   当前界面节点
     * @param next   回调方法
     */
    onBeforeClose?: (node: Node, next: Function) => void
}

/** 界面层类型 */
export enum LayerType {
    /** 游戏层 */
    Game = "LayerGame",
    /** 主界面层 */
    UI = "LayerUI",
    /** 弹窗层 */
    PopUp = "LayerPopUp",
    /** 模式窗口层 */
    Dialog = "LayerDialog",
    /** 系统触发模式窗口层 */
    System = "LayerSystem",
    /** 滚动消息提示层 */
    Notify = "LayerNotify",
    /** 新手引导层 */
    Guide = "LayerGuide",
    /** 屏蔽层 */
    Swallow = "LayerSwallow",
}

/**UI入场动画类型 */
export enum UIAction {
    ScaleIn = 1
}

/**UI入场动画类型 */
export enum UIBack {
    /**建筑：返回主城 */
    Bunldings = 1,

    /**自然：返回来源界面 */
    Nature = 2
}

/** 本类型仅供gui模块内部使用，请勿在功能逻辑中使用 */
export class ViewParams {
    /** 界面唯一标识 */
    uuid!: string;
    /** 界面配置 */
    config!: UIConfig;
    /**UI入场动画类型 */
    ui_params: any | null;
    /** 窗口事件 */
    callbacks!: UICallbacks | null;
    /** 界面根节点 */
    root_node: Node | null = null;
    /** 界面ui节点 */
    ui_root: Node | null = null;
}

export class UIConfig {
    ui_id: UIID;
    /** bundle包名 */
    bundle_name?: string = "resources";
    /** 预制资源相对路径 */
    prefab_path: string;
    /** 是否添加黑色背景层 */
    dark_bg?: boolean = true;
    /**UI入场动画类型 */
    ui_action?: UIAction;
    /** 全屏界面,并且打开此界面的时候需要关闭其他所有界面 */
    full_screen?: boolean = false;
    /** 界面返回类型 */
    ui_back?: UIBack = UIBack.Nature;
    /** 不进入ui_stack，不会因为handbackevent而被打开 */
    not_in_stack?: boolean = false;
    /** 主要的场景,打开此界面的时候会清空历史ui记录 */
    main?: boolean = false;
    /** 非唯一界面 */
    multiple?: boolean = false;
    /** 界面类型 */
    layer?: LayerType = LayerType.UI;

    constructor(param: UIConfig) {
        for (const key of Object.keys(param)) {
            this[key] = param[key];
        }
    }
}

/** 界面唯一标识id */
export enum UIID {
    /** 主界面 */
    MainUI = 1,
    /** 玩家信息界面 */
    Player = 2,
    /** 登陆界面 */
    Login = 3,
    /** 匹配界面 */
    Match = 4,
}

/** 打开界面方式的配置数据 */
export let UIConfigData: { [key: number]: UIConfig } = {
    [UIID.MainUI]: new UIConfig({ ui_id: UIID.MainUI, bundle_name: "mainUI", prefab_path: "mainUI", dark_bg: false, main: true }),
    [UIID.Player]: new UIConfig({ ui_id: UIID.Player, prefab_path: "playerMain", bundle_name: "player", ui_action: UIAction.ScaleIn }),
    [UIID.Login]: new UIConfig({ ui_id: UIID.Login, prefab_path: "ui_login", bundle_name: "login", dark_bg: false, full_screen: true }),
    [UIID.Match]: new UIConfig({ ui_id: UIID.Match, prefab_path: "ui_match", bundle_name: "match", dark_bg: false, full_screen: true }),
}