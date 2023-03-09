import { ApiCall } from "tsrpc";
import { sm } from "../../../../serverMatchEntry";
import { ReqRoomServerJoin, ResRoomServerJoin } from "../../../../shared/protocols/match/admin/PtlRoomServerJoin";

/** 加入房间服务器进入工作状态 */
export async function ApiRoomServerJoin(call: ApiCall<ReqRoomServerJoin, ResRoomServerJoin>) {
    sm.joinRoomServer(call);
}