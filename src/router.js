import { createRouter, createWebHistory } from 'vue-router'
import UIPage from "@/pages/UIPage.vue";
import Index from "@/pages/index.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/ui',
            component: UIPage,
        }
    ]
})
