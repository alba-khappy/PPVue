import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import store from './store'

// Vue.component('about-a', {
//   props: ['aboutImg', 'aboutText'],
//   template: '<a href=""  class="about__a"><img :src="aboutImg"><p> {{aboutText}}</p></a>'
// });

// var about = new Vue({
//     el: '#about',
//     data: {
//       todos: [
//         { text: 'Государственные вузы',
//           src: './hh.png'},
//         { text: 'Направления подготовки',
//           src: './hh.png'},
//         { text: 'Правила поступления',
//           src: './hh.png'}
//       ]
//     }
//   });

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')


