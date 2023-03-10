/** 支持Map与Array功能的集合对象 */
export class Collection<K, V> extends Map<K, V>{
    private _array: V[] = [];

    /** 获取数组对象 */
    get array() {
        return this._array;
    }

    /**
     * 设置值
     * @param key       关键字
     * @param value     数据值
     */
    set(key: K, value: V) {
        if (!this.has(key)) {
            this._array.push(value);
        }

        return super.set(key, value);
    }

    /**
     * 删除值
     * @param key       关键字
     */
    delete(key: K): boolean {
        var value = this.get(key);
        if (value) {
            var index = this._array.indexOf(value);
            if (index > -1) this._array.splice(index, 1);
            return super.delete(key);
        }
        return false;
    }
}