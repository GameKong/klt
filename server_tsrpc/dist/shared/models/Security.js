"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-06-28 15:07:08
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-29 16:41:07
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Security = void 0;
/** 数据传输加密 */
class Security {
    /** 加密 */
    static encrypt(buf) {
        for (let i = 0; i < buf.length; ++i) {
            buf[i] -= 1;
        }
        return buf;
    }
    /** 解密 */
    static decrypt(buf) {
        for (let i = 0; i < buf.length; ++i) {
            buf[i] += 1;
        }
        return buf;
    }
}
exports.Security = Security;
