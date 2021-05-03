
  <template>
  <div class="columns">
  <div class="column">
    
    <form class="box">
      <label for="" class="for" style="margin-left: 10%">For customers</label><br><br>
      <div class="field">
<<<<<<< HEAD
        <div class="control" style="width: 50%">
          <input class="input" type="email" placeholder="Username" />
=======
        <div class="control">
          <input class="input" type="username" v-model="username" placeholder="Username" />
>>>>>>> 8f8c9f0d6cf3b05fa1a273054630ef4c692340b5
        </div>
      </div>

      <div class="field">
<<<<<<< HEAD
        <div class="control" style="width: 50%">
          <input class="input" type="password" placeholder="Password" />
=======
        <div class="control">
          <input class="input" type="password" v-model="password" placeholder="Password" />
>>>>>>> 8f8c9f0d6cf3b05fa1a273054630ef4c692340b5
        </div>
      </div>
      
      <label class="checkbox">
        <input type="checkbox" />
        Keep me signed in
<<<<<<< HEAD
      </label><br><br>
      <button class="button is-black" style="width: 50%">Log in</button>
=======
      </label>
      <div class="column is-2"></div>
      
      <button class="button is-black" style="width: 100%" @click="submit()">Log in</button>
>>>>>>> 8f8c9f0d6cf3b05fa1a273054630ef4c692340b5
    </form>
    
  </div>
  <div class="column">
    
    <form>
      <label for="" class="for" style="margin-top: 50">For customers</label><br>
    </form>
    
  </div>
  </div>
  
  
</template>
<script>
import axios from '@/plugins/axios'
export default {  
  setup() {
    return{
      username:'',
      password:'',
      error:'',

    }   
  },methods:{
    submit(){
      const data = {
        username:this.username,
        password:this.password
      }
      axios.post('http://localhost:3000/user/login/', data)
      .than(res =>{
          const token = res.data.token
          localStorage.setItem('token', token)
          this.$emit('auth-change')
          this.$router({push:'/'})
      }).catch(error =>{
        this.error = error.response.data
        console.log(error.response.data)
      })
    }
  }
}
</script>
