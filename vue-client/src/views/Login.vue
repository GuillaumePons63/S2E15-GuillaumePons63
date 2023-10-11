<template>
    <div class="container mt-3">
        <h2 class="text-info">
            Login or <RouterLink to="/register">Register</RouterLink>
        </h2>
        <form @submit.prevent="onSubmit" class="mt-5 mb-5">
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    class="form-control"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="
            Your Email"
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    class="form-control"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Your password"
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </div>

    <div class="container mt-5 mb-5">
        <a class="btn btn-success" href="http://localhost:5000/api/auth/github"
            >Login with github</a
        >
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js';

async function onSubmit(e) {
    const authStore = useAuthStore();

    const email = e.target.querySelector('input[name=email]').value;
    const password = e.target.querySelector('input[name=password]').value;

    await authStore.login(email, password);
    // await authStore.loginWithGithub(email, password);
}
</script>

<style scoped>
.btn {
    border: solid 1px #6e6d6d;
    padding: 1em;
    display: inline-block;
}
.btn-success {
    background-color: #0bad93;
}
.mt-5 {
    margin-top: 1em;
}
.mb-5 {
    margin-bottom: 1em;
}
</style>
