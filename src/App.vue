<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <counter></counter>
<my-componetn></my-componetn> -->
    <router-view /><!--通过router注入模板-->
  </div>
</template>

<script>
import Vue from 'vue'
//全局组件,在template中只能有一个div类型的根标签。放在Vue实例前面。
// Vue.component(
//   'my-componetn', {
//   template: `
//   <div>
//       <h2>Hello</h2>
//       <p>{{name}}</p>
//       <button @click="changeName()">changeName</button>
//   </div>`,
//   data() {
//     return {
//       name: "Vue"
//     }
//   },
//   methods: {
//     changeName() {
//       this.name = "qwe"
//     }
//   }
// })

export default {//对外提供的接口
  name: "App",
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
