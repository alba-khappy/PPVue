<template lang="pug">
    nav.pagination__nav
        button.pagination__btn.pagination__btn--prev <
        ul.pagination__list
            li.pagination__item
                a(href="#").pagination__link 1
            li.pagination__item
                a(href="#").pagination__link 2
        button.pagination__btn.pagination__btn--next >
</template>


<style lang="scss">
    @import "../assets/scss/general.scss";

    .pagination__nav {
        align-self: center;
        display: flex;
        padding: 60px 0 70px;
    }

    .pagination__list {
        display: flex;
        margin: 0 20px;
    }

    .pagination__btn {
        background-color: transparent;
        border: none;
        color: $grayColor3;
    }

    .pagination__link {
        color: $grayColor3;
        margin: 0 10px;
    }
</style>