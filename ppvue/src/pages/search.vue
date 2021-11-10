<template lang="pug">
main
  section.container.search--section-compare
    h1.search--h1 Вузы
    input.search--main-input
    .search--compare-selected
      p.search--compare-text В списке сравнения 4 вуза
      button.search--compare-button Сравнить
      button.search--compare-button-close

  section.container.search--section-university
    ul.university-list
      universityItem(v-for="(university, index) in universities") {{university}}
    .search--options
      dropdown(:dropdown-list="regions", :dropdown-title="regionTitle")
      h3.options-h3 Тип учебного заведения
      checkbox(:checkbox-label="type", v-for="(type, index) in types")
      h3.options-h3 Форма обучения
      checkbox(:checkbox-label="form", v-for="(form, index) in forms")
      h3.options-h3 Баллы ЕГЭ
      dropdown(:dropdown-list="selectItem", :dropdown-title="selectItemTitle")
      h3.options-h3 Стоимость обучения
      checkbox(:checkbox-label="cost", v-for="(cost, index) in costs")
      .options--input-wrapper
        span от
        input.options__input-cost(type="number")
        span до
        input.options__input-cost(type="number")
        span ₽ в год
      h3.options-h3 Уровень образования
      checkbox(:checkbox-label="level", v-for="(level, index) in levels")
      h3.options-h3 Дополнительно
      checkbox(:checkbox-label="variant", v-for="(variant, index) in variants")
</template>

<script>
import universityItem from "@/components/universityItem.vue";
import dropdown from "@/components/dropdown.vue";
import checkbox from "@/components/checkbox.vue";

export default {
  data() {
    return {
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
    };
  },
  methods: {},
  components: {
    universityItem,
    dropdown,
    checkbox,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

main {
  color: $blackColorText;
}

.search--section-university {
  display: flex;
  justify-content: space-between;
  padding: 0 165px;
}

.search--section-compare {
  padding: 80px 165px 55px;
  background-color: $lightBlue;
}

.search--compare-selected {
  max-width: 920px;
  width: 100%;
  background-color: $whiteColor;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  padding: 25px 30px;
  border: none;
  box-shadow: 0 16px 16px #dde6eb;
}

.search--h1 {
  margin-bottom: 45px;
  font-size: 48px;
}

.search--options {
  max-width: 290px;
  font-size: 14px;
  padding-top: 60px;
}

.search--main-input {
  max-width: 920px;
  width: 100%;
  height: 50px;
  border: 1px solid #a6a5a9;
  margin-bottom: 40px;
  padding: 5px 20px;
  background: $whiteColor url("../assets/loupe.svg") no-repeat 98% center;

  &:focus {
    @include inputFocus;
  }
}

.search--compare-text {
  font-size: 18px;
}

.search--compare-button {
  border: 2px solid $blueColorText;
  color: $blueColorText;
  text-transform: uppercase;
  padding: 8px 34px;
  background-color: $whiteColor;
  margin-right: 55px;
  font-size: 12px;
}

.search--compare-button-close {
  width: 20px;
  height: 20px;
  background: $whiteColor url("../assets/button-close.svg") no-repeat center;
  border: none;
}

.university-list {
    width: 100%;
  margin-right: 100px;
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
  border: 1px solid #a6a5a9;
  margin: 0 10px;
  padding: 5px 10px;

    &:focus {
        @include inputFocus;
    }
}

</style>