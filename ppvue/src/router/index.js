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
    },
    {
        path: '/search',
        name: 'search',
        component: () => import("../pages/search.vue")
    },
    {
        path: '/user',
        name: 'user',
        component: () => import("../pages/user.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router