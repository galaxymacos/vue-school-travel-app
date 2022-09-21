
import {createRouter, createWebHistory} from "vue-router";  // createWebHashHistory to use Hash mode
import Home from "@/views/Home.vue";    // load component at the beginning

const routes = [
    {path: '/', name: "home", component: Home},
    {path: '/destination/:id/:slug', name: "destination.show", component: () => import('@/views/DestinationShow.vue')}, // use :NAME in url to accept params
]


const router = createRouter({
    history: createWebHistory(),    // TODO: Later
    routes,
    linkActiveClass: 'vue-school-active-link', // Set the class name for the active link
})

export default router
