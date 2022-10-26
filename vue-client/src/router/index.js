import { createRouter, createWebHistory } from 'vue-router';
import FeaturedView from '@/views/FeaturedView.vue';
import CartView from '@/views/CartView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductView from '@/views/ProductView.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: FeaturedView,
        },
        {
            path: '/shop',
            name: 'shop',
            component: ProductsView,
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductView,
            props: true,
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue'),
        },
    ],
});

export default router;
