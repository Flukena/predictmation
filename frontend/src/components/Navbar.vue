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
            <a
              class="navbar-item button"
              style="
                border-top-right-radius: 80%;
                border-bottom-left-radius: 80%;
              "
            >
              Main</a></router-link
          >
          <router-link to="/product">
          <a class="navbar-item button" style="
                border-top-right-radius: 80%;
                border-bottom-left-radius: 80%;
              "> Our products</a>
          </router-link>
          <a class="navbar-item button" style="
                border-top-right-radius: 80%;
                border-bottom-left-radius: 80%;
              "> About us</a>
        </div>

        <div class="navbar-end" v-if="$props.user == null">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/user/singup">
                <a class="button" id="singlog">
                  <strong>Sign up</strong>
                </a></router-link
              ><router-link to="/user/login">
                <a
                  class="button"
                  id="singlog2"
                  style="margin-left: 15px"
                >
                  Log in
                </a></router-link
              >
            </div>
          </div>
        </div>
        <div class="navbar-end" v-if="$props.user != null">
          <div class="navbar-item">
                  <strong style="margin-right:5rem">Username : {{user.cus_username}}</strong>

            <div class="buttons">

                <a class="button  is-rounded is-medium" id="singlog2"  @click="logout()">
                  Logout
                </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {};
  },
  mounted() {
    this.showUser();
  },
  methods: {
    showUser() {
      console.log(this.user);
    },logout(){
      localStorage.removeItem('token')
      console.log("Remove Tokens")
       this.$emit('update-user')
    }
  },
};
</script>
