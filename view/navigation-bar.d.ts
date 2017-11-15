declare namespace WeApp {
    interface wx {
        /**设置置顶信息 */
        setTopBarText(param: TopBarTextParam): void;
        /**设置当前页面标题 */
        setNavigationBarTitle(param: NavigationBarTitleParam): void;
        /**在当前页面显示导航条加载动画 */
        showNavigationBarLoading(): void;
        /**隐藏导航条加载动画 */
        hideNavigationBarLoading(): void;
        /**支持小程序修改标题栏颜色 */
        setNavigationBarColor(param: SetNavigationBarColorParam): void;
    }
    interface TopBarTextParam extends CallbackParam {
        /**置顶栏文字内容 */
        text: string;
    }
    interface NavigationBarTitleParam extends CallbackParam {
        /**页面标题 */
        title?: string;
    }
    interface SetNavigationBarColorParam extends CallbackParam {
        frontColor: string;
        backgroundColor: string;
        animation?: {
            duration?: number;
            timingFunc?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
        }
    }
}