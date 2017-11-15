declare namespace WeApp {
    interface wx {
        /**创建 canvas 绘图上下文(指定 canvasId) */
        createCanvasContext(canvasId: string): CanvasContext;
        /**
         * @deprecated 不推荐使用
         * @description 创建绘图上下文
         */
        createContext(): CanvasContext;
        /**
         * @deprecated 不推荐使用
         * @description 绘图
         */
        drawCanvas(param: DrawCanvasParam): void;
        /**把当前画布的内容导出生成图片 并返回文件路径 */
        canvasToTempFilePath(param: CanvasToTempFilePathParam): void;
    }
    /**
     * context只是一个记录方法调用的容器
     * 用于生成记录绘制行为的actions数组
     * context跟<canvas/>不存在对应关系
     * 一个context生成画布的绘制动作数组可以应用于多个<canvas/>
     */
    interface CanvasContext {
        /**获取当前context上存储的绘图动作 */
        getActions(): Array<any>;
        /**清空当前的存储绘图动作 */
        clearActions(): void;

        /**
         * 对横纵坐标进行缩放
         * 在调用scale方法后
         * 之后创建的路径其横纵坐标会被缩放
         * 多次调用scale 倍数会相乘
         * @param scaleWidth 横坐标缩放的倍数
         * 1=100% 0.5=50% 2=200% 依次类推
         * @param scaleHeight 纵坐标轴缩放的倍数
         * 1=100% 0.5=50% 2=200% 依次类推
         */
        scale(scaleWidth: number, scaleHeight: number): void;
        /**
         * 对坐标轴进行顺时针旋转
         * 以原点为中心
         * 原点可以用 translate方法修改
         * 顺时针旋转当前坐标轴
         * 多次调用rotate
         * 旋转的角度会叠加
         * @param rotate 旋转角度 以弧度计
         * degrees*Math.PI/180 degrees范围为0~360
         */
        rotate(rotate: number): void;
        /**
         * 对坐标原点进行缩放
         * 对当前坐标系的原点(0,0)进行变换
         * 默认的坐标系原点为页面左上角
         * @param x 水平坐标平移量
         * @param y 竖直坐标平移量
         */
        translate(x: number, y: number): void;
        /**保存当前坐标轴的缩放 旋转 平移信息 */
        save(): void;
        /**恢复之前保存过的坐标轴的缩放 旋转 平移信息 */
        restore(): void;
        /**
         * 在给定的矩形区域内 清除画布上的像素
         * @param x 矩形区域左上角的x坐标
         * @param y 矩形区域左上角的y坐标
         * @param width 矩形区域的宽度
         * @param height 矩形区域的高度
         */
        clearRect(x: number, y: number, width: number, height: number): void;
        /**
         * 在画布上绘制被填充的文本
         * @param text 在画布上输出的文本
         * @param x 绘制文本的左上角x坐标位置
         * @param y 绘制文本的左上角y坐标位置
         */
        fillText(text: string, x?: number, y?: number): void;
        /**
         * 在画布上绘制图像 图像保持原始尺寸
         * @param imageResource	通过chooseImage得到一个文件路径或者一个项目目录内的图片 所要绘制的图片资源
         * @param x 图像左上角的x坐标
         * @param y 图像左上角的y坐标
         * @param width 图像宽度
         * @param height 图像高度
         */
        drawImage(imageResource: string, x?: number, y?: number, width?: number, height?: number): void;
        /**对当前路径进行填充 */
        fill(): void;
        /**对当前路径进行描边 */
        stroke(): void;
        /**
         * 开始一个路径
         * 开始创建一个路径 需要调用fill或者stroke才会使用路径进行填充或描边 同一个路径内的多次setFillStyle setStrokeStyle setLineWidth等设置 以最后一次设置为准
         */
        beginPath(): void;
        /**关闭一个路径 */
        closePath(): void;
        /**
         * 把路径移动到画布中的指定点 但不创建线条
         */
        moveTo(x: number, y: number): void;
        /**
         * 添加一个新点 然后在画布中创建从该点到最后指定点的线条
         * @param x 目标位置的x坐标
         * @param y 目标位置的y坐标
         */
        lineTo(x: number, y: number): void;
        /**
         * 添加一个矩形路径到当前路径
         * @param x 矩形路径左上角的x坐标
         * @param y 矩形路径左上角的y坐标
         * @param width 矩形路径的宽度
         * @param height 矩形路径的高度
         */
        rect(x: number, y: number, width: number, height: number): void;
        /**
         * 画一条弧线
         * @param x 圆的x坐标
         * @param y 圆的y坐标
         * @param r 圆的半径
         * @param sAngle 起始弧度 单位弧度(在3点钟方向)
         * @param eAngle 终止弧度
         * @param counterclockwise 指定弧度的方向是逆时针还是顺时针 默认是false 即顺时针
         */
        arc(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise?: boolean): void;
        /**
         * 创建二次贝塞尔曲线路径
         * @param cpx 贝塞尔控制点的x坐标
         * @param cpy 贝塞尔控制点的y坐标
         * @param x 结束点的x坐标
         * @param y 结束点的y坐标
         */
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        /**
         * 创建三次方贝塞尔曲线路径
         * @param cp1x 第一个贝塞尔控制点的x坐标
         * @param cp1y 第一个贝塞尔控制点的y坐标
         * @param cp2x 第二个贝塞尔控制点的x坐标
         * @param cp2y 第二个贝塞尔控制点的y坐标
         * @param x 结束点的x坐标
         * @param y 结束点的y坐标
         */
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
        /**
         * 设置纯色填充
         * @param color 设置为填充样式的颜色 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
         */
        setFillStyle(color: string): void;
        /**
          * 设置纯色描边
          * @param color 设置为填充样式的颜色 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
          */
        setStrokeStyle(color: string): void;
        /**
         * 设置阴影
         * @param offsetX 阴影相对于形状在水平方向的偏移
         * @param offsetY 阴影相对于形状在竖直方向的偏移
         * @param blur 阴影的模糊级别 数值越大越模糊 0~100
         * @param color 阴影的颜色 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
         */
        setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
        /**设置字体的字号 */
        setFontSize(fontSize: number): void;
        /**设置线条的宽度 */
        setLineWidth(lineWidth: number): void;
        /**设置线条的结束端点样式 */
        setLineCap(lineCap: 'butt' | 'round' | 'square'): void;
        /**
         * 设置两条线相交时
         * 所创建的拐角类型
         */
        setLineJoin(lineJoin: 'bevel' | 'round' | 'miter'): void;
        /**
         * 设置最大斜接长度
         * 斜接长度指的是在两条线交汇处内角和外角之间的距离
         * 当 setLineJoin为 miter 时才有效
         * 超过最大倾斜长度的
         * 连接处将以 lineJoin 为 bevel 来显示
         */
        setMiterLimit(miterLimit: number): void;
        /**
         * 填充一个矩形
         * @param x 矩形路径左上角的x坐标
         * @param y 矩形路径左上角的y坐标
         * @param width 矩形路径的宽度
         * @param height 矩形路径的高度
         */
        fillRect(x: number, y: number, width: number, height: number): void;
        /**
         * 画一个矩形(非填充)
         * @param x 矩形路径左上角的x坐标
         * @param y 矩形路径左上角的y坐标
         * @param width 矩形路径的宽度
         * @param height 矩形路径的高度
         */
        strokeRect(x: number, y: number, width: number, height: number): void;
        /**
         * 创建一个线性的渐变颜色
         * @param x0 起点的x坐标
         * @param y0 起点的y坐标
         * @param x1 终点的x坐标
         * @param y1 终点的y坐标
         */
        createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
        /**
         * 创建一个圆形的渐变颜色
         * @param x 圆心的x坐标
         * @param y 圆心的y坐标
         * @param r 圆的半径
         */
        createCircularGradient(x: number, y: number, r: number): CanvasGradient;
        /**用于设置文字的对齐 */
        setTextAlign(align: 'left' | 'center' | 'right'): void;
        setTextBaseline(textBaseline: 'top' | 'bottom' | 'middle' | 'normal'): void;
    }
    interface CanvasGradient {
        /**
         * 指定颜色渐变点的位置和颜色
         * @param position 位置必须位于0到1之间
         */
        addColorStop(position: number, color: string): void;
    }
    interface DrawCanvasParam {
        /**画布标识 传入 <canvas/> 的 cavas-id */
        canvasId: string;
        /**
         * 绘图动作数组
         * 由wx.createContext创建的context
         * 调用getActions方法导出绘图动作数组
         */
        actions: Array<any>;
        reserve?: boolean
    }
    interface CanvasToTempFilePathParam extends CallbackParam {
        /**画布标识 传入 <canvas/> 的 cavas-id */
        canvasId: string;
        /**画布x轴起点 默认0 */
        x?: number;
        /**画布y轴起点 默认0 */
        y?: number;
        /**画布宽度 默认为canvas宽度 - x  */
        width?: number;
        /**画布高度 默认为canvas高度 - y  */
        height?: number;
        /**输出图片宽度 默认为width */
        destWidth?: number;
        /**输出图片高度 默认为height */
        destHeight?: number;
    }
}