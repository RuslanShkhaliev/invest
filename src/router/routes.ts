import Layout from '@/layouts/Layout.vue'
import {
    ROUTE_LAYOUT,
    ROUTE_PORTFOLIO,
    ROUTE_PORTFOLIOS,
    ROUTE_SIGN_IN,
    ROUTE_SIGN_UP,
} from '@/router/consts'
import Main from '@/views/Main.vue'

const Portfolio = () => import('@/views/Portfolio.vue')
const SignIn = () => import('@/components/modals/ModalSignIn.vue')
const SignUp = () => import('@/components/modals/ModalSignUp.vue')
export const portfolioRoutes = [
    {
        path: '/',
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
            {
                path: 'sign-in',
                name: ROUTE_SIGN_IN,
                component: SignIn,
            },
            {
                path: 'sign-up',
                name: ROUTE_SIGN_UP,
                component: SignUp,
            },
        ],
    },
]
