<template lang="pug">
div
  section.search
    .container.search--container
      .swiper-slide--style
        h1.search--h1 &nbsp;Выбирай лучшее -
          .search--h1-highlight.search--h1-highlight-1 
            p &nbsp;поступай правильно
        a.search--a(href="#") Начать поиск
        img.search__pic(src="../assets/search-img1.png", alt="illustration")
      .swiper-slide--style
        h1.search--h1 
          .search--h1-highlight.search--h1-highlight-2 &nbsp;Твой билет
          div в будущее
        a.search--a(href="#") Начать поиск
        img.search__pic(src="../assets/search-img2.png", alt="illustration")
      .swiper-slide--style
        h1.search--h1 
          span Открывай
          span.search--h1-highlight.search--h1-highlight-3 новые
          span.search--h1-highlight.search--h1-highlight-4 &nbsp;возможности
        a.search--a(href="#") Начать поиск
        img.search__pic(src="../assets/search-img3.png", alt="illustration")
    //- div.container.search--container
    //-     .swiper.swiper-1
    //-         .swiper-wrapper
    //-             .swiper-slide
    //-                 .swiper-slide--style
    //-                     h1.search--h1 &nbsp;Выбирай лучшее - 
    //-                         div.search--h1-highlight.search--h1-highlight-1 
    //-                             p &nbsp;поступай правильно
    //-                     a(href="#").search--a Начать поиск
    //-                     img(src="../assets/search-img1.png", alt="illustration").search__pic

    //-             .swiper-slide 
    //-                 .swiper-slide--style
    //-                     h1.search--h1 
    //-                         div.search--h1-highlight.search--h1-highlight-2 &nbsp;Твой билет 
    //-                         div в будущее
    //-                     a(href="#").search--a Начать поиск
    //-                     img(src="../assets/search-img2.png", alt="illustration").search__pic

    //-             .swiper-slide 
    //-                 .swiper-slide--style
    //-                     h1.search--h1 
    //-                         span Открывай 
    //-                         span.search--h1-highlight.search--h1-highlight-3 новые 
    //-                         span.search--h1-highlight.search--h1-highlight-4 &nbsp;возможности
    //-                     a(href="#").search--a Начать поиск
    //-                     img(src="../assets/search-img3.png", alt="illustration").search__pic

    //-         .swiper-pagination.swiper-pagination-1

  section.about
    .container.about--container
      About(:items="items")

  section.admission
    .container.admission--container
      h2.h2.admission--h2 Как поступить в вуз
        Admission(:admissions="admissions")


  section.news
    .container.news--container
      .news__heading
        h2.h2.news--h2 Новости
        a(href="#") Все новости

      
      .swiper.swiper-3
        #newsList.swiper-wrapper.news__list 
          .swiper-slide.news__list-item(v-for='(news,index) in allNews')
            a.news__a(href="")
              img(:src="allNews.newsImg")
              .news__description
                .news__wrapper--description
                  h3.news__description--h3 {{allNews.newsH3}}
                  p.news__description--p {{allNews.newsP}}
                .news__date {{allNews.newsDate}}


  section.services
    .container.services--container
      h2.h2.services--h2 Вам может быть интересно
      .swiper.swiper-4
        #servicesList.swiper-wrapper.services__list 
          .swiper-slide.services__list-item
            a.services__a.services__a-1(href="") 
            p.services__p Онлайн-сервис самопроверки

          .swiper-slide.services__list-item
            a.services__a.services__a-2(href="") 
            p.services__p Проверка результатов ЕГЭ

          .swiper-slide.services__list-item
            a.services__a.services__a-3(href="") 
            p.services__p Официальный информационный портал ЕГЭ

        .swiper-button-next.swiper-button-next-4
        .swiper-button-prev.swiper-button-prev-4 
      .swiper-pagination.swiper-pagination-4
</template>


<script>
import About from "@/components/about.vue";
import Admission from "@/components/admission.vue";

