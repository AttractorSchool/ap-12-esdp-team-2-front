<template>
    <section class="banner-area relative users-banner" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="about-content col-lg-12">
            <h1 class="text-white">
                Yerbolat Karzhaubay
            </h1>
            <p class="text-white link-nav">
                <a href="/" class="text-uppercase">Главная</a>
                <span class="lnr lnr-arrow-right"></span>
                <a href="/users" class="text-uppercase">Пользователи</a>
                <span class="lnr lnr-arrow-right"></span>
                <a href="/users/1" class="text-uppercase">Yerbolat Karzhaubay</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5">
        <div class="container">
            <div class="user-profile-area row mx-auto">
                <div class="col-lg-3 user-card-detail p-2">
                    <img src="@/static/img/users/user-default.png" alt="" class="user-detail-img">
                    <span class="username-text">Yerbolat Karzhaubay</span>
                </div>
                <div class="col-lg-8 user-additional-info">
                    <div class="row user-info-blocks">
                        <div class="col-lg-6">
                            <span class="info-title text-uppercase">
                                Основная информация
                            </span>
                            <div class="fields">
                                <div class="user-field">
                                    <b class="field-key me-2">Name:</b>
                                    <span class="field-value">Yerbolat</span>
                                </div>
                                <div class="user-field">
                                    <b class="field-key me-2">Lastname:</b>
                                    <span class="field-value">Karzhaubay</span>
                                </div>
                                <div class="user-field">
                                    <b class="field-key me-2">Phone:</b>
                                    <span class="field-value">+7-777-777-77-77</span>
                                </div>
                                <div class="user-field">
                                    <b class="field-key me-2">Email:</b>
                                    <span class="field-value">Yerbolat@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <span class="info-title text-uppercase">
                                Информация по сообществам
                            </span>
                            <div class="fields">
                                <div class="user-field">
                                    <b class="field-key me-2">Управляемые сообщества:</b>
                                    <span class="field-value">44</span>
                                </div>
                                <div class="user-field">
                                    <b class="field-key me-2">Участник сообществ:</b>
                                    <span class="field-value">140</span>
                                </div>
                                <div class="user-field">
                                    <b class="field-key me-2">Понравившихся сообществ:</b>
                                    <span class="field-value">256</span>
                                </div>
                                <div class="user-field">
                                    <b class="field-key me-2">Созданных сообществ:</b>
                                    <span class="field-value">3</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 mt-2">
                            <span class="info-title text-uppercase">
                                О себе
                            </span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id sunt omnis, maiores porro necessitatibus magni, deserunt pariatur provident corrupti repellat modi suscipit. Animi dignissimos, similique facilis laudantium at quos?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
@import '@/assets/users-styles/style.css';
</style>