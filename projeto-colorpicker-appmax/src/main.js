import Vue from 'vue'
import App from './App.vue'
import Router from './_helpers'

Vue.config.productionTip = false

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
