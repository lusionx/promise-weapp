declare namespace WeApp {
    interface wx {
        /**获取网络类型 */
        getNetworkType(param: NetworkTypeParam): void;
        /**监听网络状态变化 */
        onNetworkStatusChange(callback: (res: { isConnected: boolean; networkType: string; }) => void): void;
    }
    interface NetworkTypeResult extends CallbackResult {
        /**返回网络类型2g|3g|4g|wifi */
        networkType: string
    }
    interface NetworkTypeParam extends CallbackParam {
        success: (res: NetworkTypeResult) => void;
    }
}