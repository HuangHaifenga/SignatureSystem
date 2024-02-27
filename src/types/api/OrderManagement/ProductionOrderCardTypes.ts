import { CommonResult } from "@/network/Fequest";
export type ProductionOrder = Record<string,string>
export type ProductionOrderRespond = {
    obj:ProductionOrder[]
} & CommonResult