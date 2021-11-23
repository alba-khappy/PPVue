<template lang="pug">
main
  section.container.compare--section-container
    h1.compare--h1 Сравнение вузов
    .compare--heading-container
      p Выберите вузы для сравнения:
        div
          a.compare--add-items(href="/search") + Добавить вузы
          button.compare--delete-items Очистить список
    ul.compare__university-list
      compareItem(
        v-for="university in universitiesList",
        :visible="university.visible",
        :logo="university.logo",
        :name="university.name"
      )
    .swiper__buttons
      .swiper-button
      .swiper-button
      .swiper-button
      .swiper-button
    button.compare__button-compare СРАВНИТЬ
    checkbox.compare__checkbox--style(
      :checkbox-label="checkbox",
      :checkbox-id="'checkbox' + index",
      v-for="(checkbox, index) in checkboxes"
    )
    div
      ul.compare__university-list
        compareItem(
          v-for="university in compareUniversities",
          :visible="university.visible",
          :logo="university.logo",
          :name="university.name"
        )
  .section-blue-background
    section.container.table--section-container.parameters-container
      table.compare__table
        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Регион
            span {{ parameters[0].region }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].region }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Тип вуза
            span {{ parameters[0].type }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].type }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Форма обучения
            span {{ parameters[0].form }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].form }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Уровень образования
            span {{ parameters[0].level }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].level }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Бюджетных мест
            span {{ parameters[0].budget }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].budget }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Внебюджетных мест
            span {{ parameters[0].offBudget }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].offBudget }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Стоимость за год обучения
            span {{ parameters[0].cost }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].cost }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Средний проходной балл ЕГЭ
            span {{ parameters[0].score }}
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span {{ parameters[ind + 1].score }}

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Подать заявление онлайн
            span(
              :class="{ 'parameter-absence': !parameters[0].application, 'parameter-presence': parameters[0].application }"
            )
          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span(
              :class="{ 'parameter-absence': !parameters[ind + 1].application, 'parameter-presence': parameters[ind + 1].application }"
            )

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Общежитие
            span(
              :class="{ 'parameter-absence': !parameters[0].hostel, 'parameter-presence': parameters[0].hostel }"
            )

          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span(
              :class="{ 'parameter-absence': !parameters[ind + 1].hostel, 'parameter-presence': parameters[ind + 1].hostel }"
            )

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Отсрочка от армии
            span(
              :class="{ 'parameter-absence': !parameters[0].postponement, 'parameter-presence': parameters[0].postponement }"
            )

          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span(
              :class="{ 'parameter-absence': !parameters[ind + 1].postponement, 'parameter-presence': parameters[ind + 1].postponement }"
            )

        tr.compare__table-row
          td(v-if="parameters[0]")
            h2.compare__row-heading Инклюзивность
            span(
              :class="{ 'parameter-absence': !parameters[0].inclusiveness, 'parameter-presence': parameters[0].inclusiveness }"
            )

          td(v-for="(i, ind) in Array(parameters.length - 1)")
            span(
              :class="{ 'parameter-absence': !parameters[ind + 1].inclusiveness, 'parameter-presence': parameters[ind + 1].inclusiveness }"
            )
</template>

<script>
import checkbox from "@/components/checkbox.vue";
import compareItem from "@/components/compareItem.vue";

