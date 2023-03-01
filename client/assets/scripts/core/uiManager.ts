import { Node, warn, find } from 'cc';
import { LayerType, UIConfig, UIConfigData, UICallbacks, ViewParams, UIID } from '../gui/uiDefines';
import { LayerUI } from '../gui/layerUI';
import { UIMap } from '../gui/uiMap';
import { LayerNotify } from '../gui/layerNotify';
import { BaseManager } from './baseManager';

/**
 * 
 * UIManager
 * kongl
 * Mon Oct 31 2022 18:42:20 GMT+0800 (中国标准时间)
 * uiManager.ts
 * db://assets/scripts/core/uiManager.ts
 *
 */
export interface UIData {
    ui_id: number
    ui_params: Object
    ui_cfg: UIConfig
}

export class UIManager extends BaseManager {
    static readonly Instance: UIManager = new UIManager();

    /**摄像机 */
    camera: Node | null = null;

    /**GRoot(根节点) */
    g_root: Node | null = null;

    /**UI主节点 */
    layer_ui: LayerUI | null = null;

    /**Notify节点 */
    layer_nofity: LayerNotify | null = null;

    /**界面映射 */
    ui_map: UIMap;

    async init() {
        super.init()

        this.g_root = find("Canvas/GRoot");
        this.layer_ui = new LayerUI(LayerType.UI, this.g_root);
        this.layer_nofity = new LayerNotify(LayerType.Notify, this.g_root);
        await this.layer_nofity.init();
    }

    /** toast 提示 */
    toast(text: string|string[]) {
        this.layer_nofity.add(text)
    }

    /**
     * 设置界面地图配置
     * @param data 界面地图数据
     */
    setUIMap(data: any) {
        if (this.ui_map == null) {
            this.ui_map = new UIMap();
        }
        this.ui_map.init(data);
    }

    /**
     * 同步打开一个窗口
     * @param uiId          窗口唯一编号
     * @param ui_params        窗口参数
     * @param callbacks     回调对象
     */
    open(view_params: ViewParams); 
    open(ui_id: number, ui_params?: any, callbacks?: UICallbacks);
    open(params: ViewParams | number, ui_params?: any, callbacks?: UICallbacks): void {
        let ui_id: number;
        let config: UIConfig;

        if (typeof params === "number") {
            ui_id = params;
            config = UIConfigData[ui_id];
        }
        else {
            config = params.config;
            ui_id = config.ui_id;
            ui_params = params.ui_params;
            callbacks = params.callbacks;
        }

        if (config == null) {
            warn(`打开编号为【${ui_id}】的界面失败，配置信息不存在`);
            return;
        }

        switch (config.layer) {
            case LayerType.UI:
                this.layer_ui.open(config, ui_params, callbacks);
                break;
            // case LayerType.PopUp:
            //     this.popup.add(config, ui_params, callbacks);
            //     break;
            // case LayerType.Dialog:
            //     this.dialog.add(config, ui_params, callbacks);
            //     break;
            // case LayerType.System:
            //     this.system.add(config, ui_params, callbacks);
            //     break;
        }
    }

    /**
     * 异步打开一个窗口
     * @param uiId          窗口唯一编号
     * @param ui_params        窗口参数
     * @example 
     * var node = await oops.gui.openAsync(UIID.Loading);
     */
    async openAsync(uiId: number, ui_params: any = null): Promise<Node | null> {
        return new Promise<Node | null>((resolve, reject) => {
            var callbacks: UICallbacks = {
                onOpen: (node: Node, params: any) => {
                    resolve(node)
                }
            };
            this.open(uiId, ui_params, callbacks);
        });
    }

    /**
     * 缓存中是否存在指定标识的窗口
     * @param uiId 窗口唯一标识
     */
    isOpen(uiId: number): boolean {
        var config = UIConfigData[uiId];
        if (config == null) {
            warn(`编号为【${uiId}】的界面失败，配置信息不存在`);
            return false;
        }

        var result = false;
        switch (config.layer) {
            case LayerType.UI:
                result = this.layer_ui.isOpen(config.prefab_path);
                break;
            case LayerType.PopUp:
            //     result = this.popup.has(config.prefab);
            //     break;
            // case LayerType.Dialog:
            //     result = this.dialog.has(config.prefab);
            //     break;
            // case LayerType.System:
            //     result = this.system.has(config.prefab);
            //     break;
        }
        return result;
    }

    /**
     * 移除指定标识的窗口
     * @param uiId         窗口唯一标识
     */
    closeUI(uiId: number);
    closeUI(view_params: ViewParams);
    closeUI(param: any) {
        let uiId: number = null;
        let view_params: ViewParams = null;
        let config: UIConfig = null;

        if (typeof param === "number") {
            uiId = param;
            config = UIConfigData[uiId];
        }
        else {
            view_params = param;
            config = view_params.config;
        }

        if (config == null) {
            warn(`删除编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
        }

        if (uiId) {
            switch (config.layer) {
                case LayerType.UI:
                    this.layer_ui.closeUIByPrefabPath(config.prefab_path);
                    break;
                // case LayerType.PopUp:
                //     this.popup.remove(config.prefab, isDestroy);
                //     break;
                // case LayerType.Dialog:
                //     this.dialog.remove(config.prefab, isDestroy);
                //     break;
                // case LayerType.System:
                //     this.system.remove(config.prefab, isDestroy);
                //     break;
            }
        }
        else if (view_params) {
            switch (config.layer) {
                case LayerType.UI:
                    this.layer_ui.closeUIByUuid(view_params.uuid);
                    break;
            }
        }
    }

    /**
     * 清除所有窗口
     * @param isDestroy 移除后是否释放
     */
    closeAllUI() {
        this.layer_ui.closeAllUI();
        // this.popup.clear(isDestroy);
        // this.dialog.clear(isDestroy);
        // this.system.clear(isDestroy);
    }

    /**
     * 清除所有非全屏界面
     * @param keep_list 表示不需要关闭的界面
     */
    closeArrayUI(keep_list?: UIID[]) {
        this.layer_ui.closeArrayUI(keep_list);
    }

    /**
     * 返回到上一层界面
    */
    backToLastUI() {
        this.layer_ui.backToLastUI();
    }
}