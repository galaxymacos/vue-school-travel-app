
import {createRouter, createWebHistory} from "vue-router";  // createWebHashHistory to use Hash mode
import Home from "@/views/Home.vue";

const routes = [
    {path: '/', name: "home", component: Home},
    {
        path: '/destination/:id/:slug',
        name: "destination.show",
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)}),   // Use Function Mode to pass props
        children: [
            {
                path: ':experienceSlug',
                name: "experience.show",
                component: () => import('@/views/ExperienceShow.vue'),
                props: route => ({...route.params, id: parseInt(route.params.id)})   // Use Function Mode to pass props
            }
        ]

    }, // use :NAME in url to accept params
    // Create a catch-all path
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: () => import('@/views/NotFound.vue')
    }

]


const router = createRouter({
    history: createWebHistory(),    // TODO: Later
    routes,
    linkActiveClass: 'vue-school-active-link', // Set the class name for the active link
})

export default router
