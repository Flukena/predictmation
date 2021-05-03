
  <template>
  <div class="column is-2 is-offset-5">
    
    <form class="box">
      <label for="" class="for">For customers</label><br>
      <div class="column is-2"></div>
      
      <div class="field">
        <div class="control">
          <input class="input" type="username" v-model="username" placeholder="Username" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="password" v-model="password" placeholder="Password" />
        </div>
      </div>
      
      <label class="checkbox">
        <input type="checkbox" />
        Keep me signed in
      </label>
      <div class="column is-2"></div>
      
      <button class="button is-black" style="width: 100%" @click="submit()">Log in</button>
    </form>
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
