<template lang="pug">
    li.university-item
        img(src="../assets/university1.png").university-logo
        h2.university-name Донской государственный технический университет
        p.university-location Ростовская область
        button.university-btn-like.university-btn
        button.university-btn-add.university-btn

</template>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .university-item {
        display: grid;
        grid-template-columns: 100px 1fr auto;
        grid-template-rows: repeat(2,1fr);
        border-bottom: 1px solid $grayColor2;
        column-gap: 30px;
        padding: 40px 0;
    }

    .university-logo {
        grid-area: 1/1/3/2;
    }

    .university-name {
        font-size: 18px;
        font-weight: 600;
    }

    .university-location {
        font-size: 14px;
        grid-area: 2/2/3/3;
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