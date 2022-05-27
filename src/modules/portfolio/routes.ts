import Layout from './Index.vue';
import Main from './views/Main.vue';

const Portfolio = () => import('./views/Portfolio.vue');

export const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: '',
                name: 'main',
                component: Main,
            },
            {
                path: '/portfolio/:id',
                name: 'portfolio',
                component: Portfolio,
            },
        ],
    },
];
