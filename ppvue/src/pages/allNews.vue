<template lang="pug">
    main.container.all-news-content--container
        h1.all-news-content__h1 Новости
        ul.all-news__list
            li.all-news__list-item(v-for="(news, index) in allNews")
                a(href='/news')
                    div.all-news__img(
                        :style="{ backgroundImage: 'url(' + require('../assets/' + news.newsImg) + ')' }")
                    div.all-news-content--style.all-news__description-p
                        p {{ news.newsP }}
                    div.all-news-content--style.all-news-content--date {{ news.newsDate }}

</template>

<script>
    export default {
        name: "allNews",
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

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    main {
        color: $blackColorText;
    }

    .all-news-content--container {
        padding: 55px 165px;
    }

    .all-news__img {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 260px;
        height: 150px;
        margin-bottom: 10px;
    }

    .all-news-content__h1 {
        font-size: 34px;
        font-weight: normal;
        margin-bottom: 20px;
    }

    .all-news-content--style {
        color: $blackColorText;
    }

    .all-news__description-p {
        margin-bottom: 5px;
    }

    .all-news-content--date {
        font-size: 14px;
    }

    .all-news__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .all-news__list-item {
        width: 260px;
    }

    @media (max-width: 1380px) {
        .all-news__list {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .all-news__list-item, .all-news__img {
            width: 100%;
            max-width: 100%;
        }

    }

    @media (max-width: 1080px) {

        .all-news-content--container {
            padding: 30px 40px;
        }

        .all-news__list {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 767px) {

        .all-news-content--container {
            padding: 30px 15px;
        }
    }

</style>