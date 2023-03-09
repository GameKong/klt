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
import { ResRoomList } from '../../shared/protocols/match/PtlRoomList';
const { ccclass, property } = _decorator;

type _CellInfo = ResRoomList["rooms"][number]

export type MatchCellOptions = {
    cell_info: _CellInfo,
    onClick: () => void
};

@ccclass('MatchCell')
export class MatchCell extends Component {
    @property(Label)
    lbl_name!: Label;
    @property(Label)
    lbl_url!: Label;
    @property(Label)
    lbl_num!: Label;

    private _options!: MatchCellOptions;
    public get options(): MatchCellOptions {
        return this._options!;
    }
    public set options(v: MatchCellOptions) {
        this._options = v;
        let cell_info = v.cell_info
        this.lbl_name.string = cell_info.name;
        this.lbl_url.string = `服务器:${cell_info.room_info.serverUrl}`;
        this.lbl_num.string = `人数:${cell_info.amount}/${cell_info.max}`;
        // this.lbl_url.string = `房号:${cell_info.room_info.roomId}`;
    }

    onBtnSelect() {
        this._options.onClick()
    }

}
