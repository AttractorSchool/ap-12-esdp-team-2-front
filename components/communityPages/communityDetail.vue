<template>
  <section class="course-details-area pt-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex flex-wrap">
            <div class="col-lg-8 main-image d-flex justify-content-start">
              <img class="img-fluid" src="/_nuxt/static/img/m-img.jpg" alt="">
            </div>
            <div class="col-lg-4 right-contents">
							<ul>
								<li>
									<a class="justify-content-between d-flex" href="#">
										<p>Название клуба</p>
										<span class="or">George Mathews</span>
									</a>
								</li>
								<li>
									<a class="justify-content-between d-flex" href="#">
										<p>Рекомендации от клубов</p>
										<span>20</span>
									</a>
								</li>
								<li>
									<a class="justify-content-between d-flex" href="#">
										<p>Участники</p>
										<span>150</span>
									</a>
								</li>
								<li>
									<a class="justify-content-between d-flex" href="#">
										<p>Рейтинг </p>
										<span>5.00</span>
									</a>
								</li>
							</ul>
							<a href="#" class="primary-btn text-uppercase">Вступить</a>
						</div>
          </div>
          <div class="container d-flex flex-column">
            <div class="tab-menu d-flex justify-content-start">
              <div
                v-for="tab in tabs"
                :key="tab.id"
                :class="['tab-title', { active: activeTab === tab.id }]"
                @click="activeTab = tab.id"
              >
                {{ tab.title }}
              </div>
            </div>
            <div class="tab-content-wrapper">
              <component
                v-for="tab in tabs"
                :key="tab.id"
                :is="tab.component"
                v-show="activeTab === tab.id"
              ></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import tabAbout from '~/components/communityPages/tabAbout.vue';
import tabService from '~/components/communityPages/tabService.vue';
import tabGallery from '~/components/communityPages/tabGallery.vue';
import tabLocation from '~/components/communityPages/tabLocation.vue';

const activeTab = ref(1);

const tabs = [
  { id: 1, title: 'О нас', component: tabAbout },
  { id: 2, title: 'Услуги', component: tabService },
  { id: 3, title: 'Галерея', component: tabGallery },
  { id: 4, title: 'Локация', component: tabLocation },
];
</script>

<style scoped>
.course-details-area {
  padding-top: 120px;
}

.main-image {
  margin-bottom: 30px;
}

.tab-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab-title {
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-align: center;
}

.tab-title.active {
  background-color: #007bff;
  color: white;
}

.tab-content-wrapper {
  width: 100%;
  text-align: center;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
</style>
