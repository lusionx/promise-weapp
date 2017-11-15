declare namespace WeApp {
    interface wx {
        /**
         * 返回一个SelectorQuery对象实例
         * 可以在这个实例上使用select等方法选择节点 并使用boundingClientRect等方法选择需要查询的信息
         */
        createSelectorQuery(): SelectorQuery;
    }
    interface SelectorQuery {
        in(component: any): SelectorQuery;
        /**在当前页面下选择第一个匹配选择器selector的节点 返回一个NodesRef对象实例 */
        select(selector: string): NodesRef;
        /**在当前页面下选择匹配选择器selector的节点 返回一个NodesRef对象实例 */
        selectAll(selector: string): NodesRef;
        /**选择显示区域 可用于获取显示区域的尺寸 滚动位置等信息 */
        selectViewport(): NodesRef;
        exec(callback?: (res: Array<any>) => void): void;
    }
    interface NodesRef {
        /**添加节点的布局位置的查询请求 相对于显示区域 以像素为单位 */
        boundingClientRect(callback: (rect: ClientRect | Array<ClientRect>) => void): SelectorQuery;
        /**添加节点的滚动位置查询请求 以像素为单位 */
        scrollOffset(callback: (rects: ScrollOffset) => void): SelectorQuery;
        /**获取节点的相关信息 需要获取的字段在fields中指定 */
        fields(fields: FieldsParam, callback: (res: any) => void): SelectorQuery;
    }
    interface ClientRect {
        id: string;
        dataset: any;
        left: number    // 节点的左边界坐标
        right: number   // 节点的右边界坐标
        top: number    // 节点的上边界坐标
        bottom: number // 节点的下边界坐标
        width: number  // 节点的宽度
        height: number // 节点的高度
    }
    interface ScrollOffset {
        id: string;
        dataset: any;
        scrollLeft: number;
        scrollTop: number;
    }
    interface FieldsParam {
        id?: boolean;
        dataset?: boolean;
        rect?: boolean;
        size?: boolean;
        scrollOffset?: boolean;
        properties?: string[]
    }
}