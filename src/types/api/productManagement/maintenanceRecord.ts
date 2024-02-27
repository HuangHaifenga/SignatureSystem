export interface ImaintenanceRecordItem{
    deviceName:string,
    maintenanceDate:string,
    deviceType:string,
    maintenanceType:string
}
export interface maintenanceRecordRespond{
    data:ImaintenanceRecordItem[],
    code:number
}