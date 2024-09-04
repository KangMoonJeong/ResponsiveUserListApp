<template>
  <div id="app">
    <nav>
      <router-link to="/"></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap");

body {
  margin: 0px;
}

* {
  font-family: Noto Sans KR, sans-serif, Avenir, Helvetica, Arial;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
