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
      component: () => import('./views/Home/'),
      children: [
        {path: '/home', redirect: '/home/hot'},
        {path: 'hot', component: () => import('./views/Home/Children/Hot/Hot')},
        {path: 'dress', component: () => import('./views/Home/Children/Dress')},
        {path: 'ele', component: () => import('./views/Home/Children/Ele')},
        {path: 'Food', component: () => import('./views/Home/Children/Food')},
        {path: 'general', component: () => import('./views/Home/Children/General')},
        {path: 'box', component: () => import('./views/Home/Children/Box')},
        {path: 'man', component: () => import('./views/Home/Children/Man')},
        {path: 'mbaby', component: () => import('./views/Home/Children/Mbaby')},
        {path: 'shirt', component: () => import('./views/Home/Children/Shirt')}
      ]
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
