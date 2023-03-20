<template>
    <section class="row">
        <div class="mb-5 col-md-8">
            <h1 class="text-primary">
                <i class="fas fa-user" /> Créez un produit
            </h1>

            <form
                encType="multipart/form-data"
                class="form"
                @submit.prevent="createProduct"
            >
                <div class="col-md-6 mb-2">
                    <label for="metaDescription" class="form-label">
                        Catégories du produit
                    </label>
                    <select
                        class="form-select"
                        aria-label="Default select"
                        name="category"
                        v-model="product.category_id"
                    >
                        <option value="">Open this select menu</option>
                        <option
                            v-for="(cat, index) in categories"
                            name="cat"
                            :key="index"
                            :value="cat.id"
                        >
                            {{ cat.name }}
                        </option>
                    </select>
                </div>
                <div class="col-md-6 mb-2">
                    <div class="row">
                        <div>
                            <label for="image" class="form-label">
                                Image principal du produit (1MB max)
                            </label>
                            <input
                                type="file"
                                name="image"
                                class="form-control"
                                id="image"
                                @change="loadImage"
                            />
                            <img
                                :src="product.image"
                                alt="Représentation du produit"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group input-group-sm mb-2">
                        <input
                            type="text"
                            placeholder="Product Name"
                            name="title"
                            v-model="product.title"
                            class="form-control"
                        />
                    </div>
                    <div class="input-group input-group-sm mb-2">
                        <input
                            type="text"
                            placeholder="metaDescription"
                            name="metaDescription"
                            v-model="product.metaDescription"
                            class="form-control"
                        />
                    </div>
                    <div class="input-group input-group-sm mb-2">
                        <input
                            type="number"
                            placeholder="priceHT"
                            name="priceHT"
                            v-model="product.priceHT"
                            class="form-control"
                        />
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="body" class="form-label"> Contenu </label>
                    <Wysiwyg
                        placeholder="description"
                        name="description"
                        ref="desc"
                        @changing="setDescription"
                    ></Wysiwyg>
                </div>
                <input
                    type="submit"
                    class="btn btn-primary"
                    value="Create Product"
                />
            </form>
        </div>
        <div class="col-md-3">
            <h2 class="text-center">Products</h2>
            <hr />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Catégorie</th>
                        <th>Mettre à jour</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td v-text="product.title"></td>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Wysiwyg from '@/components/dashboard/Wysiwyg.vue';
import requests from '@/mixins/requests.js';
import { axios } from '@/mixins/axios';

export default {
    mixins: [requests],
    components: { Wysiwyg },
    data() {
        return {
            initProd: {
                title: '',
                description: '',
                metaDescription: '',
                priceHT: '',
                category: '',
            },
            product: {
                title: '',
                description: '',
                metaDescription: '',
                priceHT: '',
                category: '',
            },
            products: [],
            categories: [],
        };
    },
    methods: {
        async getProducts() {
            try {
                const response = await fetch(`${this.server_url}/products`);

                this.products = await response.json();
            } catch (e) {
                console.error(e.message);
            }
        },
        setDescription({ target }) {
            this.product['description'] = target.value;
        },
        async createProduct() {
            try {
                const response = await axios.post(
                    `${this.server_url}/products/create`,
                    this.product
                );

                this.products = await response.data.products;
                this.product = this.initProd;
            } catch (e) {
                console.error(e);
            }
        },
        loadImage(e) {
            const file = e.target.files[0];

            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = e => {
                this.product.image = e.target.result;
            };
        },
    },
    mounted() {
        this.getCategories().then(() => null);
        this.getProducts().then(() => null);
    },
};
</script>

<style scoped>
img {
    max-width: 100%;
}
</style>
