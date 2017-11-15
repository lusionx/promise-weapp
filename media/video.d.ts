declare namespace WeApp {
    interface wx {
        /**从相册选择视频 或者拍摄 */
        chooseVideo(param: ChooseVideoParam): void;
        /**保存视频到系统相册 */
        saveVideoToPhotosAlbum(param: SaveVideoToPhotosAlbumParam): void;
        /**创建并返回 video 上下文 videoContext 对象 */
        createVideoContext(videoId: string): VideoContext;
    }
    interface ChooseVideoParam extends CallbackParam {
        /**album 从相册选视频 camera 使用相机拍摄 默认为:['album', 'camera'] */
        sourceType?: Array<string>;
        /**
         * @since 1.6.0
         * @description 是否压缩所选的视频源文件 默认值为true 需要压缩
         */
        compressed?: boolean;
        /**拍摄视频最长拍摄时间 单位秒 最长支持60秒 */
        maxDuration?: number;
        /**前置或者后置摄像头 默认为前后都有 即:['front', 'back'] */
        camera?: Array<string>;
        /**接口调用成功 返回视频文件的临时文件路径 */
        success?: (res?: VideoInfo) => void;
    }
    interface VideoInfo extends CallbackResult {
        /**选定视频的临时文件路径 */
        tempFilePath: string;
        /**选定视频的时间长度 */
        duration: number;
        /**选定视频的数据量大小 */
        size: number;
        /**返回选定视频的长 */
        height: number;
        /**返回选定视频的宽 */
        width: number;
    }
    interface SaveVideoToPhotosAlbumParam extends CallbackParam {
        /**图片文件路径 可以是临时文件路径也可以是永久文件路径 */
        filePath: string;
    }
    interface VideoContext {
        /**播放 */
        play(): void;
        /**暂停 */
        pause(): void;
        /**跳转到指定位置 单位 s */
        seek(position: number): void;
        /**发送弹幕 danmu 包含两个属性 text,color */
        sendDanmu(danmu: { text: string, color: string }): void;
        /**设置倍速播放 支持的倍率有 0.5/0.8/1.0/1.25/1.5 */
        playbackRate(rate: number): void;
        /**进入全屏 */
        requestFullScreen(): void;
        /**退出全屏 */
        exitFullScreen(): void;
    }
}