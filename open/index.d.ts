declare namespace WeApp {
    interface wx {
        /**登录 */
        login(param: LoginParam): void;
        /**获取用户信息 */
        getUserInfo(param: UserInfoParam): void;
        /**检查登陆态是否过期 */
        checkSession(param: CallbackParam): void;
        /**提前授权 */
        authorize(param: AuthorizeParam): void;
    }
    interface LoginParam extends CallbackParam {
        success?: (res: LoginResult) => void;
    }
    interface LoginResult extends CallbackResult {
        /**
         * 用户允许登录后
         * 回调内容会带上code(有效期五分钟)
         * 开发者需要将code发送到开发者服务器后台
         * 使用code换取session_key api
         * 将code换成openid和session_key
         */
        code: string
    }
    interface UserInfoParam extends CallbackParam {
        /**是否带上登录态信息
         * 当 withCredentials 为 true 时 要求此前有调用过 wx.login 且登录态尚未过期
         * 此时返回的数据会包含 encryptedData iv 等敏感信息
         * 当 withCredentials 为 false 时不要求有登录态
         * 返回的数据不包含 encryptedData iv 等敏感信息
         */
        withCredentials?: boolean;
        /**指定返回用户信息的语言 zh_CN 简体中文 zh_TW 繁体中文 en 英文 */
        lang?: string;
        success?: (res?: UserInfoResult) => void;
    }
    interface UserInfoResult extends CallbackResult {
        /**	用户信息对象 不包含 openid 等敏感信息 */
        userInfo: {
            avatarUrl: string
            city: string
            country: string
            gender: number
            language: string
            province: string
            nickName: string
        }
        /**不包括敏感信息的原始数据字符串 用于计算签名 */
        rawData: string
        /**使用sha1(rawData + sessionkey) 得到字符串 用于校验用户信息 */
        signature: string
        /**包括敏感数据在内的完整用户信息的加密数据 */
        encryptData: string
        /**加密算法的初始向量 */
        iv: string
    }
    interface AuthorizeParam extends CallbackParam {
        scope: ScopeKey
        success: (res: CallbackResult) => void
    }
}