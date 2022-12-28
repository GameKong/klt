import { _decorator, SpriteAtlas, Sprite } from 'cc';
import { LoadList } from '../../core/resManager';
import { dh } from '../../dh';
import { BaseUI } from '../../gui/baseUI';
const { ccclass, property } = _decorator;

/**
 * 
 * PlayerMain
 * kongl
 * Thu Nov 03 2022 10:15:12 GMT+0800 (中国标准时间)
 * playerMain.ts
 * db://assets/scripts/ui/player/playerMain.ts
 *
 */

@ccclass('PlayerMain')
export class PlayerMain extends BaseUI {
    config_list = [
        "test3"
    ]
    load_list: LoadList[] = [
        // {
        //     bundle_name: "test",
        //     res_list: new Map([
        //         [SpriteAtlas, [
        //             "activity_arena_void_skill",
        //             "activity_arena_void"
        //         ]]
        //     ])
        // }
    ]

    onLoad() {
        super.onLoad();

    }
    start() {
        super.start();
        let config = dh.configManager.get("test3")
        console.log(config[2][2])
        // let bg = this.node.getChildByName("bg")
        // let sp = bg.getComponent(Sprite)
        // let atlas = dh.resManager.get("activity_arena_void_skill", SpriteAtlas, "test")
        // sp.spriteFrame = atlas.getSpriteFrame("activity_arena_void_skill/activity_arena_void_skill_302")
    }

    update(dt: number) {
        super.update(dt);
    }

    onTouchClose() {
        this.closeUI();
    }
}