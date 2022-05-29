import {
    ROUTE_AUTH,
    ROUTE_SIGN_IN,
    ROUTE_SIGN_UP,
} from '@/router/consts'

const AuthPage = () => import('./Layout.vue')
const SignIn = () => import('./components/SignInForm.vue')
const SignUp = () => import('./components/SignUpForm.vue')

export const authRoutes = [
    {
        path: '/',
        name: ROUTE_AUTH,
        component: AuthPage,
        redirect: {
            name: ROUTE_SIGN_IN,
        },
        children: [
            {
                path: '/sign-in',
                name: ROUTE_SIGN_IN,
                component: SignIn,
            },
            {
                path: '/sign-in',
                name: ROUTE_SIGN_UP,
                component: SignUp,
            },
        ],
    },
]
