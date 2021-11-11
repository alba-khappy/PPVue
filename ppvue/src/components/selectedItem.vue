<template lang="pug">
    div.selected-item__wrapper
        p.selected-item__subject Математика
        input.selected-item__input
        button.button-close
</template>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .selected-item__wrapper {
        display: flex;
        align-items: center;
        padding-top: 15px;
    }

    .selected-item__input {
        width: 60px;
        height: 30px;
        padding: 5px 10px;
        border: 1px solid $grayColor3;
        font-size: 14px;
        margin-right: 10px;

        &:focus {
            @include inputFocus;
        }
    }

    .selected-item__subject {
        width: 115px;
    }

</style>