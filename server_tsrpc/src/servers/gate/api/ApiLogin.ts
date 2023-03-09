/*
 * @Author: dgflash
 * @Date: 2022-06-23 09:38:35
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-06 17:02:12
 */
import { ApiCall } from "tsrpc";
import { User } from "../../../module/account/bll/User";
import { CommonFactory } from "../../../module/common/CommonFactory";
import { sg } from "../../../serverGateEntry";
import { ErrorCode } from "../../../shared/models/errorCode";
import { ReqLogin, ResLogin } from "../../../shared/protocols/gate/PtlLogin";

/** 玩家登录处理 */
export async function ApiLogin(call: ApiCall<ReqLogin, ResLogin>) {
    var dUser = await User.getUserByUserName(call.req.username);
    if (dUser) {
        if (call.req.password != dUser.password) {
            call.error("", { code: ErrorCode.Password_Wrong });
            return
        }

        var match = sg.GateModel.hcMatch.get(call.req.area_number);
        if (match == null) {
            match = CommonFactory.createHcMatch(call.req.area_number);
            sg.GateModel.hcMatch.set(call.req.area_number, match);
        }

        var ret = await match.callApi(`admin/Logined`, {
            user: dUser
        });

        if (ret.isSucc) {
            call.succ({
                __ssoToken: ret.res.__ssoToken,
                key: dUser.key
            });
        }
        else {
            call.error(ret.err.message, { code: ret.err.code });
        }
    }
    else {
        call.error("", { code: ErrorCode.Login_No_UserName });
    }
}