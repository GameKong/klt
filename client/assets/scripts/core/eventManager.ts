import { log, warn } from "cc";
import { BaseManager } from "./baseManager";

/**事件类型 */
export const enum EventType {
    LoadResProgress = "LoadResProgress" // 测试
}

/**
 * 全局事件监听方法
 * @param event      事件名
 * @param args       事件参数
 */
export type ListenerFunc = (event: string, args: any) => void
 
export class EventData {
    public event!: string;
    public listener!: ListenerFunc;
    public object: any;
}

/**事件管理器 */
export class EventManager extends BaseManager {
    static readonly Instance: EventManager = new EventManager();

    private events: any = {};

    /**
     * 注册全局事件
     * @param data 事件数据，包含以下3个参数
     * @param event      事件名
     * @param listener   处理事件的侦听器函数
     * @param object     侦听函数绑定的作用域对象
     */
    on(data: EventData);
    on(event: string, listener: ListenerFunc, object: object);
    on(param: string | EventData, listener?: ListenerFunc, object?: object) {
        let data: EventData;
        let event: string;
        if (typeof param == "string") {
            data = new EventData();
            data.event = event;
            data.listener = listener;
            data.object = object;

            event = param
        }
        else {
            data = param;

            event = param.event
            listener = param.listener
            object = param.object
        }

        if (!event || !listener) {
            warn(`注册【${event}】事件的侦听器函数为空`);
            return;
        }

        let list: Array<EventData> = this.events[event];
        if (list == null) {
            list = [];
            this.events[event] = list;
        }

        let length = list.length;
        for (let i = 0; i < length; i++) {
            let bin = list[i];
            if (bin.listener == listener && bin.object == object) {
                warn(`名为【${event}】的事件重复注册侦听器`);
            }
        }

        list.push(data);
    }

    /**
     * 监听一次事件，事件响应后，该监听自动移除
     * @param event     事件名
     * @param listener  事件触发回调方法
     * @param object    侦听函数绑定的作用域对象
     */
    once(event: string, listener: ListenerFunc, object: object) {
        let _listener: any = ($event: string, $args: any) => {
            this.off(event, _listener, object);
            _listener = null;
            listener.call(object, $event, $args);
        }
        this.on(event, _listener, object);
    }

    /**
     * 移除全局事件
     * @param data 事件数据，包含以下3个参数
     * @param event     事件名
     * @param listener  处理事件的侦听器函数
     * @param object    侦听函数绑定的作用域对象
     */
    off(data: EventData);
    off(event: string, listener: ListenerFunc, object: object);
    off(param: string | EventData, listener?: Function, object?: object) {
        let event: string;
        if (typeof param == "string") {
            event = param
        }
        else {
            event = param.event
            listener = param.listener
            object = param.object
        }

        let list: Array<EventData> = this.events[event];

        if (!list) {
            log(`名为【${event}】的事件不存在`);
            return;
        }

        let length = list.length;
        for (let i = 0; i < length; i++) {
            let bin: EventData = list[i];
            if (bin.listener == listener && bin.object == object) {
                list.splice(i, 1);
                break;
            }
        }

        if (list.length == 0) {
            delete this.events[event];
        }
    }

    /** 全部清除某个类型的全局事件 */
    offAll(event: string) {
        let list: Array<EventData> = this.events[event];
        if (!list) {
            log(`名为【${event}】的事件不存在`);
            return;
        }

        delete this.events[event];
    }

    onWithList(event_list: Array<EventData>) {
        event_list.forEach((data: EventData) => {
            this.on(data as EventData);
        })
    }

    offWithList(event_list: Array<EventData>) {
        event_list.forEach((data: EventData) => {
            this.off(data);
        })
    }

    /** 清除所有的全局事件监听 */
    clear() {
        for (let event in this.events) {
            this.offAll(event);
        }
    }

    /** 
     * 触发全局事件 
     * @param event(string)      事件名
     * @param args(any)          事件参数
     */
    dispatchEvent(event: string, args: any = null) {
        let list: Array<EventData> = this.events[event];

        if (list != null) {
            let temp: Array<EventData> = list.concat();
            let length = temp.length;
            for (let i = 0; i < length; i++) {
                let eventBin = temp[i];
                eventBin.listener.call(eventBin.object, event, args);
            }
        }
    }
}
