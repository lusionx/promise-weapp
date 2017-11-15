declare namespace WeApp {
    interface wx {
        /**创建并返回 camera 上下文 cameraContext 对象 cameraContext 与页面的 camera 组件绑定 一个页面只能有一个camera 通过它可以操作对应的 <camera/> 组件 */
        createCameraContext(): CameraContext;
    }
    interface CameraContext {
        /**拍照 可指定质量 成功则返回图片 */
        takePhoto(param: CameraContextTakePhotoParam): void;
        /**开始录像 */
        startRecord(param: CameraContextStartRecordParam): void;
        /**结束录像 成功则返回封面与视频 */
        stopRecord(param: CameraContextStopRecord): void;
    }

    interface CameraContextTakePhotoParam extends CallbackParam {
        /**成像质量 值为high, normal, low 默认normal */
        quality?: 'high' | 'normal' | 'low';
        success?: (res?: { tempImagePath: string }) => void;
    }

    interface CameraContextStartRecordParam extends CallbackParam {
        /**超过30s或页面onHide时会结束录像 */
        timeoutCallback?: (res?: { tempThumbPath: string; tempVideoPath: string }) => void;
    }

    interface CameraContextStopRecord extends CallbackParam {
        success?: (res?: { tempThumbPath: string; tempVideoPath: string }) => void;
    }
}