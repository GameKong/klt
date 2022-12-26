import { _decorator, Component, Node, Widget, Layers, BlockInputEvents } from 'cc';
import { BaseUINode } from './baseUINode';
import { ViewParams } from './uiDefines';
const { ccclass, property } = _decorator;

/**
 * 
 * LayerNotify
 * kongl
 * Mon Nov 07 2022 14:03:18 GMT+0800 (中国标准时间)
 * layerNotify.ts
 * db://assets/scripts/gui/layerNotify.ts
 *
 */

/**提示层节点 */
export class LayerNotify extends BaseUINode {
    /**
     * 提示层节点，允许添加多个预制件节点
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

    add(view_params: ViewParams) {

    }
}