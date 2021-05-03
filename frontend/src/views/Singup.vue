  <template>
  <div class="column is-2 is-offset-5">
    <form class="box" style="margin-top:-60px; width:22%">
      <label for="" class="for" style="font-size: 40px; margin-left: 10%;">Become a member</label><br />
      <div class="column is-2"></div>

      <div class="field">
        <div class="control">
          <input class="input" type="text" v-model="username" placeholder="Username" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="password" v-model="password" placeholder="Password" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="password" v-model="confirm_password" placeholder="Confirm Password" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="text" v-model="firstname" placeholder="Firstname" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="text" v-model="lastname" placeholder="Lastname" />
        </div>
      </div>

      <form >
        <label for="sex" class="sex"></label>
        <select name="sex" v-model="sex" id="sex">
          <option value="" style="color: black;">Choose gender</option>
          <option value="male" style="color: black;">Male</option>
          <option value="femail" style="color: black;">Female</option>
        </select>
        <br /><br />
      </form>

      <div class="field">
        <div class="control">
          <input class="input" type="number" v-model="mobile" placeholder="Phone" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="email" v-model="email" placeholder="Email" />
        </div>
      </div>
            <div class="field">
        <div class="control">
          <input class="input" type="number" v-model="age" placeholder="age" />
        </div>
      </div>
      <form action="">
          <label for="" class="br">Date of birth </label>
        <input style="width: 100%; margin-top:10px; background-image: linear-gradient(to top, rgb(27, 27, 27), rgb(177, 131, 78));" type="date" v-model="birth" id="birthday" name="birthday" value="asdas"/>
      </form>

      <div class="column is-2"></div>
      <button class="button is-black" style="width: 100%" @click="submit()">Sing up</button>
    </form>

  </div>
</template>
<script>
import axios from '@/plugins/axios'
import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

function mobile(value) {
  return !helpers.req(value) || !!value.match(/0[0-9]{9}/);
}

function complexPassword(value) {
  if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
    return false;
  }
  return true;
}

export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      email: "",
      mobile: "",
      sex:"",
      firstname: "",
      lastname: "",
      birth:"",
      age:""
    };
  },
  methods: {
    submit() {
      // Validate all fields
      this.$v.$touch();

      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        let data = {
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
          email: this.email,
          mobile: this.mobile,
          firstname: this.firstname,
          lastname: this.lastname,
          sex:this.sex,
          birth:this.birth,
          age:this.age

        };

        axios
          .post("http://localhost:3000/user/singup", data)
          .then((res) => {
            alert("Sign up Success");
            res.status(200)
          })
          .catch((err) => {
            console.log(data)
            alert(err.response.data.details.message)
            console.log(err)
          });
      }
    },
  },
  validations: {
    email: {
      required: required,
      email: email,
    },
    mobile: {
      required: required,
      mobile: mobile,
    },
    password: {
      required: required,
      minLength: minLength(8),
      complex: complexPassword,
    },
    confirm_password: {
      sameAs: sameAs("password"),
    },
    username: {
      required: required,
      minLength: minLength(5),
      maxLength: maxLength(20),
    },
    firstname: {
      required: required,
    },
    lastname: {
      required: required,
    },
  },
};

</script>