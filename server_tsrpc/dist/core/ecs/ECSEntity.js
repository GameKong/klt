"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECSEntity = void 0;
const ECSMask_1 = require("./ECSMask");
const ECSModel_1 = require("./ECSModel");
//#region 辅助方法
/**
 * 实体身上组件有增删操作，广播通知对应的观察者
 * @param entity 实体对象
 * @param componentTypeId 组件类型id
 */
function broadcastCompAddOrRemove(entity, componentTypeId) {
    let events = ECSModel_1.ECSModel.compAddOrRemove.get(componentTypeId);
    for (let i = events.length - 1; i >= 0; i--) {
        events[i](entity);
    }
    // 判断是不是删了单例组件
    if (ECSModel_1.ECSModel.tid2comp.has(componentTypeId)) {
        ECSModel_1.ECSModel.tid2comp.delete(componentTypeId);
    }
}
/**
 * 创建组件对象
 * @param ctor
 */
function createComp(ctor) {
    var cct = ECSModel_1.ECSModel.compCtors[ctor.tid];
    if (!cct) {
        throw Error(`没有找到该组件的构造函数，检查${ctor.compName}是否为不可构造的组件`);
    }
    let comps = ECSModel_1.ECSModel.compPools.get(ctor.tid);
    let component = comps.pop() || new cct;
    return component;
}
/**
 * 销毁实体
 *
 * 缓存销毁的实体，下次新建实体时会优先从缓存中拿。
 * @param entity
 */
function destroyEntity(entity) {
    if (ECSModel_1.ECSModel.eid2Entity.has(entity.eid)) {
        var entitys = ECSModel_1.ECSModel.entityPool.get(entity.name);
        if (entitys == null) {
            entitys = [];
            ECSModel_1.ECSModel.entityPool.set(entity.name, entitys);
        }
        entitys.push(entity);
        ECSModel_1.ECSModel.eid2Entity.delete(entity.eid);
    }
    else {
        console.warn('试图销毁不存在的实体');
    }
}
//#endregion
/** ECS实体对象 */
class ECSEntity {
    constructor() {
        /** 实体唯一标识，不要手动修改 */
        this.eid = -1;
        /** 实体对象名 */
        this.name = "";
        /** 组件过滤数据 */
        this.mask = new ECSMask_1.ECSMask();
        /** 当前实体身上附加的组件构造函数 */
        this.compTid2Ctor = new Map();
        /** 配合 entity.remove(Comp, false)， 记录组件实例上的缓存数据，在添加时恢复原数据 */
        this.compTid2Obj = new Map();
        this._parent = null;
        this._children = null;
    }
    /** 父实体 */
    get parent() {
        return this._parent;
    }
    /** 子实体集合 */
    get children() {
        if (this._children == null) {
            this._children = new Map();
        }
        return this._children;
    }
    /**
     * 添加子实体
     * @param entity 被添加的实体对象
     */
    addChild(entity) {
        entity._parent = this;
        this.children.set(entity.eid, entity);
    }
    /**
     * 移除子实体
     * @param entity 被移除的实体对象
     * @returns
     */
    removeChild(entity) {
        if (this.children == null)
            return;
        this.children.delete(entity.eid);
        if (this.children.size == 0) {
            this._children = null;
        }
    }
    add(ctor, isReAdd = false) {
        if (typeof ctor === 'function') {
            let compTid = ctor.tid;
            if (ctor.tid === -1) {
                throw Error('组件未注册！');
            }
            if (this.compTid2Ctor.has(compTid)) { // 判断是否有该组件，如果有则先移除
                if (isReAdd) {
                    this.remove(ctor);
                }
                else {
                    console.log(`已经存在组件：${ctor.compName}`);
                    // @ts-ignore
                    return this[ctor.compName];
                }
            }
            this.mask.set(compTid);
            let comp;
            if (this.compTid2Obj.has(compTid)) {
                comp = this.compTid2Obj.get(compTid);
                this.compTid2Obj.delete(compTid);
            }
            else {
                // 创建组件对象
                comp = createComp(ctor);
            }
            // 将组件对象直接附加到实体对象身上，方便直接获取
            // @ts-ignore
            this[ctor.compName] = comp;
            this.compTid2Ctor.set(compTid, ctor);
            comp.ent = this;
            // 广播实体添加组件的消息
            broadcastCompAddOrRemove(this, compTid);
            return comp;
        }
        else {
            let tmpCtor = ctor.constructor;
            let compTid = tmpCtor.tid;
            // console.assert(compTid !== -1 || !compTid, '组件未注册！');
            // console.assert(this.compTid2Ctor.has(compTid), '已存在该组件！');
            if (compTid === -1 || compTid == null) {
                throw Error('组件未注册');
            }
            if (this.compTid2Ctor.has(compTid)) {
                throw Error('已经存在该组件');
            }
            this.mask.set(compTid);
            //@ts-ignore
            this[tmpCtor.compName] = ctor;
            this.compTid2Ctor.set(compTid, tmpCtor);
            //@ts-ignore
            ctor.ent = this;
            //@ts-ignore
            ctor.canRecycle = false;
            broadcastCompAddOrRemove(this, compTid);
            return this;
        }
    }
    /**
     * 批量添加组件
     * @param ctors 组件类
     * @returns
     */
    addComponents(...ctors) {
        for (let ctor of ctors) {
            this.add(ctor);
        }
        return this;
    }
    get(ctor) {
        // @ts-ignore
        return this[ctor.compName];
    }
    /**
     * 组件是否在实体存在内
     * @param ctor 组件类
     */
    has(ctor) {
        if (typeof ctor == "number") {
            return this.mask.has(ctor);
        }
        else {
            return this.compTid2Ctor.has(ctor.tid);
        }
    }
    /**
     * 从实体上删除指定组件
     * @param ctor      组件构造函数或者组件Tag
     * @param isRecycle 是否回收该组件对象。对于有些组件上有大量数据，当要描述移除组件但是不想清除组件上的数据是可以
     * 设置该参数为false，这样该组件对象会缓存在实体身上，下次重新添加组件时会将该组件对象添加回来，不会重新从组件缓存
     * 池中拿一个组件来用。
     */
    remove(ctor, isRecycle = true) {
        let hasComp = false;
        //@ts-ignore
        let componentTypeId = ctor.tid;
        //@ts-ignore
        let compName = ctor.compName;
        if (this.mask.has(componentTypeId)) {
            hasComp = true;
            //@ts-ignore
            let comp = this[ctor.compName];
            //@ts-ignore
            comp.ent = null;
            if (isRecycle) {
                comp.reset();
                if (comp.canRecycle) {
                    ECSModel_1.ECSModel.compPools.get(componentTypeId).push(comp);
                }
            }
            else {
                this.compTid2Obj.set(componentTypeId, comp);
            }
        }
        if (hasComp) {
            //@ts-ignore
            this[compName] = null;
            this.mask.delete(componentTypeId);
            this.compTid2Ctor.delete(componentTypeId);
            broadcastCompAddOrRemove(this, componentTypeId);
        }
    }
    _remove(comp) {
        this.remove(comp, false);
    }
    /** 销毁实体，实体会被回收到实体缓存池中 */
    destroy() {
        if (this._children) {
            this._children.forEach(e => {
                e.destroy();
            });
        }
        this.compTid2Ctor.forEach(this._remove, this);
        destroyEntity(this);
        this.compTid2Obj.clear();
    }
}
exports.ECSEntity = ECSEntity;
