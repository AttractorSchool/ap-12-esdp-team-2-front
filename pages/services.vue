<template>
  <div class="banner-area relative about-banner" id="home">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="about-content col-lg-12">
          <h1 class="text-white">
            Услуги клуба
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="events-list-area section-gap event-page-lists">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 pb-30" v-for="service of services" :key="service">
          <div class="single-carusel row align-items-center">
            <div class="col-12 col-md-6 thumb">
              <img class="img-fluid" src="@/static/img/e1.jpg" alt="">
            </div>
            <div class="detials col-12 col-md-6">
              <p>25th February, 2018</p>
              <a href="#">
                <h4>
                  {{ service }}
                </h4>
              </a>
              <p>
                For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes
                and seeing magnificent displays in the heavens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data: () => ({
    services: [1, 2, 3, 4, 5, 6, 7, 8]
  })
}
</script>


