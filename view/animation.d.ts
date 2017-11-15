declare namespace WeApp {
    interface wx {
        createAnimation(param: AnimationParam): Animation;
    }
    interface AnimationParam {
        /**动画持续时间 单位ms 默认值 400 */
        duration?: number;
        /**定义动画的效果 默认值 linear 有效值 linear,ease,ease-in,ease-in-out,ease-out,step-start,step-end */
        timingFunction?: string;
        /**动画延迟时间 单位 ms 默认值 0 */
        delay?: string;
        /**设置transform- origin 默认为"50% 50% 0" */
        transformOrigin?: string;
    }
        /**
     * 动画实例可以调用以下方法来描述动画
     * 调用结束后会返回自身
     * 支持链式调用的写法
     */
    interface Animation {
        /**
         * 通过动画实例的export方法导出动画数据传递给组件的animation属性
         * export 方法每次调用后会清掉之前的动画操作
         */
        export(): void;
        /**
         * 调用动画操作方法后要调用 step() 来表示一组动画完成
         * 可以在一组动画中调用任意多个动画方法
         * 一组动画中的所有动画会同时开始
         * 一组动画完成后才会进行下一组动画
         * step 可以传入一个跟 wx.createAnimation() 一样的配置参数用于指定当前组动画的配置
         */
        step(): void;

        /**
         * 透明度
         * @param value 参数范围 0~1
         */
        opacity(value: number): Animation;
        /**颜色值 */
        backgroundColor(color: string): Animation;
        /**
         * 长度值
         * @param length 如果传入 Number 则默认使用 px 可传入其他自定义单位的长度值
         */
        width(length: number | string): Animation;
        /**
         * 长度值
         * @param length 如果传入 Number 则默认使用 px 可传入其他自定义单位的长度值
         */
        height(length: number | string): Animation;
        /**
         * 长度值
         * @param length 如果传入 Number 则默认使用 px 可传入其他自定义单位的长度值
         */
        top(length: number | string): Animation;
        /**
         * 长度值
         * @param length 如果传入 Number 则默认使用 px 可传入其他自定义单位的长度值
         */
        left(length: number | string): Animation;
        /**
         * 长度值
         * @param length 如果传入 Number 则默认使用 px 可传入其他自定义单位的长度值
         */
        bottom(length: number | string): Animation;
        /**
         * 长度值
         * @param length 如果传入 Number 则默认使用 px 可传入其他自定义单位的长度值
         */
        right(length: number | string): Animation;

        /**deg的范围-180~180 从原点顺时针旋转一个deg角度 */
        rotate(deg: number): Animation;
        /**deg的范围-180~180 在X轴旋转一个deg角度 */
        rotateX(deg: number): Animation;
        /**deg的范围-180~180 在Y轴旋转一个deg角度 */
        rotateY(deg: number): Animation;
        /**deg的范围-180~180 在Z轴旋转一个deg角度 */
        rotateZ(deg: number): Animation;
        rotate3d(x: number, y: number, z: number, deg: number): Animation;

        /**一个参数时 表示在X轴 Y轴同时缩放sx倍数 两个参数时表示在X轴缩放sx倍数 在Y轴缩放sy倍数 */
        scale(sx: number, sy?: number): Animation;
        /**在X轴缩放sx倍数 */
        scaleX(sx: number): Animation;
        /**在Y轴缩放sy倍数 */
        scaleY(sy: number): Animation;
        /**在Z轴缩放sz倍数 */
        scaleZ(sz: number): Animation;
        /**在X轴缩放sx倍数 在Y轴缩放sy倍数 在Z轴缩放sz倍数 */
        scale3d(sx: number, sy: number, sz: number): Animation;

        /**一个参数时 表示在X轴偏移tx 单位px 两个参数时 表示在X轴偏移tx 在Y轴偏移ty 单位px */
        translate(tx: number, ty?: number): Animation;
        /**在X轴偏移tx 单位px */
        translateX(tx: number): Animation;
        /**在Y轴偏移tx 单位px */
        translateY(ty: number): Animation;
        /**在Z轴偏移tx 单位px */
        translateZ(tz: number): Animation;
        /**在X轴偏移tx 在Y轴偏移ty 在Z轴偏移tz 单位px */
        translate3d(tx: number, ty: number, tz: number): Animation;

        /**参数范围-180~180 一个参数时 Y轴坐标不变 X轴坐标延顺时针倾斜ax度 两个参数时 分别在X轴倾斜ax度 在Y轴倾斜ay度 */
        skew(ax: number, ay?: number): Animation;
        /**参数范围-180~180 Y轴坐标不变 X轴坐标延顺时针倾斜ax度 */
        skewX(ax: number): Animation;
        /**参数范围-180~180 X轴坐标不变 Y轴坐标延顺时针倾斜ay度 */
        skewY(ay: number): Animation;

        matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Animation;
        matrix3d(a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, c3: number, d3: number, a4: number, b4: number, c4: number, d4: number): void;
    }
}