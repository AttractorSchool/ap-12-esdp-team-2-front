
<template>

  <div>
    <miniBanner/>
    <div>{{$route.params.item.id}}</div>

  </div>


</template>

<script>
  import miniBanner from '@/components/miniBanner.vue';


  export default {
    components: {
      miniBanner,

    }
  }
</script>

<style scoped>

</style>
