export interface IwarningMessageItem{
[x: string]: any
// [x: string]: any
    // MessageDate:string,
    alarmtime:string
    alarmtype:string,
    count:number
}
export type IwarningMessageRespond = IwarningMessageItem[]