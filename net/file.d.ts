declare namespace WeApp {
    interface wx {
        /**
         * 上传文件
         * 将本地资源上传到开发者服务器
         * 如 页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后 可通过此接口将本地资源上传到指定服务器 客户端发起一个 HTTPS POST 请求 其中 Content-Type 为 multipart/form-data
         */
        uploadFile(param: UploadParam): UploadTask;
        /**
         * 下载文件
         * 下载文件资源到本地 客户端直接发起一个 HTTP GET 请求 把下载到的资源根据 type 进行处理 并返回文件的本地临时路径
         */
        downloadFile(param: DownloadParam): DownloadTask;
    }
    interface UploadParam extends CallbackParam {
        /**开发者服务器 url */
        url: string;
        /**要上传文件资源的路径 */
        filePath: string;
        /**文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 */
        name: string;
        /**HTTP 请求 Header , header 中不能设置 Referer */
        header?: Object;
        /**HTTP 请求中其他额外的 form data */
        formData?: Object;
    }

    interface UploadTask extends RequestTask {
        onProgressUpdate: (res: { progress: number; totalBytesSent: number; totalBytesExpectedToSend: number; }) => void
    }
    interface DownloadParam extends CallbackParam {
        /**下载资源的 url */
        url: string;
        /**
         * 下载资源的类型
         * 用于客户端识别处理 有效值: image|audio|video
         */
        type?: string;
        /**HTTP 请求 Header */
        header?: Object;
        /**	下载成功后以 tempFilePath 的形式传给页面 res = { tempFilePath: '文件的临时路径' } */
        success?: (res?: { tempFilePath: string }) => void
    }
    interface DownloadTask extends RequestTask {
        onProgressUpdate: (res: { progress: number; totalBytesWritten: number; totalBytesExpectedToWrite: number; }) => void;
    }
}