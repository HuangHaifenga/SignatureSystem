

export interface IoutputStatisticsItem {
     mid?: string,
     mname?: string,
     mnumber?: string,
     id?: string,
     name?: string,
     code?: string,
}
export interface IoutputStatisticsLineItem {
     timeSpan: string,
     plan: number,
     real: number
}
export interface ItableDataItem {
     id: string,
     produceDate: string,
     plan: number,
     real: number,
     diffPercent: string
}
export interface outputStatisticsRespond {
     data: IoutputStatisticsItem[][]
}
export interface IoutputStatisticsLineItemRespond {
     data: IoutputStatisticsLineItem[]
}
export interface ItableDataItemRespond {
     data: ItableDataItem[]
}