const headers = new Headers();
headers.set("Content-Type", "application/json");

export default {
  data() {
    return {
      headers,
      server_url: "http://kenshirosan-server.eddi.cloud:5000",
      dev_server_url: "http://localhost:5000",
      docker_dev_url: "http://redis-server:5000",
    };
  },
};
