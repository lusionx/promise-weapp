/**https://github.com/Emeryao/typed-we-app */

/**注册一个小程序 */
declare function App(param: WeApp.AppParam): void;

/**注册一个页面 */
declare function Page(param: WeApp.PageParam): void;

/**全局函数 可以获取到小程序实例 */
declare function getApp(): any;

/**获取当前页面栈的实例 以数组形式按栈的顺序给出 第一个元素为首页 最后一个元素为当前页面 */
declare function getCurrentPages(): void;

/**全局wxapi入口 */
declare var wx: WeApp.wx;

declare namespace WeApp {
    interface wx {
        /**隐藏键盘 */
        hideKeyboard(): void;
        /**将页面滚动到目标位置 单位px */
        pageScrollTo(scrollTop: number): void;
    }
}