declare namespace WeApp {
    interface wx {
        /**从相册选择图片 或者拍照 */
        chooseImage(param: ChooseImageParam): void;
        /**预览图片 */
        previewImage(param: PreviewImageParam): void;
        /**获取图片信息 */
        getImageInfo(param: ImageInfoParam): void;
        /**保存图片到系统相册 需要用户授权 scope.writePhotosAlbum */
        saveImageToPhotosAlbum(param: SaveImageToPhotosAlbumParam): void;
    }
    interface ChooseImageParam extends CallbackParam {
        /**最多可以选择的图片张数 默认9 */
        count?: number;
        /**original 原图 compressed 压缩图 默认二者都有 */
        sizeType?: Array<string>;
        /**album 从相册选图 camera 使用相机 默认二者都有 */
        sourceType?: Array<string>;
    }
    interface PreviewImageParam extends CallbackParam {
        /**当前显示图片的链接 不填则默认为 urls 的第一张 */
        current?: string;
        /**需要预览的图片链接列表 */
        urls: Array<string>;
    }
    interface ImageInfoParam extends CallbackParam {
        /**图片的路径 可以是相对路径 临时文件路径 存储文件路径 */
        src: string;
        success?: (res?: { width: number, height: number }) => void;
    }
    interface SaveImageToPhotosAlbumParam extends CallbackParam {
        /**图片文件路径 可以是临时文件路径也可以是永久文件路径 */
        filePath: string;
    }
}