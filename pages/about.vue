<template>
  <div>
    <BannerAbout/>
    <UnderBannerAbout/>
    <InformationSection/>
    <MissionAbout/>
    <FormAbout/>
  </div>


</template>

<script>
  import BannerAbout from '@/components/about/bannerAbout.vue';
  import UnderBannerAbout from '@/components/about/underBannerAbout.vue';
  import InformationSection from '@/components/about/informationSection.vue';
  import MissionAbout from '@/components/about/missionAbout.vue';
  import FormAbout from '@/components/about/formAbout.vue';
  export default {
    components: {
      BannerAbout,
      UnderBannerAbout,
      InformationSection,
      MissionAbout,
      FormAbout,
    }
  }
</script>