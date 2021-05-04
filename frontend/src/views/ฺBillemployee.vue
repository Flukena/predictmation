<template>
  <div class="column is-2 is-offset-5">
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

          <label class="checkbox">
            <input type="checkbox" />
            Keep me signed in
          </label>
          <div class="column is-2"></div>

          <button class="button is-black" style="width: 100%" @click="submit()">
            Log in
          </button>
        </div>

        <div class="column">
          <img
            style="
              display: block;
              margin-left: auto;
              margin-right: auto;
              height: 250px;"
            src="http://www.clker.com/cliparts/J/C/X/z/E/s/shopping-cart-hi.png"
          />
        </div>
      </div>
    </form>
  </div>
</template>