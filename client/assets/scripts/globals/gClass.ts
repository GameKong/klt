/** 游戏服务器配置 */
export class GameServerConfig{
    /** 网关服务器地址 */
    // static gate: string = "dgflash.work:8000";
    static gate = "127.0.0.1:2000"
    /** 匹配服务器地址（网关服务器返回）*/
    static match_url = ""
    /** 两个心跳数据包之间的间隔时间（单位：毫秒） */
    static heartbeat_interval =  5000
    /** 如果在此期间心跳数据包没有得到回复，连接将被关闭（单位：毫秒） */
    static heartbeat_timeout =  5000
    /** 客户端发送玩家状态信息的频率 */
    static player_state_update_rate =  0.066
}
