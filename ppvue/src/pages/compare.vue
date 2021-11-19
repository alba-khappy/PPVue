<template lang="pug">
    main
        section.container.compare--section-container
            h1.compare--h1 Сравнение вузов
            div.compare--heading-container
                p Выберите вузы для сравнения:
                    div
                        a(href="/search").compare--add-items + Добавить вузы
                        button.compare--delete-items Очистить список
            ul.compare__university-list
                compareItem(v-for="university in universitiesList",
                    :visible="university.visible",
                    :logo="university.logo",
                    :name="university.name")
            .swiper__buttons
                .swiper-button
                .swiper-button
                .swiper-button
                .swiper-button
            button.compare__button-compare СРАВНИТЬ
            checkbox(:checkbox-label="checkbox", :checkbox-id="'checkbox' + index", v-for="(checkbox, index) in checkboxes").compare__checkbox--style
            div
                ul.compare__university-list
                    compareItem(v-for="university in compareUniversities",
                        :visible="university.visible",
                        :logo="university.logo",
                        :name="university.name")
        div.section-blue-background
            section.container.compare--section-container.parameters-container
                table.compare__table
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Регион
                            p 1
                        td
                            p 2
                        td
                            p 3
                        td
                            p 4
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Тип вуза
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Форма обучения
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Уровень образования
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Бюджетных мест
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Внебюджетных мест
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Стоимость за год обучения
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Средний проходной балл ЕГЭ
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Подать заявление онлайн
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2

                    tr.compare__table-row
                        td
                            h2.compare__row-heading Общежитие
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Отсрочка от армии
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
                    tr.compare__table-row
                        td
                            h2.compare__row-heading Инклюзивность
                            p 1
                        td
                            p 2
                        td
                            p 2
                        td
                            p 2
</template>

<script>
    import checkbox from "@/components/checkbox.vue";
    import parameters from "@/components/parameters.vue";
    import compareItem from "@/components/compareItem.vue";

    export default {
        data() {
            return {
                checkboxes: ["Все параметры", "Различающиеся параметры"],
                parameters: [
                    {
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
                    },
                    {
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
                ],
                universitiesList: [
                    {
                        logo: "university1.png",
                        name: "Донской государственный технический университет",
                        visible: "false",
                    },
                    {
                        logo: "university2.png",
                        name: "Крымский федеральный университет имени В.И. Вернадского",
                        visible: "false",
                    },
                    {
                        logo: "university1.png",
                        name: "Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»",
                        visible: "false",
                    },
                    {
                        logo: "university1.png",
                        name: "Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»",
                        visible: "false",
                    },
                ],
                compareUniversities: [
                    {
                        logo: "university1.png",
                        name: "Донской государственный технический университет",
                        visible: "true",
                    },
                    {
                        logo: "university2.png",
                        name: "Крымский федеральный университет имени В.И. Вернадского",
                        visible: "true",
                    }
                ],
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
        padding: 80px 165px 20px;
    }

    .compare--h1 {
        border-bottom: 1px solid $grayColor2;
        padding-bottom: 10px;
        margin-bottom: 40px;
    }

    .compare--heading-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 30px;

        div {
            justify-self: end;
        }
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
        display: flex;
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
        margin-bottom: 50px;
        margin-top: 50px;
    }

    .compare__checkbox--style {
        margin-bottom: 60px;
    }

    .parameters-container {
        display: flex;
    }

    /*table*/

    .compare__table {
        width: 100%;
        border-collapse: collapse;
    }

    td {
        width: 25%;
        display: grid;
        grid-template-rows: 45px auto;
        column-gap: 10px;
        flex-grow: 1;
        padding: 30px 0;
        border-bottom: 1px solid $grayColor2;
        position: relative;

        p {
            grid-row: 2;
        }
    }

    .compare__table-row {
        display: flex;
    }

    .compare__row-heading {
        left: 0;
        font-size: 18px;
        font-weight: 400;
        color: $grayColor3;
        text-transform: uppercase;
    }


</style>