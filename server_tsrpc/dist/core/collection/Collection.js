"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-05-16 15:31:57
 * @LastEditors: dgflash
 * @LastEditTime: 2022-05-16 16:06:20
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
/**
 * 集合对象
 * 1、Map与Array集合体
 */
class Collection extends Map {
    constructor() {
        super(...arguments);
        this._array = [];
    }
    get array() {
        return this._array;
    }
    set(key, value) {
        if (!this.has(key)) {
            this._array.push(value);
        }
        return super.set(key, value);
    }
    delete(key) {
        var value = this.get(key);
        if (value) {
            this._array.removeOne(v => v === value);
            return super.delete(key);
        }
        return false;
    }
}
exports.Collection = Collection;
