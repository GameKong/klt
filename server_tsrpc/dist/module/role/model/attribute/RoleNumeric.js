"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-01-20 18:20:32
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-02 17:19:35
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleNumeric = exports.RoleModuleType = void 0;
/** 影响角色属性的模块 */
var RoleModuleType;
(function (RoleModuleType) {
    /** 初始默认属性 */
    RoleModuleType[RoleModuleType["Base"] = 0] = "Base";
    /** 职业附加属性 */
    RoleModuleType[RoleModuleType["Job"] = 1] = "Job";
    /** 等级附加属性 */
    RoleModuleType[RoleModuleType["Level"] = 2] = "Level";
    /** 装备附加属性 */
    RoleModuleType[RoleModuleType["Equip"] = 3] = "Equip";
    /** 修饰器附加属性 */
    RoleModuleType[RoleModuleType["Decorator"] = 4] = "Decorator";
    /** 技能附加属性 */
    RoleModuleType[RoleModuleType["Skill"] = 5] = "Skill";
})(RoleModuleType = exports.RoleModuleType || (exports.RoleModuleType = {}));
/**
 * 角色属性对象
 * 1、不同模块设置对应的属性值
 * 2、任意模块的属性值修改时，自动角色属性更新后的数值和
 */
class RoleNumeric {
    constructor(type, attributes) {
        /** 属性类型 */
        this.type = null;
        /** 各模块附加值求和总数值 */
        this.value = 0;
        /** 分组不同模块数值 */
        this.values = new Map();
        this.type = type;
        this.attributes = attributes;
        // 设置初始值
        var rmt = RoleModuleType;
        for (var key in rmt) {
            var k = Number(key);
            if (k > -1)
                this.values.set(k, 0);
        }
    }
    /** 获取指定模块属性值 */
    getValue(module) {
        return this.values.get(module);
    }
    /** 设置指定模块属性值 */
    setValue(module, value) {
        this.values.set(module, value);
        this.update();
    }
    update() {
        var result = 0;
        this.values.forEach(value => {
            result += value;
        });
        this.value = result;
        this.attributes.states[this.type] = result;
    }
    reset() {
        this.values.clear();
        this.update();
    }
    /** 角色基础属性 */
    get base() {
        return this.getValue(RoleModuleType.Base);
    }
    set base(value) {
        this.setValue(RoleModuleType.Base, value);
    }
    /** 等级属性 */
    get level() {
        return this.getValue(RoleModuleType.Level);
    }
    set level(value) {
        this.setValue(RoleModuleType.Level, value);
    }
    /** 角色职业属性 */
    get job() {
        return this.getValue(RoleModuleType.Job);
    }
    set job(value) {
        this.setValue(RoleModuleType.Job, value);
    }
    /** 角色装备属性 */
    get equip() {
        return this.getValue(RoleModuleType.Equip);
    }
    set equip(value) {
        this.setValue(RoleModuleType.Equip, value);
    }
    /** 修饰器属性 */
    get decorator() {
        return this.getValue(RoleModuleType.Decorator);
    }
    set decorator(value) {
        this.setValue(RoleModuleType.Decorator, value);
    }
    /** 技能附加属性 */
    get skill() {
        return this.getValue(RoleModuleType.Skill);
    }
    set skill(value) {
        this.setValue(RoleModuleType.Skill, value);
    }
}
exports.RoleNumeric = RoleNumeric;
