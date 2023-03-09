import { _decorator, Component, ProgressBar, Label, UITransform, NodeEventType, ScrollView, Prefab, instantiate, Button, EventHandler, Node, Widget, EditBox, EventTouch, macro } from 'cc';
import { dh } from '../../dh';
import { ResGameArea } from '../../shared/protocols/gate/PtlGameArea';
import { BaseUI } from '../../gui/baseUI';
import { UIHelper } from '../../tools/uiHelper';
import { EventData } from '../../core/eventManager';
import { ErrorCode } from '../../shared/models/errorCode';
import { DbUrl } from '../../shared/models/dbUrl';
import { ShareConfig } from '../../shared/models/ShareConfig';
import { NetUtils } from '../../utils/netUtils';
import { ServerName } from '../../shared/models/serverName';
import { GLocalKey } from '../../globals/gLocalKey';
import { Account } from '../../data/account';
import { GConst } from '../../globals/gConst';
import { GameServerConfig } from '../../globals/gClass';
import { UIID } from '../../gui/uiDefines';
import { MatchCell } from './matchCell';
import { ScheduleParam } from '../../core/scheduleManager';
import { RoomData } from '../../data/roomData';

const { ccclass, property } = _decorator;

@ccclass('Match')
export class Match extends BaseUI {
    /**cell预制件 */
    @property({ type: Prefab })
    prefab_cell!: Prefab;

    /**房间列表滑动节点 */
    @property({ type: ScrollView })
    room_list: ScrollView;

    /**在线总人数 */
    @property({ type: Label })
    lbl_num: Label;

    /**无房间tip */
    @property({ type: Node })
    lbl_tip: Node;

    /**计时器 */
    schedule_list: Array<ScheduleParam> = [{
        callback: this.reloadRoomList,
        interval: 3,
        repeat: macro.REPEAT_FOREVER,
        target: this
    }];

    onLoad() {

    }

    init() {
        super.init()
    }

    start() {
        this.reloadRoomList();
    }

    /** 刷新房间列表 */
    async reloadRoomList() {
        let ret = await dh.netManager.http_match.callApi("RoomList", {});
        if (ret.isSucc) {
            try {
                this.lbl_tip.active = ret.res.rooms.length === 0;
                this.lbl_num.string = `${ret.res.rooms.sum(v => v.amount)} 人在线`;

                this.room_list.content!.removeAllChildren();

                for (let v of ret.res.rooms) {
                    let node = instantiate(this.prefab_cell);
                    this.room_list.content!.addChild(node);
                    node.getComponent(MatchCell)!.options = {
                        cell_info: v,
                        onClick: () => {
                            // 进入房间
                            this.enterRoom(v.room_info);
                        }
                    };
                }
            }
            catch (e) {
                dh.loggerManager.logNet(e);
            }
        }
    }


    private async enterRoom(room_info) {
        RoomData.area_number = room_info.area_number;
        RoomData.serverUrl = room_info.serverUrl;
        RoomData.roomId = room_info.roomId;

        dh.netManager.createWscRoom()
    }

    async onBtnCreateRoom() {
        let room_name = `${Account.username}的房间`
        let ret = await dh.netManager.http_match.callApi(`RoomCreate`, { roomName: room_name });
        if (ret.isSucc) {

            // 进入房间
            this.enterRoom(ret.res.room_info);
        }
        else {
            dh.uiManager.toast(`【房间】${ret.err.message}`);
        }
    }

    async onBtnMatch() {
        let room_name = `${Account.username}的房间`
        let ret = await dh.netManager.http_match.callApi("MatchStart", {}, { timeout: 5000 });
        if (ret.isSucc) {

            // 进入房间
            this.enterRoom(ret.res.room_info);
        }
        else {
            dh.uiManager.toast(`【房间】${ret.err.message}`);
        }
    }
}

