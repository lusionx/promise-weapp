declare namespace WeApp {
    interface wx {
        /**获取系统信息 */
        getSystemInfo(param: SystemInfoParam): void;
        /**同步获取系统信息 */
        getSystemInfoSync(): SystemInfoResult;
    }
    interface SystemInfoParam extends CallbackParam {
        success: (res: SystemInfoResult) => void;
    }
    interface SystemInfoResult extends CallbackResult {
        /**手机品牌 */
        brand: string;
        /**手机型号 */
        model: string;
        /**设备像素比 */
        pixelRatio: string;
        /**窗口宽度 */
        windowWidth: string;
        /**窗口高度 */
        windowHeight: string;
        /**微信设置的语言 */
        language: string;
        /**微信版本号 */
        version: string;
        /**操作系统版本 */
        system: string;
        /**客户端平台 */
        platform: string;
        /**屏幕宽度 */
        screenWidth: string;
        /**屏幕高度 */
        screenHeight: string;
        /**用户字体大小设置 */
        fontSizeSetting: string;
        /**客户端基础库版本 */
        SDKVersion: string;
    }
}