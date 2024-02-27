import { ElMessage } from "element-plus";
import { CommonResult, isRej, RequestConfig } from "../network/Fequest";
import fequest from "../network/FequestInstance";
export function useFequest() {
    return async function <T extends CommonResult>(url: string, reqCfg: RequestConfig): Promise<T | undefined> {
        let res = undefined
        try {
            res = await fequest<T>(url, reqCfg)
        } catch (error) {
            if (isRej<CommonResult>(error) && error.obj) {
                ElMessage.error(error.reason)
            } else {
                console.log(error);
                ElMessage.error("意外错误")
            }
        }
        return res
    }
}


export function useFequestWithoutCommnResault() {

    return async function <T>(url: string, reqCfg: RequestConfig): Promise<T | undefined> {
        let res = undefined
        res = await fequest<T>(url, reqCfg)
        return res
    }

}