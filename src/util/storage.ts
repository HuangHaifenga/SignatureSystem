// storage的二次封装
// eg ： namespace: "maneger",
import config from "../config/GlobalConfig"
export enum StorageKeys {
     TOKEN = 'token',
     CURRENT_LOBBY_ID = "currentLobbyId"
}
export interface IStorage {
     getStorage: () => any,
     setItem: (key: StorageKeys, val: any) => void,
     getItem: <T>(key: StorageKeys) => T,
     clearItem: (key: StorageKeys) => void,
     clearAll: () => void
}
export default {
     getStorage() { // 先获取该项目的 命名存储空间 下的storage数据 maneger
          return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
     },
     setItem(key: StorageKeys, val: any) {
          let storage = this.getStorage()
          // console.log("setItem", storage);
          storage[key] = val; // 为当前对象添加 需要存储的值
          window.localStorage.setItem(config.namespace, JSON.stringify(storage)) // 保存到本地
     },
     getItem<T>(key: StorageKeys) {
          return this.getStorage()[key] as T
     },
     // 清空 当前的项目下命名存储的空间 该key项的 Storage 数据
     clearItem(key: StorageKeys) {
          let storage = this.getStorage()
          delete storage[key]
          window.localStorage.setItem(config.namespace, JSON.stringify(storage)) // 保存到本地
     },
     // 清空所有的 当前的项目下命名存储的空间 Storage 数据
     clearAll() {
          window.localStorage.clear();
     }
} as IStorage
