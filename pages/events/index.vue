<script setup lang="ts">

</script>

<template>
  <div>
    <calendar/>

  </div>


</template>

<script>
  import banner from '@/components/banner.vue';
  import calendar from '~/components/calendar/calendar.vue';

  export default {
    components: {
      banner,
      calendar
    }
  }
</script>

<style scoped>

</style>
