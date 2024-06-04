<template>
  <section class="u-clearfix u-container-align-right u-image u-section-1" id="sec-550b" data-image-width="1980" data-image-height="1320">
    <div class="u-clearfix u-sheet u-sheet-1">
      <div class="u-align-center u-container-align-center-lg u-container-align-center-md u-container-align-center-sm u-container-align-center-xl u-container-style u-group u-palette-3-base u-shape-circle u-group-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
        <div class="fest u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-1">

          <h1 class="u-align-center u-custom-font u-text u-text-1 ">
            <a href="#">Фестивали</a>
          </h1>
          <p class="u-align-center u-text u-text-2">
            что-то
          </p>
        </div>
      </div>
    </div>
  </section>
  <ClubsList/>
  <Advantage/>
  <Events/>
  <Footer/>
</template>

<script>
  import ClubsList from "@/components/clubs_list.vue"
  import Footer from "@/components/footer.vue"
  import Advantage from '@/components/advantages_section.vue'
  import Events from '@/components/events.vue'
  export default {
    components: {
      ClubsList,
      Footer,
      Advantage,
      Events
    }
}
</script>

<style>
.fest {
  margin-top: 180px;
}
</style>

