import { CommonResult } from "@/network/Fequest";
export type SaleOrder = Record<string,string>
export type SaleOrderRespond = {
    obj:SaleOrder[]
} & CommonResult
