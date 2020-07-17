import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/styles/main.css'
// import { List } from 'vant'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { serverUrl } from './utils/config'

Vue.use(Vant)
// Vue.use(List)

Vue.config.productionTip = false

Vue.filter('resetImg', str => {
  if (str && str.startsWith('http')) {
    return str
  }
  return serverUrl + str
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
