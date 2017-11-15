declare namespace WeApp {
    interface PageParam {
        /**
         * 设置该页面的分享信息
         * * 只有定义了此事件处理函数 右上角菜单才会显示“分享”按钮
         * * 用户点击分享按钮的时候会调用
         * * 此事件需要 return 一个 Object 用于自定以分享内容
         */
        onShareAppMessage?: (res: PageShareParam) => PageShareData;
    }
    /** 在 Page 中定义 onShareAppMessage 函数参数 */
    interface PageShareParam {
        /**
         * @description 转发事件来源。button：页面内转发按钮；menu：右上角转发菜单
         * @since 1.2.4 */
        from: string
        /**
         * @description 如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined
         * @since 1.2.4 */
        target: any
    }
    /** 在 Page 中定义 onShareAppMessage 函数返回值 */
    interface PageShareData extends CallbackParam {
        /**分享标题 默认 当前小程序名称 */
        title?: string;
        /**分享描述 默认 当前小程序名称 */
        desc?: string;
        /**分享路径 当前页面 path 必须是以 / 开头的完整路径 */
        path?: string;
        /**自定义图片路径 可以是本地文件路 代码包文件路径或者网络图片路径 支持PNG及JPG 不传入 imageUrl 则使用默认截图 */
        imageUrl?: string;
        success?: (res: { errMsg: string, shareTickets?: string[] }) => void;
    }
}