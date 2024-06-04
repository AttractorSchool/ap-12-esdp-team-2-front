<template>
   <section class="u-align-center u-clearfix u-grey-10 u-section-6 block_advantages pb-5">

     <div class="pt-5">
       <h2 class="advantages_text">Наши приемущества</h2>
       <p class="advantages_text">Здесь вы обязательно найдете что-то для себя</p>
     </div>
     <div class="container">
           <div class="row align-items-center">
             <img class="col-4 img object-fit-cover m-2" src="@/static/images/advantages1.png">
             <img class="col-4 img object-fit-cover" src="@/static/images/advantages2.png">
             <img class="col-4 img object-fit-cover" src="../static/images/advantages3.png">
           </div>
         </div>
    </section>
</template>
<script setup lang="ts">
</script>

<style scoped>
.img {
  width: 400px;
  height: 700px;
}
.block_advantages {
  background-image: linear-gradient(#f26f43 50%, transparent 50%);
}
.advantages_text {
  color: white;
}
</style>