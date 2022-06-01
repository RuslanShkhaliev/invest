import {
    createRouter,
    createWebHistory,
} from 'vue-router'
import { portfolioRoutes } from '@/router/routes'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...portfolioRoutes,
    ],
})
