"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableSkill = void 0;
class TableSkill {
    constructor() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    static load() {
        var fs = require('fs');
        var data = fs.readFileSync(__dirname + this.TableName, 'utf8');
        this.Table = JSON.parse(data);
    }
    init(id) {
        this.data = TableSkill.Table[id];
        this.id = id;
    }
    /** 技能名 */
    get name() {
        return this.data.name;
    }
    /** 技能释放距离 */
    get distance() {
        return this.data.distance;
    }
}
exports.TableSkill = TableSkill;
TableSkill.TableName = "/config/Skill.json";
TableSkill.Table = null;
