<template>
  <section class="popular-course-area section-gap">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-20 col-lg-8">
          <div class="title text-center">
            <h1 class="mb-10">ДОСОСКА ОБЪЯВЛЕНИЙ</h1>
            <p>
              Будь всегда вкурсе событии
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="active-popular-carusel d-flex flex-wrap">
          <div class="single-popular-carusel col-lg-6 my-5" v-for="event in events" :key="event.id">
            <div class="thumb-wrap relative">
              <div class="thumb relative">
                <div class="overlay overlay-bg"></div>
                <img class="img-fluid" :src="event.image" alt="">
              </div>
            </div>
            <div class="details">
              <a href="#"><h4 style="height: 30px;">{{ event.title }}</h4></a>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Экспедиция 'Деликой вдоль тропы приключений'",
          description: "Присоединяйтесь к нашему клубу на захватывающее приключение по удивительным местам и непроходимым тропам! Планируемая поездка предоставит участникам возможность в полной мере ощутить мощь и надежность своих Mitsubishi Delica",
          image: "/_nuxt/static/img/events/delica-event.webp"
        },
        {
          id: 2,
          title: "Ночь в ритме экстаза",
          description: "Присоединяйтесь к нам на незабываемую ночь, полную музыки, танцев и волнующих впечатлений! На этом мероприятии мы соберемся вместе, чтобы отдаться вихрю танцевальных ритмов под звуки лучших диджеев города.",
          image: "/_nuxt/static/img/events/dancers-event.jpg"
        },
        {
          id: 3,
          title: "Соревнование 'Охота за трофеем'",
          description: "Приглашаем всех рыбаков принять участие в захватывающем соревновании, где главной целью станет поймать самого крупного трофейного экземпляра!",
          image: "/_nuxt/static/img/events/fishing.jpg"
        },
        {
          id: 4,
          title: "Чемпионат 'Цифровые Герои'",
          description: "Приглашаем всех киберспортсменов принять участие в нашем грандиозном чемпионате по любимым играм! Покажите свою мастерство, сражаясь с опытными соперниками в захватывающих поединках.",
          image: "/_nuxt/static/img/events/cybersport.jpg"
        },
        {
          id: 5,
          title: "Восхождение на вершину",
          description: "Приглашаем всех скалолазов на захватывающее событие — восхождение на одну из самых впечатляющих вершин в нашем регионе! Преодолевайте вертикальные стены, преодолевайте трудности и добирайтесь до самых высоких точек под руководством опытных инструкторов.",
          image: "/_nuxt/static/img/events/skalolaz.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.popular-course-area {
  padding: 60px 0;
}

.section-gap {
  padding: 70px 0;
}

.title {
  margin-bottom: 70px;
}

</style>