declare namespace WeApp {
    interface wx {
        /**保留当前页面，跳转到应用内的某个页面 */
        navigateTo(param: NavigateParam): void;
        /**关闭当前页面，跳转到应用内的某个页面 */
        redirectTo(param: NavigateParam): void;
        /**关闭当前页面，返回上一页面或多级页面 */
        navigateBack(param?: { /**返回的页面数 如果 delta 大于现有页面数 则返回到首页 默认1 */delta: number }): void;
        /**关闭所有页面 打开到应用内的某个页面 */
        reLaunch(param: NavigateParam): void;
        /**跳转到 tabBar 页面 并关闭其他所有非 tabBar 页面 */
        switchTab(param: NavigateParam): void;
    }
    interface NavigateParam extends CallbackParam {
        /**需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数 eg. path?key=value&key2=value2 */
        url: string;
    }
}