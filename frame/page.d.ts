declare namespace WeApp {
    /**指定页面的初始数据 生命周期函数 事件处理函数等 */
    interface PageParam {
        /**页面的初始数据 */
        data?: Object;
        /**生命周期函数--监听页面加载 */
        onLoad?: (query: any) => void;
        /**生命周期函数--监听页面初次渲染完成 */
        onReady?: Function;
        /**生命周期函数--监听页面显示 */
        onShow?: Function
        /**生命周期函数--监听页面隐藏 */
        onHide?: Function;
        /**生命周期函数--监听页面卸载 */
        onUnload?: Function;
        /**页面相关事件处理函数--监听用户下拉动作 */
        onPullDownRefresh?: Function;
        /**页面上拉触底事件的处理函数 */
        onReachBottom?: Function;
        /**页面滚动触发事件的处理函数 */
        onPageScroll?: (res: { /** 页面在垂直方向已滚动的距离（单位px） */scrollTop: number }) => void
        /**开发者可以添加任意的函数或数据到参数中 用 this 可以访问 */
        [others: string]: any;
    }
    /**页面 */
    interface Page {
        /**用于将数据从逻辑层发送到视图层 */
        setData: (data: any, callback?: Function) => void;
        /**页面逻辑层数据 */
        data: any;
        [others: string]: any;
    }
}