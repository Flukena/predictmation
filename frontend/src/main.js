import Vue from 'vue'
import VueRouter from 'vue-router'

import 'bulma/css/bulma.css'
import App from './App.vue'
import User from './views/User.vue'
// import Login from './views/Login'
import Singup from './views/Singup'



Vue.use(VueRouter);
const routes =[
  {
    name: 'non',
    path: '/non',
    component:Singup
  },
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
