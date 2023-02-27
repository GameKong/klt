"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECSGroup = void 0;
class ECSGroup {
    /**
     * 符合规则的实体
     */
    get matchEntities() {
        if (this._entitiesCache === null) {
            this._entitiesCache = Array.from(this._matchEntities.values());
        }
        return this._entitiesCache;
    }
    /** 获取matchEntities中第一个实体 */
    get entity() {
        return this.matchEntities[0];
    }
    constructor(matcher) {
        this._matchEntities = new Map();
        this._entitiesCache = null;
        /**
         * 当前group中实体的数量
         *
         * 注：不要手动修改这个属性值。
         * 注：其实可以通过this._matchEntities.size获得实体数量，但是需要封装get方法。为了减少一次方法的调用所以才直接创建一个count属性
         */
        this.count = 0;
        this._enteredEntities = null;
        this._removedEntities = null;
        this.matcher = matcher;
    }
    onComponentAddOrRemove(entity) {
        if (this.matcher.isMatch(entity)) { // Group只关心指定组件在实体身上的添加和删除动作。
            this._matchEntities.set(entity.eid, entity);
            this._entitiesCache = null;
            this.count++;
            if (this._enteredEntities) {
                this._enteredEntities.set(entity.eid, entity);
                this._removedEntities.delete(entity.eid);
            }
        }
        else if (this._matchEntities.has(entity.eid)) { // 如果Group中有这个实体，但是这个实体已经不满足匹配规则，则从Group中移除该实体
            this._matchEntities.delete(entity.eid);
            this._entitiesCache = null;
            this.count--;
            if (this._enteredEntities) {
                this._enteredEntities.delete(entity.eid);
                this._removedEntities.set(entity.eid, entity);
            }
        }
    }
    watchEntityEnterAndRemove(enteredEntities, removedEntities) {
        this._enteredEntities = enteredEntities;
        this._removedEntities = removedEntities;
    }
    clear() {
        var _a, _b;
        this._matchEntities.clear();
        this._entitiesCache = null;
        this.count = 0;
        (_a = this._enteredEntities) === null || _a === void 0 ? void 0 : _a.clear();
        (_b = this._removedEntities) === null || _b === void 0 ? void 0 : _b.clear();
    }
}
exports.ECSGroup = ECSGroup;
