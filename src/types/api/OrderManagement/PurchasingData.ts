export interface PurchasingDataItem {
     itemName: string,
     lackQty: string,
     needQty: string,
     purchaseQty: string,
     realQty: string,
     status: string,
     itemNumber?: string,
}
export interface PurchasingDataRespond {
     data: PurchasingDataItem[]
}