import { uint } from "tsrpc-proto";
import { RoomInfo } from "../../types/RoomState";
import { BaseConf, BaseRequest } from "../base";

/** 在线房间列表请求信息 */
export interface ReqTest extends BaseRequest {

}

/** 在线房间列表响应信息 */
export interface ResTest {

}

export const conf: BaseConf = {
    needLogin: true
}