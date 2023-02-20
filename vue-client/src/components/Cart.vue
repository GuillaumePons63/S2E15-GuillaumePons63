<template>
    <div class="breadcrumbs">
        <div class="container">
            <RouterLink to="/shop">Home</RouterLink>
            <i class="fa fa-chevron-right breadcrumb-separator" />
            <span>Shopping Cart</span>
        </div>
    </div>

    <div class="cart-section container">
        <h2 v-if="!products.length">Vous n'avez rien ajouté au panier</h2>
        <div v-if="products.length">
            <div class="cart-table" v-if="products.length">
                <div class="cart-table-row" v-for="product in products">
                    <div class="cart-table-row-left">
                        <RouterLink to="/">
                            <img
                                :src="product.image"
                                alt="item"
                                class="cart-table-img"
                            />
                        </RouterLink>
                        <div class="cart-item-details">
                            <div class="cart-table-item">
                                <RouterLink to="/product/product.title">
                                    {{ product.title }}
                                </RouterLink>
                            </div>
                            <div class="cart-table-description">
                                15 inch, 1TB SSD, 32GB RAM
                            </div>
                        </div>
                    </div>
                    <div class="cart-table-row-right">
                        <div class="cart-table-actions">
                            <button
                                @click="removeProduct"
                                class="btn btn-primary"
                                type="button"
                            >
                                Remove
                            </button>
                        </div>
                        <div></div>
                        <div
                            v-text="`${this.formatPrice(product.priceHT)} TTC`"
                        ></div>
                    </div>
                </div>
            </div>
            <RouterLink to="/" class="have-code" v-if="products.length">
                Have a Code?
            </RouterLink>
            <div class="have-code-container" v-if="products.length">
                <form action="">
                    <input type="text" />
                    <button type="submit" class="button button-plain">
                        Apply
                    </button>
                </form>
            </div>

            <div class="cart-totals" v-if="products.length">
                <div class="cart-totals-left">
                    TODO: calculer prix livraison ?
                </div>

                <div class="cart-totals-right">
                    <div>
                        Subtotal <br />
                        Tax <br />
                        <span class="cart-totals-total"> Total </span>
                    </div>
                    <div class="cart-totals-subtotal">
                        {{ totalHT }}&euro;
                        <br />
                        {{ taxAmount }}
                        <br />
                        <span class="cart-totals-total">
                            {{ totalTTC }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="cart-buttons">
                <RouterLink to="/shop" class="button">
                    Continue Shopping
                </RouterLink>
                <RouterLink
                    to="/checkout"
                    class="button-primary"
                    v-if="products.length"
                >
                    Proceed to Checkout
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import helpers from '@/mixins/helpers.js';
import config from '@/mixins/config.js';
import axios from 'axios';

export default {
    mixins: [helpers, config],

    data() {
        return {
            products: [],
            count: 0,
            totalHT: 0,
            totalTTC: 0,
            taxAmount: 0,
        };
    },
    methods: {
        removeProduct() {
            console.log('Removing Product');
        },

        async getProducts() {
            // Si on a des ids de produits en localStorage ...
            const ids = [1];
            axios
                .post(`${this.dev_server_url}/cart`, { ids: ids })
                .then(res => {
                    this.products = res.data;
                    let HT = 0;

                    this.products.forEach(item => {
                        // Si on a une quantité, il faudra ajouter '* item.qty' au calcul
                        // item.qty = 2;

                        HT += Number(item.priceHT);
                    });

                    const totalHT = this.products.reduce(
                        (acc, prod) =>
                            (acc +=
                                Number(prod.priceHT) * Number(prod.qty ?? 1)),
                        0
                    );

                    this.totalHT = this.convertToEuro(totalHT);

                    this.taxAmount = Intl.NumberFormat('fr-fr', {
                        style: 'currency',
                        currency: 'EUR',
                    }).format(
                        this.addTva(this.totalHT) - this.convertToEuro(totalHT)
                    );

                    this.totalTTC = this.formatPrice(HT);
                })
                .catch(e => console.error(e));
        },
    },

    mounted() {
        this.getProducts().then(() => null);
    },
};
</script>
