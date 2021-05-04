<template>
  <div id="app" style="height:1000px;">
    <Navbar></Navbar>
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
    </div>
</template>

<script>
import '../css/style.css'
import '../css/reset.css'
import Navbar from './components/Navbar'; 
import axios from '@/plugins/axios'
export default {
  name: 'App',
  components: {
    Navbar,
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
