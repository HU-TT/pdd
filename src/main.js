import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './assets/style/reset.scss'
import { Tabbar, TabItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import LyTab from 'ly-tab'

Vue.use(LyTab)

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
