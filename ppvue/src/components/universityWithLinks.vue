<template lang="pug">
    li.university-item
        img(:src="require(`../assets/${logo}`)").university-logo
        h2.university-name {{name}}
        div.university-links-wrapper
            a(href="").university-link Страница приемной кампании
            a(href="").university-link Правила приема
            a(href="").university-link Число мест

</template>

<script>
    export default {
        name: "universityWithLinks",
        props: ["name","logo"],
        data() {
            return {
            };
        },
    };
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .university-item {
        display: grid;
        grid-template-columns: 65px 1fr auto;
        grid-template-rows: auto 45px;
        column-gap: 30px;
        padding: 40px 0;

        &:not(:last-child) {
            border-bottom: 1px solid $grayColor2;
        }
    }

    .university-logo {
        grid-area: 1/1/3/2;
    }

    .university-name {
        font-size: 18px;
        font-weight: 600;
        align-self: start;
    }

    .university-links-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: end;
        font-size: 14px;
        grid-area: 2/2/3/3;
    }

    .university-link {
        font-size: 18px;
        color: $grayColor3;

        &:hover, &:focus {
            color: $blueColor;
        }

        &:not(:last-child) {
            margin-right: 70px;
        }
    }

    .university-btn {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
    }

    .university-btn-like {
        background: url("../assets/like.svg") center no-repeat;
        grid-area: 1/3/2/4;
    }

    .university-btn-add {
        background: url("../assets/add.svg") center no-repeat;
        grid-area: 2/3/3/4;
    }

</style>