"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-07-12 15:29:32
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-12 16:11:48
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const MongoDB_1 = require("../../common/MongoDB");
/** 用户数据表逻辑 */
class User {
    static init() {
        this.c = MongoDB_1.MongoDB.db.collection(MongoDB_1.DbCollectionName.user);
    }
    /**
     * 注册新玩家
     * @param username 玩家名
     * @returns 玩家自增唯一编号
     */
    static addUser(username) {
        return new Promise(async (resolve, reject) => {
            var key = await MongoDB_1.MongoDB.getNextSequenceValue(MongoDB_1.DbCollectionName.user);
            // 插入用户数据
            await this.c.insertOne({
                key,
                username: username,
                createtime: new Date(),
                pos: { x: 0, y: 1.7, z: 0 },
                rotation: { x: 0, y: 0, z: 0, w: 1 } // 初始旋转
            });
            // 返回客户端结果
            resolve(key);
        });
    }
    /**
     * 通过玩家名删除玩家数据
     * @param username  玩家名
     * @returns 是否删除成功
     */
    static delUserByUserName(username) {
        return new Promise(async (resolve, reject) => {
            var ret = await this.c.deleteOne({ username: username });
            if (ret.acknowledged && ret.deletedCount > 0)
                resolve(true);
            else
                resolve(false);
        });
    }
    /**
      * 删除所有玩家数据
      * @returns 是否删除成功
      */
    static delUserByAll() {
        return new Promise(async (resolve, reject) => {
            var ret = await this.c.deleteMany({});
            if (ret.acknowledged && ret.deletedCount > 0)
                resolve(true);
            else
                resolve(false);
        });
    }
    /** 修改玩家状态数据 */
    static updatePlayerState(_id, pos, rotation) {
        return new Promise(async (resolve, reject) => {
            this.c.updateOne({
                _id
            }, {
                $set: {
                    pos,
                    rotation
                }
            }).then(ret => {
                if (ret.acknowledged && ret.modifiedCount > 0)
                    resolve(true);
                else
                    resolve(false);
            });
        });
    }
    /**
     * 通过账号名获取玩家数据
     * @param username  玩家名
     * @returns 玩家数据
     */
    static getUserByUserName(username) {
        return new Promise(async (resolve, reject) => {
            var dUser = await this.c.findOne({ username: username });
            resolve(dUser);
        });
    }
}
exports.User = User;
User.c = null;
