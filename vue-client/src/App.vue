<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { useAuthStore } from '@/stores/auth.js';
const { isAuthenticated } = useAuthStore();
</script>
