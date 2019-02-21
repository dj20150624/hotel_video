import Vue from 'vue'
import Router from 'vue-router'
// import Tabbar from './components/tabbar.vue'
import Home from './views/Home.vue'
import Me from './views/Me.vue'
import Video from './views/Video.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home
        // tabbar: Tabbar
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/me',
      name: 'me',
      components: {
        default: Me
        // tabbar: Tabbar
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/video/:vid',
      name: 'video',
      component: Video,
      meta: {
        keepAlive: false
      }
    }
  ]
})
