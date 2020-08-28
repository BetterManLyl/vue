<template>
  <div>
    <p @click="test()">这是A页面</p>
    <!--v-text="msg"与下面绑定的效果一样-->
    <p v-text="msg"/>
    <p>{{msg}}</p>
    <h1 @click="testme(msg)">你叫什么名字</h1>
    <router-link to="/">返回</router-link>
    <router-link to="/A1">转向A1</router-link>
    <!--子路由的实现需要在父视图里面添加</router-view>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    test: function (params) {
      console.log(this.msg);
      alert("haha");
    },
    testme: function (params) {
      console.log(params);
    },
  },
  data() {
    return {
      msg: "123",
    };
  },
  // data:{
  //   msg : '456',
  // }
};
</script>
<style>
</style>