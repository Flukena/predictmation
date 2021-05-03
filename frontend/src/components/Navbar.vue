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
          <router-link to="/">
            <a class="navbar-item button is-rounded is-medium">
              Main
            </a></router-link
          >
          <a class="navbar-item button is-rounded is-medium">
            Our products
          </a>

          <a class="navbar-item button is-rounded is-medium">
            Contact US
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" ><router-link to="/user/singup">
              <a class="button  is-rounded is-medium" id="singlog">
                
                <strong>Sign up</strong>
              </a></router-link><router-link to="/user/login">
              <a class="button  is-rounded is-medium" id="singlog2"  style="margin-left: 15px">

                Log in
              </a></router-link>


          </div>
        </div></div>
      </div>
    </nav>
  </div>
</template>
