<template lang="pug">
    main
        div.section-blue-background
            section.container.user--section-container
                h1.user--h1 Иванова М.И.
                div.user--account
                    img(src="../assets/gosusl.svg").user--account-logo
                    p.user--account-text Привязка учетной записи портала Госуслуг позволит вам при подаче заявления на поступление в вуз онлайн через Госуслуги получить доступ к избранным вузам, сохраненным в личном кабинете портала Поступай Правильно.
                    a(href="/").user--submit-application Подать заявление в вузы онлайн
                div.user--subjects-wrapper
                    h2.h2.user--h2-subjects Предметы и баллы ЕГЭ
                    button.user__btn--edit Редактировать
                ul.user__list
                    li.user__item
                        p.user__subject Русский язык
                        span.user__points 77
                    li.user__item
                        p.user__subject Биология
                        span.user__points 99
                    li.user__item
                        p.user__subject Биология
                        span.user__points 99

        section.container.user--section-favourites
            h2.h2.user--h2-favourites Избранное
            checkbox(:checkbox-label="category", :checkbox-id="'category' + index", v-for="(category, index) in categories")
            ul
                universityItem(v-for="university in universities",
                    :logo="university.logo",
                    :name="university.name",
                    :location="university.location",
                    :visible="false")
</template>

<script>
    import universityItem from "../components/universityItem.vue";
    import checkbox from "../components/checkbox";

    export default {
        data() {
            return {
                categories: ["Вузы", "Направления", "Специальности"],
                universities: [
                    {
                        logo: "university1.png",
                        name: "Донской государственный технический университет",
                        location: "Ростовская область",
                    },
                    {
                        logo: "university2.png",
                        name: "Крымский федеральный университет имени В.И. Вернадского",
                        location: "Республика Крым",
                    },
                    {
                        logo: "university1.png",
                        name: "Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»",
                        location: "Ростовская область",
                    },
                ],
            }
        },
        components: {
            checkbox,
            universityItem,
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    main {
        color: $blackColorText;
    }

    .user--section-container {
        padding: 80px 165px 55px;
    }

    .user--h1 {
        @include h1Style;
        margin-bottom: 60px;
    }

    .user--account-text {
        font-size: 18px;
    }

    .user--account {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(2, auto);
        background-color: $whiteColor;
        padding: 35px 30px;
        box-shadow: 0 16px 16px #DDE6EB;
        gap: 30px 40px;
        margin-bottom: 60px;
    }

    .user--account-logo {
        grid-area: 1/1/3/2;
    }

    .user--submit-application {
        width: 315px;
        @include btnTransparent;
        padding: 13px 24px;
        text-align: center;
    }

    .user--subjects-wrapper {
        display: flex;
        margin-bottom: 40px;
    }

    .user--h2-subjects {
        margin-right: 20px;
    }

    .user__btn--edit {
        border: none;
        background: transparent url("../assets/pen.svg") no-repeat left;
        padding-left: 20px;
        color: $blueColor;
    }

    .user__list {
        max-width: 70%;
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 20px 30px;
    }

    .user__item {
        display: flex;
        align-items: center;
    }

    .user__subject {
        width: 200px;
        font-size: 18px;
        margin-right: 15px;
    }

    .user__points {
        color: #36935B;
    }

    /*favourites*/

    .user--section-favourites {
        padding: 80px 165px 55px;
    }

    .user--h2-favourites {
        margin-bottom: 40px;
    }

</style>