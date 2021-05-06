<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start mt-4">
          <router-link to="/">
            <a class="navbar-item button"> Main</a></router-link
          >
          <router-link to="/product">
            <a class="navbar-item button"> Our products</a>
          </router-link>
          <router-link to="aboutus">
            <a class="navbar-item button"> About us</a>
          </router-link>
        </div>

        <div class="navbar-end" v-if="$props.user == null">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/user/singup">
                <a class="button" id="singlog">
                  <strong>Sign up</strong>
                </a></router-link
              ><router-link to="/user/login">
                <a class="button" id="singlog2" style="margin-left: 15px">
                  Log in
                </a></router-link
              >
            </div>
          </div>
        </div>

        <div class="navbar-end" v-if="$props.user != null">
          <div class="navbar-item" >

            <div class="buttons">
              <a class="button is-rounded is-medium" v-if="$props.user.role == 'admin' ">admin</a>
              <a class="button is-rounded is-medium"  @click="logout()"> {{ user.cus_username }} Logout </a>
              
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
// import axios from "@/plugins/axios";
export default {
  props: ["user"],

  mounted() {
    this.showUser();
  },
  methods: {
    showUser() {
      console.log(this.user);
      console.log(this.user);
    },
    logout() {
      localStorage.removeItem("token");

      console.log("Remove Tokens");
      this.$emit("update-user");
    },
  },
};
</script>
