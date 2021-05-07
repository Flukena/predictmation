
  <template>
  <div class="column is-2 is-offset-5" style="height: 600px" id="loginwall">
    <form class="box">
      <div class="columns">
        <div class="column">
          <label for="" class="for" style="font-size: 40px; margin-left: 5%"
            >For customers</label
          ><br />
          <div class="column is-2"></div>

          <div class="field" style="width: 100%">
            <div class="control">
              <input
                class="input"
                type="username"
                v-model="$v.username.$model"
                :class="{ 'is-danger': $v.username.$error }"
                placeholder="Username"
              />
            </div>
            <template v-if="$v.username.$error">
              <p class="help is-danger" id="help" v-if="!$v.username.$complex3">
                * Invalid username.
              </p>
            </template>
          </div>

          <div class="field" style="width: 100%">
            <div class="control">
              <input
                class="input"
                id="myInput"
                type="password"
                v-model="$v.password.$model"
                :class="{ 'is-danger': $v.password.$error }"
                placeholder="Password"
              />
            </div>
            <template v-if="$v.password.$error">
              <p class="help is-danger" id="help" v-if="!$v.password.$password">
                * Invalid password.
              </p>
              
            </template>
          </div>

          <label class="checkbox">
            <input type="checkbox" @click="myFunction()" />
            Show password
          </label>
          <div class="column is-2"></div>

          <button class="button is-black" style="width: 100%" @click="submit">
            Log in
          </button>
        </div>

        <div class="column">
          <img
            style="
              display: block;
              margin-left: auto;
              margin-right: auto;
              height: 250px;
            "
            src="http://www.clker.com/cliparts/J/C/X/z/E/s/shopping-cart-hi.png"
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import axios from "@/plugins/axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  validations: {
    username: {
      required,
      maxLength: maxLength(20),
      minLength: minLength(5),
      complex3(value) {
        if (value.length < 5) {
          return false;
        }
        return true;
      },
    },
    password: {
      required,
      minLength: minLength(8),
      complex(value) {
        if (value.length < 8) {
          return false;
        }
        return true;
      },
      complex2(value) {
        if (
          !(
            value.match(/[a-z]/) &&
            value.match(/[A-Z]/) &&
            value.match(/[0-9]/)
          )
        ) {
          return false;
        }
        return true;
      },
    },
  },
  

  methods: {
    submit() {
      const data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("/user/login", data)
        .then((res) => {
          const token = res.data.token;
          localStorage.setItem("token", token);
          this.$emit("auth-change");
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          this.error = error;
          alert("Incorrent username or password")
          console.log(error);
        });
    },
    myFunction() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

  }
};
</script>
