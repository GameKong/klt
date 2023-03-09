import chalk from "chalk";
import { ApiCall, TsrpcError, WsClient } from "tsrpc";
import { ecs } from "../../../core/ecs/ECS";
import { CommonFactory } from "../../../module/common/CommonFactory";
import { ServerUrlUtils } from "../../../module/common/serverUrlUtils";
import { ReqRoomServerJoin, ResRoomServerJoin } from "../../../shared/protocols/match/admin/PtlRoomServerJoin";
import { ServiceType as ServiceTypeRoom } from "../../../shared/protocols/ServiceProtoRoom";
import { IRoomServer } from "../model/MatchModelComp";
import { ServerMatch } from "../ServerMatch";

/** 匹配服务器添加进入工作状态的房间服务器 */
@ecs.register('MatchServerJoinRoom')
export class MatchServerJoinRoomComp extends ecs.Comp {
    calls: ApiCall<ReqRoomServerJoin, ResRoomServerJoin>[] = [];

    reset(): void {
        this.calls.splice(0, this.calls.length);
    }
}

export class MatchServerJoinRoomSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    filter(): ecs.IMatcher {
        return ecs.allOf(MatchServerJoinRoomComp);
    }

    async entityEnter(e: ServerMatch) {
        let server = e.MatchModel.hsMatch;
        let rooms = e.MatchModel.rooms;
        let calls = e.MatchServerJoinRoom.calls;

        calls.forEach(async call => {
            let area_number = call.req.area_number;

            // 已经注册过
            if (rooms.some(v => v.area_number === area_number)) return;

            let wscRoom = CommonFactory.createWscRoom(area_number, server);

            // 添加房间服务器
            let room_server: IRoomServer = {
                area_number: area_number,
                serverUrl: ServerUrlUtils.getRoomUrlByAreaNumber(area_number),
                client: wscRoom
            }
            rooms.push(room_server);

            // 自定义管线处理
            this.flows(e, wscRoom);

            // 自定义消息处理
            this.msgs(wscRoom, room_server);

            try {
                // 连接房间服务器网络
                let op = await wscRoom.connect();
                if (!op.isSucc) {
                    throw new TsrpcError(op.errMsg);
                }

                // 通知房间服务器授权成功
                let opAuth = await wscRoom.callApi('admin/Auth', {
                    type: 'MatchServer'
                });

                // 授权失败立即断开
                if (!opAuth.isSucc) {
                    wscRoom.disconnect();
                    throw opAuth.err;
                }
            }
            catch (e: unknown) {
                // 房间服务器列表中删除
                rooms.remove(v => v.area_number === area_number);
                throw e;
            }

            server.logger.log(chalk.green(`房间服务器 ${area_number} 已加入, 当前房间服务器数量 = ${rooms.length}`));

            call.succ({});
        });

        e.remove(MatchServerJoinRoomComp);
    }

    /** 自定义管线 */
    private flows(e: ServerMatch, wsc: WsClient<ServiceTypeRoom>) {
        // 管线：客户端断开连接后 - 房间服务器列表中移除断开的房间服务器
        wsc.flows.postDisconnectFlow.push(v => {
            // 客户端断开时，更新对应房间状态
            e.MatchModel.rooms.remove(iRoomServer => {
                if (iRoomServer.client === wsc) {
                    if (v.isManual) {
                        e.MatchModel.hsMatch.logger.log(chalk.red(`房间服务器[${iRoomServer.area_number}] 主动断开`));
                    }
                    else {
                        e.MatchModel.hsMatch.logger.log(chalk.red(`房间服务器[${iRoomServer.area_number}] 异常断开`));
                    }
                    return true;
                }
                return false;
            });
            return v;
        });
    }

    /** 监听房间服务器消息 */
    private msgs(wscRoom: WsClient<ServiceTypeRoom>, room_server: IRoomServer) {
        // 监听消息：更新房间状态
        wscRoom.listenMsg(`admin/RoomUpdateState`, msg => {
            room_server.state = msg;
        });
    }
}