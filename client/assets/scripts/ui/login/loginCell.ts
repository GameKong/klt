/*
 * @Author: dgflash
 * @Date: 2022-05-11 18:21:44
 * @LastEditors: dgflash
 * @LastEditTime: 2022-05-19 16:24:14
 */

import { Component, Label, _decorator } from 'cc';
import { DbUrl } from '../../shared/models/dbUrl';
import { ServerName } from '../../shared/models/serverName';
import { ShareConfig } from '../../shared/models/ShareConfig';
import { ResGameArea } from '../../shared/protocols/gate/PtlGameArea';
const { ccclass, property } = _decorator;

export type LoginCellOptions = {
    area_number: number,
    server_url: string,
    onClick: () => void
};

@ccclass('LoginCell')
export class LoginCell extends Component {
    @property(Label)
    label_name!: Label;
    @property(Label)
    label_info!: Label;

    private _options!: LoginCellOptions;
    public get options(): LoginCellOptions {
        return this._options!;
    }
    public set options(v: LoginCellOptions) {
        this._options = v;
        this.label_name.string = `[${v.area_number}]${ServerName[v.area_number]}`;
        this.label_info.string = `服务器:${v.server_url}`;
    }

    onBtnSelect() {
        this._options.onClick()
    }

}
