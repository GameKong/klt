/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-14 15:28:46
 */
import { ApiCall } from "tsrpc";
import { sm } from "../../../serverMatchEntry";
import { ReqRoomList, ResRoomList } from "../../../shared/protocols/match/PtlRoomList";

/** 获取房间服务器列表 */
export async function ApiRoomList(call: ApiCall<ReqRoomList, ResRoomList>) {
    // 获取所有房间服务器的房间组数组
    let rooms = sm.MatchModel.rooms.reduce((prev, next) => {
        if (next.state) {
            // 组装房间服务器中的房间数据
            prev = prev.concat(next.state.rooms.map(v => ({
                name: v.name,
                amount: v.amount,
                max: v.max,
                room_info: {
                    area_number: next.area_number,
                    serverUrl: next.serverUrl,
                    roomId: v.id,
                },
                updateTime: v.timeUpdate
            })))
        }

        return prev;
    }, [] as (ResRoomList['rooms'][0] & { updateTime: number })[]);

    // 返回最近更新状态的100条房间信息
    call.succ({ rooms: rooms.orderByDesc(v => v.updateTime).filter(v => v.amount > 0).slice(0, 100) });
}