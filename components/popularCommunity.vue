<template>
  <section class="popular-course-area section-gap">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
          <div class="title text-center">
            <h1 class="mb-10">Популярные сообщества нашего сайта</h1>
            <p>
              Исследуйте мир сообществ: Путеводитель по самым популярным уголкам нашего сайта,
              где каждое сообщество — это уникальная площадка для обмена идеями,
              обсуждения интересов и нахождения новых друзей.
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-wrapper">
        <div class="carousel" :style="carouselStyle">
          <div v-for="(item, index) in items" :key="index" class="single-popular-carusel">
            <div>
              <div class="thumb-wrap relative">
                <div class="thumb relative">
                  <div class="overlay overlay-bg"></div>
                  <img class="img-fluid" :src="item.img" :alt="item.title">
                </div>
                <div class="meta d-flex justify-content-between bg-dark">
                  <p><i class="fa-solid fa-users"></i> {{ item.users }} <i class="fa-solid fa-heart"></i>{{ item.likes }}</p>
                </div>
              </div>
              <div class="details">
                <a href="#">
                  <h4>{{ item.title }}</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-controls">
          <button @click="prevSlide" class="carousel-control-prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button @click="nextSlide" class="carousel-control-next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {img: '/_nuxt/static/img/clubs/skalolaz.jpg', title: 'Вершинные Скалолазы', users: 355, likes: 35},
        {img: '/_nuxt/static/img/clubs/bookmans.jpg', title: 'Книжные Вдохновители', users: 355, likes: 35},
        {img: '/_nuxt/static/img/clubs/melomans.jpg', title: 'Меломаны-Экстремалы', users: 355, likes: 35},
        {img: '/_nuxt/static/img/clubs/cybersport.jpg', title: 'Игровые Магистры', users: 355, likes: 35},
        {img: '/_nuxt/static/img/clubs/dancers.jpg', title: 'Танцующие Экстазы', users: 355, likes: 35},
        {img: '/_nuxt/static/img/clubs/na-everest.jpg', title: 'на Эверест', users: 355, likes: 35},
        {img: '/_nuxt/static/img/clubs/lingo.jpg', title: 'Мировые Языки', users: 355, likes: 35},
        {img: '/_nuxt/static/img/clubs/club-icon.png', title: 'ФотоАрт Мастерская', users: 355, likes: 35}
      ],
      intervalId: null
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.activeIndex * 100}%)`,
        transition: 'transform 1s ease'
      };
    }
  },
  methods: {
    prevSlide() {
      if (this.activeIndex === 0) {
        this.activeIndex = this.items.length / 4 - 1;
      } else {
        this.activeIndex--;
      }
    },
    nextSlide() {
      if (this.activeIndex === this.items.length / 4 - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, 4000);
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  }
};
</script>

<style scoped>
.popular-course-area {
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel {
  display: flex;
  transition: transform 1s ease;
  width: 100%;
}

.single-popular-carusel {
  flex: 1 0 25%;
  box-sizing: border-box;
  padding: 0 10px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.carousel-control-prev,
.carousel-control-next {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
}
</style>
