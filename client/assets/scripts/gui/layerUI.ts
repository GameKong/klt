/*
 * UI基础层，允许添加多个预制件节点
 * add          : 添加一个预制件节点到层容器中，该方法将返回一个唯一uuid来标识该操作Node节点。
 * delete       : 根据uuid删除Node节点，如果节点还在队列中也会被删除, 删除节点可以用gui.delete(node)或this.node.destroy()
 * deleteByUuid : 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除。
 * get          : 根据uuid获取Node节点，如果节点不存在或者预制件还在队列中，则返回null 。
 * getByUuid    : 根据预制件路径获取当前显示的该预制件的所有Node节点数组。
 * has          : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * find         : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * size         : 当前层上显示的所有Node节点数。
 * clear        : 清除所有Node节点，队列当中未创建的任务也会被清除。
 */
import { AssetManager, BlockInputEvents, error, instantiate, isValid, js, Layers, Node, Prefab, View, warn, Widget } from "cc";
import { LoadList } from "../core/resManager";
import { dh } from "../dh";
import { UIConfig, UICallbacks, ViewParams, UIID } from "./uiDefines";
import { BaseUI } from "./baseUI";
import { BaseUINode } from "./baseUINode";
import { GFunc } from "../globals/gFunc";

/** 界面层对象 */
export class LayerUI extends BaseUINode {
    /**uuid索引 */
    uuid_index: number = 1;

    /**界面列表 */
    ui_array: Array<ViewParams> = new Array<ViewParams>();

    /**隐藏的界面堆栈列表 */
    ui_stack: Array<ViewParams> = new Array<ViewParams>();

    /**
     * UI基础层，允许添加多个预制件节点
     * @param name 该层名
     * @param parent 父节点
     */
    constructor(name: string, parent?: Node) {
        super(name);

        // 移除触摸屏蔽层组件
        this.getComponent(BlockInputEvents)?.destroy();

        if (parent) {
            parent.addChild(this);
        }
    }

