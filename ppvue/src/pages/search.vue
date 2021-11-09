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
      universityItem
      universityItem
      universityItem
    .search--options
      dropdown(:dropdown-list="regions", :dropdown-title="regionTitle")
      h3.options-h3 Тип учебного заведения
      checkbox(:checkboxTitle="types") {{type}}
      h3.options-h3 Форма обучения
      checkbox(:checkboxTitle="forms") {{form}}
      dropdown(:dropdown-list="directionGroups",:dropdown-title="directionGroupsTitle")
      dropdown(:dropdown-list="selectItem", :dropdown-title="selectItemTitle")
      h3.options-h3 Баллы ЕГЭ
      
      h3.options-h3 Стоимость обучения
      checkbox(:checkboxTitle="costs") {{cost}}
      h3.options-h3 Уровень образования
      checkbox(:checkboxTitle="levels") {{level}}
      h3.options-h3 Дополнительно
      checkbox(:checkboxTitle="variants") {{variant}}
      
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
      directionGroupsTitle: "Группы направлений",
      directionGroups: ["1", "2", "3"],
      trainingDirectionsTitle: "Направления подготовки",
      trainingDirections: ["1", "2", "3"],
      selectItemTitle: "Выбрать предмет",
      selectItem: ["Русский язык", "Математика", "Обществознание"],
      types: ["Государственный", "Негосударственный"],
      forms: ["Очная", "Очно-заочная", "Заочная"],
      costs: ["Бюджет", "Платные места"],
      levels: ["Бакалавриат", "Специалитет", "Магистратура", "Аспирантура", "Ординатура", "Адъюнктура", "Ассистентура-стажировка"],
      variants: ["Подача документов онлайн", "Военно-учебный центр", "Общежитие", "Отсрочка от армии", "Инклюзивное образование"]
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

.search--section-compare,
.search--section-university {
  padding: 55px 165px;
}

.search--section-compare {
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
  margin-bottom: 40px;
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
    border: 1px solid $blueColorText;
    outline: none;
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
  margin-right: 70px;
}

.search--compare-button-close {
  width: 20px;
  height: 20px;
  background: $whiteColor url("../assets/button-close.svg") no-repeat center;
  border: none;
}

.search--section-university {
  display: flex;
}

.university-list {
  margin-right: 100px;
}

.options-h3 {
  font-size: 14px;
  font-weight: 400;
}

</style>