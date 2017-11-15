declare namespace WeApp {
    interface wx {
        /**调起用户编辑收货地址原生界面 并在编辑完成后返回用户选择的地址 */
        chooseAddress(param: AddressParam): void;
    }
    interface AddressParam extends CallbackParam {
        success: (res?: AddressData) => void;
    }
    interface AddressData extends CallbackResult {
        /**收货人姓名 */
        userName?: string;
        /**邮编 */
        postalCode?: string;
        /**国标收货地址第一级地址(省) */
        provinceName?: string;
        /**国标收货地址第二级地址(市) */
        cityName?: string;
        /**国标收货地址第三级地址(国家) */
        countryName?: string;
        /**详细收货地址信息 */
        detailInfo?: string;
        /**收货地址国家码 */
        nationCode?: string;
        /**收货人手机号码 */
        telNumber?: string;
    }
}