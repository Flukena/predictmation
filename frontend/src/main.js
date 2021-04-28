import Vue from 'vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bulma/css/bulma.css'
import App from './App.vue'
// import Index from './views/Index.vue'
import User from './views/User.vue'
// import Login from './views/Login'
Vue.use(VueRouter);
const routes =[
  // {
  //   name: 'non',
  //   path: '/non',
  //   component:Login
  // },
  {
    name: 'user',
    path: '/user',
    component:User
  }
]

const router = new VueRouter({mode:'history', routes: routes})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
