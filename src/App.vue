<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <counter></counter>
<my-componetn></my-componetn> -->
    <!-- <keep-alive> -->
      <router-view />
      <!--通过router注入模板-->
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Vue from "vue";

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

export default {
  //对外提供的接口
  name: "App",

destroyed(){
console.log("app destory");
},
  mounted() {
    console.log("lyl width:" + document.documentElement.clientWidth);

    document.addEventListener("message", this.testListener,false);
    document.addEventListener("close",function(){
      console.log("close");
    })
    let num = this.addDecimals(2.1,2.1);
    console.log("lyl num:"+num)
  },
  destroyed() {
    document.removeEventListener(this.testListener);
  },
  methods: {
    addDecimals(a, b) { // 将小数转换为整数
      let aInt = a * Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
      let bInt = b * Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
      // 计算整数之和 
      let sumInt = aInt + bInt;
      // 返回小数之和 
      return sumInt / Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
    },
    testListener(e) {
      console.log(e);
      console.log("testListener");
    },
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
