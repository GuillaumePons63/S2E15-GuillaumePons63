<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar-admin collapse"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/">
            <span class="fas fa-store" /> WebSite
          </RouterLink>
          <RouterLink class="nav-link" aria-current="page" to="/">
            <span class="fas fa-home" /> Dashboard
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/profile/me">
            <span class="fas fa-users" /> Votre Profile
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/your/orders">
            <span class="fas fa-shopping-cart" /> Vos commandes
          </RouterLink>
        </li>
      </ul>

      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Administration</span>
      </h6>

      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/dashboard/current">
            <span class="fas fa-file" data-feather="file-text" /> Resume
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            aria-current="page"
            to="/dashboard/roles"
          >
            <span class="fas fa-user-lock" /> Gestion des Rôles
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink
            class="nav-link"
            aria-current="page"
            to="/dashboard/employees"
          >
            <span class="fas fa-user" /> Employés
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink
            class="nav-link"
            aria-current="page"
            to="/dashboard/categories"
          >
            <span class="fas fa-file" /> Categories
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink
            class="nav-link"
            aria-current="page"
            to="/dashboard/products"
          >
            <span class="fas fa-store" /> Produits
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="articles">
            <span class="fas fa-pen" /> Articles (blog)
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink
            class="nav-link"
            aria-current="page"
            to="/dashboard/customers"
          >
            <span class="fas fa-users" /> Clients
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link"
            aria-current="page"
            to="/dashboard/reports"
          >
            <span class="fas fa-area-chart" /> Rapports
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
