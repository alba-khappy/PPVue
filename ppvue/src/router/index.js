import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'sections',
        component: () => import("../pages/sections.vue")
    },
    {
        path: '/news',
        name: 'news',
        component: () => import("../pages/news.vue")
    },
    {
        path: '/allNews',
        name: 'allNews',
        component: () => import("../pages/allNews.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router