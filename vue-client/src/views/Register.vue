<template>
    <div class="container mt-3">
        <h2 class="text-info">
            Register or <RouterLink to="/login">Login</RouterLink>
        </h2>
        <form @submit.prevent="register" class="mt-5 mb-5">
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

<script>
import config from '@/mixins/config.js';
//import axiosConfig from '@/mixins/axios.js';

export default {
    mixins: [config],
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            this.axios
                .post(`${this.dev_server_url}/users/register`, {
                    email: this.email,
                    password: this.password,
                })
                .then(res => {
                    const { token, user } = res.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    this.setAuthToken(token);
                    // dispatch({ type: REGISTER, payload: token });
                })
                .catch(e => console.error(e));
        },
    },
};
</script>
