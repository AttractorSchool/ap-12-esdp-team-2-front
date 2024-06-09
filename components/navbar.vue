<template>
  <header id="header">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i class="fa fa-behance"></i></a></li>
            </ul>
          </div>
          <div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
            <!-- Дополнительный контент, если необходим -->
          </div>
        </div>
      </div>
    </div>
    <div class="container main-menu">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <nuxt-link to="/">
            <img src="../static/img/logo_v2.png" alt="logo" title="" style="width: 150px;" />
          </nuxt-link>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li><nuxt-link to="/">Главная</nuxt-link></li>
            <li><nuxt-link to="/about">О нас</nuxt-link></li>
            <li><nuxt-link to="/courses">Сообщества</nuxt-link></li>
            <li><nuxt-link to="/events">События</nuxt-link></li>
            <li><nuxt-link to="/gallery">Новости</nuxt-link></li>
            <li class="menu-has-children">
              <nuxt-link to="#">Услуги</nuxt-link>
              <ul>
                <li><nuxt-link to="/services/clubs">Услуги от клубов</nuxt-link></li>
                <li><nuxt-link to="/services/for-clubs">Услуги для клубов</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="/contact">Контакты</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>