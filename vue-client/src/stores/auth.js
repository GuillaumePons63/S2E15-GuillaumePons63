import { defineStore } from 'pinia';
import { axios, setAuthToken } from '@/mixins/axios.js';
import router from '@/router/index.js';
// fake avatars https://i.pravatar.cc/50?u=toto@gmail.com
export const useAuthStore = defineStore('auth', {
    state() {
        return {
            isAuthenticated: false,
            token: localStorage.getItem('token'),
            user: JSON.parse(localStorage.getItem('user')),
        };
    },

    actions: {
        async login(email, password) {
            axios
                .post(`http://localhost:5000/api/auth`, {
                    email,
                    password,
                })
                .then(res => {
                    const { token, user } = res.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));

                    this.user = user;
                    this.token = token;
                    setAuthToken();
                    // dispatch({ type: LOGIN, payload: res.data });
                })
                .catch(e => {
                    for (let prop in e) {
                        // TODO: avoir des fichiers nommés comme les codes d'erreurs et faire des redirections
                        console.log(prop, e[prop]);
                    }
                });
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.isAuthenticated = false;
            router.push('/login');
        },
    },

    getters: {
        isAuth() {
            this.token = localStorage.getItem('token');

            setAuthToken();
            if (this.token) {
                this.isAuthenticated = true;
                this.user = JSON.parse(localStorage.getItem('user'));
                return true;
            }
            return false;
        },
    },
});
