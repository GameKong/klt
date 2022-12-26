import { _decorator, Component, Node, SpriteAtlas, Layers, UITransform, BlockInputEvents, Widget } from 'cc';
import { UIHelper } from '../tools/uiHelper';

/**
 * 
 * BaseUINode
 * kongl
 * Thu Nov 17 2022 15:22:47 GMT+0800 (中国标准时间)
 * baseUINode.ts
 * db://assets/scripts/gui/baseUINode.ts
 *
 */

export class BaseUINode extends Node {
    constructor(name: string = "") {
        super(name);

        // 设置节点层mask为UI层，使节点事件生效
        this.layer = Layers.Enum.UI_2D;

        // canvas下的节点必须有UITransform组件
        this.addComponent(UITransform);

        // 添加触摸屏蔽层组件，防止触摸穿透，只能屏蔽冒泡阶段的触摸，捕获阶段的触摸无法屏蔽
        this.addComponent(BlockInputEvents);

        // 触摸屏蔽只在触摸节点内部时生效，添加Widget组件，适配节点大小为全屏
        let widget = this.addComponent(Widget);
        UIHelper.setWidgetAlign(widget);
    }
}
