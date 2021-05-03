<template>
  <div id="app" style="height:-100px">
    <Reset></Reset>
    <Styles></Styles>
    <Navbar></Navbar>

    <login></login>
    <!-- <Footer></Footer> -->
    <router-view></router-view>
    

    <router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
    <!-- <Footer></Footer> -->
    <Singup></Singup>
    </div>
</template>

<script>
// import Index from './views/Index';
import Styles from '../css/style.css'
import Reset from '../css/reset.css'
import Navbar from './components/Navbar'; 
// import Footer from './components/Footer'; 

import login from './views/Login'

import Singup from './views/Singup'


// import User from './views/User'
import axios from '@/plugins/axios'
export default {
  name: 'App',
  components: {
    Reset,
    Styles,
    Navbar,

    // User
    Styles,
    // Footer,
    login,
    Reset,

    Singup
    // Footer,
  },data(){
    return{
      user:null
    }
  }, mounted(){
    this.onAuthChange()
  },methods:{
    onAuthChange(){
      const token = localStorage.getItem('token')
      if(token){
        this.getUser()
      }
    }, 
    getUser(){
      axios.get('/user/me').then(res =>{
        this.user = res.data
      })
    }

  }

}

</script>
