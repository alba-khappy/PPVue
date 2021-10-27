<template lang="pug">
        ul.about__list
            li.about__list-item(v-for='(item,index) in items')
                a.about__a(href="#")
                  img(:src="require(`../assets/${item.src}`)")
                  p.about__p {{item.text}}
     
</template>

<script>
export default {

    props: {
        items: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data: function () {
        return {

        }
    }
  };
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.about {
    background-color: $lightBlue;
}

.about--container {
    display: flex;
    justify-content: center;
    padding: 60px 0px;
}

.about__list {
  display: flex;
}

.about__list-item {
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 30px;
  }
}

.about__a {
    display: grid;
    grid-template-columns: 60px 270px;
    align-items: center;
    box-shadow: 0 16px 16px #dde6eb;
    padding: 20px 0 20px 20px;
    color: #0d5adc;
    background-color: #ffffff;
    transition: 0.3s;

    &:hover {
      background-color: #0d5adc;
      color: #ffffff;
      box-shadow: 0 16px 16px #acafb1;

      img>svg>path{
        fill: #ffffff !important;
      }
    }
}

.about__p {
    font-weight: bold;
    font-size: 20px;
}

@media (max-width: 1300px) {

    .about__list {
         flex-direction: column;
     }

    .about__a {
        padding: 20px 60px 20px 80px;
    }

    .about__list-item:not(:last-child) {
        margin-right: 0;
        margin-bottom: 30px;
    }

}

@media (max-width: 767px) {
    .about--container {
        padding-left: 12px;
        padding-right: 12px;
    }

    .about__a {
        grid-template-columns: 55px 260px;
        padding: 20px 0 20px 20px;
    }
}

@media (max-width: 374px) {

    .about__a {
        grid-template-columns: 45px 220px;

    }
    .about__p {
        font-weight: normal;
        font-size: 16px;
    }
}


</style>
