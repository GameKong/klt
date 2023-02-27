"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = exports.DbCollectionName = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-05-05 17:20:19
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-12 18:31:30
 */
const mongodb_1 = require("mongodb");
const Config_1 = require("../config/Config");
/** 数据表名 */
var DbCollectionName;
(function (DbCollectionName) {
    /** 自增量记录表 */
    DbCollectionName["counters"] = "counters";
    /** 用户表 */
    DbCollectionName["user"] = "user";
})(DbCollectionName = exports.DbCollectionName || (exports.DbCollectionName = {}));
class MongoDB {
    /** 实始化 mongodb 数据库 */
    static async init() {
        const url = `mongodb://${Config_1.Config.mongodb}/`;
        const client = await new mongodb_1.MongoClient(url).connect(); // 连接数据库
        this.db = client.db("oops-framework"); // 打开数据库，如果不存在就创建一个
        // 初始化数据表
        for (var name in DbCollectionName) {
            if (!await this.collectionExist(name)) {
                await this.db.createCollection(name);
            }
        }
    }
    /** 数据表是否存在 */
    static collectionExist(name) {
        return this.db.listCollections({ name }).next();
    }
    /**
     * 获取指定数据表的自增量
     * @param name
     * @returns
     */
    static async getNextSequenceValue(name) {
        var conters = this.db.collection(DbCollectionName.counters);
        try {
            let response = await conters.findOneAndUpdate({ key: name }, { $inc: { value: 1 } });
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
exports.MongoDB = MongoDB;
