<template>
  <div id="app" class="container-fluid">
    <!--<img class="logo" src="./assets/logo.png">-->
     <a v-link="{ path: '/logon' }">Go to Foo</a>
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
</script>

<style>
html {
  height: 100%;
}
/*
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}*/

#app {
  color: #2c3e50;
  font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>
