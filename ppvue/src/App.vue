<template lang="pug">
    #app
      Header
      router-view
      Footer
      
      
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

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

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    Header,
    Footer
  },
};
</script>
<style>

@charset "UTF-8";