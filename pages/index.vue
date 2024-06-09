<template>
  <Banner/>
  <UnderBanner/>

</template>

<script>
  import Banner from '@/components/banner.vue'
  import UnderBanner from "@/components/underBanner.vue";
  export default {
    components: {
      Banner,
      UnderBanner
    }
  }
</script>
