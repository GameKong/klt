"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:40
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-20 10:29:07
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtil = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ShareConfig_1 = require("../../shared/models/ShareConfig");
const Config_1 = require("../config/Config");
/** 服务器工具 */
class CommonUtil {
    /** ECS 实始化 */
    static init(sys) {
        sys.init();
        var ms = 1 / 60;
        setInterval(() => {
            sys.execute(ms);
        }, ms);
    }
    /** 获取证书 */
    static getCertificate() {
        if (ShareConfig_1.ShareConfig.https) {
            return {
                key: fs_1.default.readFileSync(path_1.default.resolve(__dirname, `../../${Config_1.Config.certificate}.key`)),
                cert: fs_1.default.readFileSync(path_1.default.resolve(__dirname, `../../${Config_1.Config.certificate}.crt`))
            };
        }
        return undefined;
    }
}
exports.CommonUtil = CommonUtil;
