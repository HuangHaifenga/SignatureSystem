export interface ImanufacturingSystemItem {
     id: string,
     productionCode: string,
     amount: number,
     deviceName: string,
     productionName: string,
     progress: number,
     specs: string,
     status: string,
     index?: string,
}
export interface ManufacturingSystemRespond {
     data: ImanufacturingSystemItem[]
}