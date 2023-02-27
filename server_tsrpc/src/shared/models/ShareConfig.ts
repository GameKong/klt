/*
 * @Author: dgflash
 * @Date: 2022-06-29 16:39:42
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-14 10:57:00
 */
export class ShareConfig {
    /** 强制HTTPS */
    static https: boolean = false;
    /** 传输协议是否使用加密功能 */
    static security: boolean = true;
    /** 是否用JSON协议，否则用二进制 */
    static json: boolean = false;
}