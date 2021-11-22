<template lang="pug">
main 
  section.container.choice--section-container
    div
      p.choice__p--direction Направление
      h1.choice__h1 Математика
      button.choice__button--favourite Добавить в избранное
    div
      p.choice__p--style Шифр: 01.03.01
      p.choice__p--style Уровень образования: бакалавриат
      p.choice__p--style Кафедра: Математика
  .section-blue-background
    section.container.choice--section-info
      ul.choice__info--list
        li.choice__info--item
          a.choice__info--link(href="")
            include ../assets/choiceImg-1.svg
            p ОБЩИЕ СВЕДЕНИЯ
        li.choice__info--item
          a.choice__info--link(href="") 
            include ../assets/choiceImg-2.svg
            p БЮДЖЕТ
        li.choice__info--item
          a.choice__info--link(href="") 
            include ../assets/choiceImg-3.svg
            p КОНТРАКТ
      ul.general-info__list
        generalInfo(:heading="content.time.text", :visible="true")
          li.general-info__slot-item 2 года 6 месяцев

        generalInfo(:heading="content.languages.text", :visible="true")
          li.general-info__slot-item Азербайджанский
          li.general-info__slot-item Албанский
          li.general-info__slot-item Амхарский
          li.general-info__slot-item Английский
          a.general-info__slot-link(@click="show = !show") и еще 26 языков

        generalInfo(:heading="content.subjects.text", :visible="true")
          li.general-info__slot-item Математика
          li.general-info__slot-item Физика
          li.general-info__slot-item Русский язык
          li.general-info__slot-item Иностранный язык
          li.general-info__slot-item Биология

        generalInfo(:heading="content.exams.text", :visible="true")
          li.general-info__slot-item Экзамен

        generalInfo(:heading="content.tests.text", :visible="true")
          li.general-info__slot-item Отсутствуют

        generalInfo(:heading="content.points.text", :visible="true")
          li.general-info__slot-item Информация отсутствует
    .popup--background(v-show="show")
      .popup--block
        button.popup--button-close(@click="show = !show")
          include ../assets/button-close.svg
        p(v-for="languagesItem in languagesList") {{ languagesItem }}
</template>


<script>
import generalInfo from "@/components/generalInfo.vue";

export default {
  data() {
    return {
      content: {
        time: {
          text: "Сроки обучения",
        },
        languages: {
          text: "Языки обучения",
        },
        subjects: {
          text: "Экзаменационные предметы",
        },
        exams: {
          text: "Вступительные испытания",
        },
        tests: {
          text: "Дополнительные испытания",
        },
        points: {
          text: "Дополнительные баллы к ЕГЭ",
        },
      },
      languagesList: [
        "Азербайджанский",
        "Албанский",
        "Амхарский",
        "Английский",
        "Арабский",
        "Армянский",
        "Африкаанс",
        "Баскский",
        "Белорусский",
        "Бенгальский",
        "Бирманский",
        "Болгарский",
        "Боснийский",
        "Валлийский",
        "Венгерский",
        "Азербайджанский",
        "Албанский",
        "Амхарский",
        "Английский",
        "Арабский",
        "Армянский",
        "Африкаанс",
        "Баскский",
        "Белорусский",
        "Бенгальский",
        "Бирманский",
        "Болгарский",
        "Боснийский",
        "Валлийский",
        "Венгерский",
      ],
      show: false,
    };
  },
  components: {
    generalInfo,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.choice--section-container {
  display: flex;
  justify-content: space-between;
  padding: 80px 165px 55px;
}

.choice__p--direction {
  font-size: 16px;
  color: $grayColor3;
  margin-bottom: 20px;
}

.choice__button--favourite {
  font-size: 16px;
  color: $grayColor3;
  border: none;
  background: transparent url("../assets/like.svg") no-repeat left;
  height: 30px;
  padding-left: 40px;
}

.choice__h1 {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
}

.choice__p--style {
  font-size: 18px;
  margin-bottom: 20px;
  text-align: right;
}

.choice__info--list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.choice__info--item {
  width: 33%;
  max-width: 350px;
}

.choice__info--link {
  display: grid;
  grid-template-columns: 110px auto;
  column-gap: 20px;
  align-items: center;
  height: 80px;
  background-color: $whiteColor;
  color: $blueColor;
  padding: 0 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 16px 16px #dde6eb;

  svg {
    justify-self: right;
  }

  p {
    justify-self: left;
  }

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

.choice--section-info {
  padding: 80px 165px 55px;
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

.general-info__slot-link {
  color: $blueColor;
  text-decoration: underline;
  cursor: pointer;
}

/*popup*/
.popup--background {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.popup--block {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 5px 20px;
  position: relative;
  background-color: $whiteColor;
  color: $blackColorText;
  padding: 30px;
}

.popup--button-close {
  background: transparent no-repeat;
  border: none;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -20px;
  right: -5px;

  svg path {
    fill: $whiteColor;
  }
}

@media (max-width: 1300px) and (min-width: 769px) {
  .general-info__list {
    grid-template-columns: repeat(2, 1fr);
  }

  .choice__info--link {
    grid-template-columns: repeat(2, auto);
  }
}

@media (max-width: 1080px) and (min-width: 769px) {
  .choice--section-container {
    padding: 80px 40px 55px;
  }

  .choice--section-info {
    padding: 80px 40px 55px;
  }
}

@media (max-width: 768px) {
  .choice--section-container {
    padding: 50px 15px;
  }

  .choice__info--list {
    flex-direction: column;
    align-items: center;
  }

  .choice__info--item {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .choice__info--link {
    grid-template-columns: repeat(2, auto);
  }

  .choice--section-info {
    padding: 80px 15px 55px;
  }

  .general-info__list {
    grid-template-columns: 1fr;
  }
}
</style>