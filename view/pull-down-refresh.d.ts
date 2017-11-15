declare namespace WeApp {
    interface wx {
        /**停止下拉刷新动画 */
        stopPullDownRefresh(): void;
        /**
         * @since 1.5.0
         * @description 开始下拉刷新 调用后触发下拉刷新动画 效果与用户手动下拉刷新一致
         */
        startPullDownRefresh(param: CallbackWithErrMsgParam): never;
    }
}