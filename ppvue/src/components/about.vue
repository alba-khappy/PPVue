<template lang="pug">
        ul.about__list
            li.about__list-item(v-for='(item,index) in items')
                a.about__a(href="#")
                  img(:src="require(`../assets/${item.src}`)")
                  p {{item.text}}
     
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

.about__list {
  display: flex;
}

.about__p {
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
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
    box-shadow: 0px 16px 16px #dde6eb;
    padding: 20px 0px 20px 20px;
    color: #0d5adc;
    background-color: #ffffff;
}

@media (max-width: 1339px) {
  .about__list {
    flex-direction: column;
  }

  .about__list-item:not(:last-child) {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .about__list-item:not(:last-child) {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) and (min-width: 376px) {
  .about--container {
    padding: 60px 40px 60px;
  }

  .about__a {
    grid-template-columns: 74px 280px;
    padding: 20px 0px 20px 70px;
  }
}

@media (max-width: 375px) {
  .about--container {
    padding: 60px 10px;
  }
}

</style>
