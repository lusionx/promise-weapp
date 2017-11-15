declare namespace WeApp {
    interface Target {
        /**组件的id */
        id: string;
        /**组件的类型 */
        tagName: string;
        /**组件上由`data-`开头的自定义属性组成的集合 */
        dataset: any;
    }
    /**
     * 事件对象
     * 如无特殊说明 当组件触发事件时 逻辑层绑定该事件的处理函数会收到一个事件对象
     */
    interface BaseEvent {
        /**事件类型 */
        type: string;
        /**
         * 事件生成时的时间戳
         * 页面打开到触发事件所经过的毫秒数
         */
        timeStamp: number;
        /**触发事件的源组件 */
        target: Target;
        /**事件绑定的当前组件 */
        currentTarget: Target
    }
    interface CustomEvent extends BaseEvent {
        /**
         * 额外的信息
         * 自定义事件所携带的数据 如表单组件的提交事件会携带用户的输入 媒体的错误事件会携带错误信息
         */
        detail: any;
    }
    interface Touch {
        /**触摸点的标识符 */
        identifier: number;
        /**距离文档左上角的距离 文档的左上角为原点 横向为X轴 */
        pageX: number;
        /**距离文档左上角的距离 文档的左上角为原点 纵向为Y轴 */
        pageY: number;
        /**距离页面可显示区域(屏幕除去导航条)左上角距离 横向为X轴 */
        clientX: number;
        /**距离页面可显示区域(屏幕除去导航条)左上角距离 纵向为Y轴 */
        clientY: number;
    }
    interface TouchEvent extends BaseEvent {
        /**每个元素为一个 Touch 对象(canvas 触摸事件中携带的 touches 是 CanvasTouch 数组) 表示当前停留在屏幕上的触摸点 */
        touches: Array<Touch>;
        /**表示有变化的触摸点 如从无变有(touchstart) 位置变化(touchmove) 从有变无(touchend touchcancel) */
        changedTouches: Array<Touch>;
    }
}