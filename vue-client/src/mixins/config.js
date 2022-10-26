import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Faire une fonction pour ça dans pinia
// axios.defaults.headers.common['Authorization'] = 'Bearer: token';

export default {
    data() {
        return {
            axios,
            server_url: 'http://kenshirosan-server.eddi.cloud:5000',
            dev_server_url: 'http://localhost:5000/api',
            docker_dev_url: 'http://redis-server:5000',
        };
    },
};
