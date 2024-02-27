import {CommonResult} from "@/network/Fequest"
export type ProductReserves = Record<string,string>
export type ProductReservesRecord = {
    obj:ProductReserves[]
}& CommonResult