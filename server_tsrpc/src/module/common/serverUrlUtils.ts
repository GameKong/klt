/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:29:07
 */

import fs from 'fs';
import { Collection, ObjectId, OptionalId, WithId } from 'mongodb';
import path from "path";
import { ecs } from "../../core/ecs/ECS";
import { DbUrl } from '../../shared/models/dbUrl';
import { ShareConfig } from '../../shared/models/ShareConfig';
import { Config } from "../config/Config";
import { DbCollectionName, MongoDB } from './MongoDB';

/** 服务区URL数据结构 */
export interface DbServerUrl {
    _id: ObjectId,
    /** 网关服 */
    gate: DbUrl,
    /** 匹配服 */
    match: DbUrl[];
    /** 房间服 */
    room: DbUrl[];
}

/** 服务器URL工具 */
export class ServerUrlUtils {
    private static c: Collection<OptionalId<DbServerUrl>> = null!;
    private static db_server_url: WithId<OptionalId<DbServerUrl>>;
    static async init() {
        this.c = MongoDB.db.collection(DbCollectionName.servers);
        this.db_server_url = (await this.c.findOne())!;
    }

    /**
     * 获取网关服信息
     */
    static getGateUrlInfo(): DbUrl {
        return this.db_server_url.gate;
    }

    /**
     * 获取[匹配服]服信息
     */
    static getMatchUrlInfo(): DbUrl[] {
        return this.db_server_url.match;
    }

    /**
     * 获取[房间服]服信息
     */
    static getRoomUrlInfo(): DbUrl[] {
        return this.db_server_url.room;
    }

    /**
     * 获取[房间服]服信息
     */
    static getRoomUrlByAreaNumber(area_number: number): string {
        let dbUrlInfo = ServerUrlUtils.getRoomUrlInfo()
        let url = `${ShareConfig.https ? "wss" : "ws"}://${dbUrlInfo[area_number].url}:${dbUrlInfo[area_number].port}/`;
        return url;
    }
}