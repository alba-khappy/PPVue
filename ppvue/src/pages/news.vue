<template lang="pug">
    main.container.news-content--container
        ul.news-content--breadcrumbs
            li.news-content--breadcrumb
                a(href="/") Главная страница
            li.news-content--breadcrumb
                p Новость №1 Состоялся круглый стол, посвященный качеству образования в условиях пандемии.

        img(src="../assets/men.png").news-content__img
        h1.news-content__h1 Новость №1 Состоялся круглый стол, посвященный качеству образования в условиях пандемии.
        p.news-content__p В пресс-центре МИА «Россия сегодня» в формате круглого стола состоялось обсуждение темы «Высшее образование в условиях пандемии: вызовы и решения». В разговоре приняли участие Министр науки и высшего образования РФ Валерий Фальков, ректоры ведущих российских вузов, а также представители работодателей.
        p.news-content__p Основой для обсуждения стал доклад «Качество образования в российских университетах: что мы поняли в пандемию». Над исследованием по поручению главы Минобрнауки России работали 13 российских университетов.
        p.news-content__p-copyright Фото: Минобрнауки России
</template>

<script>

</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    main {
        color: $blackColorText;
    }

    .news-content--container {
        padding: 55px 165px;
    }

    .news-content--breadcrumbs {
        display: flex;
        margin-bottom: 15px;
    }

    .news-content--breadcrumb {

        &:not(:last-child):after {
            content: ' / ';
        }

        a {
            font-size: 14px;
            color: $blueColorText;
        }

        p {
            font-size: 14px;
        }
    }

    .news-content__img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin-bottom: 35px;
    }

    .news-content__h1 {
        font-size: 20px;
        margin-bottom: 20px;
    }

    .news-content__p {
        margin-bottom: 15px;
        line-height: 23px;
    }

    .news-content__p-copyright {
        font-size: 13px;
        color: $grayColor2;
    }

    @media (max-width: 1080px) {
        .news-content--container {
            padding: 30px 40px;
        }
    }

</style>