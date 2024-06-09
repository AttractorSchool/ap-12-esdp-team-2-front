<template>
  <div id="wrapper">
    <Navbar/>
    <nuxt-page/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>