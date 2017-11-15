declare namespace WeApp {
    interface wx {
        /**打开同一公众号下关联的另一个小程序 */
        navigateToMiniProgram(param: NavigateToMiniProgramParam): void;
        /**返回到上一个小程序 只有在当前小程序是被其他小程序打开时可以调用成功 */
        navigateBackMiniProgram(param: NavigateBackMiniProgramParam): void;
    }
    interface NavigateToMiniProgramParam extends CallbackWithErrMsgParam {
        /**要打开的小程序 appId*/
        ppId: string;
        /**打开的页面路径 如果为空则打开首页 */
        path?: string
        /**需要传递给目标小程序的数据 目标小程序可在 App.onLaunch() App.onShow() 中获取到这份数据 */
        extraData: object;
        /**要打开的小程序版本 有效值 develop trial release*/
        envVersion?: string;
    }
    interface NavigateBackMiniProgramParam extends CallbackWithErrMsgParam {
        /**需要返回给上一个小程序的数据 上一个小程序可在 App.onShow() 中获取到这份数据 */
        extraData: object;
    }
}