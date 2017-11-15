declare namespace WeApp {
    interface wx {
        /**调起客户端扫码界面 扫码成功后返回对应的结果 */
        scanCode(param: ScanCodeParam): void;
        /**监听用户主动截屏事件 用户使用系统截屏按键截屏时触发此事件 */
        onUserCaptureScreen(callback?: Function): void
        /**打电话 */
        makePhoneCall(param: PhoneCallParam): void;
        /**保存联系人到系统通讯录 */
        addPhoneContact(param: AddPhoneContactParam): void;
    }
    interface ScanCodeParam extends CallbackParam {
        /**是否只能从相机扫码 不允许从相册选择图片 */
        onlyFromCamera?: boolean;
        success?: (res: ScanCodeResult) => void;
    }
    interface ScanCodeResult extends CallbackResult {
        /**所扫码的内容 */
        result: string;
        /**所扫码的类型 */
        scanType: string;
        /**所扫码的字符集 */
        charSet: string;
        /**当所扫的码为当前小程序的合法二维码时 会返回此字段 内容为二维码携带的 path */
        path: string;
    }
    interface PhoneCallParam extends CallbackParam {
        /**需要拨打的电话号码 */
        phoneNumber: string;
    }
    interface AddPhoneContactParam extends CallbackParam {
        /**头像本地文件路径 */
        photoFilePath?: string;
        /**昵称 */
        nickName?: string;
        /**姓氏 */
        lastName?: string;
        /**中间名 */
        middleName?: string;
        /**名字 */
        firstName: string;
        /**	备注 */
        remark?: string;
        /**手机号 */
        mobilePhoneNumber?: string;
        /**微信号 */
        weChatNumber?: string;
        /**联系地址国家 */
        addressCountry?: string;
        /**联系地址省份 */
        addressState?: string;
        /**联系地址城市 */
        addressCity?: string;
        /**联系地址街道 */
        addressStreet?: string;
        /**联系地址邮政编码 */
        addressPostalCode?: string;
        /**公司 */
        organization?: string;
        /**职位 */
        title?: string;
        /**工作传真 */
        workFaxNumber?: string;
        /**工作电话 */
        workPhoneNumber?: string;
        /**公司电话 */
        hostNumber: string;
        /**电子邮件 */
        email?: string;
        /**网站 */
        url?: string;
        /**工作地址国家 */
        workAddressCountry?: string;
        /**工作地址省份 */
        workAddressState?: string;
        /**工作地址城市 */
        workAddressCity?: string;
        /**工作地址街道 */
        workAddressStreet?: string;
        /**工作地址邮政编码 */
        workAddressPostalCode?: string;
        /**住宅传真 */
        homeFaxNumber?: string;
        /**住宅电话 */
        homePhoneNumber?: string;
        /**住宅地址国家 */
        homeAddressCountry?: string;
        /**住宅地址省份 */
        homeAddressState?: string;
        /**住宅地址城市 */
        homeAddressCity?: string;
        /**住宅地址街道 */
        homeAddressStreet?: string;
        /**住宅地址邮政编码 */
        homeAddressPostalCode?: string;
    }
}