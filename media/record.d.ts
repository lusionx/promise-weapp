declare namespace WeApp {
    interface wx {
        /**
         * 开始录音
         * 当主动调用wx.stopRecord 或者录音超过1分钟时自动结束录音 返回录音文件的临时文件路径
         */
        startRecord(param: RecordParam): void;
        /**
         * 结束录音
         * 主动调用停止录音
         */
        stopRecord(): void;
        /**获取全局唯一的录音管理器 */
        getRecorderManager(): RecorderManager
    }
    interface RecordParam extends CallbackParam {
        duration?: number;
        success?: (res?: { tempFilePath: string }) => void;
    }
    interface RecorderManager {
        /**开始录音 */
        start(options: RecorderManagerStartOption): void;
        /**暂停录音 */
        pause(): void;
        /**继续录音 */
        resume(): void;
        /**停止录音 */
        stop(): void;
        /**录音开始事件 */
        onStart: () => void;
        /**录音暂停事件 */
        onPause: () => void;
        /**录音停止事件 会回调文件地址 */
        onStop: (res?: { tempPath: string }) => void;
        /**已录制完指定帧大小的文件 会回调录音分片结果数据。如果设置了 frameSize  则会回调此事件 */
        onFrameRecorded: (res?: { frameBuffer: ArrayBuffer; isLastFrame: boolean }) => void;
        /**录音错误事件 会回调错误信息 */
        onError: (res?: { errMsg: string }) => void;
    }
    interface RecorderManagerStartOption {
        /**
         * 指定录音的时长 单位 ms  如果传入了合法的 duration  在到达指定的 duration 后会自动停止录音 最大值 600000(10 分钟),默认值 60000(1分钟)
         */
        duration?: number;
        /**采样率 */
        sampleRate?: 8000 | 16000 | 44100;
        /**录音通道数 */
        numberOfChannels?: 1 | 2;
        encodeBitRate?: 8000 | 11025 | 12000 | 16000 | 22050 | 24000 | 32000 | 44100 | 48000;
        /**音频格式 */
        format?: 'aac' | 'mp3';
        /**指定帧大小 单位 KB 传入 frameSize 后 每录制指定帧大小的内容后 会回调录制的文件内容 不指定则不会回调 暂仅支持 mp3 格式  */
        frameSize?: number;
    }
}