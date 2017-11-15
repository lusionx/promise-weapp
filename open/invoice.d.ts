declare namespace WeApp {
    interface wx {
        /**
        * @since 1.5.0
        * @description 选择用户的发票抬头
        */
        chooseInvoiceTitle(param: ChooseInvoiceTitleParam): never;
    }
    interface ChooseInvoiceTitleParam extends CallbackParam {
        success?: (res: InvoiceTitle) => void;
    }
    interface InvoiceTitle {
        /**抬头类型 0 单位 1 个人 */
        type: string;
        /**抬头名称 */
        title: string;
        /**抬头税号 */
        taxNumber: string;
        /**单位地址 */
        companyAddress: string;
        /**手机号码 */
        telephone: string;
        /**银行名称 */
        bankName: string;
        /**银行账号 */
        bankAccount: string;
        /**接口调用结果 */
        errMsg: string;
    }
}