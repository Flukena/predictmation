import Vue from 'vue'
import router from './router'
import 'bulma/css/bulma.css'
import App from './App.vue'
import Vuevlidate from 'vuelidate'



Vue.use(Vuevlidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
