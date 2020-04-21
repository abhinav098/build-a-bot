<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png"> Build a Bot
            </router-link>
          </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Build'}" exact>
                Build
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'BrowseParts'}" exact>
                Browse
              </router-link>
            </li>
            <li class="nav-item cart">
              <router-link class="nav-link" to="/cart" exact>
                Cart
                <div class="cart-length">
                  {{cart.length}}
                </div>
              </router-link>
            </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name='sidebar'/>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style>
  body {
    background: linear-gradient(to bottom, #555, #999 );
  }
</style>

<style scoped>
main {
  padding: 30px;
  background-color: aliceblue;
  width: 964px;
  min-height: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: aliceblue;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside{
  padding: 30px;
  width: 100px;
  min-height: 300px;
  background-color: #aaa;
}
.cart-length {
  position: absolute;
  border: 1px solid seagreen;
  border-radius: 100px;
  font-size: 15px;
  top: -5px;
  text-align: center;
  width: 20px;
  display: inline-block;
  font-weight: bold;
  right: -9px;
  background-color: seagreen;
}
</style>
