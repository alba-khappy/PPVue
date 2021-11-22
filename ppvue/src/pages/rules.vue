<template lang="pug">
main
  .section-blue-background
    section.container.rules--section-container
      h1.rules--h1 Информация о правилах приема в вузы
      img(src="../assets/hat.svg")
  .rules--container-search.container
    section.rules--section-search
      p.rules--text-style Искать по названию:
      p.rules--text-style Регионы РФ:
      button.rules--text-style.rules--btn-reset Сбросить фильтр
      input.rules--input-search(type="text")
      button.search__btn--viewing
      dropdown.rules--option-dropdown(
        :dropdown-list="selectItem",
        :dropdown-title="selectItemTitle"
      )
      button.rules--btn-search Поиск
      .rules--checkbox
        checkbox(
          :checkbox-label="type",
          :checkbox-id="'type' + index",
          v-for="(type, index) in types"
        )
  .rules--universities.container
    universityWithLinks(
      v-for="university in universities",
      :logo="university.logo",
      :name="university.name",
      :location="university.location"
    )
</template>

<script>
import checkbox from "../components/checkbox";
import dropdown from "@/components/dropdown.vue";
import universityWithLinks from "../components/universityWithLinks";

export default {
  data() {
    return {
      types: ["Государственный", "Негосударственный"],
      universities: [
        {
          logo: "university1.png",
          name: "ФГБОУ ВО «Приволжский исследовательский медицинский университет» Министерства здравоохранения Российской Федерации",
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
      selectItemTitle: "",
      selectItem: ["Республика Адыгея", "Москва", "Краснодарский край"],
    };
  },
  components: {
    checkbox,
    dropdown,
    universityWithLinks,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.rules--section-container {
  padding: 80px 165px 55px;
  @include displayFlexSpaceBetween;
  align-items: center;
}

.rules--container-search {
  padding: 45px 165px 0;
}

.rules--h1 {
  @include h1Style;
  margin-right: 40px;
}

.rules--btn-reset {
  border: none;
  background-color: transparent;
}

.rules--text-style {
  font-size: 18px;
}

.rules--section-search {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: repeat(3, auto);
  gap: 23px 45px;
}

.rules--input-search {
  grid-area: 2/1/3/2;
  @include inputStyle;
  padding: 5px 20px;

  &:focus {
    @include inputFocus;
  }
}

.rules--btn-search {
  @include btnTransparent;
  height: 50px;
  width: 152px;
}

.rules--checkbox {
  grid-area: 3/1/4/3;
}

.rules--universities {
  padding: 50px 165px 55px;
}

.rules--option-dropdown {
  justify-self: start;
  width: 380px;
  height: 50px;

  &:after {
    height: 30px;
  }

  ul {
    width: 380px;
    top: 50px;
  }
}

.search__btn--viewing {
  grid-area: 2/1/3/2;
  justify-self: end;
  background: transparent url("../assets/loupe.svg") no-repeat center;
  width: 50px;
  height: 50px;
  border: none;
}

@media (max-width: 1150px) and (min-width: 769px) {
  .rules--section-search {
    grid-template-columns: repeat(2, auto);
  }

  .university-link:not(:last-child) {
    margin-right: 20px;
  }

  p.rules--text-style {
    grid-row: 1;
  }

  .rules--option-dropdown {
    grid-area: 2/2/3/3;
  }

  .rules--btn-reset {
    grid-row: 4;
    justify-self: flex-start;
  }

  .rules--btn-search {
    grid-row: 5;
    width: 152px;
  }

  .rules--input-search {
    grid-area: 2/1/3/2;
  }

  .rules--section-container {
    padding: 80px 40px 55px;
  }

  .rules--container-search {
    padding: 45px 40px 0;
  }

  .rules--universities {
    padding: 50px 40px 55px;
  }
}

@media (max-width: 768px) {
  .university-item {
    grid-template-rows: repeat(2, auto);
    gap: 20px;
  }

  .university-links-wrapper {
    flex-direction: column;
    align-items: start;
  }

  .rules--section-container {
    padding: 80px 15px 55px;

    img {
      display: none;
    }
  }

  .rules--option-dropdown {
    width: 320px;

    ul {
      width: 320px;
    }
  }

  .rules--container-search {
    padding: 45px 15px 0;
  }

  .rules--universities {
    padding: 0 15px;
  }

  .university-link:not(:last-child) {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .rules--section-search {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, auto);
    gap: 23px 0;
  }

  .rules--text-style:first-child {
    grid-row: 1/2;
  }

  .rules--text-style:nth-child(2) {
    grid-area: 3/1/4/2;
  }

  .rules--checkbox {
    grid-area: 5/1/6/3;
  }

  .rules--input-search {
    grid-row: 2/3;
  }

  .rules--option-dropdown {
    grid-area: 4/1/5/3;
  }

  .rules--btn-reset {
    grid-area: 6/1/7/3;
    justify-self: start;
  }

  .rules--btn-search {
    grid-area: 7/1/8/3;
  }
}
</style>