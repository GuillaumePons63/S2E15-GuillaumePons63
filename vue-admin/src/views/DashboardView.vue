<template>
  <Header />
  <Nav />
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <QuickActions />
    <RouterView />
  </main>
</template>
<script setup>
import Header from "@/components/dashboard/Header.vue";
import Nav from "@/components/dashboard/Nav.vue";
import QuickActions from "@/components/dashboard/QuickActions.vue";
</script>
