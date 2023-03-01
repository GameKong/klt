import { js } from 'cc';

/**
 * 
 * BaseManager
 * kongl
 * Tue Nov 01 2022 09:27:12 GMT+0800 (中国标准时间)
 * BaseManager.ts
 * db://assets/scripts/core/BaseManager.ts
 *
 */

export class BaseManager {
    /**管理器单例 */
    static readonly Instance;

    constructor() {
        
    }

    init()
    {
        let class_name = js.getClassName(this)
        console.log(`加载${class_name}组件`)
    }
}