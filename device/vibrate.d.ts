declare namespace WeApp {
    interface wx {
        /**使手机发生较长时间的振动 400ms */
        vibrateLong(param: CallbackParam): void;
        /**使手机发生较短时间的振动 15ms */
        vibrateShort(param: CallbackParam): void;
    }
}