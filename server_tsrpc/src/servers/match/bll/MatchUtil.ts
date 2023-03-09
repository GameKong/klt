/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-01 14:34:26
 */
import { ApiReturn, TsrpcError } from "tsrpc";
import { sm } from "../../../serverMatchEntry";
import { ResRoomCreate } from "../../../shared/protocols/match/PtlRoomCreate";

export class MatchUtil {
    /** 创建房间 */
    static async createRoom(roomName: string): Promise<ApiReturn<ResRoomCreate>> {
        var rooms = sm.MatchModel.rooms;

        // 挑选一个人数最少的房间服务器
        let roomServer = rooms.filter(v => v.state).orderBy(v => v.state!.rooms.length)[0];
        if (!roomServer) {
            return { isSucc: false, err: new TsrpcError('没有可用的房间服务器') };
        }

        // RPC -> ServerRoom
        let ret = await roomServer.client.callApi(`admin/RoomCreate`, {
            roomName: roomName
        });

        if (!ret.isSucc) {
            return { isSucc: false, err: new TsrpcError(ret.err) };
        }

        return {
            isSucc: true,
            res: {
                room_info: {
                    roomId: ret.res.roomId,
                    area_number: roomServer.area_number,
                    serverUrl: roomServer.serverUrl,
                }
            }
        }
    }
}