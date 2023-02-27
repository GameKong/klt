"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECSModel = void 0;
const ECSGroup_1 = require("./ECSGroup");
/** ECS框架内部数据 */
class ECSModel {
    /**
     * 创建group，每个group只关心对应组件的添加和删除
     * @param matcher 实体筛选器
     */
    static createGroup(matcher) {
        let group = ECSModel.groups.get(matcher.mid);
        if (!group) {
            group = new ECSGroup_1.ECSGroup(matcher);
            ECSModel.groups.set(matcher.mid, group);
            let careComponentTypeIds = matcher.indices;
            for (let i = 0; i < careComponentTypeIds.length; i++) {
                ECSModel.compAddOrRemove.get(careComponentTypeIds[i]).push(group.onComponentAddOrRemove.bind(group));
            }
        }
        return group;
    }
}
exports.ECSModel = ECSModel;
/** 实体自增id */
ECSModel.eid = 1;
/** 实体造函数 */
ECSModel.entityCtors = new Map();
/** 实体对象缓存池 */
ECSModel.entityPool = new Map();
/** 通过实体id查找实体对象 */
ECSModel.eid2Entity = new Map();
/** 组件类型id */
ECSModel.compTid = 0;
/** 组件缓存池 */
ECSModel.compPools = new Map();
/** 组件构造函数 */
ECSModel.compCtors = [];
/**
 * 每个组件的添加和删除的动作都要派送到“关心”它们的group上。goup对当前拥有或者之前（删除前）拥有该组件的实体进行组件规则判断。判断该实体是否满足group
 * 所期望的组件组合。
 */
ECSModel.compAddOrRemove = new Map();
/** 编号获取组件 */
ECSModel.tid2comp = new Map();
/**
 * 缓存的group
 *
 * key是组件的筛选规则，一个筛选规则对应一个group
 */
ECSModel.groups = new Map();
