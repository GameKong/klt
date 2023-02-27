"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
/**
 * 定时跳动组件
 * @example
    export class Test extends Component {
        // 创建一个定时跳动组件
        private timer: Timer = new Timer(1);

        update(dt: number) {
            if (this.timer.update(this.dt)) {
                console.log(每一秒触发一次);
            }
        }
    }
 */
class Timer {
    /** 逝去时间 */
    get elapsedTime() {
        return this._elapsedTime;
    }
    /** 获取触发间隔时间单位秒 */
    get step() {
        return this._step;
    }
    /** 设置触发间隔时间单位秒 */
    set step(step) {
        this._step = step; // 每次修改时间
        this._elapsedTime = 0; // 逝去时间
    }
    /** 进度 */
    get progress() {
        return this._elapsedTime / this._step;
    }
    /**
     * 构造函数
     * @param step 每跳动一次步长单位位
     */
    constructor(step = 0) {
        /** 定时到了回调 */
        this.callback = null;
        this._elapsedTime = 0;
        this._step = 0;
        this.step = step;
    }
    /** 游戏引擎的cc.Component组件的update方法调用 */
    update(dt) {
        var _a;
        this._elapsedTime += dt;
        if (this._elapsedTime >= this._step) {
            this._elapsedTime -= this._step;
            (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this);
            return true;
        }
        return false;
    }
    /** 重置 */
    reset() {
        this._elapsedTime = 0;
    }
}
exports.Timer = Timer;
