<template>
  <div>

    <div class="modal " :class="{'is-active':modal_password}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head" >
      <p class="modal-card-title" >Change Password</p>
      <button class="delete" aria-label="close" @click="modal_password  = !modal_password"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
      
  <div class="field">
  <label class="label">Old password</label>
  <div class="control">
    <input class="input" v-model="password" type="password" placeholder="Old Password">
  </div>
</div>
  <div class="field">
  <label class="label">New password</label>
  <div class="control">
    <input class="input" v-model="new_password" type="password" placeholder="New Password">
  </div>
</div>
  <div class="field">
  <label class="label">Confirm new password</label>
  <div class="control">
    <input class="input" type="password" v-model="confirm_new_password" placeholder="Confirm New Password">
  </div>
</div>






    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="changePassword()" >Save changes</button>
      <button class="button" @click="modal_password  = !modal_password">Cancel</button>
    </footer>
  </div>
</div>

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
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
              

                        <div class="buttons mt-5 mr-5" >
              <a class="button is-rounded is-medium" @click="home" v-if="$props.user.role == 'admin' ">admin</a>
            </div>
            <div class="dropdown " style="margin-right:5rem"  :class="{'is-active':dropdown_login}" @click="dropdown_login = !dropdown_login">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>{{ user.cus_username }}</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down"  aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item" @click="modal_password  = true">
        Change Password
      </a>
           <a href="#" @click="logout()" class="dropdown-item">
        Logout
      </a>

    </div>
  </div>
</div>

          </div>
          
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  props: ["user"],
  data(){
    return{
      dropdown_login:false,
      modal_password:false,
      password:"",
      new_password:"",
      confirm_new_password:""
    }
  },
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
    },home(){
      this.$router.push({ path: '/bill' })
    },changePassword(){
      const data = {
        'password': this.password,
        'new_password':this.new_password,
        'confirm_new_password':this.confirm_new_password
      }
      console.log("password")
      axios.put('/changepassword', data ).then(response=>{
        console.log(response)
      }).catch(console.error())
    }
  },
};
</script>
