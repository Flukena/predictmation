<template>
  <div id="app" style="height:-100px">
    <!-- <Reset></Reset> -->
    <!-- <Styles></Styles> -->
    <Navbar></Navbar>
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
    <!-- <Footer></Footer> -->
    </div>
</template>

<script>
// import Index from './views/Index';
import '../css/style.css'
import '../css/reset.css'
import Navbar from './components/Navbar'; 
// import Footer from './components/Footer'; 
// import User from './views/User'
import axios from '@/plugins/axios'
export default {
  name: 'App',
  components: {
    // Reset,
    // Styles,
    Navbar,
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
