<template lang="pug">
    #about
        ul.about__list
            li.about__list-item(v-for='todo in todos')
                about-a(:about-img='todo.src' :about-text='todo.text')
    
</template>

<script>

Vue.component('about-a', {
  props: ['aboutImg', 'aboutText'],
  template: '<a href=""  class="about__a"><img :src="aboutImg"><p> {{aboutText}}</p></a>'
});

var about = new Vue({
    el: '#about',
    data: {
      todos: [
        { text: 'Государственные вузы',
          src: './hh.png'},
        { text: 'Направления подготовки',
          src: './hh.png'},
        { text: 'Правила поступления',
          src: './hh.png'}
      ]
    }
  });


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

</style>
