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
    InValidServer: -1
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