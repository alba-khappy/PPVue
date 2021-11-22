<template lang="pug">
main
  section.container.profile--section-container
    h2.h2.profile__h2--heading Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»
    .profile__info-container
      img.profile__img-logo(src="../assets/university1.png")
      p.profile__p--licence Лицензия от 27.06.2016 №2245.
      p.profile__p--rector Ректор Бесарион Чохоевич Месхи
      a.profile__link--site(href="") donstu.ru
      a.profile__link--application(href="") 
        p Подать заявление онлайн
      button.profile__btn--favourite Добавить в избранное
        include ../assets/like.svg
      button.profile__btn--compare Сравнить с другими вузами
        include ../assets/add.svg
  section.profile--blue-background
    .container.profile__container
      ul.profile__acceptance--list
        li.profile__acceptance--item
          a.profile__acceptance--link(href="")
            include ../assets/profileImg-1.svg
            p СТРАНИЦА ПРИЕМНОЙ КОМПАНИИ
        li.profile__acceptance--item
          a.profile__acceptance--link(href="") 
            include ../assets/profileImg-2.svg
            p УЗНАТЬ О ПОРЯДКЕ ПРИЕМА
        li.profile__acceptance--item
          a.profile__acceptance--link(href="") 
            include ../assets/profileImg-3.svg
            p АКТУАЛЬНОЕ КОЛИЧЕСТВО МЕСТ
      h2.h2.profile__h2 Общая информация
      ul.general-info__list
        generalInfo(
          :heading="content.amount.text",
          :visible="true",
          :image="content.amount.img"
        )
          li.general-info__slot-item Бюджетные - 100
          li.general-info__slot-item Внебюджетные - 50
          li.general-info__slot-item Целевой набор - 50
        generalInfo(
          :heading="content.places.text",
          :visible="true",
          :image="content.places.img"
        )
          li.general-info__slot-item Бакалавриат - 1234 мест
          li.general-info__slot-item Специалитет - 567 мест
          li.general-info__slot-item Магистратура - 1234 мест
        generalInfo(
          :heading="content.score.text",
          :visible="true",
          :image="content.score.img"
        )
          li.general-info__slot-item Бюджет - 259
          li.general-info__slot-item Внебюджет - 221
        generalInfo(
          :heading="content.hostel.text",
          :visible="true",
          :image="content.hostel.img"
        )
          li.general-info__slot-item Проживает студентов - 306
        generalInfo(
          :heading="content.cost.text",
          :visible="true",
          :image="content.cost.img"
        )
          li.general-info__slot-item от 200 000 ₽ до 300 000 ₽ в год
        generalInfo(:visible="false")
          li.general-info__bonus-item 
            img(src="../assets/absence.svg")
            p Военно-учебный центр
          li.general-info__bonus-item 
            img(src="../assets/presence.svg")
            p Отсрочка от армии
          li.general-info__bonus-item 
            img(src="../assets/absence.svg") 
            p Инклюзивное обучение
      h2.h2.direction__h2 Направления подготовки
      ul.direction__list
        profileDirection(
          v-for="direction in directions",
          :h3="direction.h3",
          :date="direction.date",
          :level="direction.level",
          :form="direction.form"
        )
      button.direction__btn Посмотреть все
  section.container.profile--section-container
    h2.h2.profile__h2 Контакты
    .profile__contacts-wrapper
      div
        h3.contacts__h3 Центральная приемная коммисия
        p.contacts--margin-bottom 344000, г. Ростов-на-Дону, пл. Гагарина, д. 1, каб. 108
        div
          span.contacts__subtitle Время работы:
          p Понедельник - Пятница с 9.00 до 17.00
          p.contacts--margin-bottom Перерыв с 13.00 до 14.00. Суббота с 9.00 до 14.00
        div
          .contacts__subtitle E-mail:
            a.contacts__link(href="spu-33@donstu.ru") spu-33@donstu.ru
          .contacts__subtitle Телефон:
            a.contacts__link(href="tel:+76323738525") 8(863) 273-85-66,
            a.contacts__link(href="tel:+76323738525") 8-800-100-19-30

      div
        h3.contacts__h3 Кампус университета
        p.contacts--margin-bottom 344000, обл Ростовская, г Ростов-на-Дону, пл. Гагарина, д. 1
        div
          .contacts__subtitle E-mail:
            a.contacts__link(href="reсeption@donstu.ru") reсeption@donstu.ru
          .contacts__subtitle Телефон:
            a.contacts__link(href="tel:+76323738525") 8(632) 373-85-25
</template>

<script>
import generalInfo from "@/components/generalInfo.vue";
import profileDirection from "@/components/profileDirection.vue";

