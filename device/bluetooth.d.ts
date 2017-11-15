declare namespace WeApp {
    interface wx { // 蓝牙
                // 蓝牙相关
        /**初始化蓝牙适配器 */
        openBluetoothAdapter(param: CallbackParam): void;
        /**关闭蓝牙模块 调用该方法将断开所有已建立的链接并释放系统资源 */
        closeBluetoothAdapter(param: CallbackParam): void;
        /**获取本机蓝牙适配器状态 */
        getBluetoothAdapterState(param: BluetoothAdapterStateParam): void;
        /**监听蓝牙适配器状态变化事件 */
        onBluetoothAdapterStateChange(param: BluetoothAdapterStateChangeParam): void;
        /**开始搜寻附近的蓝牙外围设备 */
        startBluetoothDevicesDiscovery(param: BluetoothDevicesDiscoveryParam): void;
        /**停止搜寻附近的蓝牙外围设备 */
        stopBluetoothDevicesDiscovery(param: CallbackWithErrMsgParam): void;
        /**获取所有已发现的蓝牙设备 包括已经和本机处于连接状态的设备 */
        getBluetoothDevices(param: BluetoothDevicesParam): void;
        /**监听寻找到新设备的事件 */
        onBluetoothDeviceFound(callback: (devices: Array<BluetoothDevice>) => void): void;
        /**根据 uuid 获取处于已连接状态的设备 */
        getConnectedBluetoothDevices(param: ConnectedBluetoothDevicesParam): void;
        /**连接低功耗蓝牙设备 */
        createBLEConnection(param: BLEConnectionParam): void;
        /**断开与低功耗蓝牙设备的连接 */
        closeBLEConnection(param: BLEConnectionParam): void;
        /**监听低功耗蓝牙连接的错误事件 包括设备丢失 连接异常断开等等 */
        onBLEConnectionStateChange(callback: (res: { deviceId: string; connected: boolean }) => void): void;
        /**获取蓝牙设备所有 service */
        getBLEDeviceServices(param: BLEDeviceServicesParam): void;
        /**获取蓝牙设备所有 characteristic */
        getBLEDeviceCharacteristics(param: BLEDeviceCharacteristicsParam): void;
        /**读取低功耗蓝牙设备的特征值的二进制数据值 */
        readBLECharacteristicValue(parm: BLECharacteristicValueParam): void;
        /**向低功耗蓝牙设备特征值中写入二进制数据 */
        writeBLECharacteristicValue(param: WriteBLECharacteristicValueParam): void;
        /**启用低功耗蓝牙设备特征值变化时的 notify 功能 */
        notifyBLECharacteristicValueChange(param: BLECharacteristicValueChangedParam): void;
        /**监听低功耗蓝牙设备的特征值变化 必须先启用notify */
        onBLECharacteristicValueChange(callback: (res: { deviceId: string; connected: boolean; characteristicId: string; value: ArrayBuffer }) => void): void;
    }
    interface BluetoothAdapterStateParam extends CallbackParam {
        success?: (res?: { adapterState: AdapterState, /**成功：ok 错误：详细信息 */errMsg: string }) => void;
    }
    /**蓝牙适配器状态信息 */
    interface AdapterState {
        /**是否正在搜索设备 */
        discovering: boolean;
        /**蓝牙适配器是否可用 */
        available: boolean;
    }
    interface BluetoothAdapterStateChangeParam extends CallbackParam {
        success?: (res?: AdapterState) => void;
    }
    interface BluetoothDevicesDiscoveryParam extends CallbackParam {
        /**蓝牙设备主 service 的 uuid 列表 */
        services: Array<string>;
    }
    interface BluetoothDevicesParam extends CallbackParam {
        /**蓝牙设备主 service 的 uuid 列表 */
        services: Array<string>;
        success: (res: { devices: Array<BluetoothDevice>, /**成功：ok 错误：详细信息 */errMsg: string }) => void;
    }
    interface BluetoothDevice {
        /**	蓝牙设备名称 某些设备可能没有 */
        name: string;
        /**低功耗设备广播名称 某些设备可能没有 */
        localName: string;
        /**用于区分设备的 id */
        deviceId: string;
        /**当前蓝牙设备的信号强度 */
        RSSI: number;
        /**当前蓝牙设备的广播内容 */
        advertisData: ArrayBuffer;
    }
    interface ConnectedBluetoothDevicesParam extends CallbackParam {
        /**蓝牙设备主 service 的 uuid 列表 */
        services: Array<string>;
        success: (res: { devices: Array<{ /**蓝牙设备名称 某些设备可能没有 */name: string, /**用于区分设备的 id */deviceId: string }>, /**成功：ok 错误：详细信息 */errMsg: string }) => void;
    }
    interface BLEConnectionParam extends CallbackParam {
        /**蓝牙设备 id 参考 getDevices 接口 */
        deviceId: string;
    }
    interface BLEDeviceServicesParam extends CallbackParam {
        deviceId: string;
        success: (res: { services: Array<{ /**蓝牙设备服务的 uuid */uuid: string; /**该服务是否为主服务 */isPrimary: boolean }>; /**成功：ok 错误：详细信息 */errMsg: string }) => void;
    }
    interface BLEDeviceCharacteristicsParam extends CallbackParam {
        /**蓝牙设备 id 参考 device 对象 */
        deviceId: string;
        /**蓝牙服务 uuid */
        serviceId: string;
        success: (res: { characteristics: Array<{ uuid: string; properties: { read: boolean; write: boolean; notify: boolean; indicate: boolean; } }>; errMsg: string; }) => void;
    }
    interface BLECharacteristicValueParam extends CallbackParam {
        /**蓝牙设备 id 参考 device 对象 */
        deviceId: string;
        /**蓝牙服务 uuid */
        serviceId: string;
        /**蓝牙特征值的 uuid */
        characteristicId: string;
        success: (res: { characteristic: { characteristicId: string; serviceId: object; value: ArrayBuffer; }; errMsg: string; }) => void;
    }
    interface WriteBLECharacteristicValueParam extends CallbackParam {
        /**蓝牙设备 id */
        deviceId: string;
        /**蓝牙特征值对应服务的 uuid */
        serviceId: string;
        /**蓝牙特征值的 uuid */
        characteristicId: string;
        /**蓝牙设备特征值对应的二进制值 */
        value: ArrayBuffer;
    }
    interface BLECharacteristicValueChangedParam extends CallbackParam {
        /**蓝牙设备 id */
        deviceId: string;
        /**蓝牙特征值对应服务的 uuid */
        serviceId: string;
        /**蓝牙特征值的 uuid */
        characteristicId: string;
        state: boolean;
    }
}