    /** 构造一个唯一标识UUID */
    protected createUuid(prefab_path: string): string {
        let uuid = `${this.name}_${prefab_path}_${this.uuid_index++}`;
        return uuid.replace(/\//g, "_");
    }

    /**
     * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点
     * @param prefab_path 预制件路径
     * @param ui_params     自定义参数
     * @param callbacks  回调函数对象，可选
     */
    open(config: UIConfig, ui_params?: any, callbacks?: UICallbacks) {
        // 唯一界面
        if (!config.multiple && this.isOpen(config.prefab_path)) {
            // 该界面已打开
            // TODO：作对应界面调整
            console.log('%c%s', 'color:red', "该界面已打开: " + config.prefab_path)
            return
        }

        // 主界面清空其他界面
        if (config.main) {
            this.closeAllUI()
            this.clearUIStack();
        }
        else if (config.full_screen) {
            // 全屏界面
            this.setUIInStack()
            this.closeAllUI()
        }

        // 顶部界面被覆盖回调
        this.topUIOnCover();

        let view_params = new ViewParams();
        view_params.uuid = this.createUuid(config.prefab_path);
        view_params.config = config;
        view_params.ui_params = ui_params || {};
        view_params.callbacks = callbacks || {};
        this.ui_array.push(view_params);

        this.load(view_params)
    }

    /**
     * 加载界面资源
     * @param view_params 显示参数
     * @param bundle     远程资源包名，如果为空就是默认本地资源包
     */
    protected async load(view_params: ViewParams) {
        let ui_config = view_params.config;

        // 创建界面根节点
        let root_node = new BaseUINode(`root_${ui_config.prefab_path}`);
        root_node.setParent(this);
        view_params.root_node = root_node;

        // 加载预制件资源
        let prefab = await dh.resManager.loadRes(ui_config.bundle_name, ui_config.prefab_path, Prefab)

        // 实例化UI节点
        let ui_root: Node = instantiate(prefab);

        // 加载其他额外资源
        let base_ui_component = ui_root.getComponent(BaseUI)
        await base_ui_component.loadResAndConfig();

        // 设置父节点, 加载完资源再将节点加入到节点树中，否则的话会提前调用节点组件的onLoad和start
        ui_root.setParent(root_node);
        view_params.ui_root = ui_root;

        // 触发窗口组件上添加到父节点后的事件
        GFunc.applyComponentsFunction(ui_root, "onOpen", view_params, BaseUI);
        if (typeof view_params.callbacks!.onOpen === "function") {
            view_params.callbacks!.onOpen(ui_root, view_params);
        }

        console.log('%c%s', 'color:green', "open View: " + ui_config.prefab_path);
    }

    /**
     * 使当前展示的UI入栈
     */
    setUIInStack() {
        // 加入UI栈
        this.ui_stack = this.ui_array.map((view_params: ViewParams) => {
            if (!view_params.config.not_in_stack) {
                return view_params;
            }
        })
    }

    /**
     * 顶部UI被覆盖回调
     */
    topUIOnCover() {
        let num = this.ui_array.length;
        if (num <= 0)
            return

        let view_params: ViewParams = this.ui_array[num - 1]
        GFunc.applyComponentsFunction(view_params.ui_root, "onCover", null, BaseUI);
    }

    /**
     * 上一层UI被删除，次顶部界面的onShow回调
     */
    topUIOnShow() {
        let num = this.ui_array.length;
        if (num <= 0)
            return

        let view_params: ViewParams = this.ui_array[num - 1]
        GFunc.applyComponentsFunction(view_params.ui_root, "onShow", null, BaseUI);
    }

    /**
     * 根据预制件路径删除, 该方法会删除所有使用该预制件的节点
     * @param prefab_path   预制路径
     */
    closeUIByPrefabPath(prefab_path: string): void {
        for (let i = this.ui_array.length; i > 0; i--) {
            let ui_idx = i - 1
            let view_params: ViewParams = this.ui_array[ui_idx]
            let ui_config = view_params.config;
            if (ui_config.prefab_path === prefab_path) {
                this.closeUI(view_params)
            }
        }
    }

    /**
     * 根据唯一标识删除节点，如果节点还在队列中也会被删除
     * @param uuid  唯一标识
     */
    closeUIByUuid(uuid: string): void {
        for (let i = this.ui_array.length; i > 0; i--) {
            let ui_idx = i - 1
            let view_params: ViewParams = this.ui_array[ui_idx]
            if (view_params.uuid === uuid) {
                this.closeUI(view_params)
                break
            }
        }
    }

    /**
     * 清除所有节点，队列当中的也删除
     */
    closeAllUI(): void {
        for (let i = this.ui_array.length; i > 0; i--) {
            let ui_idx = i - 1
            let view_params: ViewParams = this.ui_array[ui_idx]
            this.closeUI(view_params)
        }

        this.ui_array = new Array<ViewParams>();
    }

    /**
     * 清除UI栈
     */
    clearUIStack(): void {
        this.ui_stack = new Array<ViewParams>();
    }

    /**
     * 删除视图参数对应的节点
     * @param view_params  视图参数
     */
    protected closeUI(view_params: ViewParams): void {
        let ui_root = view_params.ui_root;

        // 触发窗口组件上移除之前的事件
        GFunc.applyComponentsFunction(ui_root, "onBeforeClose");

        //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）
        if (typeof view_params.callbacks!.onBeforeClose === "function") {
            view_params.callbacks!.onBeforeClose(ui_root, () => {
                this.onClosedUI(view_params);
            });
        }
        else {
            this.onClosedUI(view_params);
        }

        // 字段置空
        view_params.root_node = null;
        view_params.ui_root = null;

        // 是否关闭最上层界面
        let ui_idx = this.ui_array.indexOf(view_params);
        let is_open_top = (this.ui_array.length - 1) == ui_idx;

        // 从ui_array列表中删除ui参数
        if (ui_idx != -1) {
            this.ui_array.splice(ui_idx, 1)
        }

        // 如果关闭的是最上层界面，则调用下一层界面onShow函数
        if (is_open_top) {
            this.topUIOnShow();
        }
        console.log('%c%s', 'color:blue', "close View: " + view_params.config.prefab_path);
    }

    /** 窗口组件中触发移除事件与释放窗口对象 */
    private onClosedUI(view_params: ViewParams) {
        let ui_root = view_params.ui_root;

        // 触发窗口组件上窗口移除之后的事件
        GFunc.applyComponentsFunction(ui_root, "onClosed");

        // 通知外部对象窗口移除之后的事件
        if (typeof view_params.callbacks!.onClosed === "function") {
            view_params.callbacks!.onClosed(ui_root, view_params);
        }

        // 释放界面预制件相关资源
        let ui_config = view_params.config;
        dh.resManager.release(ui_config.prefab_path, Prefab, ui_config.bundle_name);

        view_params.root_node.destroy();
    }

    /**
     * 根据预制件路径获取当前显示的该预制件的所有Node节点数组
     * @param prefab_path 
     */
    get(prefab_path: string): Array<ViewParams> {
        let arr: Array<ViewParams> = this.ui_array.filter((view_params: ViewParams) => {
            return view_params.config.prefab_path === prefab_path
        })
        return arr;
    }

    /**
     * 根据唯一标识获取节点，如果节点不存在或者还在队列中，则返回null 
     * @param uuid  唯一标识
     */
    getByUuid(uuid: string): ViewParams | null {
        for (let i = this.ui_array.length; i > 0; i--) {
            let ui_idx = i - 1
            let view_params: ViewParams = this.ui_array[ui_idx]
            if (view_params.uuid === uuid) {
                return view_params;
            }
        }

        return null;
    }

    /**
     * 判断当前层是否包含 uuid或预制件路径对应的Node节点
     * @param prefabPath_or_uuid 预制件路径或者UUID
     */
    isOpen(prefabPath_or_uuid: string): boolean {
        let result = this.ui_array.some((view_params: ViewParams) => {
            return view_params.uuid === prefabPath_or_uuid || view_params.config.prefab_path === prefabPath_or_uuid
        })

        return result;
    }

    /**
     * 获取当前层包含指定正则匹配的Node节点。
     * @param prefab_path_reg 匹配预制件路径的正则表达式对象
     */
    find(prefab_path_reg: RegExp): Array<ViewParams> {
        let arr: Array<ViewParams> = this.ui_array.filter((view_params: ViewParams) => {
            return prefab_path_reg.test(view_params.config.prefab_path)
        })

        return arr;
    }

    /** 层节点数量 */
    size(): number {
        return this.children.length;
    }


    /**
     * 清除所有非全屏界面
     * @param keep_list 表示不需要关闭的界面
     */
    closeArrayUI(keep_list?: UIID[]) {
        let length = this.ui_array.length;

        if (length <= 1)
            return;

        for (let i = length; i > 0; i--) {
            let ui_idx = i - 1
            let top_view_params = this.ui_array[ui_idx];
            let config = top_view_params.config;

            if (config.main || config.full_screen)
                break;

            if (keep_list.includes(config.ui_id))
                continue;

            this.closeUI(top_view_params);
        }
    }

    /**
     * 返回到上一层界面
    */
    backToLastUI() {
        let length_array = this.ui_array.length;
        let length_stack = this.ui_stack.length;

        // 只有一个界面且ui_stack中没有界面记录则直接返回不能关闭界面
        if (length_array <= 1 && length_stack <= 0)
            return;

        // 关闭最上层界面
        let top_view_params = this.ui_array[length_array - 1]
        this.closeUI(top_view_params)

        // 所有界面都关闭了，则打开ui_stack中的界面
        if (this.ui_array.length <= 0) {
            let tmp_ui_array: ViewParams[] = [];
            let view_params: ViewParams;
            while (view_params = tmp_ui_array.pop()) {
                let tmp_length = tmp_ui_array.push(view_params);

                // 遇到全屏界面则开始创建界面
                let config = view_params.config;
                if (config.main || config.full_screen) {
                    for (let i = tmp_length; i > 0; i--) {
                        let tmp_ui_idx = i - 1;
                        let tmp_view_params = tmp_ui_array[tmp_ui_idx];
                        dh.uiManager.open(tmp_view_params);
                    }
                    break;
                }
            }
        }
    }
}