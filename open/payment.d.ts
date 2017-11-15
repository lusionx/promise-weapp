declare namespace WeApp {
    interface wx {
        /**发起微信支付 */
        requestPayment(param: RequestPaymentParam): void;
    }
    interface RequestPaymentParam extends CallbackParam {
        /**时间戳从1970年1月1日00: 00:00至今的秒数 即当前的时间 */
        timeStamp: number;
        /**随机字符串 长度为32个字符以下 */
        nonceStr: string;
        /**统一下单接口返回的prepay_id参数值 提交格式如 prepay_id=* */
        package: string;
        /**签名算法 暂支持 MD5 */
        signType: string;
        /**签名  具体签名方案参见微信公众号支付帮助文档 */
        paySign: string;
    }
}