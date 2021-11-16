<template lang="pug">
    main
        section.container.profile--section-container
            h2.h2.profile__h2--heading Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»
            div.profile__info-container
                img(src="../assets/university1.png").profile__img-logo
                p.profile__p--licence Лицензия от 27.06.2016 №2245.
                p.profile__p--rector Ректор Бесарион Чохоевич Месхи
                a(href="").profile__link--site donstu.ru
                a(href="").profile__link--application Подать заявление онлайн
                button.profile__btn--favourite Добавить в избранное
                    include ../assets/like.svg
                button.profile__btn--compare Сравнить с другими вузами
                    include ../assets/add.svg
        section.profile--blue-background
            div.container.profile__container
                ul.profile__acceptance--list
                    li.profile__acceptance--item
                        a(href="").profile__acceptance--link СТРАНИЦА ПРИЕМНОЙ КОМПАНИИ
                    li.profile__acceptance--item
                        a(href="").profile__acceptance--link УЗНАТЬ О ПОРЯДКЕ ПРИЕМА
                    li.profile__acceptance--item
                        a(href="").profile__acceptance--link АКТУАЛЬНОЕ КОЛИЧЕСТВО МЕСТ
                h2.h2.profile__h2 Общая информация
                ul.general-info__list
                    generalInfo(:heading="h3.amount", :visible="true")
                        li.general-info__amount-item Доступно 3 871 бюджетных 6 085 внебюджетных мест
                        li Из них по квоте 335
                    generalInfo(:heading="h3.level", :visible="true")
                        li.general-info__level-item Бакалавриат - 1234 мест
                        li.general-info__level-item Специалитет - 567 мест
                        li.general-info__level-item Магистратура - 1234 мест
                    generalInfo(:heading="h3.score", :visible="true")
                        li.general-info__score-item 63,56 бюджет
                        li 57,9 внебюджет
                    generalInfo(:heading="h3.hostel", :visible="true")
                        li.general-info__hostel-item Всего проживают 5 500 человек
                        li.general-info__hostel-item Стоимость проживания от 727,01 ₽ до 3 441,98 ₽
                    generalInfo(:heading="h3.cost", :visible="true")
                        li.general-info__cost-item от 23 300 ₽ - 235 200 ₽ в год
                    generalInfo(:visible="false")
                        li.general-info__bonus-item Военно-учебный центр
                        li.general-info__bonus-item Отсрочка от армии
                        li.general-info__bonus-item Инклюзивное обучение
                h2.h2.direction__h2 Направления подготовки
                ul.direction__list
                    profileDirection(v-for="direction in directions",
                        :h3="direction.h3",
                        :date="direction.date",
                        :level="direction.level",
                        :form="direction.form")
                button.direction__btn Посмотреть все
        section.container.profile--section-container
            h2.h2.profile__h2 Контакты
            div.profile__contacts-wrapper
                div
                    h3.contacts__h3 Центральная приемная коммисия
                    p.contacts--margin-bottom 344000, г. Ростов-на-Дону, пл. Гагарина, д. 1, каб. 108
                    div
                        span.contacts__subtitle Время работы:
                        p Понедельник - Пятница с 9.00  до 17.00
                        p.contacts--margin-bottom Перерыв с 13.00 до 14.00. Суббота  с  9.00 до 14.00
                    div
                        div.contacts__subtitle E-mail:
                            a(href="spu-33@donstu.ru").contacts__link spu-33@donstu.ru
                        div.contacts__subtitle Телефон:
                            a(href="tel:+76323738525").contacts__link 8(863) 273-85-66,
                            a(href="tel:+76323738525").contacts__link 8-800-100-19-30


                div
                    h3.contacts__h3 Кампус университета
                    p.contacts--margin-bottom 344000, обл Ростовская, г Ростов-на-Дону, пл. Гагарина, д. 1
                    div
                        div.contacts__subtitle E-mail:
                            a(href="reсeption@donstu.ru").contacts__link reсeption@donstu.ru
                        div.contacts__subtitle Телефон:
                            a(href="tel:+76323738525").contacts__link 8(632) 373-85-25


</template>

