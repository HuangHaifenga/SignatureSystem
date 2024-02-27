export interface IPositionoOfStaffItem {
    post: string
}
export type PositionoOfStaff = Record<string, string>
export type IPositionoOfStaffItemRespond = IPositionoOfStaffItem[]


export interface IdepartmentItem {
    depName: string
}
export type department = Record<string, string>
export type IdepartmentItemItemRespond = IdepartmentItem[]


export interface IDetailsStaffItem {
    post: string,
    sex: string,
    name: string,
    tel: string,
    cardNo: string,
    status: string | number,
    department: string
    '在线状态':string | number
}
export type DetailsStaff = Record<string, string>
export type IDetailsStaffItemRespond = IDetailsStaffItem[]