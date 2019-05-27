import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('./views/Home/')
    },
    {
      path: '/chat',
      component: () => import('./views/Chat/')
    },
    {
      path: '/me',
      component: () => import('./views/Me/')
    },
    {
      path: '/recommend',
      component: () => import('./views/Recommend/')
    },
    {
      path: '/search',
      component: () => import('./views/Search/')
    }
  ]
})
