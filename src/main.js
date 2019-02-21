import './common/rem'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './common/http'
import helper from './common/helper'
import './assets/less/global.less'
// import './assets/less/iconfont/iconfont.css'
import fastclick from './common/fastclick'

Vue.config.productionTip = false
Vue.use(http)
Vue.use(helper)
fastclick()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
