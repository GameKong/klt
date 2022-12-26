import { assetManager, BlockInputEvents, Color, instantiate, Layers, Node, Prefab, ResolutionPolicy, screen, Sprite, SpriteFrame, tween, UIOpacity, UITransform, Vec3, view, Widget } from 'cc';
import { dh } from '../dh';
import { GConst } from '../globals/gConst';
import { UIAction } from '../gui/uiDefines';

/**
 * 
 * UiHelper
 * kongl
 * Thu Nov 17 2022 15:27:14 GMT+0800 (中国标准时间)
 * uiHelper.ts
 * db://assets/scripts/tools/uiHelper.ts
 *
 */
class Map<K, V> {
    get length() {
        return 1
    }
}
export class UIHelper {
    /** 游戏画布尺寸变化 */
    static resize() {
        let dr = dh.gConst.design_resolution;

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
        // let transform = this.g_root.getComponent(UITransform);
        // transform!.width = finalW;
        // transform!.height = finalH;

        dh.logger.trace(dr, "设计尺寸");
        dh.logger.trace(s, "屏幕尺寸");
    }
    /**创建吞噬触摸节点 */
    static createSwallowTouchesNode(name: string = "swallowTouchNode") {
        let touch_node = new Node();

        // 设置节点名
        touch_node.name = name;

        // 设置节点层mask为UI层，使节点事件生效
        touch_node.layer = Layers.Enum.UI_2D;

        // canvas下的节点必须有UITransform组件
        touch_node.addComponent(UITransform);

        // 添加触摸事件屏蔽组件
        touch_node.addComponent(BlockInputEvents);

        // 触摸屏蔽只在触摸节点内部时生效，添加Widget组件，适配节点大小为全屏
        let widget = touch_node.addComponent(Widget);
        UIHelper.setWidgetAlign(widget);

        return touch_node
    }

    /**黑色背景层 */
    static createBlackLayer(opacity: number = GConst.POPUP_DARK_OPACITY) {
        let prefab = dh.resManager.get("prefabs/blackLayer", Prefab, "public")
        let layer = instantiate(prefab);
        let com_opacity = layer.getComponent(UIOpacity);
        com_opacity.opacity = opacity;

        return layer;
    }

    /**黑色背景层 */
    static async addBlackComponent(node: Node, opacity: number = GConst.POPUP_DARK_OPACITY) {
        let com_sprite = node.addComponent(Sprite);
        com_sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        com_sprite.color = GConst.COLOR.BLACK;

        await dh.resManager.loadRes("resources", "public/sprite_splash/spriteFrame", SpriteFrame)
        let sprite_frame = dh.resManager.get("public/sprite_splash/spriteFrame", SpriteFrame, "resources");
        console.log(sprite_frame);
        com_sprite.spriteFrame = sprite_frame;

        let com_opacity = node.addComponent(UIOpacity);
        com_opacity.opacity = opacity;
    }

    /**设置widget，节点size适配为父节点大小 */
    static setWidgetAlign(widget: Widget) {
        widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
        widget.left = widget.right = widget.top = widget.bottom = 0;
        widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
    }

    static runEnterAction(node: Node, action_type?: UIAction, callback?) {
        if (action_type == UIAction.ScaleIn) {
            node.setScale(new Vec3(0.1, 0.1, 0.1));
            tween(node)
                .to(0.3, { scale: new Vec3(1, 1, 1) }, {
                    easing: "backOut"
                })
                .call(callback)
                .start();
        }

    }
}
