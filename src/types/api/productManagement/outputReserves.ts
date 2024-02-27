export interface IoutputReservesItem{
    mid:string,
    mname:string,
    mnumber:string
}
export interface outputReservesRespond {
    data:IoutputReservesItem[]
}

export interface IoutputReservesLintItem{
    itemDate:string,
    itemValue:string
}
export interface outputReservesLintRespond{
    data:IoutputReservesLintItem[]
}

export interface IoutputReservesBarItem{
    itemDate:string,
    itemInputValue:string,
    itemOutputValue:string
}
export interface outputReservesBarRespond{
    data:IoutputReservesBarItem[]
}