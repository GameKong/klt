"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitPosType = void 0;
/** 受击特效位置类型 */
var HitPosType;
(function (HitPosType) {
    /** 头顶位置（后续有需求在扩展） */
    HitPosType[HitPosType["Head"] = 0] = "Head";
    /** 腰部位置(通过在角色模型身上定位posEffect节点的位置) */
    HitPosType[HitPosType["Waist"] = 1] = "Waist";
    /** 脚底位置(角色模型默认中心点为脚下) */
    HitPosType[HitPosType["Foot"] = 2] = "Foot";
})(HitPosType = exports.HitPosType || (exports.HitPosType = {}));
