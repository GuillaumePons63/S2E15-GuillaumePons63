<template>
  <header class="with-background">
    <div class="hero container">
      <div class="hero-copy">
        <h1>
          Bienvenue dans le monde merveilleux des mises à jour qui forcent à
          relire toute la doc
        </h1>

        <p>Des produits, Des categories, un panier et REDIS sur le serveur</p>
        <div class="hero-buttons">
          <a href="!#" class="button button-white"> Blog Post </a>
          <a href="!#" class="button button-white"> GitHub </a>
        </div>
      </div>

      <div class="hero-image">
        <img :src="otherimg" alt="heropages" />
      </div>
    </div>
  </header>

  <div class="featured-section">
    <div class="container">
      <h1 class="text-center">MERN Ecommerce</h1>

      <p class="section-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vitae
        nisi, consequuntur illum dolores cumque pariatur quis provident deleniti
        nesciunt officia est reprehenderit sunt aliquid possimus temporibus enim
        eum hic.
      </p>

      <div class="text-center button-container">
        <a href="!#" class="button"> Featured </a>
        <a href="!#" class="button"> On Sale </a>
      </div>

      <div class="products text-center">
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
        <div class="product">
          <a href="!#">
            <img :src="img" alt="product" />
          </a>
          <a href="!#">
            <div class="product-name">MacBook Pro</div>
          </a>
          <div class="product-price">$2499.99</div>
        </div>
      </div>

      <div class="text-center button-container">
        <RouterLink to="/shop" class="button"> View more products </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import img from "../assets/img/macbook-pro.png";
import otherimg from "../assets/img/kenshiro.jpg";
</script>

<style scoped></style>
