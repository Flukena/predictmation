<template>
  <div id="app" style="height:-100px">
    <styles></styles>
    <reset></reset>
    <Navbar></Navbar>
    <Footer></Footer>
    <router-view></router-view>
    
    </div>
</template>

<script>
// import Index from './views/Index';
import styles from '../css/style.css'
import reset from '../css/reset.css'
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

// import User from './views/User'

export default {
  name: 'App',
  components: {
    // Index,
    Navbar,
    // User
    styles,
    Footer,
    reset
  }
}

</script>
