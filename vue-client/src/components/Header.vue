<template>
    <header class="with-background">
        <div class="top-nav container">
            <div class="logo">
                <RouterLink to="/">
                    VUEjs - Pinia / Express / Postgres Ecommerce
                </RouterLink>
            </div>
            <NavLinks />
        </div>
    </header>
</template>

<script setup>
import NavLinks from '@/components/NavLinks.vue';
</script>
