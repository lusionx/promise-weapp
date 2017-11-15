declare namespace WeApp {
    interface wx {
        /**获取第三方平台自定义的数据字段 */
        getExtConfig(param: ExtConfigParam): void
        /**获取第三方平台自定义的数据字段的同步接口 */
        getExtConfigSync(): ExtConfigResult
        /**设置是否打开调试开关 此开关对正式版也能生效 */
        setEnableDebug(param: SetEnableDebugParam): void;
    }
    interface ExtConfigResult extends CallbackResult {
        extConfig: object
    }
    interface ExtConfigParam extends CallbackParam {
        success: (res: ExtConfigResult) => void;
    }
    interface SetEnableDebugParam extends CallbackWithErrMsgParam {
        enableDebug: boolean;
    }
}