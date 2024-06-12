
<template>

  <div>
    <miniBanner/>
    <communityDetail/>
    <div>{{id}}</div>

  </div>


</template>
<script setup>
  const { id } = useRoute().params
</script>

<script>
  import miniBanner from '@/components/miniBanner.vue';
  import communityDetail from '@/components/communityDetail.vue';


  export default {
    components: {
      miniBanner,
      communityDetail

    }
  }
</script>

<style scoped>

</style>
