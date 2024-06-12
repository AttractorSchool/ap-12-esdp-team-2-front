<template>
    <section class="course-mission-area pb-120">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="menu-content pb-70 col-lg-8">
                    <div class="title text-center">
                        <h1 class="mb-10">Для пользователей</h1>
                        <p>Здесь каждый найдет что-то для себя: от профессиональных мероприятий до творческих мастерских.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 accordion-left">
                    <!-- accordion start -->
                    <dl class="accordion">
                        <dt>
                            <a href="#">1.1 Организации по трем категориям:</a>
                        </dt>
                        <dd>
                            - Спорт<br>
                            - Хобби<br>
                            - Профессия<br>
                            <i>Тут вы сможете вступить в понравившуюся вам организацию, принимать участие в ее клубных мероприятиях.</i>
                        </dd>
                        <dt>
                            <a href="#">1.2 Людей по направлению вашей профессиональной деятельности, хобби, спорту:</a>
                        </dt>
                        <dd>
                            Тут вы можете дать объявление о поиске одного или нескольких человек, специалистов, единомышленников для личных целей.<br>
                            Пример: "Меня зовут Батыр, ищу партнера для утренних пробежек в районе Весновки, буду рад единомышленнику".
                        </dd>
                        <dt>
                            <a href="#">1.3 Предлагаемые Центром акции (работа, услуги, товары):</a>
                        </dt>
                        <dd>
                            - Спортивные клубы<br>
                            - Хобби-клубы<br>
                            - Профессиональные клубы
                        </dd>
                        <dt>
                            <a href="#">1.4 Специальные предложения Центра (работа, услуги, товары):</a>
                        </dt>
                        <dd>
                            - Спортивные клубы<br>
                            - Хобби-клубы<br>
                            - Профессиональные клубы
                        </dd>
                        <dt>
                            <a href="#">1.5 Мероприятия, предлагаемые Центром:</a>
                        </dt>
                        <dd>
                            - Спортивные клубы<br>
                            - Хобби-клубы<br>
                            - Профессиональные клубы
                        </dd>
                        <dt>
                            <a href="#">1.6 Лента новостей</a>
                        </dt>
                        <dd>
                            Будьте в курсе последних событий и новостей нашего Центра.
                        </dd>
                        <dt>
                            <a href="#">1.7 Календарь мероприятий</a>
                        </dt>
                        <dd>
                            Узнайте о предстоящих событиях и запланируйте свое участие.
                        </dd>
                    </dl>
                    <!-- accordion end -->
                </div>
                <div class="col-md-6 video-container">
                    <video width="100%" height="100%" poster="/_nuxt/static/img/logo_v2.png" controls>
                        <source src="http://fan-club.kz/video/club.webmhd.webm" type="video/webm">
                        Ваш браузер не поддерживает этот формат
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const dts = document.querySelectorAll('.accordion dt');
        dts.forEach(dt => {
            dt.addEventListener('click', function() {
                this.classList.toggle('active');
                const dd = this.nextElementSibling;
                dd.classList.toggle('active');
            });
        });
    }
}
</script>

<style scoped>
.accordion dt {
    cursor: pointer;
    padding: 10px;
    background: rgba(4, 9, 30, 0.9);
    color: white;
    margin: 0;
    border-bottom: 1px solid white;
}
.accordion dd {
    display: none;
    padding: 10px;
    background: #f1f1f1;
    margin: 0;
}
.accordion dt.active, .accordion dd.active {
    display: block;
}
.video-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
</style>
