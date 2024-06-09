<template>
  <section class="popular-course-area section-gap">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
          <div class="title text-center">
            <h1 class="mb-10">Популярные сообщества нашего сайта</h1>
            <p>
              Исследуйте мир сообществ: Путеводитель по самым популярным уголкам нашего сайта, 
              где каждое сообщество — это уникальная площадка для обмена идеями, 
              обсуждения интересов и нахождения новых друзей.
            </p>
          </div>
        </div>
      </div>  

      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-3">
                <div class="single-popular-carusel">
                  <div class="thumb-wrap relative">
                    <div class="thumb relative">
                      <div class="overlay overlay-bg"></div>  
                      <img class="img-fluid" src="../static/img/clubs/skalolaz.jpg" alt="">
                    </div>
                    <div class="meta d-flex justify-content-between bg-dark">
                      <p><i class="fa-solid fa-users"></i> 355 <i class="fa-solid fa-heart"></i>35</p>
                    </div>                  
                  </div>
                  <div class="details">
                    <a href="#">
                      <h4>Вершинные Скалолазы</h4>
                    </a>              
                  </div>
                </div>
              </div>
              
              <!-- Повторите этот блок для остальных элементов -->
              <div class="col-md-3">
                <div class="single-popular-carusel">
                  <div class="thumb-wrap relative">
                    <div class="thumb relative">
                      <div class="overlay overlay-bg"></div>  
                      <img class="img-fluid" src="../static/img/clubs/bookmans.jpg" alt="">
                    </div>
                    <div class="meta d-flex justify-content-between bg-dark">
                      <p><i class="fa-solid fa-users"></i> 355 <i class="fa-solid fa-heart"></i>35</p>
                    </div>                  
                  </div>
                  <div class="details">
                    <a href="#">
                      <h4>Книжные Вдохновители</h4>
                    </a>              
                  </div>
                </div>
              </div>

              <!-- Повторите этот блок для остальных элементов -->
              <div class="col-md-3">
                <div class="single-popular-carusel">
                  <div class="thumb-wrap relative">
                    <div class="thumb relative">
                      <div class="overlay overlay-bg"></div>  
                      <img class="img-fluid" src="../static/img/clubs/melomans.jpg" alt="">
                    </div>
                    <div class="meta d-flex justify-content-between bg-dark">
                      <p><i class="fa-solid fa-users"></i> 355 <i class="fa-solid fa-heart"></i>35</p>
                    </div>                  
                  </div>
                  <div class="details">
                    <a href="#">
                      <h4>Меломаны-Экстремалы</h4>
                    </a>              
                  </div>
                </div>
              </div>

              <!-- Повторите этот блок для остальных элементов -->
              <div class="col-md-3">
                <div class="single-popular-carusel">
                  <div class="thumb-wrap relative">
                    <div class="thumb relative">
                      <div class="overlay overlay-bg"></div>  
                      <img class="img-fluid" src="../static/img/clubs/cybersport.jpg" alt="">
                    </div>
                    <div class="meta d-flex justify-content-between bg-dark">
                      <p><i class="fa-solid fa-users"></i> 355 <i class="fa-solid fa-heart"></i>35</p>
                    </div>                  
                  </div>
                  <div class="details">
                    <a href="#">
                      <h4>Игровые Магистры</h4>
                    </a>              
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Вставьте остальные элементы carousel-item здесь -->
          <div class="carousel-item">
            <div class="row">
              <!-- Дополнительные блоки для нового carousel-item -->
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>  
  </section>
</template>

<script>
export default {
  mounted() {
    // Необходимые операции для активации карусели Bootstrap
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  }
}
</script>

<style scoped>
/* Подходящие стили для карусели, если требуется */
</style>


