<template lang="pug">
main
  section.container.profile--section-container
    h1.profile--h1 Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»
    div.profile__info-container
        img(src="../assets/university1.png").profile__img-logo
        p.profile__p--licence Лицензия от 27.06.2016 №2245.
        p.profile__p--rector Ректор Бесарион Чохоевич Месхи
        a(href="").profile__link--site donstu.ru
        a(href="").profile__link--application Подать заявление онлайн
        button.profile__btn--favourite Добавить в избранное
        button.profile__btn--compare Сравнить с другими вузами


</template>

<script>
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

main {
  color: $blackColorText;
}

.profile--section-container {
  padding: 80px 165px 55px;
}

.profile--h1 {
  @include h1Style;
  margin-bottom: 60px;
}

.profile__info-container {
    display: grid;
    grid-template-columns: 150px auto 250px;
    grid-template-rows: repeat(3, 1fr);
}

.profile__img-logo {
   grid-area: 1/1/4/2;
    align-self: center; 
}

.profile__p--licence {
    grid-area: 1/2/2/3;
}

.profile__p--rector {
    grid-area: 2/2/3/3;
}

.profile__link--site {
    grid-area: 3/2/4/3;
    color: $blueColor;
}

.profile__link--application{
    color: $grayColor3;
    background: transparent url('../assets/gosusl.svg') no-repeat left;
    padding-left: 40px;
    text-align: left;
    background-size: contain;
    filter: grayscale(1);

    &:hover {
        filter: grayscale(1);
        color: $blueColor;
    }
}

.profile__btn--favourite {
    border: none;
    color: $grayColor3;
    font-size: 16px;
    background: transparent url('../assets/like.svg') no-repeat left;
    padding-left: 40px;
    text-align: left;
}

.profile__btn--compare {
    border: none;
    font-size: 16px;
    color: $grayColor3;
    background: transparent url('../assets/add.svg') no-repeat left;
    padding-left: 40px;
    text-align: left;
}



</style>
