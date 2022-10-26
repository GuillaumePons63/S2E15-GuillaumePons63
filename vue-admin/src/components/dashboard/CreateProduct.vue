<template>
  <section class="mt-5 mb-5">
    <div class="row">
      <h1 class="text-primary"><i class="fas fa-user" /> Créez un produit</h1>

      <form
        encType="multipart/form-data"
        class="form"
        @submit.prevent="createProduct"
      >
        <div class="col-md-4 mb-2">
          <label for="metaDescription" class="form-label">
            Catégories du produit
          </label>
          <select
            class="form-select"
            aria-label="Default select"
            name="category"
            v-model="product.category"
          >
            <option value="">Open this select menu</option>
            <option
              v-for="(cat, index) in categories"
              name="cat"
              :key="index"
              :value="cat"
            >
              {{ cat }}
            </option>
          </select>
        </div>
        <div class="col-md-8 mb-2">
          <div class="row">
            <div class="col-md-6">
              <label for="image" class="form-label">
                Image principal du produit
              </label>
              <input
                type="file"
                name="image"
                class="form-control"
                id="image"
                @change="loadImage"
              />
            </div>
            <div class="col-md-2">
              <img :src="product.image" alt="Représentation du produit" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
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

        <div class="col-md-5">
          <label for="body" class="form-label"> Contenu </label>
          <Wysiwyg
            placeholder="description"
            name="description"
            ref="desc"
            @changing="setDescription"
          ></Wysiwyg>
        </div>
        <input type="submit" class="btn btn-primary" value="Create Product" />
      </form>
    </div>
  </section>
</template>

<script setup>
import Wysiwyg from "@/components/dashboard/Wysiwyg.vue";
</script>

<script>
import requests from "@/mixins/requests.js";

export default {
  mixins: [requests],
  data() {
    return {
      initProd: {
        title: "",
        description: "",
        metaDescription: "",
        priceHT: "",
        category: "",
      },
      product: {
        title: "",
        description: "",
        metaDescription: "",
        priceHT: "",
        category: "",
      },
      products: [],
      categories: [],
    };
  },
  methods: {
    async getProducts() {
      try {
        const response = await fetch(`${this.dev_server_url}/products`);

        this.products = await response.json();
      } catch (e) {
        console.error(e.message);
      }
    },
    setDescription({ target }) {
      this.product["description"] = target.value;
    },
    async createProduct() {
      try {
        const response = await fetch(`${this.dev_server_url}/products/create`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(this.product),
        });
        const prods = await response.json();

        this.products = prods;
        this.product = this.initProd;
      } catch (e) {
        console.error(e);
      }
    },
    loadImage(e) {
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (e) => {
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
