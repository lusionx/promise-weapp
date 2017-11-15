declare namespace WeApp {
    interface wx {
        // 网络 API 列表
        /**
         * 发起网络请求
         * 发起的是https请求
         * 一个微信小程序同时只能有5个网络请求连接
         */
        request(param: RequestParam): RequestTask
    }
    interface RequestTask {
        abort(): void;
    }
    interface RequestParam extends CallbackParam {
        /**开发者服务器接口地址 */
        url: string;
        /**请求的参数 */
        data?: Object | string;
        /**设置请求的 header,header 中不能设置 Referer */
        header?: Object
        /**默认为 GET 有效值:OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE,CONNECT */
        method?: string;
        /**收到开发者服务成功返回的回调函数 res = { data: '开发者服务器返回的内容' } */
        success?: (res?: HttpResponse) => void;
    }
    interface HttpResponse extends CallbackResult {
        data?: any;
        statusCode: number;
        header: any;
    }
}