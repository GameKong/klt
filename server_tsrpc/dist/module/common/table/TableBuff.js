"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBuff = void 0;
class TableBuff {
    constructor() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    static load() {
        var fs = require('fs');
        var data = fs.readFileSync(__dirname + this.TableName, 'utf8');
        this.Table = JSON.parse(data);
    }
    init(id) {
        this.data = TableBuff.Table[id];
        this.id = id;
    }
    /** 状态名 */
    get name() {
        return this.data.name;
    }
    /** 效果类型 */
    get isGain() {
        return this.data.isGain;
    }
    /** 可叠加层数上限 */
    get overlying() {
        return this.data.overlying;
    }
    /** 效果持续时间（毫秒） */
    get duration() {
        return this.data.duration;
    }
    /** 间隔触发时间（毫秒） */
    get interval() {
        return this.data.interval;
    }
    /** 间隔触发时间（毫秒） */
    get delay() {
        return this.data.delay;
    }
}
exports.TableBuff = TableBuff;
TableBuff.TableName = "/config/Buff.json";
TableBuff.Table = null;
