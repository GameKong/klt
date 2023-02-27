"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECSComp = void 0;
/**
 * 组件抽象类
 * 注：建议组件里面只放数据可能在实际写代码会碰到一些比较麻烦的问题，如果是单纯对组件内的数据操作可以在组件里面写方法
 */
class ECSComp {
    constructor() {
        /**
         * 是否可回收组件对象，默认情况下都是可回收的
         * 注：如果该组件对象是由ecs系统外部创建的，则不可回收，需要用户自己手动进行回收
         */
        this.canRecycle = true;
    }
}
exports.ECSComp = ECSComp;
/** 组件的类型编号，-1表示未给该组件分配编号 */
ECSComp.tid = -1;
