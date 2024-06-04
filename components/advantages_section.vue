<template>
   <section class="u-align-center u-clearfix u-grey-10 u-section-6 block_advantages pb-5">

     <div class="pt-5">
       <h2 class="advantages_text">Наши приемущества</h2>
       <p class="advantages_text">Здесь вы обязательно найдете что-то для себя</p>
     </div>
     <div class="container align-items-center">
       <div class="row">
         <div class="card col-4 m-5" style="width: 21rem;">
           <div class="card-body">
             <p class="card-text adv_card_text">Создайте сообщество вокруг своих интересов!</p>
           </div>
           <img src="@/static/images/advantages1.png" class="card-img-top object-fit-cover m-2 img" alt="advantages img_1">
         </div>
         <div class="card col-4 m-5" style="width: 21rem;">
           <div class="card-body">
             <p class="card-text adv_card_text">От спортивных клубов до хобби групп, здесь есть место для всех!</p>
           </div>
           <img src="@/static/images/advantages2.jpg" class="card-img-top object-fit-cover m-2 img" alt="advantages img_1">
         </div>
         <div class="card col-4 m-5" style="width: 21rem;">
           <div class="card-body">
             <p class="card-text adv_card_text">Опыт, единение, вдохновение: фестивали наших сообществ!</p>
           </div>
           <img src="@/static/images/advantages3.png" class="card-img-top object-fit-cover m-2 img" alt="advantages img_1">
         </div>
       </div>
         </div>
    </section>
</template>
<script setup lang="ts">
</script>

<style scoped>
.img {
  width: 300px;
  height: 400px;
}
.block_advantages {
  background-image: linear-gradient(#f26f43 50%, transparent 50%);
}
.advantages_text {
  color: white;
}
.adv_card_text {
  color: #535252;
  font-size: 25px;
  font-family: Arial, sans-serif;
}
</style>