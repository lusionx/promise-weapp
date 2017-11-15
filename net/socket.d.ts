declare namespace WeApp {
    interface wx {
        /**
         * 创建 WebSocket 连接
         * 一个微信小程序同时只能有一个 WebSocket 连接 如果当前已存在一个 WebSocket 连接 会自动关闭该连接 并重新创建一个 WebSocket 连接
         */
        connectSocket(param: ConnectSocketParam): void;
        /**监听 WebSocket 打开 */
        onSocketOpen(callback: (res?: any) => void): void;
        /**监听 WebSocket 错误 */
        onSocketError(callback: (res?: any) => void): void;
        /**
         * 发送 WebSocket 消息
         * 通过 WebSocket 连接发送数据 需要先 wx.connectSocket 并在 wx.onSocketOpen 回调之后才能发送
        */
        sendSocketMessage(message: SocketMessage): void;
        /**接受 WebSocket 消息 */
        onSocketMessage(callback: (res?: { data: string | ArrayBuffer }) => void): void;
        /**关闭 WebSocket 连接 */
        closeSocket(param: CloseSocketParam): void;
        /**监听 WebSocket 关闭 */
        onSocketClose(callback: (res?: any) => void): void;
    }
    interface ConnectSocketParam extends CallbackParam {
        /**开发者服务器接口地址 必须是 HTTPS 协议 且域名必须是后台配置的合法域名 */
        url: string;
        /**请求的数据 */
        data?: Object;
        /**	HTTP Header header 中不能设置 Referer */
        header?: Object;
        /**默认是GET 有效值为: OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE,CONNECT */
        method?: string;
        /**子协议数组 */
        protocols?: Array<string>;
    }
    interface SocketMessage extends CallbackParam {
        /**需要发送的内容 */
        data: string | ArrayBuffer;
    }
    interface CloseSocketParam extends CallbackParam {
        /**一个数字值表示关闭连接的状态号 表示连接被关闭的原因 如果这个参数没有被指定 默认的取值是1000 */
        code?: number;
        /**一个可读的字符串 表示连接被关闭的原因 这个字符串必须是不长于123字节的UTF-8 文本 */
        reason?: string;
    }
}