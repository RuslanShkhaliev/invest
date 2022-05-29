import {
    createRouter,
    createWebHistory,
} from 'vue-router'
import { authRoutes } from '@/modules/auth/routes'
import { portfolioRoutes } from '@/modules/portfolio/routes'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...authRoutes,
        ...portfolioRoutes,
    ],
})
