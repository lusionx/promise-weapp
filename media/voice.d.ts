declare namespace WeApp {
    interface wx {
        /**
         * 播放语音
         * 开始播放语音 同时只允许一个语音文件正在播放 如果前一个语音文件还没播放完 将中断前一个语音播放
         */
        playVoice(param: VoiceParam): void;
        /**
         * 暂停播放语音
         * 暂停正在播放的语音 再次调用wx.playVoice播放同一个文件时 会从暂停处开始播放 如果想从头开始播放 需要先调用 wx.stopVoice
         */
        pauseVoice(): void;
        /**结束播放语音 */
        stopVoice(): void;
    }
    interface VoiceParam extends CallbackParam {
        /**需要播放的语音文件的文件路径 */
        filePath: string
        duration: number
    }
}