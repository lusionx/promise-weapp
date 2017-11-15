declare namespace WeApp {
    interface wx {
        /**设置系统剪贴板的内容 */
        setClipboardData(param: SetClipboardParam): void;
        /**获取系统剪贴板内容 */
        getClipboardData(param: GetClipboardParam): void;
    }
    interface SetClipboardParam extends CallbackParam {
        data: string;
    }
    interface GetClipboardParam extends CallbackParam {
        success: (res: ClipboardResult) => void
    }
    interface ClipboardResult extends CallbackResult {
        data: string
    }
}