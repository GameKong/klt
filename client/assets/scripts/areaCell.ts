/*
 * @Author: dgflash
 * @Date: 2022-05-11 18:21:44
 * @LastEditors: dgflash
 * @LastEditTime: 2022-05-19 16:24:14
 */

import { Component, Label, _decorator } from 'cc';
import { ResGameArea } from './shared/protocols/gate/PtlGameArea';
const { ccclass, property } = _decorator;

export type AreaCellOptions = {
    area: ResGameArea['area'][number],

    onClick: (v: {
        name: string,
        server: string
    }) => void
};

@ccclass('AreaCell')
export class AreaCell extends Component { 
    @property(Label)
    label_name!: Label;
    @property(Label)
    label_info!: Label;

    private _options!: AreaCellOptions;
    public get options(): AreaCellOptions {
        return this._options!;
    }
    public set options(v: AreaCellOptions) {
        this._options = v;

        this.label_name.string = v.area.name;
        this.label_info.string = `服务器:${v.area.server}`;
    }

    onBtnSelect() {
        this._options.onClick(this._options.area)
    }

}
