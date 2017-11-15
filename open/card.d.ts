declare namespace WeApp {
    interface wx {
        /**批量添加卡券 */
        addCard(param: CardParam): void;
        /**查看微信卡包中的卡券 */
        openCard(param: CardParam): void;
    }
    interface CardParam extends CallbackWithErrMsgParam {
        /**需要添加的卡券列表 */
        cardList: Array<any>;
    }
}