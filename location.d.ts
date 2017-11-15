declare namespace WeApp {
    interface wx {
        /**获取当前的地理位置 速度 */
        getLocation(param: GetLocationParam): void;
        /**使用微信内置地图查看位置 */
        openLocation(param: OpenLocationParam): void;
        /**打开地图选择位置 */
        chooseLocation(param: ChooseLocationParam): void;
        /**创建并返回 map 上下文 mapContext 对象 */
        createMapContext(mapId: string): MapContext;
    }
    interface OpenLocationParam extends CallbackParam {
        /**纬度 范围为 -90~90 负数表示南纬 */
        latitude: number;
        /**经度 范围为 -180~180 负数表示西经 */
        longitude: number;
        /**缩放比例 范围1~28 默认为28 */
        scale?: number;
        /**位置名 */
        name?: string;
        /**地址的详细说明 */
        address?: string;
    }
    interface GetLocationParam extends CallbackParam {
        /**默认为 wgs84 返回 gps 坐标 gcj02 返回可用于wx.openLocation的坐标 */
        type?: string;
        /**接口调用成功的回调函数 */
        success: (res?: LocationInfo) => void;
    }
    interface LocationInfo extends CallbackResult {
        /**纬度 浮点数 范围为 -90~90 负数表示南纬 */
        latitude: number;
        /**经度 浮点数 范围为 -180~180 负数表示西经 */
        longitude: number;
        /**速度 浮点数 单位 m/s */
        speed: number;
        /**位置的精确度 */
        accuracy: number;
        /**高度 单位 m */
        altitude: number;
        /**垂直精度 单位 m Android 无法获取 返回 0  */
        verticalAccuracy: number;
        /**水平精度 单位 m */
        horizontalAccuracy: number;
    }
    interface ChooseLocationParam extends CallbackParam {
        success: (res?: ChoosedLoaction) => void;
    }
    interface ChoosedLoaction {
        /**位置名称 */
        name: string;
        /**详细地址 */
        address: string;
        /**纬度 浮点数 范围为-90~90 负数表示南纬 */
        latitude: number;
        /**经度 浮点数 范围为-180~180 负数表示西经 */
        longitude: number
    }
    /**通过 mapId 跟一个 <map/> 组件绑定 通过它可以操作对应的 <map/> 组件 */
    interface MapContext {
        /**获取当前地图中心的经纬度 返回的是 gcj02 坐标系 可以用于 wx.openLocation */
        getCenterLocation(param: GetLocationParam): void;
        /**将地图中心移动到当前定位点 需要配合map组件的show-location使用 */
        moveToLocation(): void;
        /**
         * @since 1.2.0
         * @description 平移marker 带动画 */
        translateMarker(param: TranslateMarkerParam): void;
        /**
         * @since 1.2.0
         * @description 缩放视野展示所有经纬度 */
        includePoints(param: { points: Array<{ latitude: number, longitude: number; }>; padding?: Array<any> }): void;
        /**
         * @description 获取当前地图的视野范围
         * @since 1.4.0 */
        getRegion(param: CallbackParam): void;
        /**
         * @since 1.4.0
         * @description 获取当前地图的缩放级别  */
        getScale(param: CallbackParam): void;
    }
    interface TranslateMarkerParam extends CallbackParam {
        /**指定marker */
        markerId: number;
        /**指定marker移动到的目标点 */
        destination: any;
        /**移动过程中是否自动旋转marker */
        autoRotate: boolean;
        /**marker的旋转角度 */
        rotate: number
        /**动画持续时长 默认值1000ms 平移与旋转分别计算 */
        duration?: number;
        /**动画结束回调函数 */
        animationEnd?: Function;
    }
}