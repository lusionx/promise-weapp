declare namespace WeApp {
    interface wx { // 罗盘
        /**
         * 监听罗盘数据
         * 频率 5次/秒
         */
        onCompassChange(callback: (res: CompassInfo) => void): void;
        startCompass(param: CallbackParam): void;
        stopCompass(param: CallbackParam): void;
    }
    interface CompassInfo extends CallbackResult {
        /**面对的方向度数 */
        direction: number;
    }
}