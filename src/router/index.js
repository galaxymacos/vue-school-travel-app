
import {createRouter, createWebHistory} from "vue-router";  // createWebHashHistory to use Hash mode
import Home from "@/views/Home.vue";    // load component at the beginning

const routes = [
    {path: '/', name: "home", component: Home},
    {path: '/brazil', name: "brazil", component: () => import('@/views/Brazil.vue')}, // lazy load
    {path: '/jamaica', name: "jamaica", component: () => import('@/views/Jamaica.vue')},
    {path: '/hawaii', name: "hawaii", component: () => import('@/views/Hawaii.vue')},
    {path: '/panama', name: "panama", component: () => import('@/views/Panama.vue')},
]


const router = createRouter({
    history: createWebHistory(),    // TODO: Later
    routes
})

export default router
