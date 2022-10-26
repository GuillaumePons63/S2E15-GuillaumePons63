import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';
// Faire une fonction pour ça dans pinia ?
// axios.defaults.headers.common['Authorization'] = 'Bearer: token';
export default {
    data() {
        return {
            axios,
        };
    },

    methods: {
        /**
         * @property common
         * @param token
         */
        setAuthToken(token = null) {
            if (token) {
                this.axios.defaults.headers.common['x-auth-token'] = token;
                this.axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${token}`;
            } else {
                delete this.axios.defaults.headers.common['x-auth-token'];
                delete this.axios.defaults.headers.common['Authorization'];
            }
        },
    },
};
