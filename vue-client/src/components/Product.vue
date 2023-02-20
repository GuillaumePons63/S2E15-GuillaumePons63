<template>
    <div class="breadcrumbs">
        <div class="container">
            <RouterLink to="/shop">Home</RouterLink>
            <i class="fa fa-chevron-right breadcrumb-separator" />
            <span>Shop</span>
            <i class="fa fa-chevron-right breadcrumb-separator" />
            <span v-text="ucfirst(product.title)"></span>
        </div>
    </div>

    <div class="container">
        <RouterLink to="/shop">Retour</RouterLink>
    </div>
    <div class="product-section container">
        <div class="product-section-image">
            <img :src="product.image" alt="product" />
        </div>
        <div class="product-section-information">
            <h1
                class="product-section-title"
                v-text="ucfirst(product.title)"
            ></h1>
            <div class="product-section-subtitle">
                15 inch, 1TB SSD, 32GB RAM
            </div>
            <div class="product-section-price">
                {{ formatPrice(product.priceHT) }} €
            </div>

            <div v-html="product.description"></div>

            <p>&nbsp;</p>

            <a
                :href="`/product/${product.title}`"
                class="button"
                @click.prevent="handleClick"
            >
                Ajouter au panier
            </a>
            <hr />

            <label for="q">Quantité: </label>
            <select id="q" name="q" @change="handleSelectChange">
                <option value="">Choisissez la quantité</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    </div>
</template>

<script>
import requests from '@/mixins/requests.js';
import helpers from '@/mixins/helpers.js';
import { useCartStore } from '@/stores/cart';

export default {
    mixins: [requests, helpers],

    data() {
        return {
            product: {},
            quantity: 1,
        };
    },

    methods: {
        handleSelectChange(event) {
            this.quantity = Number(event.target.value);
        },

        async handleClick(e) {
            e.preventDefault();

            const prod = {
                quantity: this.quantity,
                id: this.product.id,
            };
            const cartStore = useCartStore();
            await cartStore.addOrUpdate(prod);
            // try {
            //     await fetch(`${this.server_url}/cart/add`, {
            //         method: 'POST',
            //         headers: this.headers,
            //         body: JSON.stringify(prod),
            //     });
            // } catch (error) {
            //     console.error(error);
            // }
        },
        async getProduct() {
            const res = await fetch(
                `${this.server_url}/products/${this.$route.params.id}`
            );

            const prod = await res.json();

            this.product = prod;
        },
    },

    mounted() {
        this.getProduct().then(null);
    },
};
</script>
