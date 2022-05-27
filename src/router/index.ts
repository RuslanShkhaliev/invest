import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '../modules/portfolio/routes';

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
