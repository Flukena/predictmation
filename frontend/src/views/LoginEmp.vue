
  <template>
  <div class="column is-2 is-offset-5" style="height: 500px">
    <form class="box" style="background-color: black;">
      <div class="columns">
        <div class="column">
          <label for="" class="for" style="font-size: 40px; margin-left: 4%; color:white"
            >For employees</label
          ><br />
          <div class="column is-2"></div>

          <div class="field" style="width: 100%">
            <div class="control">
              <input
                class="input"
                type="username"
                v-model="username"
                placeholder="Username"
              />
            </div>
          </div>

          <div class="field" style="width: 100%">
            <div class="control">
              <input
                class="input"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </div>
          </div>

          <label class="checkbox" style="color: white">
            <input type="checkbox" />
            Keep me signed in
          </label>
          <div class="column is-2"></div>

          <button class="button is-warning" style="width: 100%; font-weight:700;" @click="submit()">
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
            src="https://images.squarespace-cdn.com/content/v1/5c90fe2eaf468307c83acde2/1555011278344-3I3D4BDMEMX5CS7XI0VO/ke17ZwdGBToddI8pDm48kHhlTY0to_qtyxq77jLiHTtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7T-j82ScS_xjTqFYGqFrT72qZ_E0ELtHpOZiWcSG1QwIMeEVreGuQ8F95X5MZTW1Jw/A+small+logo+with+a+wrench+and+screwdriver"
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    submit() {
      const data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("http://localhost:3000/user/login/", data)
        .than((res) => {
          const token = res.data.token;
          localStorage.setItem("token", token);
          this.$emit("auth-change");
          this.$router({ push: "/" });
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error.response.data);
        });
    },
  },
};
</script>
