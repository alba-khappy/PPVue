<template lang="pug">
    section.container.search-options--container
            div.search-options__button-wrapper
                button.search-options__button.search-options__button-hide
                    include ../assets/button-close.svg
                button.search-options__button.search-options__button-show Применить
            dropdown(:dropdown-list="regions", :dropdown-title="regionTitle")
            h3.options-h3 Тип учебного заведения
            checkbox(:checkbox-label="type", :checkbox-id="'type' + index", v-for="(type, index) in types")
            h3.options-h3 Форма обучения
            checkbox(:checkbox-label="form", :checkbox-id="'form' + index", v-for="(form, index) in forms")
            h3.options-h3 Баллы ЕГЭ
            dropdown(:dropdown-list="selectItem", :dropdown-title="selectItemTitle")
            selected-item
            selected-item
            h3.options-h3 Стоимость обучения
            checkbox(:checkbox-label="cost", :checkbox-id="'cost' + index", v-for="(cost, index) in costs")
            .options--input-wrapper
                span от
                input.options__input-cost(type="number")
                span до
                input.options__input-cost(type="number")
                span ₽ в год
            h3.options-h3 Уровень образования
            checkbox(:checkbox-label="level", :checkbox-id="'level' + index", v-for="(level, index) in levels")
            h3.options-h3 Дополнительно
            checkbox(:checkbox-label="variant", :checkbox-id="'variant' + index", v-for="(variant, index) in variants")
</template>

<script>
    import dropdown from "@/components/dropdown.vue";
    import checkbox from "@/components/checkbox.vue";
    import selectedItem from "@/components/selectedItem.vue";

    export default {
        data() {
            return {
                regionTitle: "Выбрать субъект РФ",
                regions: ["Адыгея", "Москва", "Краснодар"],
                selectItemTitle: "Выбрать предмет",
                selectItem: ["Русский язык", "Математика", "Обществознание"],
                types: ["Государственный", "Негосударственный"],
                forms: ["Очная", "Очно-заочная", "Заочная"],
                costs: ["Бюджет", "Платные места"],
                levels: [
                    "Бакалавриат",
                    "Специалитет",
                    "Магистратура",
                    "Аспирантура",
                    "Ординатура",
                    "Адъюнктура",
                    "Ассистентура-стажировка",
                ],
                variants: [
                    "Подача документов онлайн",
                    "Военно-учебный центр",
                    "Общежитие",
                    "Отсрочка от армии",
                    "Инклюзивное образование",
                ],
                showOptions: false,
                showUniversities: true,
            };
        },
        methods: {
        },
        components: {
            dropdown,
            checkbox,
            selectedItem
        },
    };

</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    main {
        color: $blackColorText;
    }

    .search-options--container {
        position: relative;
        padding: 80px 15px;
        font-size: 14px;
    }

    .search-options__button-wrapper {
        position: absolute;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background-color: $blueColor;
        top: 0;
        left: 0;
    }

    .search-options__button {
        background: transparent no-repeat center;
        border: none;
        color: $whiteColor;
        text-transform: uppercase;
    }

    .search-options__button-hide {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;

        svg path {
            fill: $whiteColor;
        }
    }

    .options-h3 {
        font-size: 14px;
        font-weight: 400;
        margin: 40px 0 20px;
    }

    .options--input-wrapper {
        display: flex;
        align-items: center;
    }

    .options__input-cost {
        width: 60px;
        height: 30px;
        border: 1px solid $grayColor3;
        margin: 0 10px;
        padding: 5px 10px;

        &:focus {
            @include inputFocus;
        }
    }

    .button-close {
        width: 20px;
        height: 20px;
        background: transparent url("../assets/button-close.svg") no-repeat center;
        border: none;
    }

</style>