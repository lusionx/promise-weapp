declare namespace WeApp {
    interface wx {
        /**保存文件 */
        saveFile(param: SaveFileParam): void;
        /**获取文件信息 */
        getFileInfo(param: GetFileInfoParam): never;
        /**获取本地已保存的文件列表 */
        getSavedFileList(param: FileListParam): void;
        /**获取本地文件的文件信息 */
        getSavedFileInfo(param: FileInfoParam): void;
        /**删除本地存储的文件 */
        removeSavedFile(param: RemoveFileParam): void;
        /**
         * 新开页面打开文档
         * 支持格式 doc/x,xls/x,ppt/x,pdf
         */
        openDocument(param: OpenDocumentParam): void;
    }
    interface SaveFileParam extends CallbackParam {
        /**需要保存的文件的临时路径 */
        tempFilePath: string;
        success?: (res?: { savedFilePath?: string }) => void;
    }
    interface GetFileInfoParam extends CallbackParam {
        /**本地文件路径 */
        filePath: string;
        /**计算文件摘要的算法 默认值 md5 */
        digestAlgorithm?: 'md5' | 'sha1';
        success: (res: { size: number; digest: string; errMsg: string }) => void;
    }
    interface FileListParam extends CallbackParam {
        success?: (res?: { errMsg: string, fileList: Array<FileInfo> }) => void;
    }
    interface FileInfo {
        /**文件的本地路径 */
        filePath: string;
        /**文件的保存时的时间戳 从1970/01/01 08:00:00到当前时间的秒数 */
        createTime: number;
        /**文件大小 单位B */
        size: number;
    }
    interface FileInfoParam extends CallbackParam {
        /**文件路径 */
        filePath: string;
        success?: (res?: { errMsg: string, size: number, createTime: number }) => void;
    }
    interface RemoveFileParam extends CallbackParam {
        /**需要删除的文件路径 */
        filePath: string;
    }
    interface OpenDocumentParam extends CallbackParam {
        /**文件路径 可通过 downFile 获得 */
        filePath: string;
        /**文件类型 指定文件类型打开文件 */
        fileType?: 'doc' | 'xls' | 'ppt' | 'pdf' | 'docx' | 'xlsx' | 'pptx';
    }
}