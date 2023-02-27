"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareConfig = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-06-29 16:39:42
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-14 10:57:00
 */
class ShareConfig {
}
exports.ShareConfig = ShareConfig;
/** 强制HTTPS */
ShareConfig.https = false;
/** 传输协议是否使用加密功能 */
ShareConfig.security = true;
/** 是否用JSON协议，否则用二进制 */
ShareConfig.json = false;
