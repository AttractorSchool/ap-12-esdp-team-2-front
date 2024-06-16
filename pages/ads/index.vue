<template>
  <div class="banner-area relative about-banner" id="home">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="about-content col-lg-12">
          <h1 class="text-white">
            Объявления
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="events-list-area section-gap event-page-lists">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 pb-30" v-for="ad of ads" :key="ad">
          <div class="single-carusel row align-items-center">
            <div class="col-12 col-md-6 thumb">
              <img class="img-fluid" src="../../static/img/e1.jpg" alt="">
            </div>
            <div class="detials col-12 col-md-6">
              <a href="#" @click.prevent="goTo(ad)">
                <h4>
                  Объявление {{ ad }}
                </h4>
              </a>
              <a href="#">
                Клуб
              </a>
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
    ads: [1, 2, 3, 4, 5, 6, 7, 8]
  }),
  methods: {
    goTo(ad) {
      this.$router.push('/ads/' + ad)
    }
  }
}
</script>


