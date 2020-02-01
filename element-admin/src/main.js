import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

//全局变量
import axios from 'axios'
Vue.prototype.$myAxios=axios.create({
  baseURL:'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
