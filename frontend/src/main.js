import Vue from 'vue'
import router from './router'
import 'bulma/css/bulma.css'
import App from './App.vue'
import Vuevlidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('icon', FontAwesomeIcon)

Vue.use(Vuevlidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
