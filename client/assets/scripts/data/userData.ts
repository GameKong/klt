import { sys } from 'cc';

const KEYS = {
    VERSION : "aaVersion",
}

let u = sys.localStorage;

export class userData {
    static KEYS = KEYS;

    static deleteValue(key:string){
        if(null == key){
            console.error("key cannot be null");
            return;
        }
        u.removeItem(key);
    }

    static setKey(key:string, value:any) {
        if (null == key) {
            console.error("存储的key不能为空");
            return;
        }

        if (null == value) {
            console.warn("存储的值为空，则直接移除该存储");
            this.deleteValue(key);
            return;
        }
        if (typeof value === 'function') {
            console.error("储存的值不能为方法");
            return;
        }
        if (typeof value === 'object') {
            try {
                value = JSON.stringify(value);
            }
            catch (e) {
                console.error(`解析失败，str = ${value}`);
                return;
            }
        }
        else if (typeof value === 'number') {
            value = value + "";
        }

        u.setItem(key, value);
    }

    static getKey(key:string, defaultValue?:any):string{
        if (null == key) {
            console.error("存储的key不能为空");
            return null!;
        }
        let str: string | null = sys.localStorage.getItem(key);
        if (null === str) {
            return defaultValue;
        }
        return str;
    }

    static getString(key:string, defaultValue?:any):string{
        return this.getKey(key, defaultValue);
    }

    static setString(key:string, value:string):void {
        this.setKey(key, value);
    }

    static getBool(key:string, defaultValue?:any):boolean{
        var r = this.getKey(key, defaultValue);
        return Boolean(r) || false;
    }

    static setBool(key:string, value:boolean):void {
        this.setKey(key, value);
    }

    static getInt(key:string, defaultValue?:Number):Number{
        var r = this.getKey(key, defaultValue);
        return Number(r) || defaultValue;
    }
}

