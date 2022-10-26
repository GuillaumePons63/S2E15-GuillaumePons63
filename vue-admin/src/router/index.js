import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import CreateProductView from '@/views/CreateProductView.vue';
import CreateCategoryView from '@/views/CreateCategoryView.vue';
import RoleView from '@/views/RoleView.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: DashboardView,
            children: [
                {
                    path: '/dashboard/roles',
                    name: 'roles',
                    component: RoleView,
                },
                {
                    path: '/dashboard/products',
                    name: 'products',
                    component: CreateProductView,
                },
                {
                    path: '/dashboard/categories',
                    name: 'categories',
                    component: CreateCategoryView,
                },
                {
                    path: '/:pathMatch(.*)*',
                    name: 'NotFound',
                    component: () => import('../views/NotFound.vue'),
                },
            ],
        },
    ],
});

export default router;
