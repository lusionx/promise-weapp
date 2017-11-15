declare namespace WeApp {
    interface wx {
        /**开始搜索附近的iBeacon设备 */
        startBeaconDiscovery(param: CallbackParam): void;
        /**停止搜索附近的iBeacon设备 */
        stopBeaconDiscovery(param: CallbackParam): void;
        /**获取所有已搜索到的iBeacon设备 */
        getBeacons(param: BeaconsParam): void;
        /**监听 iBeacon 设备的更新事件 */
        onBeaconUpdate(callback: (res: { beacons: Array<IBeacon> }) => void): void;
        /**监听 iBeacon 服务的状态变化 */
        onBeaconServiceChange(callback: (res: { /**服务目前是否可用 */available: boolean; /**目前是否处于搜索状态 */discovering: boolean }) => void): void;
    }
    interface BeaconsParam extends CallbackParam {
        success: (res: { errMsg: string; beacons: Array<IBeacon> }) => void;
    }
    interface IBeacon {
        /**	iBeacon 设备广播的 uuid */
        uuid: string;
        /**	iBeacon 设备的主 id */
        major: string;
        /**iBeacon 设备的次 id */
        minor: string;
        /**	表示设备距离的枚举值 */
        proximity: number;
        /**	iBeacon 设备的距离 */
        accuracy: number;
        /**表示设备的信号强度 */
        rssi: number;
    }
}