<script>
    import generalInfo from "@/components/generalInfo.vue";
    import profileDirection from "@/components/profileDirection.vue";

    export default {
        data() {
            return {
                h3: {
                    amount: "Всего 28,97 тыс. учащихся ",
                    level: "Уровни образования:",
                    score: "Средний балл ЕГЭ",
                    hostel: "Общежитие",
                    cost: "Стоимость обучения",
                },
                directions: [
                    {
                        h3: "Конструирование и технология электронных средств",
                        date: "11.03.03",
                        level: "бакалавриат",
                        form: "очная"
                    },
                    {
                        h3: "Автоматизация технологических процессов и производств",
                        date: "15.03.04",
                        level: "бакалавриат",
                        form: "очная, заочная"
                    },
                    {
                        h3: "Информационная безопасность телекомуникационных систем",
                        date: "10.05.02",
                        level: "специалитет",
                        form: "очная"
                    },
                    {
                        h3: "Конструирование и технология электронных средств",
                        date: "11.03.03",
                        level: "бакалавриат",
                        form: "очная"
                    },
                    {
                        h3: "Автоматизация технологических процессов и производств",
                        date: "15.03.04",
                        level: "бакалавриат",
                        form: "очная, заочная"
                    },
                    {
                        h3: "Информационная безопасность телекомуникационных систем",
                        date: "10.05.02",
                        level: "специалитет",
                        form: "очная"
                    }
                ]
            };
        },
        components: {
            generalInfo,
            profileDirection
        },
    }
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    main {
        color: $blackColorText;
    }

    .profile--section-container {
        padding: 80px 165px 55px;
    }

    .profile__h2--heading {
        margin-bottom: 60px;
    }

    .profile__info-container {
        display: grid;
        grid-template-columns: 100px auto 265px;
        grid-template-rows: repeat(3, 1fr);
    }

    .profile__img-logo {
        grid-area: 1/1/4/2;
        align-self: center;
    }

    .profile__p--licence {
        grid-area: 1/2/2/3;
    }

    .profile__p--rector {
        grid-area: 2/2/3/3;
    }

    .profile__link--site {
        grid-area: 3/2/4/3;
        color: $blueColor;
    }

    .profile__link--application {
        height: 30px;
        color: $grayColor3;
        background: transparent url('../assets/gosusl.svg') no-repeat left;
        padding-left: 40px;
        text-align: left;
        background-size: contain;
        filter: grayscale(1);

        &:hover, &:focus {
            filter: grayscale(0);
            color: $blueColor;
        }
    }

    .profile__btn--favourite {
        position: relative;
        border: none;
        color: $grayColor3;
        font-size: 16px;
        padding-left: 40px;
        text-align: left;
        background-color: transparent;

        svg {
            position: absolute;
            left: 0;
        }

        &:hover, &:focus {
            color: $blueColor;

            svg path{
                fill: #EF4058;
                stroke: #EF4058;
            }
        }
    }

    .profile__btn--compare {
        position: relative;
        border: none;
        font-size: 16px;
        color: $grayColor3;
        padding-left: 40px;
        text-align: left;
        background-color: transparent;

        svg {
            position: absolute;
            left: 0;
        }

        &:hover, &:focus {
            color: $blueColor;

            svg path{
                fill: $blueColor;
            }
        }
    }

    .profile--blue-background {
        background-color: $lightBlue;
    }

    .profile__container {
        padding: 60px 165px;
    }

    .profile__acceptance--list {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    .profile__acceptance--item {
        width: 33%;
        max-width: 350px;
    }

    .profile__acceptance--link {
        display: block;
        height: 80px;
        background-color: $blueColor;
        color: $whiteColor;
        padding: 30px 0;
        text-align: center;
        font-size: 16px;
    }

    .profile__h2 {
        margin-bottom: 40px;
    }

    .general-info__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-bottom: 35px;
    }

    .general-info__amount-item {
        font-size: 14px;

        &:first-child{
            @include boldText;
            padding-bottom: 15px;
        }
    }

    .general-info__level-item {
        font-size: 14px;
        padding-bottom: 10px;
    }

    .general-info__score-item {
        @include boldText;
        padding-bottom: 10px;
    }

    .general-info__hostel-item {
        font-size: 14px;
        padding-bottom: 10px;
    }

    .general-info__cost-item {
        @include boldText;
    }

    .general-info__bonus-item {
        position: relative;
        @include boldText;
        margin-bottom: 30px;
        padding-left: 50px;

        &:before {
            content: '';
            position: absolute;
            background: url("../assets/bonus.svg") no-repeat left;
            width: 20px;
            height: 20px;
            left: 18px;
        }

        &:first-child {
            padding-top: 20px;
        }
    }

    .direction__h2 {
        margin-bottom: 40px;
    }

    .direction__list {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 30px;
        margin-bottom: 30px;
    }

    .direction__btn {
        width: 180px;
        height: 50px;
        display: block;
        background-color: $blueColor;
        margin: 0 auto;
        color: $whiteColor;
        border: none;
        text-transform: uppercase;
        font-size: 12px;
    }

    /*contacts*/

    .profile__contacts-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: left;
        font-size: 14px;
        line-height: 24px;
    }

    .contacts__h3 {
        margin-bottom: 25px;
    }

    .contacts__subtitle {
        font-weight: 600;
        font-size: 14px;
    }

    .contacts--margin-bottom {
        margin-bottom: 35px;
    }

    .contacts__link {
        font-weight: 400;
        color: $blackColorText;
    }



</style>
