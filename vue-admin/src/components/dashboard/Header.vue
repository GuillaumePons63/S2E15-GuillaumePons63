<template>
    <header
        class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
        <RouterLink class="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
            E-commerce Dashboard
        </RouterLink>

        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
                <RouterLink class="nav-link px-3" to="!#" @click="logout">
                    Sign out
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js';
const authStore = useAuthStore();
function logout() {
    return authStore.logout();
}
</script>
