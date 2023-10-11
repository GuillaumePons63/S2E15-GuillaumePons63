<template>
    <section class="row">
        <div class="mb-5 col-md-8">
            <h1 class="text-primary">
                <i class="fas fa-user" /> Gestions des rôles
            </h1>

            <form
                encType="multipart/form-data"
                class="form"
                @submit.prevent="createRole"
            >
                <div class="col-md-6">
                    <div class="input-group input-group-sm mb-2">
                        <input
                            type="text"
                            placeholder="Role Name"
                            name="title"
                            v-model="role.name"
                            class="form-control"
                        />
                    </div>
                    <div class="input-group input-group-sm mb-2">
                        <input
                            type="text"
                            placeholder="Role Label"
                            name="role"
                            v-model="role.label"
                            class="form-control"
                        />
                    </div>
                </div>

                <input
                    type="submit"
                    class="btn btn-primary"
                    value="Create Role"
                />
            </form>
        </div>
        <div class="col-md-3">
            <h2 class="text-center">Roles</h2>
            <hr />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Roles</th>
                        <th>Mettre à jour</th>
                        <th>Supprimer</th>
                        <th>Détails du rôle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="role in roles">
                        <td v-text="role.name"></td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-danger btn-sm mx-3"
                            >
                                Supprimer
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-primary btn-sm mx-3"
                            >
                                Update
                            </button>
                        </td>
                        <td>
                            <RouterLink :to="`/dashboard/roles/${role.id}`"
                                >Voir</RouterLink
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import { axios, setAuthToken } from '@/mixins/axios';
import config from '@/mixins/config';
export default {
    mixins: [config],
    data() {
        return {
            roles: [],
            initRole: {
                name: '',
                label: '',
            },
            role: {},
        };
    },
    methods: {
        async getRoles() {
            try {
                console.log(this.server_url);
                const response = await axios.get(`${this.server_url}/roles`);

                this.roles = await response.data;
            } catch (e) {
                console.error(e.message);
            }
        },

        async createRole() {
            try {
                const response = await axios.post(
                    `${this.server_url}/roles/create`,
                    this.role
                );

                this.roles = await response.data.roles;
                this.role = this.initRole;
            } catch (e) {
                console.error(e);
            }
        },
    },
    mounted() {
        setAuthToken();
        this.getRoles().then(() => null);
    },
};
</script>

<style scoped>
img {
    max-width: 100%;
}
</style>
