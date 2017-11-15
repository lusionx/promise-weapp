declare namespace WeApp {
    interface wx {
        /**获取音乐播放状态 */
        getBackgroundAudioPlayerState(param: GetBackgroundAudioPlayerStateParam): void;
        /**播放音乐 */
        playBackgroundAudio(param: PlayBackgroundAudioParam): void;
        /**暂停播放音乐 */
        pauseBackgroundAudio(): void;
        /**控制音乐播放进度 */
        seekBackgroundAudio(param: SeekBackgroundAudioParam): void;
        /**停止播放音乐 */
        stopBackgroundAudio(): void;
        /**监听音乐开始播放 */
        onBackgroundAudioPlay(callback: (res?: any) => void): void;
        /**监听音乐暂停 */
        onBackgroundAudioPause(callback: (res?: any) => void): void;
        /**监听音乐结束 */
        onBackgroundAudioStop(callback: (res?: any) => void): void;
        /**获取全局唯一的背景音频管理器 */
        getBackgroundAudioManager(): BackgroundAudioManager;
        /**创建并返回 audio 上下文 audioContext 对象 */
        createAudioContext(audioId: string): AudioContext;
        /**
         * @since 1.6.0
         * @description 创建并返回内部 audio 上下文 innerAudioContext 对象 本接口是 wx.createAudioContext 升级版
         */
        createInnerAudioContext(): InnerAudioContext;
    }
    interface GetBackgroundAudioPlayerStateParam extends CallbackParam {
        success?: (res?: BackgroundAudioPlayerState) => void;
    }
    interface BackgroundAudioPlayerState extends CallbackResult {
        /**选定音频的长度 单位:s 只有在当前有音乐播放时返回 */
        duration: number;
        /**选定音频的播放位置 单位:s 只有在当前有音乐播放时返回 */
        currentPosition: number;
        /**	播放状态 2:没有音乐在播放 1:播放中 0:暂停中 */
        status: number;
        /**音频的下载进度 整数 80 代表 80% 只有在当前有音乐播放时返回 */
        downloadPercent: number;
        /**歌曲数据链接 只有在当前有音乐播放时返回 */
        dataUrl: string;
    }
    interface PlayBackgroundAudioParam extends CallbackParam {
        /**音乐链接 */
        dataUrl: string;
        /**音乐标题 */
        title?: string;
        /**封面URL */
        coverImgUrl?: string;
    }
    interface SeekBackgroundAudioParam extends CallbackParam {
        /**音乐位置 单位:秒 */
        position: number;
    }
    interface BackgroundAudioManager {
        /**	当前音频的长度 单位 s 只有在当前有合法的 src 时返回 */
        readonly duration: number;
        /**	当前音频的播放位置 单位 s 只有在当前有合法的 src 时返回 */
        readonly currentTime: number;
        /**	当前是是否暂停或停止状态 true 表示暂停或停止 false 表示正在播放 */
        readonly paused: boolean;
        /**音频的数据源 默认为空字符串 当设置了新的 src 时 会自动开始播放 */
        src: string;
        /** 音频开始播放的位置 单位 s */
        startTime: number;
        /**音频缓冲的时间点仅保证当前播放时间点到此时间点内容已缓冲 */
        readonly buffered: number;
        /** 音频标题 用于做原生音频播放器音频标题 原生音频播放器中的分享功能 分享出去的卡片标题 也将使用该值 */
        title: string;
        /**专辑名 原生音频播放器中的分享功能 分享出去的卡片简介 也将使用该值 */
        epname: string;
        /**歌手名 原生音频播放器中的分享功能 分享出去的卡片简介 也将使用该值 */
        singer: string;
        /**封面图url 用于做原生音频播放器背景图 原生音频播放器中的分享功能 分享出去的卡片配图及背景也将使用该图 */
        coverImgUrl: string;
        /** 页面链接 原生音频播放器中的分享功能 分享出去的卡片简介 也将使用该值 */
        webUrl: string;
        /**播放 */
        play(): void;
        /**暂停 */
        pause(): void;
        /**停止 */
        stop(): void;
        /**跳转到指定位置 单位 s */
        seek(position: number): void;
        /**背景音频进入可以播放状态 但不保证后面可以流畅播放 */
        onCanplay(callback: Function): void;
        /**背景音频播放事件 */
        onPlay(callback: Function): void;
        /**背景音频暂停事件 */
        onPause(callback: Function): void;
        /**背景音频停止事件 */
        onStop(callback: Function): void;
        /**背景音频自然播放结束事件 */
        onEnded(callback: Function): void;
        /**背景音频播放进度更新事件 */
        onTimeUpdate(callback: Function): void;
        /**用户在系统音乐播放面板点击上一曲事件 iOS only  */
        onPrev(callback: Function): void;
        /**用户在系统音乐播放面板点击下一曲事件 iOS only  */
        onNext(callback: Function): void;
        /**背景音频播放错误事件 */
        onError(callback: Function): void;
        /**音频加载中事件 当音频因为数据不足 需要停下来加载时会触发 */
        onWaiting(callback: Function): void;
    }
    interface AudioContext {
        /**设置音频的地址 */
        setSrc(src: string): void;
        /**播放 */
        play(): void;
        /**暂停 */
        pause(): void;
        /**跳转到指定位置 单位 s */
        seek(position: number): void;
    }
    interface InnerAudioContext {
        /**音频的数据链接 用于直接播放 */
        src: string;
        /**开始播放的位置 单位:s 默认 0 */
        startTime: number;
        /**是否自动开始播放 默认 false */
        autoplay: boolean;
        /**是否循环播放 默认 false */
        loop: boolean;
        /**是否遵循系统静音开关 当此参数为 false 时 即使用户打开了静音开关 也能继续发出声音 默认值 true */
        obeyMuteSwitch: boolean;
        /**当前音频的长度 单位:s 只有在当前有合法的 src 时返回 */
        readonly duration: number;
        /**当前音频的播放位置 单位:s 只有在当前有合法的 src 时返回 时间不取整 保留小数点后 6 位 */
        readonly currentTime: number;
        /**当前是是否暂停或停止状态 true 表示暂停或停止 false 表示正在播放 */
        readonly paused: boolean;
        /**音频缓冲的时间点 仅保证当前播放时间点到此时间点内容已缓冲 */
        readonly buffered: number;
        /**播放 */
        play(): void;
        /**暂停 */
        pause(): void;
        /**停止 */
        stop(): void;
        /**跳转到指定位置 单位 s */
        seek(position: number): void;
        /**销毁当前实例 */
        destroy(): void;
        /**音频进入可以播放状态 但不保证后面可以流畅播放 */
        onCanplay: () => void;
        /**音频播放事件 */
        onPlay: () => void;
        /**音频暂停事件 */
        onPause: () => void;
        /**音频停止事件 */
        onStop: () => void;
        /**音频自然播放结束事件 */
        onEnded: () => void;
        /**音频播放进度更新事件 */
        onTimeUpdate: () => void;
        /**音频播放错误事件 */
        onError: () => void;
        /**音频加载中事件 当音频因为数据不足 需要停下来加载时会触发 */
        onWaiting: () => void;
        /**音频进行 seek 操作事件 */
        onSeeking: () => void;
        /**音频完成 seek 操作事件 */
        onSeeked: () => void;
    }
}