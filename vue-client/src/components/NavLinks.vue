<template>
  <ul>
    <li>
      <RouterLink to="/shop">Shop</RouterLink>
    </li>

    <li>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </li>
    <li>
      <RouterLink to="!#">Logout</RouterLink>
    </li>

    <li>
      <RouterLink to="/cart">
        Cart
        <span class="cart-count">
          <span>0</span>
        </span>
      </RouterLink>
    </li>
  </ul>
</template>
