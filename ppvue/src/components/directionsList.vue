<template lang="pug">
    li.university__item
        img(:src="require(`../assets/${logo}`)").university__logo
        p.university__chosen-direction {{direction}}
        h2.university__name {{name}}
        p.university__level Уровень образования:  бакалавриат
        p.university__form Форма обучения: очная
        div.university__btn--wrapper
            button.university__btn-like.university-btn
                include ../assets/like.svg
            button.university__btn-add.university-btn
                include ../assets/add.svg
</template>

<script>
    export default {
        name: "directionsList",
        props: ["name", "direction","logo"],
        data() {
            return {
            };
        },
    };
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .university__item {
        display: grid;
        grid-template-columns: 65px 1fr auto;
        grid-template-rows: repeat(2, auto);
        column-gap: 30px;
        padding: 40px 0;

        &:not(:last-child) {
            border-bottom: 1px solid $grayColor2;
        }
    }

    .university__chosen-direction  {
        grid-area: 1/2/2/3;
        align-self: end;
        font-size: 18px;
    }

    .university__level {
        grid-area: 2/2/3/3;
        align-self: end;
        font-size: 14px;
    }

    .university__form {
        font-size: 14px;
    }

    .university__logo {
        grid-area: 1/1/3/2;
        align-self: center;
    }

    .university__name {
        font-size: 18px;
        font-weight: 600;
        align-self: end;
    }

    .university-location {
        font-size: 14px;
        grid-area: 2/2/3/3;
        align-self: end;
    }

    .university__btn--wrapper {
        display: flex;
        flex-direction: column;
        grid-row: 1/-1;
        align-self: center;
    }

    .university-btn {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        transition: 0.3s;
    }

    .university__btn-like {
        grid-area: 1/3/2/4;

        &:focus {
            svg path{
                fill: #EF4058;
                stroke: #EF4058;
            }
        }
    }

    .university__btn-add {
        grid-area: 2/3/3/4;

        &:focus {
            svg path{
                fill: $blueColor;
            }
        }
    }

</style>