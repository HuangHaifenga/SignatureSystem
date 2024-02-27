
export interface IEmployeeAnalysisItem {
    cardNo: string
    department: string
    name: string
    post: string
    status?: string | number,
    x?:number,
    y?:number,
    z?:number,
    在线状态?: string | number
}
export type EmployeeAnalysis = Record<string, string>
export type EmployeeAnalysisRespond = IEmployeeAnalysisItem[]

