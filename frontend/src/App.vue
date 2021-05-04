<template>
  <div id="app" style="height:-100px;">
    <Navbar :user="user" @update-user="eventUser" ></Navbar>
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
<<<<<<< Updated upstream
     <Foot></Foot>
=======
    <Foot></Foot>
>>>>>>> Stashed changes
    </div>
</template>

<script>
import '../css/style.css'
import '../css/reset.css'
import Foot from "./components/Footer"
import Navbar from './components/Navbar'; 
import axios from "@/plugins/axios";
import Foot from "./components/Footer"
export default {
  name: 'App',
  components: {
    Navbar,
    Foot
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
        console.log(this.user)

      })
    },eventUser(){

      this.user = null
    }
  }

}

</script>
