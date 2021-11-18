<template lang="pug">
    main
        section.container.compare--section-container
            h1.compare--h1 Сравнение вузов
            div.compare--heading-container
                p Выберите вузы для сравнения:
                    div
                        a(href="").compare--add-items + Добавить вузы
                        button.compare--delete-items Очистить список
            ul.compare__university-list
                compareItem
                .swiper__buttons
                    .swiper-button
                    .swiper-button
                    .swiper-button
                    .swiper-button
            button.compare__button-compare СРАВНИТЬ
            checkbox(:checkbox-label="checkbox", :checkbox-id="'checkbox' + index", v-for="(checkbox, index) in checkboxes").compare__checkbox--style
            div
                ul.compare__university-list
                    compareItem
        div.section-blue-background
            section.container.compare--section-container
                parameters(:region="parameters.region", 
                :type="parameters.type",
                :form="parameters.form",
                :level="parameters.level",
                :budget="parameters.budget",
                :offBudget="parameters.offBudget",
                :cost="parameters.cost",
                :score="parameters.score",
                :application="parameters.application",
                :hostel="parameters.hostel",
                :postponement="parameters.postponement",
                :inclusiveness="parameters.inclusiveness"
                )
</template>

<script>
import checkbox from "@/components/checkbox.vue";
import parameters from "@/components/parameters.vue";
import compareItem from "@/components/compareItem.vue";

export default {
        data() {
            return {
                checkboxes: ["Все параметры", "Различающиеся параметры"],
                parameters: {
                    region: "Ростовская область",
                    type: "Государственный",
                    form: "Очная, Заочная",
                    level: "Бакалавриат, Магистратура",
                    budget: "234",
                    offBudget: "567",
                    cost: "от 23 300 ₽ - 235 200 ₽",
                    score: "63,56 бюджет 57,9 внебюджет",
                    application: "true",
                    hostel: "true",
                    postponement: "true",
                    inclusiveness: "false",
                }
            };
        },
        components: {
            checkbox,
            parameters,
            compareItem
        },
};

</script>

<style lang="scss">
@import "../assets/scss/general.scss";

main {
  color: $blackColorText;
}

.compare--section-container {
    padding: 80px 165px 55px;
}

.compare--h1 {
    border-bottom: 1px solid $grayColor2;
    padding-bottom: 10px;
    margin-bottom: 40px;
}

.compare--heading-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.compare--add-items {
color: $grayColor3;
font-size: 18px;
margin-right: 30px;
}

.compare--delete-items {
color: $grayColor3;
border: none;
background: transparent url('../assets/delete.svg') left no-repeat;
padding-left: 20px;
font-size: 18px;
}

.compare__university-list {
    margin-bottom: 30px;
}

.swiper__buttons {
        display: flex;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }

.swiper-button {
        width: 8px;
        height: 8px;
        background-color: #c4c4c4;
        border-radius: 20px;
        transition: 0.3s;

        &:not(:last-child) {
            margin-right: 8px;
        }

        &:active, &:hover {
            background-color: $blueColor;
        }
    }
    

.compare__button-compare {
    width: 190px;
    display: block;
    @include btnTransparent;
    margin: 0 auto;
    padding: 15px;
    margin-bottom: 75px;
}

.compare__checkbox--style {
    margin-bottom: 60px;
}



</style>