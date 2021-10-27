<template lang="pug">
div
  section.search
    .container.search--container#swiperContainer
      .swiper-slide--style#swiper-slide--style
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
    .swiper__buttons.search--swiper-buttons
      #search__swiper-button--1.swiper-button
      #search__swiper-button--2.swiper-button
      #search__swiper-button--3.swiper-button

  section.about
    .container.about--container
      About(:items="items")

  section.admission
    .container.admission--container
      h2.h2.admission--h2 Как поступить в вуз
      ul.admission--grid
        li.admission--item(v-for='admission in admissions')
          div.admission__grid-img.admission__grid-img-1.admission__grid--border
            img(:src="require(`../assets/${admission.src}`)")
          div.admission__p-wrapper
            p.admission__grid-p--blue {{admission.index}}
            p.admission__grid-p {{admission.text}}
      p.admission--condition *При необходимости
      .swiper__buttons.admission--swiper-buttons
        .swiper-button
        .swiper-button
        .swiper-button
        .swiper-button

  section.news
    .container.news--container
      .news__heading
        h2.h2.news--h2 Новости
        a(href="#") Все новости

      div.news__list-wrapper
        ul#newsList.news__list
          li.news__list-item(v-for="(news, index) in allNews")
            a.news__a(href="")
              img(:src="require(`../assets/${news.newsImg}`)")
              .news__description
                .news__wrapper--description
                  h3.news__description--h3 {{ news.newsH3 }}
                  p.news__description--p {{ news.newsP }}
                .news__date {{ news.newsDate }}
          button.button-next.news__button-next
        .swiper__buttons.news--swiper-buttons
            .swiper-button
            .swiper-button
            .swiper-button

  section.services
    .container.services--container
      h2.h2.services--h2 Вам может быть интересно
      div
        ul#servicesList.services__list
          li.services__list-item(v-for="(service, index) in servicesArray")
            a.services__a(
              :style="{ backgroundImage: 'url(' + require('../assets/' + service.servicesImg) + ')' }",
              href=""
            ) 
            p.services__p {{ service.servicesP }}
          button.button-next.services__button-next
        .swiper__buttons.services--swiper-buttons
          .swiper-button
          .swiper-button
          .swiper-button
</template>


<script>
import About from "@/components/about.vue";

export default {
  name: "sections",
  data() {
    return {
      items: [
        { text: "Государственные вузы", src: "about1.svg" },
        { text: "Направления подготовки", src: "about2.svg" },
        { text: "Правила поступления", src: "about3.svg" },
      ],
      admissions: [
        {
          index: "1",
          src: "adm-img1.svg",
          text: "Выберите специальность",
        },
        {
          index: "2",
          src: "adm-img2.svg",
          text: "Выберите ВУЗ",
        },
        {
          index: "3",
          src: "adm-img3.svg",
          text: "Сдайте ЕГЭ*",
        },
        {
          index: "4",
          src: "adm-img4.svg",
          text: "Подайте заявление о приеме в вуз",
        },
        {
          index: "5",
          src: "adm-img5.png",
          text: "Сдайте вступительные испытания",
        },
        {
          index: "6",
          src: "adm-img6.svg",
          text: "Подайте заявление о согласии на зачисление в вуз",
        },
        {
          index: "7",
          src: "adm-img7.svg",
          text: "Принесите оригиналы документа об образовании",
        },
        {
          index: "8",
          src: "adm-img8.svg",
          text: "Пройдите медицинское обследование",
        },
      ],
      allNews: [
        {
          newsImg: "news1.jpg",
          newsH3: "Проект расписания ГИА-11",
          newsP: "Тут будет подзаголовокТут будет подзаголовок",
          newsDate: "06.02.2021",
        },
        {
          newsImg: "news2.jpg",
          newsH3:
            "Проведение основного государственного экзамена (ОГЭ) по предметам по выбору в 2021 г.",
          newsP: "Тут будет подзаголовок",
          newsDate: "29.01.2021",
        },
        {
          newsImg: "news3.jpg",
          newsH3: "Итоговое сочинение",
          newsP:
            "Тут будет подзаголовокТут будет подзаголовокТут будет подзаголовок",
          newsDate: "29.01.2021",
        },
      ],
      servicesArray: [
        {
          servicesImg: "services1.png",
          servicesP: "Онлайн-сервис самопроверки",
        },
        {
          servicesImg: "services2.png",
          servicesP: "Проверка результатов ЕГЭ",
        },
        {
          servicesImg: "services3.png",
          servicesP: "Официальный информационный портал ЕГЭ",
        },
      ],
    };
  },

  components: {
    About,
  },


    mounted() {
        var cont = document.querySelector('#swiperContainer');
        var swiperSlide = document.querySelector('#swiper-slide--style');
        var contOffset = cont.offsetWidth;

        var btn1 = document.querySelector('#search__swiper-button--1');
        var btn2 = document.querySelector('#search__swiper-button--2');
        var btn3 = document.querySelector('#search__swiper-button--3');

        btn1.addEventListener('click', function () {
            swiperSlide.style.marginLeft = 0 + 'px';
        });

        btn2.addEventListener('click', function () {
            swiperSlide.style.marginLeft = -contOffset + 'px';
        });

        btn3.addEventListener('click', function () {
            swiperSlide.style.marginLeft = -(contOffset * 2) + 'px';
        });
    }
};
</script>


