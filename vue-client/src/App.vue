<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js';
import { useCartStore } from '@/stores/cart.js';
import { setAuthToken } from '@/mixins/axios.js';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
setAuthToken();
const authStore = useAuthStore();
const cartStore = useCartStore();
</script>
