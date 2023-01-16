import { _decorator, Component, Node, Widget, tween } from 'cc';
import { EventData, EventManager } from '../core/eventManager';
import { LoadList } from '../core/resManager';
import { ScheduleParam } from '../core/scheduleManager';
import { dh } from '../dh';
import { UIBack, UIID, ViewParams } from '../gui/uiDefines';
import { UIHelper } from '../tools/uiHelper';
const { ccclass, property } = _decorator;

/**
 * 
 * BaseUI
 * kongl
 * Tue Nov 01 2022 17:13:03 GMT+0800 (中国标准时间)
 * baseUI.ts
 * db://assets/scripts/ui/baseUI.ts
 *
 */

@ccclass('BaseUI')
export class BaseUI extends Component {
    /**该界面root根节点 */
    root_node: Node;

    /**界面参数 */
    view_params: ViewParams

    /**界面业务逻辑数据参数 */
    ui_params: any;

    /**加载配置表列表 */
    config_list: Array<string> = new Array<string>();

    /**加载资源列表 */
    res_list: Array<LoadList> = new Array<LoadList>();

    /**事件监听器列表 */
    event_list: Array<EventData> = new Array<EventData>();

    /**定时器参数列表 */
    schedule_list: Array<ScheduleParam> = new Array<ScheduleParam>();

    /**定时器uuid列表 */
    schedule_uuids: Array<string> = new Array<string>();

    /**
     * 添加屏蔽层
     * @param time 屏蔽层消失事件，可选参数
     * @param callback 屏蔽层消失后的回调函数，可选参数
     */
    disableTouches(time?: number, callback?: Function) {
        let swallow_node = UIHelper.createSwallowTouchesNode("swallowTouchNode");
        this.root_node.addChild(swallow_node)
        if (time) {
            tween(swallow_node)
                .delay(time)
                .call(() => {
                    swallow_node.destroy()

                    if (callback) {
                        callback()
                    }
                })
                .start()
        }
    }

    /**删除屏蔽层 */
    enableTouches() {
        let swallow_node = this.root_node.getChildByName("swallowTouchNode");
        swallow_node?.destroy();
    }

    /**注册自定义事件监听器 */
    registerEvent() {
        EventManager.Instance.onWithList(this.event_list);
    }

    /**注销自定义事件监听器 */
    unregisterEvent() {
        EventManager.Instance.offWithList(this.event_list);
    }

    /**加载界面加载的额外资源和配置表 */
    async loadResAndConfig() {
        await dh.resManager.loadResLists(this.res_list);
        await dh.configManager.loadConfigs(this.config_list);
    }

    /**释放界面加载的额外资源 */
    async releaseRes() {
        dh.resManager.releaseByLoadList(this.res_list);
    }

    /**注册定时器 */
    registerSchedule() {
        this.schedule_list.forEach((param: ScheduleParam) => {
            let uuid = dh.scheduleManager.schedule(param);
            this.schedule_uuids.push(uuid);
        })
    }

    /**注销定时器 */
    unregisterSchedule() {
        this.schedule_uuids.forEach((uuid: string) => {
            dh.scheduleManager.unschedule(uuid);
        })
        this.schedule_uuids = new Array<string>()
    }

    /**关闭当前界面 */
    closeUI() {
        dh.uiManager.closeUI(this.view_params);
    }

    /**
     * 返回上一级界面
     * @param close_array_ui 是否关闭当前打开的非全屏界面，处理那种一个确定按钮就要关闭几个界面的情况
     * @param keep_list 表示不需要关闭的界面
     */
    handleBackEvent(close_array_ui?: boolean, keep_list?: UIID[]) {
        if (this.view_params.config.ui_back == UIBack.Bunldings) {
            dh.uiManager.open(UIID.MainUI);
        }
        else {
            // 关闭所有非全屏UI
            if (close_array_ui) {
                dh.uiManager.closeArrayUI(keep_list);
            }
        }

        dh.uiManager.backToLastUI();
    }

    /**
     * 界面加入到UI栈时的回调
     * @param view_params 界面参数
     */
    onOpen(view_params: ViewParams) {
        // 初始化业务逻辑参数
        this.view_params = view_params;

        // 初始化根节点
        this.root_node = this.node.parent;

        // 初始化ui数据参数
        this.ui_params = view_params.ui_params;

        // 调整节点布局方式，与屏幕像素尺寸大小一致，因为屏蔽层只在点击节点内的时候才生效
        let widget: Widget = this.getComponent(Widget);
        if (!widget) {
            widget = this.addComponent(Widget);
        }
        widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
        widget.left = widget.right = widget.top = widget.bottom = 0;
        widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;

        // 添加事件监听器
        this.registerEvent();

        //注册计时器
        this.registerSchedule()

        // 黑色背景
        let ui_config = view_params.config;
        if (ui_config.dark_bg) {
            let dark_layer = UIHelper.createBlackLayer();
            this.root_node.insertChild(dark_layer, 0);
        }

        // 入场缓动动画
        UIHelper.runEnterAction(this.node, ui_config.ui_action)

        // 脚本初始化逻辑
        this.init();
    }

    /**
     * 界面从UI栈删除前的回调
     */
    onBeforeClose() {
        // 注销事件监听器
        this.unregisterEvent();

        //释放界面加载的额外资源
        this.releaseRes();

        //注销计时器
        this.unregisterSchedule()
    }

    /**
     * 界面删除时的回调
     */
    onClosed() {

    }

    /**
     * 作为顶部界面被覆盖
     */
    onCover() {

    }

    /**
     * 上一层UI被删除，再次作为顶部界面时的回调
     */
    onShow() {

    }

    init() {

    }

    onLoad() {

    }

    start() {

    }

    update(dt: number) {

    }

    lateUpdate(dt: number) {

    }

    onEnable() {

    }

    onDisable() {

    }

    onDestroy() {

    }
}