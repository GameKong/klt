/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-02 00:15:14
 */
import { uint } from "tsrpc-proto";
import { RoomInfo } from "../../types/RoomState";
import { BaseConf, BaseRequest } from "../base";

/** 在线房间列表请求信息 */
export interface ReqRoomList extends BaseRequest {

}

/** 在线房间列表响应信息 */
export interface ResRoomList {
    /** 房间列表 */
    rooms: {
        /** 房间名 */
        name: string,
        /** 当前玩家数量 */
        amount: uint,
        /** 最大玩家数量 */
        max: uint,
        /** 房间基础信息 */
        room_info: RoomInfo
    }[]
}

export const conf: BaseConf = {
    needLogin: true
}