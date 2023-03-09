import { ErrorCode } from "../shared/models/errorCode";

/** 错误提示 */
export const GErrorCodeTip = {
    /** 登陆用户不存在 */
    [ErrorCode.Login_No_UserName]: "登陆用户不存在, 请先注册账号",
    [ErrorCode.Password_Wrong]: "密码错误",
    [ErrorCode.UserName_NoNull]: "用户名或密码不能为空",
    [ErrorCode.UserName_Exist]: "该账号已存在",
    
}

