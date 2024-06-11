<template>
  <section class="popular-courses-area section-gap courses-page">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
          <div class="title text-center">
            <h1 class="mb-10">Here is a place to search and filter</h1>
            <p>Lorem</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, index) in displayedItems" :key="index" class="single-popular-carusel col-lg-3 col-md-6">
          <div>
            <div class="thumb-wrap relative">
              <div class="thumb relative">
                <div class="overlay overlay-bg"></div>
                <img class="img-fluid" :src="`/_nuxt/static/${item.img}`" :alt="item.title">
              </div>
              <div class="meta d-flex justify-content-between">
                <p><span class="lnr lnr-users"></span> {{ item.users }} <span class="lnr lnr-bubble"></span>{{ item.comments }}</p>
                <h4>{{ item.price }}</h4>
              </div>
            </div>
            <div class="details">
              <a href="#" @click.prevent="goTo(item)">
                <h4>{{ item.title }}</h4>
              </a>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button v-for="(page, index) in totalPages" :key="index" @click="goToPage(index)" :class="{ active: index === activeIndex }">
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import communities from "~/pages/communities/index.vue";

export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {id: 1, img: 'img/p1.jpg', title: 'Learn Designing', users: 355, comments: 35, price: '$150', description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'},
        {id: 2, img: 'img/p2.jpg', title: 'Learn React js beginners', users: 355, comments: 35, price: '$150', description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'},
        {id: 3, img: 'img/p3.jpg', title: 'Learn Photography', users: 355, comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 4,
          img: 'img/p4.jpg',
          title: 'Learn Surveying',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 5,
          img: 'img/p1.jpg',
          title: 'Learn Designing',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 6,
          img: 'img/p2.jpg',
          title: 'Learn React js beginners',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 7,
          img: 'img/p3.jpg',
          title: 'Learn Photography',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 8,
          img: 'img/p4.jpg',
          title: 'Learn Surveying',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 9,
          img: 'img/p1.jpg',
          title: 'Learn Designing',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 10,
          img: 'img/p2.jpg',
          title: 'Learn React js beginners',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 11,
          img: 'img/p3.jpg',
          title: 'Learn Photography',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        },
        {
          id: 12,
          img: 'img/p4.jpg',
          title: 'Learn Surveying',
          users: 355,
          comments: 35,
          price: '$150',
          description: 'When television was young, there was a hugely popular show based on the still popular fictional characte'
        }
      ]
    };
  },

  computed: {
    communities() {
      return communities
    },
    totalPages() {
      return Math.ceil(this.items.length / 8);
    },
    displayedItems() {
      const start = this.activeIndex * 8;
      return this.items.slice(start, start + 8);
    }
  },
  methods: {
    goToPage(index) {
      this.activeIndex = index;
    },
    goTo(item) {
    this.$router.push('/communities/' + item.id)
  },
  }
};
</script>

<style scoped>
.popular-courses-area {
  /* Стили для секции */
}

.single-popular-carusel {
  margin-bottom: 30px;
}

.thumb-wrap {
  position: relative;
}

.thumb {
  position: relative;
}

.overlay-bg {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.meta {
  background: #fff;
  padding: 10px;
}

.details {
  text-align: center;
  margin-top: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
}

.pagination button.active {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px;
}
</style>
