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
              <img :src="product.image" alt="item" class="cart-table-img" />
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
            <div v-text="`${formatPrice(product.priceHT)} &euro; TTC`"></div>
          </div>
        </div>
      </div>
      <RouterLink to="/" class="have-code" v-if="products.length">
        Have a Code?
      </RouterLink>
      <div class="have-code-container" v-if="products.length">
        <form action="/02-app-fil-rouge-et-challenge/vue-client/public">
          <input type="text" />
          <button type="submit" class="button button-plain">Apply</button>
        </form>
      </div>

      <div class="cart-totals" v-if="products.length">
        <div class="cart-totals-left">TODO: calculer prix livraison ?</div>

        <div class="cart-totals-right">
          <div>
            Subtotal <br />
            Tax <br />
            <span class="cart-totals-total"> Total </span>
          </div>
          <div class="cart-totals-subtotal">
            totalHT &euro;
            <br />
            {{ (totalTTC - totalHT).toFixed(2) }} &euro;
            <br />
            <span class="cart-totals-total">
              totalTTC {{ totalTTC }} &euro;
            </span>
          </div>
        </div>
      </div>

      <div class="cart-buttons">
        <RouterLink to="/shop" class="button"> Continue Shopping </RouterLink>
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
import helpers from "@/mixins/helpers.js";
import config from "@/mixins/config.js";
export default {
  mixins: [helpers, config],

  data() {
    return {
      products: [],
      count: Number,
      totalHT: Number,
      totalTTC: Number,
    };
  },
  methods: {
    removeProduct() {
      console.log("Removing Product");
    },

    async getProducts() {
      const response = await fetch(`${this.dev_server_url}/cart`);

      const prods = await response.json();

      this.products = prods;
    },
  },

  mounted() {
    this.getProducts().then(() => {
      let HT = 0;

      this.products.forEach((item) => {
        // Si on a une quantité, il faudra ajoute * qty au calcul
        HT += Number(item.priceHT * item.qty);

        this.totalHT = this.convertToEuro(HT);
        this.totalTTC = this.formatPrice(HT);
      });
    });
  },
};
</script>
