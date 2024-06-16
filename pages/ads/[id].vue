<template>
  <section class="banner-area relative about-banner" id="home">
				<div class="overlay overlay-bg"></div>
				<div class="container">
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Детали объявления
							</h1>
						</div>
					</div>
				</div>
			</section>

			<section class="event-details-area section-gap">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 event-details-left">
							<div class="main-img">
								<img class="img-fluid" src="@/static/img/event-details-img.jpg" alt="">
							</div>
							<div class="details-content">
									<h4>Заголовок объявления {{ id }}</h4>
								<p>
                  Описание объявления
								</p>
							</div>
						</div>
						<div class="col-lg-4 event-details-right">
							<div class="single-event-details">
								<h4>Клуб</h4>
								<ul class="mt-10">
									<li class="justify-content-between d-flex">
										<a>Название клуба</a>
									</li>
								</ul>
							</div>
							<div class="single-event-details">
								<h4>Тип</h4>
								<ul class="mt-10">
									<li class="justify-content-between d-flex">
										<span>Тип объявления</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

</template>

<script setup>
const { id } = useRoute().params;
</script>