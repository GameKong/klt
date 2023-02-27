"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuffModelComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-09-13 09:32:13
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-15 10:20:17
 */
const ECS_1 = require("../../../../core/ecs/ECS");
const TableBuff_1 = require("../../../common/table/TableBuff");
const BuffCastingConfig_1 = require("../../common/bll/config/BuffCastingConfig");
/** 状态效果数据 */
let BuffModelComp = class BuffModelComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        /** 状态效果策划配置表 */
        this.table = null;
        /** 状态效果计算流程 */
        this.casting = null;
    }
    /** 状态效果编号 */
    get id() {
        return this.table.id;
    }
    set id(value) {
        if (this.table == null)
            this.table = new TableBuff_1.TableBuff();
        this.table.init(value);
        var clsNum = BuffCastingConfig_1.BuffCastingConfig[value];
        console.assert(clsNum != null, `没找到找编号为【${value}】的BUFF逻辑组件`);
        if (clsNum)
            this.casting = new clsNum();
    }
    reset() {
    }
};
BuffModelComp = __decorate([
    ECS_1.ecs.register('BuffModel')
], BuffModelComp);
exports.BuffModelComp = BuffModelComp;
