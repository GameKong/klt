import { _decorator, Component, Node } from 'cc';
import { ConfigManager } from './core/configManager';
import { EventManager } from './core/eventManager';
import { LoggerManager } from './core/loggerManager';
import { NetManager } from './core/netManager';
import { ResManager } from './core/resManager';
import { ScheduleManager } from './core/scheduleManager';
import { UIManager } from './core/uiManager';
import { StorageManager } from './core/storageManager';
import { GConst } from './globals/gConst';
import { EcsManager } from './core/ecsManager';
const { ccclass, property } = _decorator;

export class dh {
    /**全局常量 */
    static gConst = GConst;
    //日志模块
    static loggerManager: LoggerManager;
    //本地永久数据
    static storageManager:StorageManager;
    //消息管理
    static eventManager: EventManager;
    /**资源加载 */
    static resManager: ResManager;
    /**UI管理器 */
    static uiManager: UIManager;
    /**定时器管理器 */
    static scheduleManager: ScheduleManager;
    /**配置表管理器 */
    static configManager: ConfigManager;
    /**网络表管理器 */
    static netManager: NetManager;
    /**ecs管理器 */
    static ecsManager: EcsManager;
}

