declare namespace WeApp {
    interface wx {
        /**显示消息提示框 */
        showToast(param: ToastParam): void;
        /**隐藏消息提示框 */
        hideToast(): void;
        /**显示模态弹窗 */
        showModal(param: ModalParam): void;
        /**显示操作菜单 */
        showActionSheet(param: ActionSheetParam): void;
        /**显示 loading 提示框 */
        showLoading(param: LoadingParam): void;
        /**隐藏消息提示框 */
        hideLoading(): void;

    }
    interface ToastParam extends CallbackParam {
        /**提示的内容 */
        title: string;
        /**图标 只支持 success|loading */
        icon?: string;
        /**自定义图标的本地路径 image 的优先级高于 icon */
        image?: string;
        /**提示的延迟时间 单位毫秒 默认 1500 最大为10000 */
        duration?: number;
        /**是否显示透明蒙层 防止触摸穿透 默认 false */
        mask?: boolean;
    }
    interface ModalParam extends CallbackParam {
        /**提示的标题 */
        title: string;
        /**提示的内容 */
        content: string;
        /**是否显示取消按钮 默认为 false */
        showCancel?: boolean;
        /**取消按钮的文字 默认为 取消 最多 4 个字符 */
        cancelText?: string;
        /**取消按钮的文字颜色 默认为 #000000 */
        cancelColor?: string;
        /**确定按钮的文字 默认为 确定 最多 4 个字符 */
        confirmText?: string;
        /**确定按钮的文字颜色 默认为 #3CC51F */
        confirmColor?: string;
        /**
         * 接口调用成功的回调函数
         * 返回res.confirm==1时 表示用户点击确定按钮
         */
        success?: (res?: { confirm: boolean }) => void;
    }
    interface LoadingParam extends CallbackParam {
        title: string;
        mask: boolean;
    }
    interface ActionSheetParam extends CallbackParam {
        /**按钮的文字数组 数组长度最大为10个 */
        itemList: Array<string>;
        /**按钮的文字颜色 默认为 #000000 */
        itemColor?: string;
        success?: (res?: ActionSheetResponse) => void;
    }
    interface ActionSheetResponse extends CallbackResult {
        /**用户是否取消选择 */
        cancel: boolean;
        /**用户点击的按钮 从上到下的顺序 从0开始 */
        tapIndex: number;
    }
}