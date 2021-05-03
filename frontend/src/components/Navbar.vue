<template>
  <div style="background-img">
    <nav class="navbar" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start mt-4">
          <a class="navbar-item button is-rounded is-medium">
            Main
          </a>
          <a class="navbar-item button is-rounded is-medium">
            Our products
          </a>

          <a class="navbar-item button is-rounded is-medium">
            Contact US
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div  class="buttons">
              <a class="button  is-rounded is-medium" id="singup" style="color:white">
                <strong >Sign up</strong>
              </a>
              <a class="button is-light is-rounded is-medium" id="login">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
