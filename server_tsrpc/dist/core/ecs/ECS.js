"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecs = void 0;
const ECSComp_1 = require("./ECSComp");
const ECSEntity_1 = require("./ECSEntity");
const ECSMatcher_1 = require("./ECSMatcher");
const ECSModel_1 = require("./ECSModel");
const ECSSystem_1 = require("./ECSSystem");
/** Entity-Component-System（实体-组件-系统）框架 */
var ecs;
(function (ecs) {
    /** 实体 - 一个概念上的定义，指的是游戏世界中的一个独特物体，是一系列组件的集合 */
    ecs.Entity = ECSEntity_1.ECSEntity;
    /** 组件 - 一堆数据的集合，即不存在任何的行为，只用来存储状态 */
    ecs.Comp = ECSComp_1.ECSComp;
    /** 系统 - 关注实体上组件数据变化，处理游戏逻辑 */
    ecs.System = ECSSystem_1.ECSSystem;
    /** 根系统 - 驱动游戏中所有系统工作 */
    ecs.RootSystem = ECSSystem_1.ECSRootSystem;
    /** 处理游戏逻辑系统对象 - 继承此对象实现自定义业务逻辑 */
    ecs.ComblockSystem = ECSSystem_1.ECSComblockSystem;
    //#endregion
    /**
     * 注册组件到ecs系统中
     * @param name   由于js打包会改变类名，所以这里必须手动传入组件的名称
     * @param canNew 标识是否可以new对象。想继承自Cocos Creator的组件就不能去new，需要写成@ecs.register('name', false)
     * @example
    // 注册实体
    @ecs.register('Role')
    export class Role extends ecs.Entity {

    }

    // 注册数据组件
    @ecs.register('RoleModel')
    export class RoleModelComp extends ecs.Comp {
        id: number = -1;

        reset() {
            this.id =  -1;
        }
    }

    // 注册显示对象组件
    @ccclass('RoleViewComp')
    @ecs.register('RoleView', false)
    export class RoleViewComp extends CCComp {
        @property({ type: sp.Skeleton, tooltip: '角色动画' })
        spine: sp.Skeleton = null!;

        onLoad(){
            
        }
    }
     */
    function register(name, canNew = true) {
        return function (ctor) {
            // 注册实体
            if (ctor.tid == undefined) {
                ECSModel_1.ECSModel.entityCtors.set(ctor, name);
            }
            // 注册组件
            else {
                if (ctor.tid === -1) {
                    ctor.tid = ECSModel_1.ECSModel.compTid++;
                    ctor.compName = name;
                    if (canNew) {
                        ECSModel_1.ECSModel.compCtors.push(ctor);
                        ECSModel_1.ECSModel.compPools.set(ctor.tid, []);
                    }
                    else {
                        ECSModel_1.ECSModel.compCtors.push(null);
                    }
                    ECSModel_1.ECSModel.compAddOrRemove.set(ctor.tid, []);
                }
                else {
                    throw new Error(`重复注册组件： ${name}.`);
                }
            }
        };
    }
    ecs.register = register;
    /**
     * 创建一个新的实体对象或从缓存中获取一个实体对象
     * @param ctor 实体类
     */
    function getEntity(ctor) {
        // 获取实体对象名
        var entityName = ECSModel_1.ECSModel.entityCtors.get(ctor);
        if (entityName == undefined)
            console.error(`${ctor.name} 实体没有注册`);
        // 获取实体对象池
        var entitys = ECSModel_1.ECSModel.entityPool.get(entityName) || [];
        var entity = entitys.pop();
        // 缓存中没有同类实体，则创建一个新的
        if (!entity) {
            entity = new ctor();
            entity.eid = ECSModel_1.ECSModel.eid++; // 实体唯一编号
            entity.name = entityName;
        }
        // 触发实体初始化逻辑
        if (entity.init)
            entity.init();
        else
            console.error(`${ctor.name} 实体缺少 init 方法初始化默认组件`);
        ECSModel_1.ECSModel.eid2Entity.set(entity.eid, entity);
        return entity;
    }
    ecs.getEntity = getEntity;
    /**
     * 动态查询实体
     * @param matcher 匹配器
     * @example
     * ecs.query(ecs.allOf(Comp1, Comp2));
     */
    function query(matcher) {
        let group = ECSModel_1.ECSModel.groups.get(matcher.mid);
        if (!group) {
            group = ECSModel_1.ECSModel.createGroup(matcher);
            ECSModel_1.ECSModel.eid2Entity.forEach(group.onComponentAddOrRemove, group);
        }
        return group.matchEntities;
    }
    ecs.query = query;
    /** 清理所有的实体 */
    function clear() {
        ECSModel_1.ECSModel.eid2Entity.forEach((entity) => {
            entity.destroy();
        });
        ECSModel_1.ECSModel.groups.forEach((group) => {
            group.clear();
        });
        ECSModel_1.ECSModel.compAddOrRemove.forEach(callbackLst => {
            callbackLst.length = 0;
        });
        ECSModel_1.ECSModel.eid2Entity.clear();
        ECSModel_1.ECSModel.groups.clear();
    }
    ecs.clear = clear;
    /**
     * 通过实体唯一编号获得实体对象
     * @param eid 实体唯一编号
     */
    function getEntityByEid(eid) {
        return ECSModel_1.ECSModel.eid2Entity.get(eid);
    }
    ecs.getEntityByEid = getEntityByEid;
    /** 当前活动中的实体数量 */
    function activeEntityCount() {
        return ECSModel_1.ECSModel.eid2Entity.size;
    }
    ecs.activeEntityCount = activeEntityCount;
    /** 创建实体 */
    function createEntity() {
        let entity = new ecs.Entity();
        entity.eid = ECSModel_1.ECSModel.eid++; // 实体id也是有限的资源
        ECSModel_1.ECSModel.eid2Entity.set(entity.eid, entity);
        return entity;
    }
    /**
     * 指定一个组件创建实体，返回组件对象。
     * @param ctor
     */
    function createEntityWithComp(ctor) {
        let entity = createEntity();
        return entity.add(ctor);
    }
    //#region 过滤器
    /**
     * 表示只关心这些组件的添加和删除动作。虽然实体可能有这些组件之外的组件，但是它们的添加和删除没有被关注，所以不会存在对关注之外的组件
     * 进行添加操作引发Group重复添加实体。
     * @param args
     * @example
     * ecs.allOf(AComponent, BComponent, CComponent);
     */
    function allOf(...args) {
        return new ECSMatcher_1.ECSMatcher().allOf(...args);
    }
    ecs.allOf = allOf;
    /**
     * 组件间是或的关系，表示关注拥有任意一个这些组件的实体
     * @param args  组件类
     * @example
     * ecs.anyOf(AComponent, BComponent);
     */
    function anyOf(...args) {
        return new ECSMatcher_1.ECSMatcher().anyOf(...args);
    }
    ecs.anyOf = anyOf;
    /**
     * 表示关注只拥有这些组件的实体
     * 注：不是特殊情况不建议使用onlyOf。因为onlyOf会监听所有组件的添加和删除事件
     * @param args  组件类
     * @example
     // 不包含CComponent或者DComponent
     ecs.allOf(AComponent, BComponent).excludeOf(CComponent, DComponent);

     // 不同时包含CComponent和DComponent
     ecs.allOf(AComponent, BComponent).excludeOf(CComponent).excludeOf(DComponent);
     */
    function onlyOf(...args) {
        return new ECSMatcher_1.ECSMatcher().onlyOf(...args);
    }
    ecs.onlyOf = onlyOf;
    /**
     * 不包含指定的任意一个组件
     * @param args  组件类
     * @example
     // 表示不包含组件A或者组件B
     ecs.excludeOf(A, B);
     */
    function excludeOf(...args) {
        return new ECSMatcher_1.ECSMatcher().excludeOf(...args);
    }
    ecs.excludeOf = excludeOf;
    //#endregion
    //#region 单例组件
    /**
     * 获取单例组件
     * @param ctor 组件类
     */
    function getSingleton(ctor) {
        if (!ECSModel_1.ECSModel.tid2comp.has(ctor.tid)) {
            let comp = createEntityWithComp(ctor);
            ECSModel_1.ECSModel.tid2comp.set(ctor.tid, comp);
        }
        return ECSModel_1.ECSModel.tid2comp.get(ctor.tid);
    }
    ecs.getSingleton = getSingleton;
    /**
     * 注册单例组件 - 主要用于那些不能手动创建对象的组件
     * @param obj
     */
    function addSingleton(obj) {
        let tid = obj.constructor.tid;
        if (!ECSModel_1.ECSModel.tid2comp.has(tid)) {
            ECSModel_1.ECSModel.tid2comp.set(tid, obj);
        }
    }
    ecs.addSingleton = addSingleton;
    //#endregion
})(ecs = exports.ecs || (exports.ecs = {}));
