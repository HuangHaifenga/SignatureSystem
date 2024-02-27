export interface IcarAnalyseItem{
    NO: string,
    contact: string,
    fileid: string,
    type: string
    x?: number
    y?: number
    z?: number 
}
export interface carAnalyseRespond{
    data:IcarAnalyseItem[]
}