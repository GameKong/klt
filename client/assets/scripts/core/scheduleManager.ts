import { Director, ISchedulable, log, macro, Scheduler, warn } from "cc";
import { BaseManager } from "./baseManager";

/**
* 
* ScheduleManager
* kongl
* Mon Oct 31 2022 18:42:20 GMT+0800 (中国标准时间)
* scheduleManager.ts
* db://assets/scripts/core/scheduleManager.ts
*
*/

/**回调函数类型 */
type scheduleFunc = (dt?: number) => void;

/**schedule数据 */
class ScheduleData implements ISchedulable {
    uuid: string;
    callback: scheduleFunc;
}

/**定时器参数 */
export class ScheduleParam {
    callback: scheduleFunc;
    interval: number;
    repeat?: number = macro.REPEAT_FOREVER;
    delay?: number;
    paused?: boolean;
    target?: any;
}

/**定时器管理器 */
export class ScheduleManager extends BaseManager {
    static readonly Instance: ScheduleManager = new ScheduleManager();

    /**定时器集合 */
    private _schedules: { [k: string]: ScheduleData } = {};

    /**定时器自增数量，用于id自增 */
    private _schedule_count: number = 1;

    /**定时器 */
    public scheduler: Scheduler;

    /**初始化 */
    init() {
        this.scheduler = Director.instance.getScheduler();
    }

    /**
    * 注册一个固定间隔时间的触发器
    * @param callback  触发时的回调方法
    * @param interval  固定间隔触发时间，interval 值为 0，那么回调函数每一帧都会被调用，但如果是这样请使用scheduleUpdate
    * @returns string
    */
    schedule(param: ScheduleParam): string {
        let uuid = `${this._schedule_count++}`;
        let target: ScheduleData = {
            uuid: uuid,
            callback: param.callback
        };
        this._schedules[uuid] = target;
        this.scheduler.schedule(param.callback.bind(param.target), target, param.interval, param.repeat, param.delay, param.paused);

        return uuid;
    }

    /**
     * 注册一个只触发一次的延时的触发器
     * @param callback  触发时的回调方法
     * @param delay     延时触发时间
     * @returns string
     */
    scheduleOnce(param: ScheduleParam): string {
        let uuid = `${this._schedule_count++}`;
        let target: ScheduleData = {
            uuid: uuid,
            callback: param.callback
        };
        this._schedules[uuid] = target;
        this.scheduler.schedule((dt: number) => {
            param.callback.bind(param.target)(dt)
            this.unschedule(uuid);
        }, target, 0, 0, param.delay, param.paused);

        return uuid;
    }

    /**
     * 删除一个时间触发器
     * @param uuid  唯一标识
     */
    unschedule(uuid: string) {
        if (!uuid)
            return;

        let target: ScheduleData = this._schedules[uuid];
        this.scheduler.unschedule(target.callback, target);
        delete this._schedules[uuid];
    }

    /** 删除所有时间触发器  */
    unscheduleAll() {
        for (let uuid in this._schedules) {
            let target: ScheduleData = this._schedules[uuid];
            this.scheduler.unschedule(target.callback, target);
        }
    }
}
