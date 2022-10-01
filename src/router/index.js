
import {createRouter, createWebHistory} from "vue-router";  // createWebHashHistory to use Hash mode
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

const routes = [
    {path: '/', name: "home", component: Home},
    {
        path: '/destination/:id/:slug',
        name: "destination.show",
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)}),   // Use Function Mode to pass props
        beforeEnter(to, from) {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id));
            if (!exists) {
                return {
                    name: 'NotFound',
                    params: {pathMatch: to.path.split('/').slice(1)},
                    query: to.query,
                    hash: to.hash
                };
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: "experience.show",
                component: () => import('@/views/ExperienceShow.vue'),
                props: route => ({...route.params, id: parseInt(route.params.id)})   // Use Function Mode to pass props
            }
        ]

    }, // use :NAME in url to accept params
    // catch all other paths and redirect to non-found page
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
