/*
 * @Author: dgflash
 * @Date: 2022-05-05 09:37:49
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:53:58
 */

// const ip:string = "dgflash.work";
const ip: string = "127.0.0.1";

/** 服务器配置 */
export const Config = {
    /** 证书 */
    certificate: 'dgflash.work',                        // nginx
    /** 本地自签名证书调试HTTPS与WSS（本地调试用） */
    localHttpsAndWss: false,
    /** 数据库地址 */
    mongodb: "127.0.0.1:27017",
    /** 网关服务器配置 */
    gate: {
        /** 网关服务器端口 */
        port: process.env['PORT'] || "2000",
        /** 区服配置 */
        area: [
            { name: "艾欧尼亚", server: `${ip}:${process.env['PORT_MATCH1']}` || `${ip}:2100` },
            { name: "诺克萨斯", server: `${ip}:${process.env['PORT_MATCH1']}` || `${ip}:2200` }
        ]
    },
    /** 匹配服务配置 */
    match: {
        /** 匹配服务默认端口 */
        port: process.env['PORT'] || "2100",
        /** 匹配日志输出间隔时间 */
        interval_logger: 5000,
        /** 执行匹配的间隔 */
        match_interval_start: 5000,
    },
    /** 房间服务配置 */
    room: {
        /** 是否打印长连接消息日志 */
        logMsg: false,
        /** 房间服务默认端口 */
        port: process.env['PORT'] || "2201",
        /** 匹配服务服务器 HTTP 地址 */
        match_url_http: process.env['SERVER_URL_MATCH'] || `${ip}:2100`,      // 如果使用强制 HTTPS，这里的IP要修改为证书中的域名
        /** 匹配服务服务器 WebSocket 地址 */
        match_url_ws: process.env['SERVER_URL_ROOM'] || `${ip}`,              // 如果使用强制 WSS，这里的IP要修改为证书中的域名
        /** 发送房间状态与匹配服务器同步数据的间隔时间 */
        update_state_interval: 1000,
        /** 每个房间的最大人数 */
        max_user_num: 10,
        /** 房间空闲时间 */
        empty_time: 3000,
        /** 两个心跳数据包之间的间隔时间（单位：毫秒） */
        heartbeat_interval: 5000,
        /** 如果在此期间心跳数据包没有得到回复，连接将被关闭（单位：毫秒） */
        heartbeat_timeout: 5000,
        /** 房间主动广播其它玩家状态频率（每秒2次） */
        broadcast_player_state_rate: Math.floor(1000 / 2),
    },
    /** 服务器之间通讯 IP 白名单 */
    ips: {
        "localhost": true,
        "127.0.0.1": true,
        "192.168.31.17": true,
        "43.142.65.105": true,
        "dgflash.work": true
    }
}