/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-02 00:15:18
 */

import { BaseConf } from "../../base";

/** 加入房间服务器进入工作状态请求数据 */
export interface ReqRoomServerJoin {
    /** 加入的房间服务器区号 */
    area_number: number
}

/** 加入房间服务器进入工作状态响应数据 */
export interface ResRoomServerJoin {

}

export const conf: BaseConf = {
    needCheckAddress: true
}