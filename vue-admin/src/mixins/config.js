const headers = new Headers();
headers.set('Content-Type', 'application/json');

const token = localStorage.getItem('token');

if (token) {
    headers.set('x-auth-token', token);
} else {
    headers.delete('x-auth-token');
}

export default {
    data() {
        return {
            headers,
            // server_url: 'http://kenshirosan-server.eddi.cloud/api',
            // dev_server_url: 'http://localhost:5000/api',
            // docker_dev_url: 'http://redis-server:5000',

            server_url: 'http://localhost/api',
            dev_server_url: 'http://localhost:5000/api',
            docker_dev_url: 'http://redis-server:5000',
        };
    },
};
