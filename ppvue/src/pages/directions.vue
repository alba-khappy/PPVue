<template lang="pug">
main
  .section-blue-background
    section.container.search--section-container
      .search--h1-container
        h1.search--h1
          a.search-h1--disabled(href="/search") Вузы
        h1.search--h1
          a(href="/directions") Направления
      form.search__form
        input.search--main-input
        button.search__btn--viewing
        span.search__btn--customization

  section.container.search--section-university
    .section-university--wrapper
      ul
        directions-list-with-code(
          v-for="dir in allDir",
          :logo="dir.logo",
          :code="dir.code",
          :direction="dir.direction"
        )
      pagination
    .search--options
      dropdown(:dropdown-list="regions", :dropdown-title="regionTitle")
      h3.options-h3 Тип учебного заведения
      checkbox(
        :checkbox-label="type",
        :checkbox-id="'type' + index",
        v-for="(type, index) in types"
      )
      h3.options-h3 Форма обучения
      checkbox(
        :checkbox-label="form",
        :checkbox-id="'form' + index",
        v-for="(form, index) in forms"
      )
      h3.options-h3 Баллы ЕГЭ
      dropdown(:dropdown-list="selectItem", :dropdown-title="selectItemTitle")
      selected-item
      selected-item
      h3.options-h3 Стоимость обучения
      checkbox(
        :checkbox-label="cost",
        :checkbox-id="'cost' + index",
        v-for="(cost, index) in costs"
      )
      .options--input-wrapper
        span от
        input.options__input-cost(type="number")
        span до
        input.options__input-cost(type="number")
        span ₽ в год
      h3.options-h3 Уровень образования
      checkbox(
        :checkbox-label="level",
        :checkbox-id="'level' + index",
        v-for="(level, index) in levels"
      )
      h3.options-h3 Дополнительно
      checkbox(
        :checkbox-label="variant",
        :checkbox-id="'variant' + index",
        v-for="(variant, index) in variants"
      )
</template>

<script>
import universityItem from "@/components/universityItem.vue";
import dropdown from "@/components/dropdown.vue";
import checkbox from "@/components/checkbox.vue";
import pagination from "@/components/pagination.vue";
import selectedItem from "@/components/selectedItem.vue";
import directionsListWithCode from "@/components/directionsListWithCode.vue";

export default {
  data() {
    return {
      allDir: [
        {
          logo: "university1.png",
          code: "52.08.70",
          direction: "Менеджмент",
        },
        {
          logo: "university2.png",
          code: "46.08.70",
          direction: "Информатика",
        },
        {
          logo: "university1.png",
          code: "43.08.70",
          direction: "Математика",
        },
      ],
      regionTitle: "Выбрать субъект РФ",
      regions: ["Адыгея", "Москва", "Краснодар"],
      selectItemTitle: "Выбрать предмет",
      selectItem: ["Русский язык", "Математика", "Обществознание"],
      types: ["Государственный", "Негосударственный"],
      forms: ["Очная", "Очно-заочная", "Заочная"],
      costs: ["Бюджет", "Платные места"],
      levels: [
        "Бакалавриат",
        "Специалитет",
        "Магистратура",
        "Аспирантура",
        "Ординатура",
        "Адъюнктура",
        "Ассистентура-стажировка",
      ],
      variants: [
        "Подача документов онлайн",
        "Военно-учебный центр",
        "Общежитие",
        "Отсрочка от армии",
        "Инклюзивное образование",
      ],
      showOptions: false,
      showUniversities: true,
    };
  },
  methods: {},
  components: {
    universityItem,
    dropdown,
    checkbox,
    pagination,
    selectedItem,
    directionsListWithCode,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.section-university--wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 100px;
}

.search--section-university {
  display: flex;
  justify-content: space-between;
  padding: 0 165px;
}

.search--section-container {
  padding: 80px 165px 55px;
}

.search--h1-container {
  display: flex;
}

.search--h1 {
  margin-bottom: 45px;
  @include h1Style;

  a {
    color: $blackColorText;
  }

  a.search-h1--disabled {
    color: $grayColor3;
  }

  &:first-child {
    margin-right: 40px;
  }
}

.search-h1--disabled {
  color: $grayColor3;
}

.search--options {
  max-width: 265px;
  font-size: 14px;
  padding: 40px 0;
}

.search__form {
  display: grid;
  max-width: 920px;
}

.search--main-input {
  grid-area: 1/1/2/2;
  @include inputStyle;
  max-width: 920px;
  width: 100%;
  margin-bottom: 40px;
  padding: 5px 20px;

  &:focus {
    @include inputFocus;
  }
}

.search__btn--viewing {
  grid-area: 1/1/2/2;
  justify-self: end;
  background: transparent url("../assets/loupe.svg") no-repeat center;
  width: 50px;
  height: 50px;
  border: none;
}

.search__btn--customization {
  display: none;
}

.search--compare-text {
  font-size: 18px;
  margin-right: 20px;
}

.search--btn-compare {
  @include btnTransparent;
  padding: 8px 34px;
  margin-right: 55px;
}

.button-close {
  width: 20px;
  height: 20px;
  background: transparent url("../assets/button-close.svg") no-repeat center;
  border: none;
}

.options-h3 {
  font-size: 14px;
  font-weight: 400;
  margin: 40px 0 20px;
}

.options--input-wrapper {
  display: flex;
  align-items: center;
}

.options__input-cost {
  width: 60px;
  height: 30px;
  border: 1px solid $grayColor3;
  margin: 0 10px;
  padding: 5px 10px;

  &:focus {
    @include inputFocus;
  }
}

.display-none {
  display: none;
}

@media (max-width: 1080px) and (min-width: 769px) {
  .search--section-container {
    padding: 80px 40px 55px;
  }

  .search--section-compare {
    padding: 80px 40px 55px;
  }

  .search--section-university {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .search--section-container {
    padding: 80px 15px 55px;
  }

  .search--h1-container {
    flex-direction: column;
  }

  .search--options {
    display: none;
  }

  .search--main-input {
    padding: 5px 40px;
  }

  .search__btn--viewing {
    justify-self: start;
  }

  .search__btn--customization {
    display: block;
    grid-area: 1/1/2/2;
    justify-self: end;
    background: transparent url("../assets/add.svg") no-repeat center;
    width: 50px;
    height: 50px;
    border: none;
  }

  .section-university--wrapper {
    margin-right: 0;
  }

  .search--section-compare {
    padding: 80px 15px 55px;
  }

  .search--section-university {
    padding: 0 15px;
  }

  .search--btn-compare {
    margin-right: 20px;
  }
}

@media (max-width: 374px) {
  .university-item {
    column-gap: 15px;
  }

  .search--btn-compare {
    padding: 8px 15px;
  }
}
</style>