<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">ЦЕНТР СОБЫТИЙ</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class="wrap d-md-flex">
                        <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                            <div class="text w-100">
                                <h2>Добро пожаловать</h2>
                                <p>Уже есть аккаунт?</p>
                                <a href="#" class="btn btn-white btn-outline-white">Войти</a>
                            </div>
                        </div>
                        <div class="login-wrap p-4 p-lg-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Регистрация</h3>
                                </div>
                            
                            </div>
                            <form action="#" class="signin-form">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Номер телефона</label>
                                    <input type="text" class="form-control" placeholder="+7XXXXXXXXXX" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Пароль</label>
                                    <input type="password" class="form-control" placeholder="Пароль" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Подтверждение пароля</label>
                                    <input type="password" class="form-control" placeholder="Подтверждение пароля" required>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary submit px-3">Регистрация</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<style scoped>
@import '@/assets/auth-styles/style.css';
@import '@/assets/auth-styles/bootstrap.min.css';
</style>

<script setup>
definePageMeta({
  layout: false,
});
</script>