/*
 * @Author: dgflash
 * @Date: 2022-06-23 11:12:43
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-12 15:13:41
 */
import { ApiCall } from "tsrpc";
import { User } from "../../../module/account/bll/User";
import { ErrorCode } from "../../../shared/models/errorCode";
import { ReqRegister, ResRegister } from "../../../shared/protocols/gate/PtlRegister";

/** 用户注册 */
export async function ApiRegister(call: ApiCall<ReqRegister, ResRegister>) {
    if (call.req.username.length == 0 || call.req.password.length == 0) {
        call.error("", { code: ErrorCode.UserName_NoNull });
        return;
    }

    // 创建用户表自增量唯一表示
    var query = await User.getUserByUserName(call.req.username);
    if (query == null) {
        // 插入用户数据
        var key = await User.addUser(call.req.username, call.req.password);

        // 返回客户端结果
        call.succ({ key });
    }
    else {
        call.error("", { code: ErrorCode.UserName_Exist });
    }
}