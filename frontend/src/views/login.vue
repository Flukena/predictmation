<template>
  <div class="column is-2 is-offset-5">
    <form
      class="box"
      style="background-color: rgb(246, 228, 211); padding: 1.6rem"
    >
      <label for="">For customers</label>
      <div class="field">
        <div class="control">
          <input class="input" type="email" placeholder="Username" />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" type="password" placeholder="Password" />
        </div>
      </div>
      <label class="checkbox">
        <input type="checkbox" />
        Keep me signed in
      </label>
      <button class="button is-black" style="width: 100%">Log in</button>
    </form>
  </div>
</template>