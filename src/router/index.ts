import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from "../views/HomePage.vue";
import CanvasPage from "../views/CanvasPage.vue";

export const routes: Array<RouteRecordRaw> = [
     {
          path: '/homepage',
          name: 'homePage',
          component: Home,
          meta: {
               displayName: "",
               hideSelf: true,
               requiresAuth: false,
          }
     },
     {
          path: '/',
          name: 'CanvasPage',
          component: CanvasPage,
          meta: {
               displayName: "",
               hideSelf: true,
               requiresAuth: false,
          }
     },
]
const router = createRouter({
     routes,
     history: createWebHashHistory(import.meta.env.BASE_URL),
     linkActiveClass: "active"
})


export default router
