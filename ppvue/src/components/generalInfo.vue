<template lang="pug">
    li.general-info__item
        h3.general-info__h3(v-show="visible") {{heading}}
        button.general-info__btn
        ul
            slot
</template>

<script>
    export default {
        name: "info",
        props: ["heading", "visible"],
        data() {
            return {
            };
        },
    };
</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .general-info__item {
        width: 100%;
        min-height: 210px;
        padding: 30px;
        background-color: $whiteColor;
        position: relative;
        box-shadow: 0 16px 16px #DDE6EB;
    }

    .general-info__btn {
        position: absolute;
        width: 25px;
        height: 25px;
        right: 16px;
        top: 30px;
        background: url("../assets/inf.svg") no-repeat;
        border: none;
    }

    .general-info__h3 {
        border-bottom: 1px solid $blueColor;
        padding-bottom: 20px;
        margin-bottom: 35px;
    }

</style>