<template lang="pug">
    main
        div.section-blue-background
            section.container.rules--section-container
                h1.rules--h1 Информация о правилах приема в вузы
                img(src="../assets/hat.svg")
        div.rules--container-search.container
            section.rules--section-search
                p.rules--text Искать по названию:
                p.rules--text Регионы РФ:
                p.rules--text Сбросить фильтр
                input(type="text").rules--input-search
                dropdown(:dropdown-list="selectItem", :dropdown-title="selectItemTitle").rules--option-dropdown
                button.rules--btn-search Поиск
                div
                    checkbox(:checkbox-label="type", :checkbox-id="'type' + index", v-for="(type, index) in types").rules--checkbox
        div.rules--universities.container
            universityWithLinks(v-for="university in universities",:logo="university.logo", :name="university.name", :location="university.location")
</template>

<script>
    import checkbox from "../components/checkbox";
    import dropdown from "@/components/dropdown.vue";
    import universityWithLinks from "../components/universityWithLinks";

    export default {
        data() {
            return {
                types: ["Государственный", "Негосударственный"],
                universities: [
                    {
                        logo: "university1.png",
                        name: "ФГБОУ ВО «Приволжский исследовательский медицинский университет» Министерства здравоохранения Российской Федерации",
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
                selectItemTitle: "",
                selectItem: ["Республика Адыгея", "Москва", "Краснодарский край"],
            }
        },
        components: {
            checkbox,
            dropdown,
            universityWithLinks
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .rules--section-container {
        padding: 80px 165px 55px;
        @include displayFlexSpaceBetween;
        align-items: center;
    }

    .rules--container-search {
        padding: 45px 165px 0;
    }

    .rules--h1 {
        @include h1Style;
    }

    .rules--text {
        font-size: 18px;
    }

    .rules--section-search {
        display: grid;
        grid-template-columns: 1fr repeat(2, auto);
        grid-template-rows: repeat(3, auto);
        gap: 23px 45px;
    }

    .rules--input-search {
        @include inputStyle;
        padding: 5px 20px;

        &:focus {
            @include inputFocus;
        }
    }

    .rules--btn-search {
        @include btnTransparent;
    }

    .rules--checkbox {
        grid-area: 1/2/3/3;
    }

    .rules--universities {
        padding: 50px 165px 55px;
    }

    .rules--option-dropdown {
        justify-self: end;
        width: 380px;
        height: 50px;

        &:after {
            height: 30px;
        }

        ul {
            width: 380px;
            top: 50px;
        }
    }





</style>