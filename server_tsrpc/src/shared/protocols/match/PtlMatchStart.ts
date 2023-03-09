import { RoomInfo } from "../../types/RoomState";
import { BaseConf, BaseRequest, BaseResponse } from "../base";

/** 开始匹配请求信息 */
export interface ReqMatchStart extends BaseRequest {

}

/** 开始匹配响应信息 */
export interface ResMatchStart extends BaseResponse {
    room_info: RoomInfo
}

export const conf: BaseConf = {
    needLogin: true
}