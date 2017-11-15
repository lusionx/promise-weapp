declare namespace WeApp {
    interface wx {
        /**获取用户过去三十天微信运动步数 需要先调用 wx.login 接口 */
        getWeRunData(param: GetWeRunDataParam): void;
    }
    interface GetWeRunDataParam extends CallbackParam {
        success?: (res: { errMsg: string; encryptedData: string }) => void;
    }
}