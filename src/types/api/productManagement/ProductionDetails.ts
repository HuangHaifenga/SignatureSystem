export interface IProductionDetailsItem {
    attachments: [
        id: string,
        name: string
    ],
    mainDevicesp: [
        id: string,
        name: string
    ],
    subDevices: [
        id: string,
        name: string
    ]

}
// export interface ZProductionDetailsItem{
//     id:string,
//     name:string
// }
// export interface AccessoryProductionDetailsItem{
//     id:string,
//     name:string
// }
export type ProductionDetailsRespond = IProductionDetailsItem[]
// export type ZProductionDetailsRespond = ZProductionDetailsItem[]
// export type AccessoryProductionDetailsItemRespond = AccessoryProductionDetailsItem[]
