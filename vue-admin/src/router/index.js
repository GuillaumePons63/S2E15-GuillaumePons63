import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import CreateProductView from '@/views/CreateProductView.vue';
import CreateCategoryView from '@/views/CreateCategoryView.vue';
import RoleView from '@/views/RoleView.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import { useAuthStore } from '../stores/auth.js';

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
                    path: '/register',
                    name: 'register',
                    component: Register,
                },
                {
                    path: '/login',
                    name: 'login',
                    component: Login,
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

router.beforeEach(async to => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register', '/shop', '/cart'];
    const authRequired = !publicPages.includes(to.path);
    const authStore = useAuthStore();

    if (authRequired && !authStore.user) {
        authStore.returnUrl = to.fullPath;
        return '/login';
    }
});

export default router;
