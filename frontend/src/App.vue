<template>
  <div id="app" style="height:-100px">
    <Navbar></Navbar>
    <router-view></router-view>
    </div>
</template>

<script>
// import Index from './views/Index';
import Navbar from './components/Navbar';

// import User from './views/User'

export default {
  name: 'App',
  components: {
    // Index,
    Navbar
    // User
  }
}
</script>


