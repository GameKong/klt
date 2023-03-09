/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-01 16:17:19
 */

import { RoomInfo } from "../../types/RoomState";
import { BaseConf, BaseRequest, BaseResponse } from "../base";

/** 创建房间请求信息 */
export interface ReqRoomCreate extends BaseRequest {
    /** 房间名 */
    roomName: string
}

/** 创建房间响应信息 */
export interface ResRoomCreate extends BaseResponse {
    room_info: RoomInfo
}

export const conf: BaseConf = {
    needLogin: true
}