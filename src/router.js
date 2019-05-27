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
      component: () => import('./views/Home/index')
    },
    {
      path: '/chat',
      component: () => import('./views/Chat/index')
    },
    {
      path: '/me',
      component: () => import('./views/Me/index')
    },
    {
      path: '/recommend',
      component: () => import('./views/Recommend/index')
    },
    {
      path: '/search',
      component: () => import('./views/Search/index')
    }
  ]
})