export default {
  data() {
    return {
      checkboxes: ["Все параметры", "Различающиеся параметры"],
      parameters: [
        {
          region: "Ростовская область",
          type: "Государственный",
          form: "Очная, Заочная",
          level: "Бакалавриат, Магистратура",
          budget: "234",
          offBudget: "567",
          cost: "от 23 300 ₽ - 235 200 ₽",
          score: "63,56 бюджет 57,9 внебюджет",
          application: true,
          hostel: false,
          postponement: true,
          inclusiveness: false,
        },
        {
          region: "Ростовская область",
          type: "Государственный",
          form: "Очная, Заочная",
          level: "Бакалавриат, Магистратура",
          budget: "234",
          offBudget: "567",
          cost: "от 23 300 ₽ - 235 200 ₽",
          score: "63,56 бюджет 57,9 внебюджет",
          application: true,
          hostel: false,
          postponement: true,
          inclusiveness: true,
        },
        {
          region: "Ростовская область",
          type: "Государственный",
          form: "Очная, Заочная",
          level: "Бакалавриат, Магистратура",
          budget: "234",
          offBudget: "567",
          cost: "от 23 300 ₽ - 235 200 ₽",
          score: "63,56 бюджет 57,9 внебюджет",
          application: true,
          hostel: false,
          postponement: true,
          inclusiveness: true,
        },
        {
          region: "Ростовская область",
          type: "Государственный",
          form: "Очная, Заочная",
          level: "Бакалавриат, Магистратура",
          budget: "234",
          offBudget: "567",
          cost: "от 23 300 ₽ - 235 200 ₽",
          score: "63,56 бюджет 57,9 внебюджет",
          application: true,
          hostel: false,
          postponement: true,
          inclusiveness: true,
        },
      ],
      universitiesList: [
        {
          logo: "university1.png",
          name: "Донской государственный технический университет",
          visible: false,
        },
        {
          logo: "university2.png",
          name: "Крымский федеральный университет имени В.И. Вернадского",
          visible: false,
        },
        {
          logo: "university1.png",
          name: "Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»",
          visible: false,
        },
        {
          logo: "university1.png",
          name: "Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»",
          visible: false,
        },
      ],
      compareUniversities: [
        {
          logo: "university1.png",
          name: "Донской государственный технический университет",
          visible: true,
        },
        {
          logo: "university2.png",
          name: "Крымский федеральный университет имени В.И. Вернадского",
          visible: true,
        },
      ],
    };
  },
  components: {
    checkbox,
    compareItem,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.compare--section-container, .table--section-container {
  padding: 80px 165px 20px;
}

.compare--h1 {
  border-bottom: 1px solid $grayColor2;
  padding-bottom: 10px;
  margin-bottom: 40px;
}

.compare--heading-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;

  div {
    justify-self: end;
  }
}

.compare--add-items {
  color: $grayColor3;
  font-size: 18px;
  margin-right: 30px;
}

.compare--delete-items {
  color: $grayColor3;
  border: none;
  background: transparent url("../assets/delete.svg") left no-repeat;
  padding-left: 20px;
  font-size: 18px;
}

.compare__university-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.swiper__buttons {
  display: flex;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
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

  &:active,
  &:hover {
    background-color: $blueColor;
  }
}

.compare__button-compare {
  width: 190px;
  display: block;
  @include btnTransparent;
    padding: 15px;
    margin: 50px auto;
}

.compare__checkbox--style {
  margin-bottom: 60px;
}

.parameters-container {
  display: flex;
}

/*table*/

.compare__table {
  width: 100%;
  border-collapse: collapse;
}

td {
  width: 25%;
  display: grid;
  grid-template-rows: 45px auto;
  column-gap: 10px;
  flex-grow: 1;
  padding: 30px 0;
  border-bottom: 1px solid $grayColor2;
  position: relative;

  span {
    grid-row: 2;
    margin-right: 10px;
  }
}

.compare__table-row {
  display: flex;
}

.compare__row-heading {
  left: 0;
  font-size: 18px;
  font-weight: 400;
  color: $grayColor3;
  text-transform: uppercase;
}

.parameter-absence {
  width: 25px;
  height: 25px;
  background: transparent url("../assets/absence.svg") left no-repeat;
}

.parameter-presence {
  width: 25px;
  height: 25px;
  background: transparent url("../assets/presence.svg") left no-repeat;

  svg path {
    fill: #36935b;
  }
}

@media (max-width: 1080px) and (min-width: 769px) {
  .compare--section-container {
    padding: 80px 40px 20px;
  }

  .table--section-container {
    overflow-x: auto;
    padding: 30px 40px 20px;
  }

  .compare__row-heading {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .compare--section-container {
    overflow-x: auto;
    padding: 50px 15px 20px;
  }

  .table--section-container {
    overflow-x: auto;
    padding: 30px 15px 20px;
  }

  .compare__university-list {
    justify-content: center;
  }

  .compare__checkbox--style {
    margin-bottom: 20px;
  }

  .compare--add-items {
    display: block;
    margin-bottom: 20px;
  }

  .compare__row-heading {
    font-size: 12px;
  }
}
</style>