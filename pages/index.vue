<template>
  <div>
    <Banner/>
    <UnderBanner/>
    <CommunitySupport/>
    <FindPeople/>
  </div>


</template>

<script>
  import Banner from '@/components/banner.vue';
  import UnderBanner from "@/components/underBanner.vue";
  import CommunitySupport from "@/components/communitySupport.vue";
  import FindPeople from "@/components/findPeople.vue";
  export default {
    components: {
      Banner,
      UnderBanner,
      CommunitySupport,
      FindPeople
    }
  }
</script>
