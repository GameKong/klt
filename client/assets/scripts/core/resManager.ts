import { Asset, AssetManager, assetManager, Constructor, error, Prefab, SpriteAtlas, warn, __private } from "cc";
import { dh } from "../dh";
import { BaseManager } from "./baseManager";
import { EventType } from "./eventManager";

type ProgressCallback = __private._cocos_core_asset_manager_shared__ProgressCallback;
type CompleteCallback<T = any> = __private._cocos_core_asset_manager_shared__CompleteCallbackWithData;
export type IRemoteOptions = __private._cocos_core_asset_manager_shared__IRemoteOptions;
export type AssetType<T = Asset> = Constructor<T>;

export class LoadList {
    bundle_name: string;
    res_list: Map<AssetType, string[]>;
}

interface ILoadResArgs<T extends Asset> {
    bundle?: string;
    dir?: string;
    paths: string | string[];
    type: AssetType<T> | null;
    onProgress: ProgressCallback | null;
    onComplete: CompleteCallback<T> | null;
}

/**bundle白名单 */
let white_res: LoadList[] = [
    {
        bundle_name: "public",
        res_list: new Map<AssetType, string[]>([
            [Prefab, [
                "prefabs/blackLayer"
            ]],
            [SpriteAtlas, [
                "images/avatar_1",
                "images/avatar_2",
                "images/equipment",
                "images/item_1",
                "images/item_2",
                "images/public",
                "images/ui_no_compress",
            ]]
        ])
    }
]

/** 游戏资管理 */
export class ResManager extends BaseManager {
    static readonly Instance: ResManager = new ResManager();

    /**初始化资源管理器 */
    init() {
        super.init();
    }

    /**加载基础资源 */
    async loadBaseRes() {
        await this.loadResLists(white_res, this.progressCallBack());
    }

    /**
     * 加载bundle列表
     * @param bundle_names 需要加载的bundle的名字列表
     */
    async loadBundles(bundle_names: string[]) {
        let promises: Promise<AssetManager.Bundle>[] = [];
        bundle_names.forEach(bundle_name => {
            let promise = this.loadBundle(bundle_name)
            promises.push(promise)
        });

        let bundles: AssetManager.Bundle[] = await Promise.all(promises);

        return bundles;
    }

    /**
     * 加载资源包
     * @param bundle_name    bundle名
     */
    loadBundle(bundle_name: string) {
        return new Promise<AssetManager.Bundle>((resolve, reject) => {
            if (assetManager.bundles.has(bundle_name)) {
                let bundle = assetManager.bundles.get(bundle_name);
                resolve(bundle);
            }
            else {
                assetManager.loadBundle(bundle_name, (err, bundle: AssetManager.Bundle) => {
                    if (err) {
                        return error(err);
                    }
                    resolve(bundle);

                    console.log(`load bundle:${bundle_name}`);
                });
            }
        });
    }

    /**
     * 加载单个资源
     * @param bundle_name    bundle名
     * @param resName       bundle下的资源名
     */
    async loadRes<T extends Asset>(bundle_name: string, resName: string, assetType?: AssetType<T>) {
        // 获取bundle
        let bundle: AssetManager.Bundle = await this.loadBundle(bundle_name);

        // 获取资源的Promise列表
        return new Promise<T>((resolve, reject) => {
            let asset = bundle.get(resName);
            if (asset) {
                this.addRef(asset);
                resolve(asset as T);
            }
            else {
                bundle.load(resName, assetType, (err, asset: T) => {
                    if (err) {
                        return error(err);
                    }
                    this.addRef(asset);
                    resolve(asset);
                });
            }
        });
    }

    /**
     * 加载多个资源
     * @param bundle_name    bundle名
     * @param res_list       bundle下的资源名列表
     * @param callback       加载完每组资源的回调函数
     */
    async loadResList(load_list: LoadList, callback?: Function) {
        let bundle_name: string = load_list.bundle_name
        let res_list: Map<AssetType, string[]> = load_list.res_list

        // 获取bundle
        let bundle: AssetManager.Bundle = await this.loadBundle(bundle_name);

        // 获取资源的Promise列表
        let promises: Array<Promise<Asset[]>> = new Array<Promise<Asset[]>>()
        res_list.forEach((resPaths: string[], resType) => {
            let promise = new Promise<Asset[]>((resolve, reject) => {
                bundle.load(resPaths, resType, (err, assets: Asset[]) => {
                    if (err) {
                        return error(err);
                    }

                    this.addRef(assets);
                    resolve(assets);

                    if (callback) {
                        callback(assets)
                    }

                    console.log(`load res: type:【${resType.name}】=> res_list:【${resPaths}】`);
                })
            });

            promises.push(promise);
        })

        let result = await Promise.all(promises);

        return result
    }

