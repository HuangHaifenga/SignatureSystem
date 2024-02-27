// export {}
// interface MyTouchEvent extends TouchEvent{
//     target:HTMLElement
// }

// declare module '@vue/runtime-core' {
//     export interface Events {
//         // touch events
//         onTouchcancel: TouchEvent
//         onTouchend: MyTouchEvent
//         onTouchmove: TouchEvent
//         onTouchstart: TouchEvent
//     }
// }
// import 'lib.dom'
// declare module 'lib.dom'{
//     export interface TouchEvent{
//         target:HTMLElement
//     }
// }
import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        // 是可选的
        isAdmin?: boolean
        hideSelf?:boolean
        hideNavbar?:boolean
        // 每个路由都必须声明
        requiresAuth: boolean
        displayName: string
    }
}