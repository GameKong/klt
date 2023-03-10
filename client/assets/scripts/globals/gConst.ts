import { Color } from "cc";

export const GConst = {
    design_resolution: {
        width: 1280,
        height: 768
    },

    /**弹窗黑色背景的透明度 */
    POPUP_DARK_OPACITY: 255 * 0.8,

    /**预定义颜色 */
    COLOR: {
        BLACK: new Color(0x00, 0x00, 0x00, 0xff),
    },

    /** 无效服务器 */
    InValidServer: -1,

    /** ecs系统执行间隔时间 */
    EcsExcuteTime: 1000
}

/** 本地数据加密密钥 */
export const LocalDataKeyIV = {
    /** 密钥 */
    key: "klt",
    /** IV */
    iv: "kongl",
}


/** 通用的预制体名 */
export const GPrefab = {
    /** toast飘浮框 */
    toast: "prefabs/toast",
}

/** 角色属性类型 */
export enum RoleAttributeType {
    /** 当前生命值 */
    hp = "hp",
    /** 生命最大值 */
    hpMax = "hpMax",
    /** 移动速度 */
    speed = "speed",
    /** 攻击力 */
    ad = "ad",
    /** 魔力 */
    ap = "ap"
}

/** 角色阵营类型 */
export enum RoleCampType {
    /** 友军 */
    Friendly = 0,
    /** 敌军 */
    Enemy = 1
}