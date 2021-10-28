<template lang="pug">
    main.container.allNews-content--container
        h1.allNews-content__h1 Новости
        ul#newsList.news__list
            li.news__list-item(v-for="(news, index) in allNews")
                a.news__a(href="/news")
                    img(:src="require(`../assets/${news.newsImg}`)")
                    .news__description
                        .news__wrapper--description
                            h3.news__description--h3 {{ news.newsH3 }}
                            p.news__description--p {{ news.newsP }}
                        .news__date {{ news.newsDate }}
</template>

<script>

</script>

<style lang="scss">
    @import "../assets/scss/general.scss";

    main {
        color: $blackColorText;
    }

    .allNews-content--container {
        padding: 55px 165px;
    }

    .allNews-content__h1 {
        font-size: 34px;
        font-weight: normal;
    }

</style>