import { Color } from "cc";

export const GConst = {
    design_resolution: {
        width: 1280,
        height: 768
    },

    /**弹窗黑色背景的透明度 */
    POPUP_DARK_OPACITY: 255 * 0.8,

    /**预定义颜色 */
    COLOR: {
        BLACK: new Color(0x00, 0x00, 0x00, 0xff),
    }
}

/** 游戏服务器配置 */
export const GameServerConfig = {
    /** 网关服务器地址 */
    // static gate: string = "dgflash.work:8000";
    gate: "127.0.0.1:2000",
    /** 匹配服务器地址（网关服务器返回）*/
    match: "",
    /** 两个心跳数据包之间的间隔时间（单位：毫秒） */
    heartbeat_interval: 5000,
    /** 如果在此期间心跳数据包没有得到回复，连接将被关闭（单位：毫秒） */
    heartbeat_timeout: 5000,
    /** 客户端发送玩家状态信息的频率 */
    player_state_update_rate: 0.066
}

/** 本地数据加密密钥 */
export const LocalDataKeyIV = {
    /** 密钥 */
    key: "klt",
    /** IV */
    iv: "kongl",
}


/** 通用的预制体名 */
export const GPrefab = {
    /** toast飘浮框 */
    toast: "toast",
}