<style lang="scss">
@import "../assets/scss/general.scss";

/*SWIPER*/

.swiper-slide--style {
    display: grid;
    grid-template-rows: 245px 155px;
    grid-template-columns: 1fr 370px;
    align-items: end;
    position: relative;
    min-width: 100%;
    padding: 0 150px;
    transition: 0.3s;
}

.swiper__buttons {
  display: flex;
  margin: 0 auto;
  position: absolute;
  left: 50%;
}

.swiper-button {
  width: 8px;
  height: 8px;
  background-color: #c4c4c4;
  border-radius: 20px;
  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:active, &:hover {
    background-color: #0d5adc;
  }

}

//search

.search {
  position: relative;
}

.search--container {
  display: flex;
  overflow: hidden;
  margin: 0 auto;
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
  white-space: nowrap;
}

.search__pic {
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: end;
}

.search--swiper-buttons {
    bottom: 30px;
}

@media (max-width: 1300px) {
  .swiper-slide--style {
    grid-template-columns: 1fr;
    grid-template-rows: 245px 370px 155px;
      padding: 0 50px;
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

    .search--swiper-buttons {
        left: 48%;
    }

}

@media (max-width: 1300px) and (min-width: 768px){

    .search--container {
        margin-bottom: 30px;
    }

    .search--h1 {
        margin-bottom: 50px;
    }

    .search--a {
        margin-top: 45px;
    }

    .search--swiper-buttons {
        bottom: 0;
    }

}



@media (max-width: 767px) {

    .swiper-slide--style {
        grid-template-rows: 135px 200px 180px;
        padding: 0;
    }

    .search--swiper-buttons {
        left: 44%;
    }

    .search--container {
         padding: 0;
     }

  .search--h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }

  .search--a {
    max-width: 240px;
    align-self: self-start;
    padding: 20px 40px;
    margin-top: 40px;
  }

  .search__pic {
      max-width: 300px;
      width: 75%;
  }

    .search--h1-highlight {
       height: 50px;
   }

    .search--h1-highlight-1 {
        background-size: contain;
        background-position: center;
    }

}


//admission

.admission--container {
  padding: 60px 165px 35px;
}

.admission--h2 {
  margin-bottom: 40px;
}

.admission--grid {
  display: grid;
  grid-template-rows: repeat(2, 235px);
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 35px;
  margin-bottom: 30px;
}

.admission__grid--border {
  border: 2px solid $blueColorText;
}

.admission__grid-img {
  display: flex;
  align-items: center;
  justify-content: center;
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

.admission--condition {
    text-align: right;
    font-size: 20px;
    font-weight: 600;
}

.admission--swiper-buttons {
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
    background: url(../assets/arrow-top.png) center 22% no-repeat,
      url(../assets/arrow-bottom.png) center 66% no-repeat;
  }
}

