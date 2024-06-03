<template>
  <div>
    <div class="container">
      <Navbar/>
    </div>
    <main>
      <div>
        <nuxt-page/>
      </div>
    </main>

  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  components: {
    Navbar
  }
}
</script>
