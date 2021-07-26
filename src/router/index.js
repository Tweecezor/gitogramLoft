import { createRouter, createWebHistory } from 'vue-router'
import Feeds from '../pages/Feeds.vue'

const routes = [
    {
        path: '/',
        name: 'Feeds',
        component: Feeds
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
