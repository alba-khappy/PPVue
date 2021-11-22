<template lang="pug">
main
  .section-blue-background
    section.container.user--section-container
      h1.user--h1 Иванова М.И.
      .user--account
        img.user--account-logo(src="../assets/gosusl.svg")
        p.user--account-text Привязка учетной записи портала Госуслуг позволит вам при подаче заявления на поступление в вуз онлайн через Госуслуги получить доступ к избранным вузам, сохраненным в личном кабинете портала Поступай Правильно.
        a.user--submit-application(href="/") Подать заявление в вузы онлайн
      .user--subjects-wrapper
        h2.h2.user--h2-subjects Предметы и баллы ЕГЭ
        button.user__btn--edit Редактировать
      ul.user__list
        li.user__item
          p.user__subject Русский язык
          span.user__points 77
        li.user__item
          p.user__subject Биология
          span.user__points 99
        li.user__item
          p.user__subject Биология
          span.user__points 99
      div.user__choice-subject
        div
          selected-item.user__selected-item
          selected-item.user__selected-item
          dropdown(:dropdown-list="subjects", :dropdown-title="subjectTitle").user__dropdown
          
        div.user__wrapper-button
          button.user__subject-button Сохранить
          button.user__subject-button Отменить

  section.container.user--section-favourites
    h2.h2.user--h2-favourites Избранное
    checkbox(
      :checkbox-label="category",
      :checkbox-id="'category' + index",
      v-for="(category, index) in categories"
    )
    ul
      universityItem(
        v-for="university in universities",
        :logo="university.logo",
        :name="university.name",
        :location="university.location",
        :visible="false",
      )
</template>

<script>
import universityItem from "../components/universityItem.vue";
import checkbox from "../components/checkbox";
import dropdown from "../components/dropdown";
import selectedItem from "@/components/selectedItem.vue";

export default {
  data() {
    return {
      subjectTitle: "Выберите предмет",
      subjects: ["Математика", "Русский язык", "Физика"],
      categories: ["Вузы", "Направления", "Специальности"],
      universities: [
        {
          logo: "university1.png",
          name: "Донской государственный технический университет",
          location: "Ростовская область",
        },
        {
          logo: "university2.png",
          name: "Крымский федеральный университет имени В.И. Вернадского",
          location: "Республика Крым",
        },
        {
          logo: "university1.png",
          name: "Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»",
          location: "Ростовская область",
        },
      ],
    };
  },
  components: {
    checkbox,
    universityItem,
    dropdown,
    selectedItem
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.user--section-container {
  padding: 80px 165px 55px;
}

.user--h1 {
  @include h1Style;
  margin-bottom: 60px;
}

.user--account-text {
  font-size: 18px;
}

.user--account {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  background-color: $whiteColor;
  padding: 35px 30px;
  box-shadow: 0 16px 16px #dde6eb;
  gap: 30px 40px;
  margin-bottom: 60px;
}

.user--account-logo {
  grid-area: 1/1/3/2;
  width: 115px;
}

.user--submit-application {
  width: 315px;
  @include btnTransparent;
  padding: 13px 24px;
  text-align: center;
}

.user--subjects-wrapper {
  display: flex;
  margin-bottom: 40px;
}

.user__wrapper-button {
  display: flex;
}

.user--h2-subjects {
  margin-right: 20px;
}

.user__btn--edit {
  border: none;
  background: transparent url("../assets/pen.svg") no-repeat left;
  padding-left: 20px;
  color: $blueColor;
}

.user__list {
  max-width: 70%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px 30px;
}

.user__item {
  display: flex;
  align-items: center;
}

.user__choice-subject {
  display: flex;

  div {
    flex-grow: 1;
  }
}

.user__subject {
  width: 200px;
  font-size: 18px;
  margin-right: 15px;
}

.user__selected-item {
  margin-bottom: 20px;
}

.user__points {
  color: $greenColor;
}

.user__dropdown {
  background-color: $whiteColor;
}

.user__subject-button {
  @include btnBlue;
  align-self: end;
  width: 180px;
  height: 50px;
  display: block;
  margin: 0 auto;
  border: none;
  font-size: 12px;
}


/*favourites*/

.user--section-favourites {
  padding: 80px 165px 55px;
}

.user--h2-favourites {
  margin-bottom: 40px;
}

@media (max-width: 1080px) and (min-width: 769px) {
  .user--section-container {
    padding: 80px 40px 55px;
  }

  .user--section-favourites {
    padding: 80px 40px 55px;
  }
}

@media (max-width: 1080px) {

.user__choice-subject {
    flex-direction: column;
  }

  .user__wrapper-button {
    flex-direction: column;
    align-self: start;
  }

   .user__dropdown {
    margin-bottom: 20px;
  }

  .user__subject-button {
    margin: 0;

    &:first-child {
      margin-bottom: 20px;
    }
  }

}

@media (max-width: 768px) {
  .user--section-container {
    padding: 80px 15px 55px;
  }

  .user--section-favourites {
    padding: 80px 15px 55px;
  }

  .user--account {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    gap: 15px 0;
  }

  .user__list {
    grid-template-columns: auto;
    max-width: 100%;
  }

  .user--submit-application {
    width: 280px;
  }

  .user--h1 {
    margin-bottom: 30px;
  }
}
</style>