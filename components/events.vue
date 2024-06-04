<template>
  <section class="u-align-center u-clearfix u-container-align-center u-grey-10 u-section-2">
    <hr class="hr">
    <h2 class="u-align-center u-text u-text-default u-text-1 events">
      <a href="#">Мероприятия</a>
    </h2>
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1 m-5">
      <div class="u-expanded-width u-list u-list-1">
        <div class="u-repeater u-repeater-1">
          <div v-for="event of events" :key="event">

            <div class="m-5 u-align-center u-border-15 u-border-no-left u-border-no-right u-border-no-top u-border-palette-3-base u-container-align-center-lg u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-custom-border u-list-item u-radius-50 u-repeater-item u-shape-round u-white u-list-item-1" style="height: 500px">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                <img class="u-expanded-width u-image u-image-default u-image-1" src="@/static/images/event.jpg" alt="" data-image-width="700" data-image-height="575">
                <h5 class="u-align-center u-text u-text-3"> {{ event }} </h5>
                <p class="u-align-center u-custom-item u-text u-text-4">
                  <span class="u-icon"></span>Об ивенте
                </p>
                <a href="#" class="u-align-center u-file-icon u-icon u-text-palette-3-base u-icon-2">
                  <img src="@/static/images/481127-6e595bca.png" alt="">
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    data: () => ({
      events: [
          1, 2, 3, 4, 5, 6, 7, 8
      ]
    })
  }
</script>

<style>

.events {
  color: #f26f43;
}
.hr {
  color: #f26f43;
}
</style>