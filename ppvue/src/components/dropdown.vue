<template lang="pug">

    div.options-dropdown(@click="show = !show") {{dropdownTitle}}
        ul.options-dropdown__list(v-show="show")
            li.options-dropdown__item(v-for='dropdown in dropdownList') {{dropdown}}

</template>

<script>
    export default {
        name: "dropdown",
        props: ['dropdownList', 'dropdownTitle'],
        data() {
            return {
                show: false,
            }
        }
    }

</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    .options-dropdown {
        position: relative;
        width: 255px;
        height: 30px;
        padding: 5px 10px;
        border: 1px solid #A6A5A9;
        font-size: 14px;

        &:after {
            content: '▼';
            position: absolute;
            right: 13px;
            top: 7px;
            color: $blackColorText;
        }
    }

</style>