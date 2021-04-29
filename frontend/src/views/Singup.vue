  <template>
  <div class="column is-2 is-offset-5">
    <form class="box">
      <label for="" class="for">Become a member</label><br />
      <div class="column is-2"></div>

      <div class="field">
        <div class="control">
          <input class="input" type="username" placeholder="Username" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="password" placeholder="Password" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="confirmpassword" placeholder="Confirm Password" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="firstname" placeholder="Firstname" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="lastname" placeholder="Lastname" />
        </div>
      </div>

      <form action="">
        <label for="" class="sex"></label>
        <select name="sex" id="sex">
          <option value="nogender">No gender</option>
          <option value="male">Male</option>
          <option value="femail">Female</option>
        </select>
        <br /><br />
      </form>

      <div class="field">
        <div class="control">
          <input class="input" type="phone" placeholder="Phone" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="email" placeholder="Email" />
        </div>
      </div>

      <form action="">
          <label for="" class="br">Date of birth </label>
        <input type="date" id="birthday" name="birthday"/>
      </form>

      <div class="column is-2"></div>
      <button class="button is-black" style="width: 100%">Sing up</button>
    </form>

  </div>
</template>