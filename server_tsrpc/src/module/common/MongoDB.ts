/*
 * @Author: dgflash
 * @Date: 2022-05-05 17:20:19
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-12 18:31:30
 */
import { Db, MongoClient } from "mongodb";
import { Config } from "../config/Config";

/** 数据表名 */
export enum DbCollectionName {
    /** 自增量记录表 */
    counters = "counters",
    /** 用户表 */
    user = "user",
}

export class MongoDB {
    static db: Db;

    /** 实始化 mongodb 数据库 */
    static async init() {
        const url = `mongodb://${Config.mongodb}/`;
        const client = await new MongoClient(url).connect();        // 连接数据库
        this.db = client.db("oops-framework");                      // 打开数据库，如果不存在就创建一个

        // 初始化数据表
        for (var name in DbCollectionName) {
            if (!await this.collectionExist(name)) {
                await this.db.createCollection(name);
            }
        }
    }

    /** 数据表是否存在 */
    static collectionExist(name: string) {
        return this.db.listCollections({ name }).next();
    }

    /**
     * 获取指定数据表的自增量
     * @param name 
     * @returns 
     */
    static async getNextSequenceValue(name: string): Promise<number> {
        var conters = this.db.collection(DbCollectionName.counters);

        try {
            let response = await conters.findOneAndUpdate(
                { key: name },
                { $inc: { value: 1 } }
            )
            if (response.value == null) {
                await conters.insertOne({
                    key: name,
                    value: 1
                });

                let result = await this.getNextSequenceValue(name);
                return result;
            }
            else {
                return response.value.value;
            }
        }
        catch (err) {
            throw err;
        }
    }
}