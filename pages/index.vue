<template>
  <div style="margin-bottom: 600px">
    <Banner/>
    <UnderBanner/>
    <CommunitySupport/>
  </div>


</template>

<script>
  import Banner from '@/components/banner.vue';
  import UnderBanner from "@/components/underBanner.vue";
  import CommunitySupport from "@/components/communitySupport.vue";
  export default {
    components: {
      Banner,
      UnderBanner,
      CommunitySupport
    }
  }
</script>
