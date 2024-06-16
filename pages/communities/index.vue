<script setup lang="ts">

</script>

<template>
  <div>
    <miniBanner/>
    <communityList/>

  </div>


</template>

<script>
  import miniBanner from '@/components/miniBanner.vue';
  import communityList from '~/components/communityPages/communityList.vue';

  export default {
    components: {
      miniBanner,
      communityList
    }
  }
</script>

<style scoped>

</style>
