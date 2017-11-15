declare namespace WeApp {
    interface wx {
        /**设置是否保持常亮状态 仅在当前小程序生效 离开小程序后设置失效 */
        setKeepScreenOn(param: SetKeepScreenOnParam): void;
        /**获取屏幕亮度 */
        getScreenBrightness(param: GetScreenBrightnessParam): void;
        /**设置屏幕亮度 */
        setScreenBrightness(param: SetScreenBrightnessParam): void;
    }
    interface SetKeepScreenOnParam extends CallbackParam {
        keepScreenOn: boolean;
    }
    interface GetScreenBrightnessParam extends CallbackParam {
        success: (res: { errMsg: string, value: number }) => void;
    }
    interface SetScreenBrightnessParam extends CallbackParam {
        /**屏幕亮度值 范围 0~1 0 最暗 1 最亮 */
        value: number;
    }
}