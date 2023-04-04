import {createRouter, createWebHistory} from 'vue-router';
import Asset from './views/Asset.vue';
import Portfolio from './views/Portfolio.vue';
import Portfolios from './views/Portfolios.vue';
import Profile from './views/Profile.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Portfolios,
        meta: {
            title: 'Portfolios'
        }
    },
    {
        path: '/portfolio/:id',
        name: 'portfolio',
        component: Portfolio,
        props: true,
        meta: {
            title: 'Portfolio'
        },
    },
    {
        path: '/asset/:id',
        name: 'asset',
        component: Asset,
        props: true,
        meta: {
            title: 'Asset'
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            title: 'Profile'
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
