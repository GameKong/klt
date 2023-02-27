"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = exports.Account = void 0;
const uuid = __importStar(require("uuid"));
const ECS_1 = require("../../core/ecs/ECS");
const Config_1 = require("../config/Config");
const AccountModel_1 = require("./model/AccountModel");
/** 登录令牌过期时间为7天 */
const SSO_VALID_TIME = 86400000 * 7;
/** 帐号管理 */
let Account = class Account extends ECS_1.ecs.Entity {
    init() {
        this.addComponents(AccountModel_1.AccountModelComp);
    }
    /** 创建登录令牌 */
    createSsoToken(uid) {
        let token = uuid.v1();
        let expiredTime = Date.now() + SSO_VALID_TIME; // 过期时间
        // 删除在其它客户端登录的同名用户
        var current = null;
        for (var key in this.AccountModel.ssoTokens) {
            var value = this.AccountModel.ssoTokens[key];
            if (value.key == uid) {
                current = key;
                break;
            }
        }
        if (current) {
            delete this.AccountModel.ssoTokens[current];
        }
        this.AccountModel.ssoTokens[token] = {
            key: uid,
            expiredTime: expiredTime
        };
        return token;
    }
    /** 释放令牌 */
    destroySsoToken(ssoToken) {
        delete this.AccountModel.ssoTokens[ssoToken];
    }
    /** 检查服务器身份 */
    checkAuth(server) {
        server.flows.preApiCallFlow.push(async (call) => {
            let conf = call.service.conf;
            // 执行 API 接口实现之前通过令牌获取当前用户信息
            let req = call.req;
            if (req.__ssoToken) {
                call.user = this.parseSSO(req.__ssoToken);
            }
            // 验证请求客户端地址是否在白名单列表中
            if ((conf === null || conf === void 0 ? void 0 : conf.needCheckAddress) && Config_1.Config.ips[call.conn.ip] == undefined) {
                await call.error('没有访问权限', { code: 'NEED_AUTHORITY' });
                return null;
            }
            // 玩家必须登录才可以访问服务
            else if ((conf === null || conf === void 0 ? void 0 : conf.needLogin) && !call.user) {
                await call.error('登录后获取访问权限', { code: 'NEED_LOGIN' });
                return null;
            }
            return call;
        });
    }
    /** 执行 API 接口实现之前通过令牌获取当前用户信息 */
    parseSSO(ssoToken) {
        let info = this.AccountModel.ssoTokens[ssoToken];
        // 令牌不存在或已过期
        if (!info || info.expiredTime < Date.now()) {
            return undefined;
        }
        // 解析用户信息
        let user = this.AccountModel.users.get(info.key);
        if (!user) {
            return undefined;
        }
        // 延长过期时间
        info.expiredTime = Date.now() + SSO_VALID_TIME;
        return user;
    }
};
Account = __decorate([
    ECS_1.ecs.register(`Account`)
], Account);
exports.Account = Account;
exports.account = ECS_1.ecs.getEntity(Account);
