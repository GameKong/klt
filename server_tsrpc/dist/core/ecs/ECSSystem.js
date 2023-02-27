"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECSSystem = exports.ECSRootSystem = exports.ECSComblockSystem = void 0;
const ECSModel_1 = require("./ECSModel");
/** 继承此类实现具体业务逻辑的系统 */
class ECSComblockSystem {
    /** 构造函数 */
    constructor() {
        this.dt = 0;
        this.enteredEntities = null;
        this.removedEntities = null;
        this.hasEntityEnter = false;
        this.hasEntityRemove = false;
        this.hasUpdate = false;
        this.tmpExecute = null;
        let hasOwnProperty = Object.hasOwnProperty;
        let prototype = Object.getPrototypeOf(this);
        let hasEntityEnter = hasOwnProperty.call(prototype, 'entityEnter');
        let hasEntityRemove = hasOwnProperty.call(prototype, 'entityRemove');
        let hasFirstUpdate = hasOwnProperty.call(prototype, 'firstUpdate');
        let hasUpdate = hasOwnProperty.call(prototype, 'update');
        this.hasEntityEnter = hasEntityEnter;
        this.hasEntityRemove = hasEntityRemove;
        this.hasUpdate = hasUpdate;
        if (hasEntityEnter || hasEntityRemove) {
            this.enteredEntities = new Map();
            this.removedEntities = new Map();
            this.execute = this.execute1;
            this.group = ECSModel_1.ECSModel.createGroup(this.filter());
            this.group.watchEntityEnterAndRemove(this.enteredEntities, this.removedEntities);
        }
        else {
            this.execute = this.execute0;
            this.group = ECSModel_1.ECSModel.createGroup(this.filter());
        }
        if (hasFirstUpdate) {
            this.tmpExecute = this.execute;
            this.execute = this.updateOnce;
        }
    }
    /** 系统实始化 */
    init() {
    }
    /** 系统释放事件 */
    onDestroy() {
    }
    /** 是否存在实体 */
    hasEntity() {
        return this.group.count > 0;
    }
    /**
     * 先执行entityEnter，最后执行firstUpdate
     * @param dt
     * @returns
     */
    updateOnce(dt) {
        if (this.group.count === 0) {
            return;
        }
        this.dt = dt;
        // 处理刚进来的实体
        if (this.enteredEntities.size > 0) {
            var entities = this.enteredEntities.values();
            for (let entity of entities) {
                this.entityEnter(entity);
            }
            this.enteredEntities.clear();
        }
        // 只执行firstUpdate
        for (let entity of this.group.matchEntities) {
            this.firstUpdate(entity);
        }
        this.execute = this.tmpExecute;
        this.execute(dt);
        this.tmpExecute = null;
    }
    /**
     * 只执行update
     * @param dt
     * @returns
     */
    execute0(dt) {
        if (this.group.count === 0)
            return;
        this.dt = dt;
        // 执行update
        if (this.hasUpdate) {
            for (let entity of this.group.matchEntities) {
                this.update(entity);
            }
        }
    }
    /**
     * 先执行entityRemove，再执行entityEnter，最后执行update
     * @param dt
     * @returns
     */
    execute1(dt) {
        if (this.removedEntities.size > 0) {
            if (this.hasEntityRemove) {
                var entities = this.removedEntities.values();
                for (let entity of entities) {
                    this.entityRemove(entity);
                }
            }
            this.removedEntities.clear();
        }
        if (this.group.count === 0)
            return;
        this.dt = dt;
        // 处理刚进来的实体
        if (this.enteredEntities.size > 0) {
            if (this.hasEntityEnter) {
                var entities = this.enteredEntities.values();
                for (let entity of entities) {
                    this.entityEnter(entity);
                }
            }
            this.enteredEntities.clear();
        }
        // 执行update
        if (this.hasUpdate) {
            for (let entity of this.group.matchEntities) {
                this.update(entity);
            }
        }
    }
}
exports.ECSComblockSystem = ECSComblockSystem;
/** 根System，对游戏中的System遍历从这里开始，一个System组合中只能有一个RootSystem，可以有多个并行的RootSystem */
class ECSRootSystem {
    constructor() {
        this.executeSystemFlows = [];
        this.systemCnt = 0;
    }
    add(system) {
        if (system instanceof ECSSystem) {
            // 将嵌套的System都“摊平”，放在根System中进行遍历，减少execute的频繁进入退出。
            Array.prototype.push.apply(this.executeSystemFlows, system.comblockSystems);
        }
        else {
            this.executeSystemFlows.push(system);
        }
        this.systemCnt = this.executeSystemFlows.length;
        return this;
    }
    init() {
        this.executeSystemFlows.forEach(sys => sys.init());
    }
    execute(dt) {
        for (let i = 0; i < this.systemCnt; i++) {
            // @ts-ignore
            this.executeSystemFlows[i].execute(dt);
        }
    }
    clear() {
        this.executeSystemFlows.forEach(sys => sys.onDestroy());
    }
}
exports.ECSRootSystem = ECSRootSystem;
/** 系统组合器，用于将多个相同功能模块的系统逻辑上放在一起，系统也可以嵌套系统 */
class ECSSystem {
    constructor() {
        this._comblockSystems = [];
    }
    get comblockSystems() {
        return this._comblockSystems;
    }
    add(system) {
        if (system instanceof ECSSystem) {
            Array.prototype.push.apply(this._comblockSystems, system._comblockSystems);
            system._comblockSystems.length = 0;
        }
        else {
            this._comblockSystems.push(system);
        }
        return this;
    }
}
exports.ECSSystem = ECSSystem;