export default {
  data() {
    return {
      content: {
        amount: {
          text: "Всего обучающихся - 555 ",
          img: "profileImg-4.svg",
        },
        places: {
          text: "Места приема - 200",
          img: "profileImg-5.svg",
        },
        score: {
          text: "Средний балл ЕГЭ - 237",
          img: "profileImg-6.svg",
        },
        hostel: {
          text: "Общежитие",
          img: "profileImg-7.svg",
        },
        cost: {
          text: "Стоимость обучения",
          img: "profileImg-8.svg",
        },
      },
      directions: [
        {
          h3: "Конструирование и технология электронных средств",
          date: "11.03.03",
          level: "бакалавриат",
          form: "очная",
        },
        {
          h3: "Автоматизация технологических процессов и производств",
          date: "15.03.04",
          level: "бакалавриат",
          form: "очная, заочная",
        },
        {
          h3: "Информационная безопасность телекомуникационных систем",
          date: "10.05.02",
          level: "специалитет",
          form: "очная",
        },
        {
          h3: "Конструирование и технология электронных средств",
          date: "11.03.03",
          level: "бакалавриат",
          form: "очная",
        },
        {
          h3: "Автоматизация технологических процессов и производств",
          date: "15.03.04",
          level: "бакалавриат",
          form: "очная, заочная",
        },
        {
          h3: "Информационная безопасность телекомуникационных систем",
          date: "10.05.02",
          level: "специалитет",
          form: "очная",
        },
      ],
    };
  },
  components: {
    generalInfo,
    profileDirection,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.profile--section-container {
  padding: 80px 165px 55px;
}

.profile__h2--heading {
  margin-bottom: 60px;
}

.profile__info-container {
  display: grid;
  grid-template-columns: 100px auto 265px;
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

.profile__link--application {
  display: flex;
  align-items: center;
  height: 30px;
  color: $grayColor3;
  background: transparent url("../assets/gosusl.svg") no-repeat left;
  padding-left: 40px;
  text-align: left;
  background-size: contain;
  filter: grayscale(1);

  &:hover,
  &:focus {
    filter: grayscale(0);
    color: $blueColor;
  }
}

.profile__btn--favourite {
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  color: $grayColor3;
  font-size: 16px;
  padding-left: 40px;
  text-align: left;
  background-color: transparent;

  svg {
    position: absolute;
    left: 0;
  }

  &:hover,
  &:focus {
    color: $blueColor;

    svg path {
      fill: #ef4058;
      stroke: #ef4058;
    }
  }
}

.profile__btn--compare {
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  border: none;
  font-size: 16px;
  color: $grayColor3;
  padding-left: 40px;
  text-align: left;
  background-color: transparent;

  svg {
    position: absolute;
    left: 0;
  }

  &:hover,
  &:focus {
    color: $blueColor;

    svg path {
      fill: $blueColor;
    }
  }
}

.profile--blue-background {
  background-color: $lightBlue;
}

.profile__container {
  padding: 60px 165px;
}

.profile__acceptance--list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.profile__acceptance--item {
  width: 33%;
  max-width: 350px;
}

.profile__acceptance--link {
  display: grid;
  grid-template-columns: 55px auto;
  align-items: center;
  height: 80px;
  background-color: $whiteColor;
  color: $blueColor;
  padding: 0 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 16px 16px #dde6eb;

  svg path {
    fill: $blueColor;
  }

  &:hover {
    background-color: $blueColor;
    color: $whiteColor;
    box-shadow: 0 16px 16px #acafb1;

    svg path {
      fill: $whiteColor;
    }
  }
}

.profile__h2 {
  margin-bottom: 40px;
}

.general-info__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 35px;
}

.general-info__slot-item {
  font-size: 14px;
  margin-bottom: 10px;
}

.general-info__bonus-item {
  display: flex;
  position: relative;
  @include boldText;
  margin-bottom: 30px;

  &:first-child {
    padding-top: 20px;
  }

  img {
    filter: grayscale(1) brightness(1);
    margin-right: 20px;
  }
}

.direction__h2 {
  margin-bottom: 40px;
}

.direction__list {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 30px;
  margin-bottom: 30px;
}

.direction__btn {
  @include btnBlue;
  width: 180px;
  height: 50px;
  display: block;
  margin: 0 auto;
  border: none;
  font-size: 12px;
}

/*contacts*/

.profile__contacts-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: left;
  font-size: 14px;
  line-height: 24px;
}

.contacts__h3 {
  margin-bottom: 25px;
}

.contacts__subtitle {
  font-weight: 600;
  font-size: 14px;
}

.contacts--margin-bottom {
  margin-bottom: 35px;
}

.contacts__link {
  font-weight: 400;
  color: $blackColorText;
}

@media (max-width: 1300px) and (min-width: 769px) {
  .general-info__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1080px) and (min-width: 769px) {
  .profile--section-container {
    padding: 80px 40px 55px;
  }

  .profile__container {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .profile--section-container {
    padding: 50px 15px;
  }

  .profile__container {
    padding: 60px 15px;
  }

  .profile__info-container {
    grid-template-columns: auto;
    grid-template-rows: auto;
    row-gap: 10px;
  }

  .profile__h2--heading {
    font-size: 24px;
    margin-bottom: 40px;
  }

  .general-info__list {
    grid-template-columns: 1fr;
  }

  .profile__acceptance--list {
    flex-direction: column;
    align-items: center;
  }

  .profile__acceptance--link {
    grid-template-columns: repeat(2, auto);
    column-gap: 15px;
    svg {
      justify-self: right;
    }

    p {
      justify-self: left;
    }
  }

  .profile__acceptance--item {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .profile__p--licence {
    grid-area: 2/1/3/2;
  }

  .profile__img-logo {
    justify-self: center;
    grid-area: 1/1/2/2;
  }

  .profile__p--rector {
    grid-area: 3/1/4/2;
  }

  .profile__link--application {
    grid-area: 5/1/6/2;
  }

  .profile__p--licence,
  .profile__p--rector {
    margin-bottom: 5px;
  }

  .profile__link--site {
    margin-bottom: 15px;
    grid-area: 4/1/5/2;
  }

  .profile__btn--compare {
    grid-area: 6/1/7/2;
  }

  .profile__btn--favourite {
    grid-area: 7/1/8/2;
  }

  .direction__list {
    grid-template-columns: 1fr;
  }

  .direction__item {
    max-width: 100%;
  }

  .profile__contacts-wrapper {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
}
</style>
