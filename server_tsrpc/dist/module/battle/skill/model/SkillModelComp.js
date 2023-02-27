"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillModelComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-11-18 15:56:01
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-15 10:21:26
 */
const ECS_1 = require("../../../../core/ecs/ECS");
const TableSkill_1 = require("../../../common/table/TableSkill");
const SkillCastingConfig_1 = require("../../common/bll/config/SkillCastingConfig");
/**
 * 技能数据
 *
 * 设计思种
 * 1、技能配置表数据
 * 2、技能释放流程配置数据
 * 3、多层级触发的技能设计
 */
let SkillModelComp = class SkillModelComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 技能策划配置表 */
        this.table = null;
        /** 技能数值逻辑对象 */
        this.casting = null;
    }
    /** 技能编号 */
    get id() {
        return this.table.id;
    }
    set id(value) {
        if (this.table == null)
            this.table = new TableSkill_1.TableSkill();
        this.table.init(value);
        // 技能数值组件
        var clsNum = SkillCastingConfig_1.SkillCastingConfig[value];
        console.assert(clsNum != null, `没找到找编号为【${value}】的技能逻辑组件`);
        if (clsNum)
            this.casting = new clsNum();
    }
    reset() {
        this.id = -1;
    }
};
SkillModelComp = __decorate([
    ECS_1.ecs.register('SkillModel')
], SkillModelComp);
exports.SkillModelComp = SkillModelComp;
