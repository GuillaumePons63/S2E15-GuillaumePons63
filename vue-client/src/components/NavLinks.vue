<template>
    <ul>
        <li>
            <RouterLink to="/shop">Shop</RouterLink>
        </li>

        <li v-if="!authStore.isAuth">
            <RouterLink to="/login">Login</RouterLink>
        </li>
        <li v-if="!authStore.isAuth">
            <RouterLink to="/register">Register</RouterLink>
        </li>

        <li v-if="authStore.isAuth">
            <RouterLink to="/dashboard">Dashboard</RouterLink>
        </li>
        <li v-if="authStore.isAuth">
            <RouterLink to="/logout" @click="logout">Logout</RouterLink>
        </li>

        <li>
            <RouterLink to="/cart">
                Cart
                <span class="cart-count">
                    <span>0</span>
                </span>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js';
const authStore = useAuthStore();

function logout() {
    authStore.logout();
}
</script>

<script>
export default {
    name: 'NavLinks',
};
</script>
