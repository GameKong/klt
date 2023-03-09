import { log } from "cc";
import { BaseManager } from "./baseManager";

enum LogType {
    /** 网络层日志 */
    Net = 1,
    /** 数据结构层日志 */
    Model = 2,
    /** 业务逻辑层日志 */
    Business = 4,
    /** 视图层日志 */
    View = 8,
    /** 配置日志 */
    Config = 16,
    /** 标准日志 */
    Trace = 32,
}

var names = {
    "1": "网络日志",
    "2": "数据日志",
    "4": "业务日志",
    "8": "视图日志",
    "16": "配置日志",
    "32": "标准日志",
}

/** 
 * 日志管理 
 * @example
LoggerManager.trace("默认标准日志");
LoggerManager.logConfig("灰色配置日志");
LoggerManager.logNet("橙色网络日志");
LoggerManager.logModel("紫色数据日志");
LoggerManager.logBusiness("蓝色业务日志");
LoggerManager.logView("绿色视图日志");
 */
export class LoggerManager extends BaseManager {
    static readonly Instance: LoggerManager = new LoggerManager();

    private tags: number = 0;

    init() {
        super.init()

        this.tags =
            LogType.Net |
            LogType.Model |
            LogType.Business |
            LogType.View |
            LogType.Config |
            LogType.Trace;
    }

    /** 
     * 设置显示的日志类型，默认值为不显示任何类型日志
     * @example
LoggerManager.setTags(LogType.View|LogType.Business)
     */
    setTags(tag: LogType = 0) {
        this.tags = tag;
    }

    /**
     * 记录开始计时
     * @param describe  标题描述
     * @example
LoggerManager.start();
...
省略N行代码
...
LoggerManager.end();
     */
    start(describe: string = "Time"): void {
        console.time(describe);
    }

    /**
     * 打印范围内时间消耗
     * @param describe  标题描述
     * @example
LoggerManager.start();
...
省略N行代码
...
LoggerManager.end();
     */
    end(describe: string = "Time"): void {
        console.timeEnd(describe);
    }

    /**
     * 打印表格
     * @param msg       日志消息
     * @param describe  标题描述
     * @example
var object:any = {uid:1000, name:"oops"};
LoggerManager.table(object);
     */
    table(msg: any, describe?: string) {
        if (!this.isOpen(LogType.Trace)) {
            return;
        }
        console.table(msg);
    }

    /**
     * 打印标准日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    trace(msg: any, describe?: string) {
        this.print(LogType.Trace, msg, "", describe)
    }

    /**
     * 打印网络层日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    logNet(msg: any, describe?: string) {
        this.orange(LogType.Net, msg, describe);
    }

    /**
     * 打印数据层日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    logModel(msg: any, describe?: string) {
        this.violet(LogType.Model, msg, describe);
    }

    /**
     * 打印业务层日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    logBusiness(msg: any, describe?: string) {
        this.blue(LogType.Business, msg, describe);
    }

    /**
     * 打印视图日志
     * @param msg       日志消息
     * @param describe  标题描述
     */
    logView(msg: any, describe?: string) {
        this.green(LogType.View, msg, describe);
    }

    /** 打印配置日志 */
    logConfig(msg: any, describe?: string) {
        this.gray(LogType.Config, msg, describe);
    }

    // 橙色
    orange(tag: LogType, msg: any, describe?: string) {
        this.print(tag, msg, "color:#ee7700;", describe)
    }

    // 紫色
    violet(tag: LogType, msg: any, describe?: string) {
        this.print(tag, msg, "color:Violet;", describe)
    }

    // 蓝色
    blue(tag: LogType, msg: any, describe?: string) {
        this.print(tag, msg, "color:#3a5fcd;", describe)
    }

    // 绿色
    green(tag: LogType, msg: any, describe?: string) {
        this.print(tag, msg, "color:green;", describe)
    }

    // 灰色
    gray(tag: LogType, msg: any, describe?: string) {
        this.print(tag, msg, "color:gray;", describe)
    }

    private isOpen(tag: LogType): boolean {
        return (this.tags & tag) != 0;
    }

    /**
     * 输出日志
     * @param tag       日志类型
     * @param msg       日志内容
     * @param color     日志文本颜色
     * @param describe  日志标题描述
     */
    private print(tag: LogType, msg: any, color: string, describe?: string) {
        // 标记没有打开，不打印该日志
        if (!this.isOpen(tag)) {
            return;

        }
        var backLog = console.log || log;
        var type = names[tag];
        if (describe) {
            backLog.call(null, "%c%s%s%s:%s%o", color, this.getDateString(), '[' + type + ']', this.stack(5), describe, msg);
        }
        else {
            backLog.call(null, "%c%s%s%s:%o", color, this.getDateString(), '[' + type + ']', this.stack(5), msg);
        }
    }

    private stack(index: number): string {
        var e = new Error();
        var lines = e.stack!.split("\n");
        var result: Array<any> = [];
        lines.forEach((line) => {
            line = line.substring(7);
            var lineBreak = line.split(" ");
            if (lineBreak.length < 2) {
                result.push(lineBreak[0]);
            }
            else {
                result.push({ [lineBreak[0]]: lineBreak[1] });
            }
        });

        var list: string[] = [];
        var splitList: Array<string> = [];
        if (index < result.length - 1) {
            var value: string;
            for (var a in result[index]) {
                var splitList = a.split(".");

                if (splitList.length == 2) {
                    list = splitList.concat();
                }
                else {
                    value = result[index][a];
                    var start = value!.lastIndexOf("/");
                    var end = value!.lastIndexOf(".");
                    if (start > -1 && end > -1) {
                        var r = value!.substring(start + 1, end);
                        list.push(r);
                    }
                    else {
                        list.push(value);
                    }
                }
            }
        }

        if (list.length == 1) {
            return "[" + list[0] + ".ts]";
        }
        else if (list.length == 2) {
            return "[" + list[0] + ".ts->" + list[1] + "]";
        }
        return "";
    }

    private getDateString(): string {
        let d = new Date();
        let str = d.getHours().toString();
        let timeStr = "";
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getMinutes().toString();
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getSeconds().toString();
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getMilliseconds().toString();
        if (str.length == 1) str = "00" + str;
        if (str.length == 2) str = "0" + str;
        timeStr += str;

        timeStr = "[" + timeStr + "]";
        return timeStr;
    }
}