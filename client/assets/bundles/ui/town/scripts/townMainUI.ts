import { _decorator } from 'cc';
import { dh } from '../../../../scripts/dh';
import { BaseUI } from '../../../../scripts/gui/baseUI';
import { UIID } from '../../../../scripts/gui/uiDefines';
const { ccclass, property } = _decorator;

/**
 * 
 * TownMainUI
 * kongl
 * Thu Nov 03 2022 10:18:24 GMT+0800 (中国标准时间)
 * townMainUI.ts
 * db://assets/scripts/ui/town/townMainUI.ts
 *
 */

@ccclass('TownMainUI')
export class TownMainUI extends BaseUI {
    start() {

    }

    update(dt: number) {

    }

    onTouchHead()
    {
        dh.uiManager.open(UIID.Player)
    }
}