    /**
     * 加载多个资源
     * @param load_lists    加载列表，多列表
     * @param callback      加载完每组资源的回调函数
     */
    async loadResLists(load_lists: LoadList[], callback?: Function) {
        let iterator = load_lists.values()
        let r: IteratorResult<LoadList, LoadList>;
        while (r = iterator.next(), !r.done) {
            await this.loadResList(r.value, callback)
        }
    }

    /**
     * 通过资源相对路径释放资源
     * @param asset         资源对象
     * @param assetType     资源类型
     * @param path          资源路径
     * @param bundle_name    bundle包名
     */
    release(asset: Asset);
    release(path: string, assetType?: AssetType, bundle_name?: string);
    release(pathOrAsset: any, assetType: AssetType = Asset, bundle_name: string = "resources") {
        if (pathOrAsset instanceof Asset) {
            this.decRef(pathOrAsset);
        }
        else if (typeof pathOrAsset === "string") {
            let bundle = assetManager.getBundle(bundle_name);
            if (bundle) {
                let asset = bundle.get(pathOrAsset, assetType);
                if (asset) {
                    this.decRef(asset)
                }
            }
        }
    }

    releaseByLoadList(load_list: LoadList[]) {
        load_list.forEach((load_list: LoadList) => {
            let bundle_name: string = load_list.bundle_name
            let res_list: Map<AssetType, string[]> = load_list.res_list
            let bundle = assetManager.getBundle(bundle_name);
            if (bundle) {
                res_list.forEach((pathList: string[], assetType: AssetType) => {
                    pathList.forEach((path: string) => {
                        let asset = bundle.get(path, assetType);
                        if (asset) {
                            this.decRef(asset)
                        }
                    })
                })
            }
        })
    }

    /** 增加资源引用计数 */
    addRef(assets: Asset | Array<Asset>) {
        if (assets instanceof Asset) {
            assets.addRef();
            console.log(assets.name + ":" + assets.refCount)
        }
        else if (assets instanceof Array) {
            assets.forEach((asset: Asset) => {
                asset.addRef();
                console.log(asset.name + ":" + asset.refCount)
            })
        }
    }

    /** 减少资源引用计数 */
    decRef(assets: Asset | Array<Asset>) {
        if (assets instanceof Asset) {
            assets.decRef();
            console.log(assets.name + ":" + assets.refCount)
        }
        else if (assets instanceof Array) {
            assets.forEach((asset: Asset) => {
                asset.decRef();
                console.log(asset.name + ":" + asset.refCount)
            })
        }
    }


    /**
     * 获取资源
     * @param path          资源路径
     * @param type          资源类型
     * @param bundle_name    远程资源包名
     */
    get<T extends Asset>(path: string, type?: __private._cocos_core_asset_manager_shared__AssetType<T> | null, bundle_name: string = "resources"): T | null {
        let bundle: AssetManager.Bundle | null = assetManager.getBundle(bundle_name);
        let asset = bundle!.get(path, type);
        if (!asset) {
            warn("no asset bundle:" + bundle_name + " asset:" + path);
        }

        return asset
    }

    /** 打印缓存中所有资源信息 */
    dump() {
        assetManager.assets.forEach((value: Asset, key: string) => {
            console.log(assetManager.assets.get(key));
        })
        console.log(`当前资源总数:${assetManager.assets.count}`);
    }

    /**加载进度回调 */
    progressCallBack() {
        let total_num = 0;
        let load_num = 0;
        white_res.forEach((load_list: LoadList) => {
            total_num += load_list.res_list.size;
        })

        let callback = (assets: Asset[]) => {
            load_num += 1;
            let progress = load_num / total_num;
            dh.eventManager.dispatchEvent(EventType.LoadResProgress, progress);
        }

        return callback
    }
}