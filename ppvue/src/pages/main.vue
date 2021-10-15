<template lang="pug">
    
section.search
         div.container.search--container
            .swiper.swiper-1
              .swiper-wrapper
                .swiper-slide
                  div.swiper-slide--style
                    h1.search--h1 &nbsp;Выбирай лучшее - 
                      div.search--h1-highlight.search--h1-highlight-1 
                        p &nbsp;поступай правильно
                    a(href="#").search--a Начать поиск
                    img(src="../assets/search-img1.png", alt="illustration").search__pic

                .swiper-slide 
                  div.swiper-slide--style
                    h1.search--h1 
                      div.search--h1-highlight.search--h1-highlight-2 &nbsp;Твой билет 
                      div в будущее
                    a(href="#").search--a Начать поиск
                    img(src="../assets/search-img2.png", alt="illustration").search__pic

                .swiper-slide 
                  div.swiper-slide--style
                    h1.search--h1 
                      span Открывай 
                      span.search--h1-highlight.search--h1-highlight-3 новые 
                      span.search--h1-highlight.search--h1-highlight-4 &nbsp;возможности
                    a(href="#").search--a Начать поиск
                    img(src="../assets/search-img3.png", alt="illustration").search__pic

              .swiper-pagination.swiper-pagination-1

section.about
         div.container.about--container
          ul.about__list
           li.about__list-item
             a(href="/university.html").about__a
               include ../assets/about1.svg
               p.about__p Государственные вузы

           li.about__list-item
             a(href="").about__a 
              include ../assets/about2.svg
              p.about__p Направления подготовки
            
           li.about__list-item
             a(href="").about__a 
              include ../assets/about3.svg
              p.about__p Правила поступления
    

</template>

<script>

export default  {
    name: 'main',
    data() {
        return {

        };
    },
}
</script>


<style lang="scss">
@import "../assets/scss/general.scss";
    //search

.search--container {
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

.about__list {
    @include displayFlexSpaceBetween;
    align-items: center;
}

.about__a {
    display: grid;
    grid-template-columns: 60px 270px;
    align-items: center;
    box-shadow: 0px 16px 16px #dde6eb;
    padding: 20px 0px 20px 20px;
    color: $blueColorText;
    background-color: $whiteColor;

    &:hover {
        background-color: $blueColorText;
        color: $whiteColor;
    }

    &:hover > svg > path {
        fill: $whiteColor;
    }
}

.about__a > svg > path {
    fill: $blueColorText;
}

.about__img {
    width: 40px;
    height: 40px;
}

.about__p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
}

@media (max-width: 1339px) {

    .about__list {
        flex-direction: column;
    }

    .about__list-item:not(:last-child) {
        margin-bottom: 30px;
    }
}

@media (max-width: 768px) {

    .about__list-item:not(:last-child) {
        margin-bottom: 30px;
    }
}

@media (max-width: 768px) and (min-width: 376px) {

    .about--container {
        padding: 60px 40px 60px;
    }

    .about__a {
        grid-template-columns: 74px 280px;
        padding: 20px 0px 20px 70px;
    }
}


@media (max-width: 375px) {

    .about--container {
        padding: 60px 10px;
    }
}
    //admission
    //news
    //services
</style>