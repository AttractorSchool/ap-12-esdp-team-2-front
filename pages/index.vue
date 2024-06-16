<template>
  <div>
    <Banner/>
    <UnderBanner/>
    <CommunitySupport/>
    <FindPeople/>
    <PopularCommunity/>
  </div>


</template>

<script>
  import Banner from '@/components/banner.vue';
  import UnderBanner from "@/components/underBanner.vue";
  import CommunitySupport from "~/components/communitySupport.vue";
  import FindPeople from "@/components/findPeople.vue";
  import PopularCommunity from "@/components/popularCommunity.vue";
  export default {
    components: {
      Banner,
      UnderBanner,
      CommunitySupport,
      FindPeople,
      PopularCommunity,
    }
  }
</script>
