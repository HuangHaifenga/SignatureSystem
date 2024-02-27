export interface IstatisticalStorageItem {
    billNo: string,
    mname: string,
    qty?: string,
    status?: string,
    unit?: string,
    billDate:string,
    mnumber:string
}
export interface statisticalStorageRespond{
    data:IstatisticalStorageItem[]
}