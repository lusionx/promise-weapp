declare namespace WeApp {
    interface wx {  // 数据 API 列表
        /**获取本地数据缓存 */
        getStorage(param: GetStorageParam): void;
        /**从本地缓存中同步获取指定 key 对应的内容 */
        getStorageSync(key: string): any;
        /**
         * 设置本地数据缓存
         * 将数据存储在本地缓存中指定的 key 中会覆盖掉原来该 key 对应的内容 这是一个异步接口
         */
        setStorage(param: SetStorageParam): void;
        /**将 data 存储在本地缓存中指定的 key 中 会覆盖掉原来该 key 对应的内容 这是一个同步接口 */
        setStorageSync(key: string, data: any): void;
        /**从本地缓存中异步移除指定key */
        removeStorage(param: RemoveStorageParam): void;
        /**从本地缓存中同步移除指定key */
        removeStorageSync(key: string): void;
        /**清理本地数据缓存 */
        clearStorage(): void;
        /**同步清理本地数据缓存 */
        clearStorageSync(): void;
        /**异步获取当前storage的相关信息 */
        getStorageInfo(pram: StorageInfoParam): void;
        /**同步获取当前storage的相关信息 */
        getStorageInfoSync(): StorageInfo;
    }
    interface SetStorageParam extends CallbackParam {
        /**本地缓存中的指定的 key */
        key: string;
        /**需要存储的内容 */
        data: any;
    }
    interface GetStorageParam extends CallbackParam {
        /**本地缓存中的指定的 key */
        key: string;
        success: (res?: { data: any }) => void;
    }
    interface RemoveStorageParam extends CallbackParam {
        key: string;
        success: (res?: { data: any }) => void;
    }
    interface StorageInfoParam extends CallbackParam {
        success: (res?: { data: StorageInfo }) => void;
    }
    interface StorageInfo extends CallbackResult {
        /**当前storage中所有的key */
        keys: Array<string>;
        /**当前占用的空间大小 单位kb */
        currentSize: number;
        /**限制的空间大小 单位kb */
        limitSize: number;
    }
}