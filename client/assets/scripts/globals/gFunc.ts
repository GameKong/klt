import { BlockInputEvents, Component, Constructor, instantiate, js, Layers, Node, Prefab, UIOpacity, UITransform, Widget } from 'cc';
import { dh } from '../dh';
import { GConst } from './gConst';

export class GFunc {
    /**
     * 调用节点组件的指定函数
     * @param node 指定节点
     * @param funName 指定函数名
     * @param params 调用函数使用的参数
     * @param target 指定的组件类型，若无则对所有组件调用
     */
    static applyComponentsFunction(node: Node, funName: string, params?: any, target?: Function) {
        let class_name: string = target && js.getClassName(target) || null;
        for (let i = 0; i < node.components.length; i++) {
            let component: any = node.components[i];
            if (!target || component instanceof target) {
                let func = component[funName];
                if (func) {
                    func.call(component, params);
                }
            }
        }
    }
}

