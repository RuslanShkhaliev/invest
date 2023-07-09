import MainPage from '@/modules/Portfolios/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const PortfolioPage = () => import('@/modules/Portfolios/PortfolioPage.vue');
const AssetPage = () => import('@/modules/Asset/AssetPage.vue');

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
        meta: {
            title: 'Главная'
        }
    },
    {
        path: '/portfolios/:id',
        name: 'portfolios',
        component: PortfolioPage,
        meta: {
            title: 'Portfolio'
        },
    },
    {
        path: '/asset/:id',
        name: 'asset',
        component: AssetPage,
        props: true,
        meta: {
            title: 'Asset'
        },
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
