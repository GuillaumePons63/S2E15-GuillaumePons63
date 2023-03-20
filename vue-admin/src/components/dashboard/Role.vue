<template>
    <section class="row">
        <div class="mb-5 col-md-8">
            <h1 class="text-primary">Détails du Role</h1>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Label</th>
                        <th>Permissions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-text="role.name"></td>
                        <td>{{ role.label }}</td>
                        <td>
                            {{ permissions }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import config from '@/mixins/config';
import { axios, setAuthToken } from '@/mixins/axios';

export default {
    mixins: [config],
    data() {
        return {
            role: {},
        };
    },
    methods: {
        async getRole() {
            const url = `${this.server_url}/roles/${this.$route.params.id}`;

            const res = await axios.get(url);

            this.role = res.data;
            this.permissions = res.data.permissions
                .map(perm => perm.name)
                .join(', ');
        },
    },
    mounted() {
        setAuthToken();
        this.getRole().then(null);
    },
};
</script>
