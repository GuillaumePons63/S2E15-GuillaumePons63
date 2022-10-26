import { defineStore } from 'pinia';
// fake avatars https://i.pravatar.cc/50?u=toto@gmail.com
export const useAuthStore = defineStore('auth', {
    state() {
        return {
            isAuthenticated: false,
            token: '',
            isLoading: true,
        };
    },

    actions: {
        login() {
            this.isAuthenticated = !this.isAuthenticated;
            !this.isAuthenticated
                ? (this.isLoading = true)
                : (this.isLoading = false);
        },
    },

    getters: {
        checkAuth() {
            this.token = localStorage.getItem('token');

            // si token, configure axios aussi
            if (this.token) {
                this.isAuthenticated = true;
                this.isLoading = false;
                return true;
            }
        },
    },
});
