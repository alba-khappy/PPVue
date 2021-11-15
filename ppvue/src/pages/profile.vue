<template lang="pug">
    main
        section.container.user--section-container
            h1.user--h1 Кабинет вуза
</template>

<script>

</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    main {
        color: $blackColorText;
    }

    .user--section-container {
        padding: 80px 165px 55px;
    }

    .user--h1 {
        @include h1Style;
        margin-bottom: 60px;
    }
</style>
