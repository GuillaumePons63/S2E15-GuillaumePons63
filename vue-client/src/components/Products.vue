<template>
    <div class="breadcrumbs">
        <div class="container">
            <RouterLink to="/">Home</RouterLink>
            <i class="fa fa-chevron-right breadcrumb-separator" />
            <span>Shop</span>
        </div>
    </div>

    <div class="products-section container">
        <div class="sidebar">
            <h3>By Category</h3>
            <ul>
                <li>
                    <RouterLink to="/all">Toutes les categories</RouterLink>
                </li>

                <li v-for="category in categories">
                    <RouterLink to="/category">
                        {{ category.name }}
                    </RouterLink>
                </li>
            </ul>

            <h3>By Price</h3>
            <ul>
                <li>
                    <RouterLink to="/shop">$0 - $700</RouterLink>
                </li>
                <li>
                    <RouterLink to="/shop">$700 - $2500</RouterLink>
                </li>
                <li>
                    <RouterLink to="/shop">$2500+</RouterLink>
                </li>
            </ul>
        </div>

        <div>
            <div class="products text-center">
                <div class="product" v-for="product in products">
                    <RouterLink :to="`/product/${product.id}`">
                        <img :src="product.image" alt="product.title" />
                    </RouterLink>
                    <RouterLink :to="`/product/${product.id}`">
                        <div class="product-name">{{ product.title }}</div>
                    </RouterLink>
                    <div class="product-price">{{ product.priceHT }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import requests from '@/mixins/requests.js';

export default {
    mixins: [requests],
    mounted() {
        this.getProducts().then(null);
        this.getCategories().then(null);
    },
};
</script>
