
<template>

  <div>
    <miniBanner/>
    <div>{{id}}</div>

  </div>


</template>
<script setup>
  const { id } = useRoute().params
</script>

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
