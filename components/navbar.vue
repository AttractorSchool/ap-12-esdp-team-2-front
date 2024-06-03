<template>
  <nav class="navbar bg-body-tertiary mt-3">
    <div class="container-fluid">
      <nuxt-link class="nav-link" to="/">
        <img src="@/static/logo.png" alt="logo img" class="logo">
      </nuxt-link>
      <nuxt-link class="nav-link" to="#">
        <img src="@/static/login.png" alt="login img" class="login me-3">
      </nuxt-link>
    </div>
  </nav>
</template>
<script setup lang="ts">
</script>

<style>
.logo {
  width: 300px;
  height: 90px;
}

.login {
  width: 40px;
  height: 40px;
}
.search {
  width: 500px;
}
</style>