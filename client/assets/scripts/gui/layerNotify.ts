import { _decorator, Component, Node, Widget, Layers, BlockInputEvents, tween, Tween, Prefab, instantiate, Label, Vec3 } from 'cc';
import { dh } from '../dh';
import { GPrefab } from '../globals/gConst';
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

        // 移除触摸屏蔽层组件
        this.getComponent(BlockInputEvents)?.destroy();

        if (parent) {
            parent.addChild(this);
        }

    }

    async init() {
        // 加载预制件资源
        this.prefab = await dh.resManager.loadRes("public", GPrefab.toast, Prefab);
    }

    add(text: string | string[]) {
        if (typeof text === "string") {
            this.list.push(text);
        }
        else {
            this.list.push(...text);
        }

        this.runToastAction();
    }

    runToastAction() {
        Tween.stopAllByTarget(this);
        tween(this)
            .call(() => {
                let text = this.list.pop();
                if (text) {
                    let node = instantiate(this.prefab);
                    node.getComponentInChildren(Label).string = text;
                    this.addChild(node);

                    let dir = new Vec3(0, 200, 0);
                    let target = Vec3.add(new Vec3, node.position, dir);
                    tween(node)
                        .to(1, { position: target })
                        .removeSelf()
                        .start()
                }
            })
            .delay(0.3)
            .call(() => {
                if (this.list.length > 0) {
                    this.runToastAction();
                }
            })
            .start();
    }
}