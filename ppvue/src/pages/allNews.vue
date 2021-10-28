<template lang="pug">
    main.container.allNews-content--container
        h1.allNews-content__h1 Новости
        ul#newsList.news__list
            li.news__list-item(v-for="(news, index) in allNews")
                a.news__a(href="/news")
                    img(:src="require(`../assets/${news.newsImg}`)")
                    .news__description
                        .news__wrapper--description
                            p.news__description--p {{ news.newsP }}
                        .news__date {{ news.newsDate }}
</template>

<script>
    export default {
        name: "sections",
        data() {
            return {
                allNews: [
                    {
                        newsImg: "news1.jpg",
                        newsP: "Тут будет подзаголовокТут будет подзаголовок",
                        newsDate: "06.02.2021",
                    },
                    {
                        newsImg: "news2.jpg",
                        newsP: "Тут будет подзаголовок",
                        newsDate: "29.01.2021",
                    },
                    {
                        newsImg: "news3.jpg",
                        newsP:
                            "Тут будет подзаголовокТут будет подзаголовокТут будет подзаголовок",
                        newsDate: "29.01.2021",
                    },
                ],
            }

        }
    }

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

    .news__list {
        @include displayFlexSpaceBetween;
    }

    .news__list-item {
        width: 260px;
    }

</style>