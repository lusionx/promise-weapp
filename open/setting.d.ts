declare namespace WeApp {
    interface SettingResult extends CallbackResult {
        authSettting: Scope
    }
    interface SettingParam extends CallbackParam {
        success: (res: SettingResult) => void;
    }
    interface wx {
        /**调起客户端小程序设置界面 返回用户设置的操作结果 */
        openSetting(param: SettingParam): void;
        /**获取用户的当前设置 */
        getSetting(param: SettingParam): void;
    }
}