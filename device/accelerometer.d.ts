declare namespace WeApp {
    interface wx { // 加速计
        /**
         * 监听重力感应数据
         * 频率 5次/秒
         */
        onAccelerometerChange(callback: (res?: AccelerometerInfo) => void): void;
        /**开始监听加速度数据 */
        startAccelerometer(param: CallbackParam): void;
        /**停止监听加速度数据 */
        stopAccelerometer(param: CallbackParam): void;
    }
    interface AccelerometerInfo extends CallbackResult {
        /**X 轴 */
        x: number;
        /**Y 轴 */
        y: number;
        /**Z 轴 */
        z: number;
    }
}