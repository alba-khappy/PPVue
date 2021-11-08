<template lang="pug">
    main
        section.container.search--section-compare
            h1.search--h1 Вузы
            input.search--main-input
            div.search--compare-selected
                p.search--compare-text В списке сравнения 4 вуза
                button.search--compare-button Сравнить
                button.search--compare-button-close

        section.container.search--section-university
            ul.university-list
                universityItem
                universityItem
                universityItem
            div.search--options ff
</template>

<script>
    import universityItem from '@/components/universityItem.vue';


    export default {
        data() {
            return {
            };
        },
        methods: {
        },
        components: {
            universityItem
        },
    };
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    main {
        color: $blackColorText;
    }

    .search--section-compare, .search--section-university {
        padding: 55px 165px;
    }

    .search--section-compare {
        background-color: $lightBlue;
    }

    .search--compare-selected {
        max-width: 920px;
        width: 100%;
        background-color: $whiteColor;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto auto;
        padding: 25px 30px;
        border: none;
        box-shadow: 0 16px 16px #DDE6EB;
    }

    .search--h1 {
        margin-bottom: 40px;
    }

    .search--main-input {
        max-width: 920px;
        width: 100%;
        height: 50px;
        border: 1px solid #A6A5A9;
        margin-bottom: 40px;
        padding: 5px 20px;
        background: $whiteColor url("../assets/loupe.svg") no-repeat 98% center;

        &:focus {
            border: 1px solid $blueColorText;
            outline: none;
        }
    }

    .search--compare-text {
        font-size: 18px;
    }

    .search--compare-button {
        border: 2px solid $blueColorText;
        color: $blueColorText;
        text-transform: uppercase;
        padding: 8px 34px;
        background-color: $whiteColor;
        margin-right: 70px;
    }

    .search--compare-button-close {
        width: 20px;
        height: 20px;
        background: $whiteColor url("../assets/button-close.svg") no-repeat center;
        border: none;
    }

    .search--section-university {
        display: flex;
    }

    .university-list {
        margin-right: 100px;
    }

</style>