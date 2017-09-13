<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link  to="/hello">hello</router-link></li>
      <li><router-link  to="/table">table</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text-javaScript">
export default {
  name: 'app',
  data(){
    return{
      active:true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
ul{
  width: 300px;
  list-style: none;
  display: flex;
  justify-content: center;
  margin: auto;
}
li{
  text-align: center;
  margin-right: 50px;
}
a{
  text-decoration: none;
}
.active{
  color: #f00;
}
</style>
