"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-25 12:04:32
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-25 12:14:54
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleViewComp = void 0;
const ECS_1 = require("../../../core/ecs/ECS");
const vec3_1 = require("../../common/math/vec3");
const RoleModelComp_1 = require("./RoleModelComp");
class Node {
    constructor(rv) {
        this.rv = null;
        this.pos = new vec3_1.Vec3();
        this.rv = rv;
    }
    get position() {
        var pos = this.rv.ent.get(RoleModelComp_1.RoleModelComp).state.pos;
        this.pos.set(pos.x, pos.y, pos.z);
        return this.pos;
    }
}
/** 角色桥接数据 */
let RoleViewComp = class RoleViewComp extends ECS_1.ecs.Comp {
    constructor() {
        super(...arguments);
        this.node = new Node(this);
    }
    reset() {
        this.node = null;
    }
};
RoleViewComp = __decorate([
    ECS_1.ecs.register('RoleView')
], RoleViewComp);
exports.RoleViewComp = RoleViewComp;
