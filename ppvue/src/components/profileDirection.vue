<template lang="pug">
    li.direction__item
        h3 {{h3}}
        button.direction__btn-like
            include ../assets/like.svg
        div.direction__content-wrapper
            p {{date}}
            p Уровень образования: {{level}}
            p Форма обучения: {{form}}
</template>

<script>
    export default {
        name: "",
        props: ["h3", "date", "level", "form"],
        data() {
            return {
            };
        },
    };
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .direction__item {
        display: grid;
        grid-template-columns: 1fr auto;
        width: 100%;
        max-width: 540px;
        min-height: 180px;
        background-color: $whiteColor;
        padding: 30px;
        row-gap: 20px;
        box-shadow: 0 16px 16px #DDE6EB;
    }

    .direction__btn-like {
        align-self: start;
        background-color: transparent;
        border: none;

        svg {
            width: 20px;
        }

        &:focus {
            svg path {
                fill: #EF4058;
                stroke: #EF4058;
            }
        }
    }

    .direction__content-wrapper {
        p {
            margin-bottom: 5px;
        }
    }
</style>