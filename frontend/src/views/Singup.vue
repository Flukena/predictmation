  <template>
  <div class="column is-2 is-offset-5" style="height: 900px" id="singupwall">
    <form class="box" style="margin-top: -75px; width: 22%">
      <label for="" class="for" style="font-size: 40px; margin-left: 10%"
        >Become a member</label
      ><br />
      <div class="column is-2"></div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="$v.username.$model"
            :class="{ 'is-danger': $v.username.$error }"
            placeholder="Username"
          />
        </div>
        <template v-if="$v.username.$error">
          <p class="help is-danger" id="help" v-if="!$v.username.$complex3">
            * At least 5 characters.
          </p>
        </template>
      </div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="password"
            v-model="$v.password.$model"
            :class="{ 'is-danger': $v.password.$error }"
            placeholder="Password"
          />
        </div>
        <template v-if="$v.password.$error">
          <p class="help is-danger" id="help" v-if="!$v.password.$complex">
            * At least 8 characters.
          </p>
          <p class="help is-danger" id="help" v-if="!$v.password.$complex2">
            * Contain lowercase, uppercase and numbers.
          </p>
        </template>
      </div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="password"
            v-model="$v.confirm_password.$model"
            :class="{ 'is-danger': $v.confirm_password.$error }"
            placeholder="Confirm Password"
          />
        </div>
        <template v-if="$v.confirm_password.$error">
          <p
            class="help is-danger"
            id="help"
            v-if="!$v.confirm_password.$sameAs"
          >
            * Password incorrect.
          </p>
        </template>
      </div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="$v.firstname.$model"
            :class="{ 'is-danger': $v.firstname.$error }"
            placeholder="Firstname"
          />
        </div>
        <template v-if="$v.firstname.$error">
          <p class="help is-danger" id="help" v-if="!$v.firstname.$first">
            * Firstname cannot contain numbers.
          </p>
        </template>
      </div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="$v.lastname.$model"
            :class="{ 'is-danger': $v.lastname.$error }"
            placeholder="Lastname"
          />
        </div>
        <template v-if="$v.lastname.$error">
          <p class="help is-danger" id="help" v-if="!$v.lastname.$last">
            * Lastname cannot contain numbers.
          </p>
        </template>
      </div>

      <form>
        <label for="sex" class="sex"></label>
        <select
          name="sex"
          v-model="$v.sex.$model"
          :class="{ 'is-danger': $v.sex.$error }"
          id="sex"
        >
          <option value="choose sex" style="color: black">Choose gender</option>
          <option value="no" style="color: black">No gender</option>
          <option value="male" style="color: black">Male</option>
          <option value="femail" style="color: black">Female</option>
        </select>
        <template v-if="$v.sex.$error">
          <p class="help is-danger" id="help" v-if="!$v.sex.$sex">
            * Required.
          </p>
        </template>
        <br /><br />
      </form>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="$v.mobile.$model"
            :class="{ 'is-danger': $v.mobile.$error }"
            placeholder="Phone"
          />
        </div>
        <template v-if="$v.mobile.$error">
          <p class="help is-danger" id="help" v-if="!$v.mobile.$mobile">
            * The phone number starts with 0 and must have 10 characters.
          </p>
        </template>
      </div>

      <div class="field">
        <div class="control">
          <input
            class="input"
            type="email"
            v-model="$v.email.$model"
            :class="{ 'is-danger': $v.email.$error }"
            placeholder="Email"
          />
        </div>
        <template v-if="$v.email.$error">
          <p class="help is-danger" id="help" v-if="!$v.email.$email">
            * Must be an email format.
          </p>
        </template>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="$v.age.$model"
            :class="{ 'is-danger': $v.age.$error }"
            placeholder="Age"
          />
        </div>
        <template v-if="$v.age.$error">
          <p class="help is-danger" id="help" v-if="!$v.age.$email">
            * Age not be less than 0.
          </p>
        </template>
      </div>
      <form action="">
        <label for="" class="br">Date of birth </label>
        <input
          style="
            width: 100%;
            margin-top: 10px;
            border-style: hidden;
          "
          type="date"
          v-model="$v.birth.$model"
                :class="{ 'is-danger': $v.birth.$error }" 
          id="birthday"
          name="birthday"
          value=""
        />
        <template v-if="$v.birth.$error">
          <p class="help is-danger" id="help" v-if="!$v.birth.$birth">
            * Required.
          </p>
        </template>
      </form>

      <div class="column is-2"></div>
      <button class="button is-black" style="width: 100%" @click="submit()">
        Sing up
      </button>
    </form>
  </div>
</template>
<script>
import axios from "@/plugins/axios";
import {
  required,
  email,
  helpers,
  minLength,
  maxLength,
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
      sex: "choose sex",
      firstname: "",
      lastname: "",
      birth: "",
      age: "",
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
          sex: this.sex,
          birth: this.birth,
          age: this.age,
        };

        axios
          .post("/user/singup", data)
          .then((res) => {
            alert("Sign up Success");
            this.$router.push({ path: "/user/login" });
            res.status(200);
            this.$router.push({ path: "/user/login" });
          })
          .catch((err) => {
            console.log(data);
            alert(err.response.data);
            console.log(err);
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
      required,
      sameAs(value) {
        if (value === this.password) {
          return true;
        }
        return false;
      },
    },
    username: {
      required: required,
      minLength: minLength(5),
      maxLength: maxLength(20),
    },
    firstname: {
      required: required,
      first(value) {
        if (!value.match(/[0-9]/)) {
          return true;
        }
        return false;
      },
    },
    lastname: {
      required: required,
      last(value) {
        if (!value.match(/[0-9]/)) {
          return true;
        }
        return false;
      },
    },
    age: {
      required,
      age(value) {
        if (value < 1) {
          return false;
        }
        return true;
      },
    },
    sex: {
      sex(value) {
        if (value === "choose sex") {
          return false;
        }
        return true;
      },
    },
    birth: {
      birth (value) {
        if (value === "") {
          return false;
        }
        return true
        },
      },
    },
  };

</script>