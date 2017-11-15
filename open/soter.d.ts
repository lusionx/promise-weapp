declare namespace WeApp {
    interface wx {
        /**
         * @since 1.5.0
         * @description 获取本机支持的 SOTER 生物认证方式
         */
        checkIsSupportSoterAuthentication(param: CheckIsSupportSoterAuthenticationParam): never;
        /**
         * @since 1.5.0
         * @description 开始 SOTER 生物认证
         */
        startSoterAuthentication(param: StartSoterAuthenticationParam): never;
        /**获取设备内是否录入如指纹等生物信息的接口 */
        checkIsSoterEnrolledInDevice(param: CheckIsSoterEnrolledInDeviceParam): never;
    }
    interface CheckIsSupportSoterAuthenticationParam extends CallbackParam {
        success?: (res: { supportMode: Array<'fingerPrint' | 'facial' | 'speech'>, errMsg: string; }) => void;
    }
    interface StartSoterAuthenticationParam extends CallbackParam {
        /**请求使用的可接受的生物认证方式 */
        requestAuthModes: Array<string>;
        /**挑战因子 挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键是别信息 将作为result_json的一部分 供调用者识别本次请求 */
        challenge: string;
        /**验证描述 即识别过程中显示在界面上的对话框提示内容 */
        authContent?: string;
        success?: (res: { errCode: number; authMode: string; resultJSON: string; resultJSONSignature: string; errMsg: string; }) => void;
    }
    interface CheckIsSoterEnrolledInDeviceParam extends CallbackParam {
        checkAuthMode: 'fingerPrint' | 'facial' | 'speech';
        success?: (res: { isEnrolled: boolean, errMsg: string; }) => void;
    }
}