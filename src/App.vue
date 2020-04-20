<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <router-link class="nav-link" :to="{name: 'Home'}" exact>
            <li class="nav-item">
              <img class="logo" src="./assets/build-a-bot-logo.png"> Build a Bot
            </li>
          </router-link>
          <router-link class="nav-link" :to="{name: 'Build'}" exact>
            <li class="nav-item">
              Build
            </li>
          </router-link>
          <router-link class="nav-link" :to="{name: 'BrowseParts'}" exact>
            <li class="nav-item">
              Browse
            </li>
          </router-link>
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
</style>
