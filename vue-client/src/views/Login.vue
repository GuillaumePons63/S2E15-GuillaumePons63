<template>
    <div class="container mt-3">
        <h2 class="text-info">
            Login or <RouterLink to="/register">Register</RouterLink>
        </h2>
        <form @submit.prevent="login()" class="mt-5 mb-5">
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    class="form-control"
                    name="email"
                    type="email"
                    id="email"
                    v-model="email"
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
                    v-model="password"
                    placeholder="Your password"
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.js';
</script>

<script>
import config from '@/mixins/config.js';

export default {
    name: 'Login',
    mixins: [config],
    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        async login() {
            this.axios
                .post(`${this.dev_server_url}/auth`, {
                    email: this.email,
                    password: this.password,
                })
                .then(res => {
                    const { token, user } = res.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    // setAuthToken(token);
                    // dispatch({ type: LOGIN, payload: res.data });
                })
                .catch(e => {
                    for (let prop in e) {
                        // TODO: avoir des fichiers nommés comme les codes d'erreurs et faire des redirections
                        console.log(prop, e[prop]);
                    }
                });
        },
    },
};
</script>
