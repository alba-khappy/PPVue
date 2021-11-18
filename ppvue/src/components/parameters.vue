<template lang="pug">
    div.compare-parameters
        h2 Регион
        p {{region}}
        h2 Тип вуза
        p {{type}}
        h2 Форма обучения
        p {{form}}
        h2 Уровень образования
        p {{level}}
        h2 Бюджетных мест
        p {{budget}}
        h2 Внебюджетных мест
        p {{offBudget}}
        h2 Стоимость за год обучения
        p {{cost}}
        h2 Средний проходной балл ЕГЭ
        p {{score}}
        h2 Подать заявление онлайн
        p {{application}}
        h2 Общежитие
        p {{hostel}}
        h2 Отсрочка от армии
        p {{postponement}}
        h2 Инклюзивность
        p {{inclusiveness}}
</template>

<script>
export default {
  name: "parameters",
  props: ["region", "type", "form", "level", "budget", "offBudget", "cost", "score", "application", "hostel", "postponement", "inclusiveness"],
  data() {
    return {
      checked: [],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.compare-parameters {
    h2 {
        font-size: 18px;
        font-weight: 400;
        color: $grayColor3;
        text-transform: uppercase;
        padding: 20px 0 30px;
    }

    p {
        font-size: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid $grayColor2;
    }
}
</style>