@media (max-width: 1024px) {

    .admission {
        background: url(../assets/arrow-768.png) 20% 35% no-repeat;
        background-size: contain;
    }

    .admission--grid {
        overflow: hidden;
        grid-template-rows: 235px;
        grid-template-columns: repeat(8, 1fr);
        margin-bottom: 10px;
    }
}

@media (max-width: 1300px) and (max-width: 768px) {

    .admission--grid {
        margin-bottom: 40px;
    }

    .admission--h2 {
        margin-bottom: 60px;
    }

    .admission--container {
        padding: 40px 40px 25px;
    }
}



@media (max-width: 767px) {
  .admission {
    background: url(../assets/arrow-375.png) 20% 35% no-repeat;
    background-size: contain;
  }

    .admission--container {
       position: relative;
       padding: 40px 40px 30px;
   }

    .admission--h2 {
        margin-bottom: 30px;
    }

    .admission--grid {
        margin-bottom: 10px;
    }

    .admission__grid-img {
        margin-bottom: 20px;
    }

    .admission--condition {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .admission--swiper-buttons {
        display: flex;
        left: 44%;
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
}

.news__list-item {
  margin-bottom: 30px;
}

.news__a {
  display: inline-block;
  box-shadow: 0 16px 16px #dde6eb;

    &:hover {
        box-shadow: 0 16px 16px #acafb1;
    }
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

.news--swiper-buttons {
    display: none;
}

@media (max-width: 1400px) {

    .news__a,
    .news__a img,
    .news__description {
        width: 100%;
        max-width: 310px;
    }

    .news__list-item {
        padding-right: 35px;
        margin-bottom: 0;

        &:nth-child(3) {
            display: none;
        }
    }

    .news__button-next {
        background-image: url("../assets/arrowNext.svg");
        position: absolute;
        height: 35px;
        width: 22px;
        border: none;
        background-color: transparent;
        background-repeat: no-repeat;
        right: 0;
        top: 35%;
    }

    .news--swiper-buttons {
        display: flex;
        left: 50%;
    }

    .news__list-wrapper {
        position: relative;
    }

}

@media (max-width: 1300px) and (max-width: 768px) {

    .news--container {
        padding: 60px 40px 130px;
    }

    .news__heading {
        margin-bottom: 30px;
    }

    .news--swiper-buttons {
        bottom: -60px;
        left: 47%;
    }
}



    @media (max-width: 767px) {

        .news--container {
            padding: 60px 15px 65px;
        }

        .news__description {
            height: 235px;
        }

        .news__heading {
            justify-content: space-between;
            margin-bottom: 32px;
        }

        .news__description {
            height: 210px;
        }

        .news__a {
            margin: 0 auto 30px;
        }

        .news--h2 {
            font-size: 24px;
            line-height: 28px;
        }

        .news__list-item:nth-child(2) {
            display: none;
        }

        .news__button-next {
            top: 42%;
            left: 330px;
        }

        .news--swiper-buttons {
            left: 44%;
            bottom: 0;
        }

    }

@media (max-width: 374px) {

    .news__button-next {
        left: 280px;
    }
}

//services

.services--container {
  padding: 75px 165px 90px;
}

.services__list-item {
  display: flex;
  flex-direction: column;
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

.services--swiper-buttons {
    display: none;
}

@media (max-width: 1300px) and (min-width: 768px) {

    .services__list {
        justify-content: center;
    }

    .services__list-item {
        margin: 10px;
    }

  .services__a {
    width: 310px;
  }
    .services--container {
        padding: 30px 40px 60px;
    }
}


@media (max-width: 767px) {

    .services--container {
    padding: 30px 15px 70px;
}

    .services__list {
        flex-wrap: nowrap;
        overflow: hidden;
    }

    .services__a {
        width: 310px;
        margin: 0 auto 20px;
        background-size: 90%;
    }

    .services__list-item:not(:last-child) {
        padding-right: 60px;
    }

    .footer--logo-wrapper {
         grid-template-columns: 45px 250px;
     }

    .services--h2 {
        font-size: 24px;
        line-height: 28px;
    }

    .services__p {
        margin-bottom: 10px;
    }

    .services--swiper-buttons {
        display: flex;
        left: 44%;
    }
}


</style>