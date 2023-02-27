"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECSMatcher = void 0;
const ECSMask_1 = require("./ECSMask");
const ECSModel_1 = require("./ECSModel");
let macherId = 1;
/**
 * 筛选规则间是“与”的关系
 * 比如：ecs.Macher.allOf(...).excludeOf(...)表达的是allOf && excludeOf，即实体有“这些组件” 并且 “没有这些组件”
 */
class ECSMatcher {
    get key() {
        if (!this._key) {
            let s = '';
            for (let i = 0; i < this.rules.length; i++) {
                s += this.rules[i].getKey();
                if (i < this.rules.length - 1) {
                    s += ' && ';
                }
            }
            this._key = s;
        }
        return this._key;
    }
    constructor() {
        this.rules = [];
        this._indices = null;
        this.mid = -1;
        this._key = null;
        this.mid = macherId++;
    }
    /**
     * 匹配器关注的组件索引。在创建Group时，Context根据组件id去给Group关联组件的添加和移除事件。
     */
    get indices() {
        if (this._indices === null) {
            this._indices = [];
            this.rules.forEach((rule) => {
                Array.prototype.push.apply(this._indices, rule.indices);
            });
        }
        return this._indices;
    }
    /**
     * 组件间是或的关系，表示关注拥有任意一个这些组件的实体。
     * @param args 组件索引
     */
    anyOf(...args) {
        this.rules.push(new AnyOf(...args));
        this.bindMatchMethod();
        return this;
    }
    /**
     * 组件间是与的关系，表示关注拥有所有这些组件的实体。
     * @param args 组件索引
     */
    allOf(...args) {
        this.rules.push(new AllOf(...args));
        this.bindMatchMethod();
        return this;
    }
    /**
     * 表示关注只拥有这些组件的实体
     *
     * 注意：
     *  不是特殊情况不建议使用onlyOf。因为onlyOf会监听所有组件的添加和删除事件。
     * @param args 组件索引
     */
    onlyOf(...args) {
        this.rules.push(new AllOf(...args));
        let otherTids = [];
        for (let ctor of ECSModel_1.ECSModel.compCtors) {
            if (args.indexOf(ctor) < 0) {
                otherTids.push(ctor);
            }
        }
        this.rules.push(new ExcludeOf(...otherTids));
        this.bindMatchMethod();
        return this;
    }
    /**
     * 不包含指定的任意一个组件
     * @param args
     */
    excludeOf(...args) {
        this.rules.push(new ExcludeOf(...args));
        this.bindMatchMethod();
        return this;
    }
    bindMatchMethod() {
        if (this.rules.length === 1) {
            this.isMatch = this.isMatch1;
        }
        else if (this.rules.length === 2) {
            this.isMatch = this.isMatch2;
        }
        else {
            this.isMatch = this.isMatchMore;
        }
    }
    isMatch1(entity) {
        return this.rules[0].isMatch(entity);
    }
    isMatch2(entity) {
        return this.rules[0].isMatch(entity) && this.rules[1].isMatch(entity);
    }
    isMatchMore(entity) {
        for (let rule of this.rules) {
            if (!rule.isMatch(entity)) {
                return false;
            }
        }
        return true;
    }
    clone() {
        let newMatcher = new ECSMatcher();
        newMatcher.mid = macherId++;
        this.rules.forEach(rule => newMatcher.rules.push(rule));
        return newMatcher;
    }
}
exports.ECSMatcher = ECSMatcher;
class BaseOf {
    constructor(...args) {
        this.indices = [];
        this.mask = new ECSMask_1.ECSMask();
        let componentTypeId = -1;
        let len = args.length;
        for (let i = 0; i < len; i++) {
            if (typeof (args[i]) === "number") {
                componentTypeId = args[i];
            }
            else {
                componentTypeId = args[i].tid;
            }
            if (componentTypeId == -1) {
                throw Error('存在没有注册的组件！');
            }
            this.mask.set(componentTypeId);
            if (this.indices.indexOf(componentTypeId) < 0) { // 去重
                this.indices.push(componentTypeId);
            }
        }
        if (len > 1) {
            this.indices.sort((a, b) => { return a - b; }); // 对组件类型id进行排序，这样关注相同组件的系统就能共用同一个group
        }
    }
    toString() {
        return this.indices.join('-'); // 生成group的key
    }
}
/**
 * 用于描述包含任意一个这些组件的实体
 */
class AnyOf extends BaseOf {
    isMatch(entity) {
        // @ts-ignore
        return this.mask.or(entity.mask);
    }
    getKey() {
        return 'anyOf:' + this.toString();
    }
}
/**
 * 用于描述包含了“这些”组件的实体，这个实体除了包含这些组件还可以包含其他组件
 */
class AllOf extends BaseOf {
    isMatch(entity) {
        // @ts-ignore
        return this.mask.and(entity.mask);
    }
    getKey() {
        return 'allOf:' + this.toString();
    }
}
/**
 * 不包含指定的任意一个组件
 */
class ExcludeOf extends BaseOf {
    getKey() {
        return 'excludeOf:' + this.toString();
    }
    isMatch(entity) {
        // @ts-ignore
        return !this.mask.or(entity.mask);
    }
}