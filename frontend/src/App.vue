<template>
  <div id="app">
    <Index></Index>
    <Navbar></Navbar>
    <router-view></router-view>
    </div>
</template>

<script>
import Index from './views/Index';
import Navbar from './components/Navbar';

// import User from './views/User'

export default {
  name: 'App',
  components: {
    Index,
    Navbar
    // User
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
