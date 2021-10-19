<template lang="pug">
    #about
        ul.about__list
            li.about__list-item(v-for='(item,index) in items')
                about-a(:about-img='item.src' :about-text='item.text')
    
</template>

<script>

Vue.component('about-a', {
  props: ['aboutImg', 'aboutText'],
  template: '<a href=""  class="about__a"><img :src="aboutImg"><p> {{aboutText}}</p></a>'
});

var about = new Vue({
    el: '#about',
    data: function () {
        return {
            items: [
                { text: 'Государственные вузы',
                src: '../assets/search-img1.png'},
                { text: 'Направления подготовки',
                src: '../assets/search-img2.png'},
                { text: 'Правила поступления',
                src: '../assets/search-img3.png'}
            ]
        }
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
