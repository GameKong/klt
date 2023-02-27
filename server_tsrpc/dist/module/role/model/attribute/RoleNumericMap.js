"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleNumericMap = exports.RoleNumericDecorator = void 0;
const RoleNumeric_1 = require("./RoleNumeric");
/** 角色数值装饰器 */
class RoleNumericDecorator {
    constructor() {
        /** 属性类型 */
        this.attribute = null;
        /** 属性数值 */
        this.value = 0;
    }
}
exports.RoleNumericDecorator = RoleNumericDecorator;
/** 所有模块角色属性集合 */
class RoleNumericMap {
    constructor() {
        /** 属性值状态 */
        this.states = {};
        /** 角色属性 */
        this.attributes = new Map();
        /** 角色属性修饰器 */
        this.decorators = new Map();
    }
    /** 添加属性修饰器 */
    addDecorator(rnd) {
        this.decorators.set(rnd, rnd.value);
        var rn = this.get(rnd.attribute);
        rn.decorator += rnd.value;
    }
    /** 移除属性修饰器 */
    removeDecorator(rnd) {
        this.decorators.delete(rnd);
        var rn = this.get(rnd.attribute);
        rn.decorator -= rnd.value;
    }
    /** 获取角色属性 */
    get(type) {
        var attr = this.attributes.get(type);
        if (attr == null) {
            switch (type) {
                default:
                    attr = new RoleNumeric_1.RoleNumeric(type, this);
                    break;
            }
            this.attributes.set(type, attr);
        }
        return attr;
    }
    forEach(callbackfn, thisArg) {
        this.attributes.forEach(callbackfn, thisArg);
    }
    /** 重置属性值为零 */
    reset() {
        this.decorators.clear();
        this.attributes.forEach((value, key, map) => {
            value.reset();
        });
    }
}
exports.RoleNumericMap = RoleNumericMap;
/** 体质属性 */
// export class RoleNumericPhysical extends RoleNumeric {
//     protected update(): void {
//         super.update();
//         // 每点体质 = 0.5 生命
//         this.attributes.get(RoleAttributeType.hp).base = Math.floor(this.value * 0.5);
//     }
// }
