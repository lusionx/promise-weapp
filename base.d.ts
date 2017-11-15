declare namespace WeApp {
    interface wx {
        /**将 ArrayBuffer 数据转成 Base64 字符串 */
        arrayBufferToBase64(data: ArrayBuffer): string;
        /**将 Base64 字符串转成 ArrayBuffer 数据 */
        base64ToArrayBuffer(data: string): ArrayBuffer;
    }
    interface CallbackParam {
        /**接口调用成功的回调函数 */
        success?: (res?: any) => void;
        /**接口调用失败的回调函数 */
        fail?: (res?: any) => void;
        /**接口调用结束的回调函数(调用成功/失败都会执行) */
        complete?: Function;
    }
    interface CallbackResult {
        /** 调用wx.**Sync 时没有此字段 */
        errMsg: string
    }
    interface CallbackWithErrMsgParam extends CallbackParam {
        success?: (res: CallbackResult) => void;
    }
    /**
     * desc https://mp.weixin.qq.com/debug/wxadoc/dev/api/authorize-index.html
     */
    type ScopeKey = 'scope.userInfo' | 'scope.userLocation' | 'scope.address' | 'scope.invoiceTitle' | 'scope.werun' | 'scope.record' | 'scope.writePhotosAlbum'
    interface Scope {
        [key: string]: boolean
        'scope.userInfo': boolean
        'scope.userLocation': boolean
        'scope.address': boolean
        'scope.invoiceTitle': boolean
        'scope.werun': boolean
        'scope.record': boolean
        'scope.writePhotosAlbum': boolean
    }
}