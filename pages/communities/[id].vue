
<template>

  <div>
    <miniBanner/>
    <communityDetail/>
    <div>{{id}}</div>
    <communityAbs/>

  </div>


</template>
<script setup>
  const { id } = useRoute().params
</script>

<script>
  import miniBanner from '@/components/miniBanner.vue';
  import communityDetail from '~/components/communityPages/communityDetail.vue';
  import communityAbs from '~/components/communityPages/communityAbs.vue';


  export default {
    components: {
      miniBanner,
      communityDetail,
      communityAbs,
    }
  }
</script>

<style scoped>

</style>
