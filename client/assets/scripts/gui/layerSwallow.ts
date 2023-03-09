import { _decorator, Component, Node, Widget, Layers, BlockInputEvents, tween, Tween, Prefab, instantiate, Label, Vec3 } from 'cc';
import { dh } from '../dh';
import { GPrefab } from '../globals/gConst';
import { BaseUINode } from './baseUINode';
import { ViewParams } from './uiDefines';
const { ccclass, property } = _decorator;

/**
 * 
 * LayerSwallow
 * kongl
 * Mon Nov 07 2023 14:03:18 GMT+0800 (中国标准时间)
 * layerSwallow.ts
 * db://assets/scripts/gui/layerSwallow.ts
 *
 */

/**提示层节点 */
export class LayerSwallow extends BaseUINode {
    /**toast列表 */
    public list: string[] = [];

    /**toas预制体 */
    public prefab: Prefab;

    /**
     * 提示层节点，允许添加多个预制件节点
     * @param name 该层名
     * @param parent 父节点
     */
    constructor(name: string, parent?: Node) {
        super(name);

        if (parent) {
            parent.addChild(this);
        }
    }

    init() {
        this.enableTouches();
    }

    enableTouches() {
        this.getComponent(BlockInputEvents).enabled = false;
    }

    disableTouches() {
        this.getComponent(BlockInputEvents).enabled = true;
    }
}