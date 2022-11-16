<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">
          <img src="/images/logo/logo.png" class="header-logo" alt="">
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/crud" class="nav-link">CRUD</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NuxtLink to="/services" class="dropdown-item">Services</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/game" class="dropdown-item">Game</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'appHeader'
}
</script>


