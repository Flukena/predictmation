import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Main.vue')
    },

  
    {
      path: '/user/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },{
      path:'/user/singup',
      name:'singup',
      component:()=> import('../views/Singup.vue')
    },
    {
      path:'/product',
      name:'product',
      component:()=>('../views/Product.vue')
    },
  ]
  
  const router = new VueRouter({ routes })
  
    router.beforeEach((to, from, next) => {
    const isLoggedIn = !!localStorage.getItem('token')
  
    if (to.meta.login && !isLoggedIn) {
      alert('Please login first!')
      next({ path: '/user/login' })
    }
  
    if (to.meta.guess && isLoggedIn) {
      alert("You've already logged in")
      next({ path: '/'})
    }
     
       next()
     })



export default router
