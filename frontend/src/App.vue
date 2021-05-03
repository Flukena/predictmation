<template>
  <div id="app" style="height:-100px">
    <Navbar></Navbar>
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
    </div>
</template>

<script>
// import Index from './views/Index';
import styles from '../css/style.css'
import reset from '../css/reset.css'
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

// import User from './views/User'
import axios from '@/plugins/axios'
export default {
  name: 'App',
  components: {
    // Index,
    Navbar,
    // User
    styles,
    Footer,
    reset
  },data(){
    return{
      user:null
    }
  }
}

</script>
