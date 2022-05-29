import {
    ROUTE_LAYOUT,
    ROUTE_PORTFOLIO,
    ROUTE_PORTFOLIOS,
} from '@/router/consts'
import Layout from './Layout.vue'
import Main from './views/Main.vue'

const Portfolio = () => import('./views/Portfolio.vue')

export const portfolioRoutes = [
    {
        path: '/portfolios',
        name: ROUTE_LAYOUT,
        component: Layout,
        children: [
            {
                path: '',
                name: ROUTE_PORTFOLIOS,
                component: Main,
            },
            {
                path: ':id',
                name: ROUTE_PORTFOLIO,
                component: Portfolio,
            },
        ],
    },
]
