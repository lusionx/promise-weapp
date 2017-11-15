declare namespace WeApp {
    interface wx {
        /**显示分享按钮 */
        showShareMenu(param: ShareMenuParam): void;
        /**隐藏分享按钮 */
        hideShareMenu(param: CallbackParam): void;
        /**获取分享详细信息 */
        getShareInfo(param: ShareInfoParam): void;
        /**更新转发属性 */
        updateShareMenu(param: ShareMenuParam): void;
    }
    interface ShareInfoParam extends CallbackParam {
        shareTicket: string;
        success: (res: {
            /**错误信息 */
            errMsg: string;
            /**不包括敏感信息的原始数据字符串 用于计算签名 */
            rawData: string;
            /**使用sha1(rawData+sessionkey)得到字符串 用于校验分享信息 */
            signature: string;
            /**包括敏感数据在内的完整分享信息的加密数据 */
            encryptedData: string;
            /**加密算法的初始向量 */
            iv: string;
        }) => void;
    }
    interface ShareMenuParam extends CallbackParam {
        /**是否使用带 shareTicket 的分享 */
        withShareTicket?: boolean;
    }
}