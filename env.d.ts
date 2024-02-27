/// <reference types="vite/client" />



declare module '*.vue' {
     import { DefineComponent } from 'vue'
     // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
     const component: DefineComponent<{}, {}, any>
     export default component
}

interface ImportMetaEnv {
     readonly VITE_API_URL: string
     readonly VITE_DEV_HEADER_USER_TOKEN: string
     readonly VITE_FRONT_URL: string
     readonly VITE_RENDER_URL: string
     readonly VITE_RENDER_CODE: string
     readonly VITE_CCTV_URL: string
}
export declare interface Window {
     _CONFIG: any
}
declare module '*.vue' {
     import { ComponentOptions } from 'vue'
     const componentOptions: ComponentOptions
     export default componentOptions
}