export default {
  name: "sections",
  data() {
    return {
      items: [
        { text: "Государственные вузы", src: "./assets/about1.svg" },
        { text: "Направления подготовки", src: "./assets/about2.svg" },
        { text: "Правила поступления", src: "./assets/about3.svg" },
      ],
      admissions: [
        {
          index: "1",
          src: "./assets/adm-img1.png",
          text: "Выберите специальность",
        },
        {
          index: "2",
          src: "./assets/adm-img2.png",
          text: "Выберите ВУЗ",
        },
        {
          index: "3",
          src: "./assets/adm-img3.png",
          text: "Сдайте ЕГЭ*",
        },
        {
          index: "4",
          src: "./assets/adm-img4.png",
          text: "Подайте заявление о приеме в вуз",
        },
        {
          index: "5",
          src: "./assets/adm-img5.png",
          text: "Сдайте вступительные испытания",
        },
        {
          index: "6",
          src: "./assets/adm-img6.png",
          text: "Подайте заявление о согласии на зачисление в вуз",
        },
        {
          index: "7",
          src: "./assets/adm-img7.png",
          text: "Принесите оригиналы документа об образовании"
        },
        {
          index: "8",
          src: "./assets/adm-img8.png",
          text: "Пройдите медицинское обследование",
        },
        
      ],
      allNews: [
        {
          newsImg: "../assets/news1.jpg",
          newsH3: "Проект расписания ГИА-11",
          newsP: "Тут будет подзаголовокТут будет подзаголовок",
          newsDate: "06.02.2021",
        },
        {
          newsImg: "./assets/adm-img8.png",
          newsH3: "Проведение основного государственного экзамена (ОГЭ) по предметам по выбору в 2021 г.",
          newsP: "Тут будет подзаголовок",
          newsDate: "29.01.2021",
        },
        {
          newsImg: "./assets/adm-img8.png",
          newsH3: "Итоговое сочинение",
          newsP: "Тут будет подзаголовокТут будет подзаголовокТут будет подзаголовок",
          newsDate: "29.01.2021",
        }
      ]
    };
  },
  components: {
    About,
    Admission
  },
};
</script>


<style lang="scss">
@import "../assets/scss/general.scss";

/*SWIPER*/

.relat {
  position: relative;
}

.swiper-container {
  height: 150px;
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

//search

.search--container {
  display: flex;
  height: 400px;
  overflow: hidden;
  padding: 0 165px 0 150px;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.mySwiper1 {
  .swiper-slide {
    width: 100%;
    max-width: 1400px;
    height: auto;
  }
}

.swiper-slide--style {
  display: grid;
  grid-template-rows: 245px 155px;
  grid-template-columns: 1fr 370px;
  align-items: end;
  position: relative;
  min-width: 100%;
}

.search--h1 {
  max-width: 575px;
  font-size: 52px;
  line-height: 58px;
  letter-spacing: 0.02em;
  color: $blackColorText;
  margin-bottom: 30px;
}

.search--h1-highlight {
  background-repeat: no-repeat;
  color: $whiteColor;
  height: 80px;
  display: flex;
  align-items: center;
}

.search--h1-highlight-1 {
  background-image: url("../assets/highlight1.svg");
}

.search--h1-highlight-2 {
  background-image: url("../assets/highlight2.svg");
}

.search--h1-highlight-3 {
  background-image: url("../assets/highlight3.svg");
  display: inline;
}

.search--h1-highlight-4 {
  background-image: url("../assets/highlight4.svg");
}

.search--a {
  grid-column: 1/2;
  align-self: start;
  display: inline-block;
  background-color: $blueColorText;
  color: $whiteColor;
  padding: 20px 30px;
  max-width: 232px;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-left: 15px;
}

.search__pic {
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: end;
}

.swiper-pagination-1 {
  width: 100%;
  bottom: 0;
}

@media (max-width: 1300px) {
  .swiper-slide--style {
    grid-template-columns: 1fr;
    grid-template-rows: 245px 370px 155px;
  }

  .search--h1 {
    justify-self: center;
  }

  .search__pic {
    grid-column: 1/2;
    grid-row: 2/3;
    justify-self: center;
  }

  .search--a {
    justify-self: center;
    margin-left: 0;
  }
}

@media (max-width: 1023px) and (min-width: 769px) {
  .search--container {
    padding: 60px 100px;
  }
}

@media (max-width: 768px) and (min-width: 376px) {
  .search--container {
    padding: 60px 40px 0 40px;
  }

  .swiper-slide--style {
    grid-template-rows: 170px 370px 200px;
  }

  .search--a {
    max-width: 240px;
    align-self: center;
    padding: 20px 40px;
  }

  .mySwiper1.swiper-slide-1 {
    height: 800px;
  }
}

@media (max-width: 767px) {
  .search--h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }

  .search--a {
    max-width: 240px;
    align-self: center;
    padding: 20px 40px;
  }

  .search__pic {
    width: 70%;
  }
}

@media (max-width: 375px) {
  .search--container {
    padding: 0;
  }

  .swiper-slide--style {
    grid-template-rows: 140px 200px 180px;
  }

  .search__pic {
    width: 75%;
  }

  .search--h1-highlight {
    height: 50px;
  }

  .search--h1-highlight-1 {
    background-size: contain;
    background-position: center;
  }

  .swiper-pagination-1 {
    width: 100%;
  }
}
//about

.about {
  background-color: $lightBlue;
}

.about--container {
  padding: 60px 165px;
}

//admission

.admission--container {
  padding: 60px 165px 35px;
}

.h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #3b4157;
}

