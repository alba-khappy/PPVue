<template lang="pug">
    li.university-item
        //img(:src="require(`../assets/${logo}`)").university-logo
        h2.university-name
        p.university-location
        button.university-btn-like.university-btn
        button.university-btn-add.university-btn
</template>

<script>
    export default {
        name: "university",
        props: ["name", "location","logo"],
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
        align-self: end;
    }

    .university-location {
        font-size: 14px;
        grid-area: 2/2/3/3;
        align-self: end;
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