<template lang="pug">
li
  a.direction__link(href="/chosenDirection")
    h3 {{ h3 }}
    button.direction__btn-like
      include ../assets/like.svg
    .direction__content-wrapper
      p {{ date }}
      p Уровень образования: {{ level }}
      p Форма обучения: {{ form }}
</template>

<script>
export default {
  props: ["h3", "date", "level", "form"],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.direction__link {
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  max-width: 540px;
  min-height: 180px;
  background-color: $whiteColor;
  padding: 30px;
  row-gap: 20px;
  box-shadow: 0 16px 16px #dde6eb;
  color: $blackColorText;
}

.direction__btn-like {
  align-self: start;
  background-color: transparent;
  border: none;

  svg {
    width: 20px;
  }

  &:focus {
    svg path {
      fill: #ef4058;
      stroke: #ef4058;
    }
  }
}

.direction__content-wrapper {
  p {
    margin-bottom: 5px;
  }
}

@media (max-width: 1080px) and (min-width: 769px) {
   
   .direction__link {
     min-height: 250px;
   }
}
</style>