.admission--h2 {
  margin-bottom: 40px;
}

.admission--grid {
  display: grid;
  grid-template-rows: repeat(2, 235px);
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 35px;
}

.admission__grid--border {
  border: 2px solid $blueColorText;
}

.admission__grid-img {
  background-repeat: no-repeat;
  background-position: center center;
  background-color: $lightBlue;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 30px;
}

.admission__grid-p {
  max-width: 200px;
}

.admission__p-wrapper {
  display: flex;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  padding-left: 10px;
}

.admission__grid-p--blue {
  display: block;
  color: $blueColorText;
  margin-right: 20px;
}

.admission--p-additional-option {
  text-align: right;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  padding-top: 30px;
}

.swiper.swiper-2 {
  display: none;
}

.swiper-pagination.swiper-pagination-2 {
  display: none;
}

@media (max-width: 1440px) and (min-width: 1024px) {
  .admission {
    background: url("../assets/arrow-top.png") 100% 20% no-repeat,
      url("../assets/arrow-bottom.png") 0 66% no-repeat;
  }
}

@media (min-width: 1441px) {
  .admission {
    background: url(../assets/arrow-top.png) center 20% no-repeat,
      url(../assets/arrow-bottom.png) center 66% no-repeat;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .admission--container {
    position: relative;
    padding: 40px 40px 30px;
  }

  .admission__grid-item-1 {
    background: url("../assets/arrow-768-1.svg") right 45% no-repeat;
  }

  .admission__grid-item-2 {
    background: url("../assets/arrow-768-2.svg") center 67% no-repeat;
  }

  .admission__grid-item-3 {
    background: url("../assets/arrow-768-3.svg") 11% 10% no-repeat;
  }

  .admission__grid-item-4 {
    background: url("../assets/arrow-768-4.svg") center 39% no-repeat;
  }

  .admission__grid-item-5 {
    background: url("../assets/arrow-768-5.svg") center no-repeat;
  }

  .admission__grid-item-6 {
    background: url("../assets/arrow-768-6.svg") right 33% no-repeat;
  }

  .admission__grid-item-7 {
    background: url("../assets/arrow-768-7.svg") center 19% no-repeat;
  }

  .admission__grid-item-8 {
    background: url("../assets/arrow-768-8.svg") left 35% no-repeat;
  }
}

@media (max-width: 1023px) {
  .admission--grid {
    display: none;
  }

  .swiper.swiper-2 {
    display: block;
  }

  .admission--swiper-slide {
    display: grid;
    grid-template-rows: 235px;
    grid-template-columns: repeat(3, 1fr);
  }

  .swiper-pagination.swiper-pagination-2 {
    display: block;
    left: 45%;
  }
}

@media (max-width: 768px) and (min-width: 376px) {
  .admission--container {
    position: relative;
    padding: 40px 40px 30px;
  }

  .admission--h2 {
    margin-bottom: 60px;
  }

  .admission__grid-img {
    margin-bottom: 20px;
  }

  .swiper-2 {
    margin-bottom: 65px;
  }

  .admission--p-additional-option {
    position: absolute;
    right: 40px;
    bottom: 45px;
  }
}

@media (max-width: 767px) {
  .admission {
    background: url(../assets/arrow-375.png) 20% 35% no-repeat;
    background-size: contain;
  }
}

@media (max-width: 375px) {
  .admission__p-wrapper {
    font-size: 16px;
    line-height: 19px;
  }

  .admission--container {
    padding: 30px 10px;
  }

  .admission--h2 {
    font-size: 24px;
    line-height: 28px;
  }

  .admission--p-additional-option {
    font-size: 16px;
  }
}
//news

.news {
  background-color: $lightBlue;
}

.news__heading {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.news--h2 {
  margin-right: 30px;
}

.news__list {
  @include displayFlexSpaceBetween;
  flex-wrap: wrap;
}

.news__list-item {
  margin-bottom: 30px;
}

.news__a {
  display: inline-block;
  box-shadow: 0px 16px 16px #dde6eb;
}

.news__description--h3 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
}

.news__description--p {
  max-width: 210px;
  font-size: 14px;
  line-height: 18px;
}

.news__date {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #cdcfd2;
}

.news--container {
  padding: 60px 165px 30px;

  a {
    color: $blackColorText;
  }
}

.news__description {
  width: 350px;
  height: 187px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $whiteColor;
  padding: 15px 24px 25px;
}

.swiper-pagination-3,
.swiper-button-next-3,
.swiper-button-prev-3 {
  display: none;
}

.swiper-button--wrapper-3 {
  position: relative;
}

.swiper-slide {
  width: auto;
}

@media (max-width: 1024px) {
  .news--container {
    padding: 60px 40px 90px;
  }

  .news__a,
  .news__a img,
  .news__description {
    width: 210px;
  }

  .news__a {
    display: block;
    margin: 0 auto;
  }

  .swiper-3 {
    width: 100%;
  }

  .swiper-pagination-3,
  .swiper-button-next-3,
  .swiper-button-prev-3 {
    display: block;
    position: absolute;
  }

  .swiper-pagination-3 {
    width: 90%;
  }

  .swiper-button-next.swiper-button-next-3,
  .swiper-button-prev.swiper-button-prev-3 {
    top: 150px;
  }
}

@media (max-width: 768px) {
  .swiper-3 {
    width: 90%;
  }
}

@media (max-width: 375px) {
  .news--container {
    padding: 60px 15px 60px;
  }

  .news__description {
    height: 235px;
  }

  .news__heading {
    justify-content: space-between;
  }

  .news__a {
    display: block;
    margin: 0 auto 30px;
  }

  .news--h2 {
    font-size: 24px;
    line-height: 28px;
  }
}
//services

.services--container {
  padding: 75px 165px 90px;
}

.services--h2 {
  margin-bottom: 35px;
}

.services__a {
  width: 350px;
  height: 154px;
  display: block;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #dde6eb;
  margin-bottom: 20px;
}

.services__list {
  @include displayFlexSpaceBetween;
  flex-wrap: wrap;
}

.services__a-1 {
  background-image: url("../assets/services1.png");
}

.services__a-2 {
  background-image: url("../assets/services2.png");
}

.services__a-3 {
  background-image: url("../assets/services3.png");
}

.swiper-button-next-4,
.swiper-button-prev-4,
.swiper-pagination-4 {
  display: none;
}

@media (max-width: 1399px) and (min-width: 769px) {
  .services__list {
    justify-content: center;
  }

  .services__list-item {
    margin: 10px;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .services__a {
    width: 310px;
  }

  .swiper-button-next-4,
  .swiper-button-prev-4,
  .swiper-pagination-4 {
    display: block;
  }

  .swiper-button-next-4,
  .swiper-button-prev-4 {
    top: 43%;
  }
}

@media (max-width: 1024px) {
  .services--container {
    padding: 60px 40px;
  }

  .swiper-pagination-4 {
    left: 45%;
  }

  .services__a {
    width: 280px;
    margin: 0 auto 20px;
    background-size: 90%;
  }
}

@media (max-width: 768px) {
  .swiper-button-next-4,
  .swiper-button-prev-4 {
    top: 40%;
  }

  .swiper-button-prev-4 {
    left: 0;
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 0;
  }

  .swiper-button-next-4,
  .swiper-button-prev-4,
  .swiper-pagination-4 {
    display: block;
  }
}

@media (max-width: 768px) and (min-width: 376px) {
  .mySwiper1.swiper-slide-1 {
    height: 800px;
  }
}

@media (max-width: 375px) {
  .services--container {
    padding: 30px 15px 75px;
  }

  .footer--logo-wrapper {
    grid-template-columns: 45px 250px;
  }

  .services--h2 {
    font-size: 24px;
    line-height: 28px;
  }

  .services__a {
    width: 280px;
    margin: 0 auto 20px;
    background-size: 90%;
  }

  .services__p {
    margin-bottom: 20px;
  }
}
</style>