<template>
  <div>
    <h1>我是父组件，下面是我的子组件</h1>
    <!--  :  是v-bind的简写-->
    <!-- <childSon :username=username v-bind:age=age :firstname=firstname></childSon> -->
    <!--传入一个对象-->
    <childSon v-bind="userdata" @getMsg="getNum"></childSon>
    <p>传递给子组件的值{{userdata}}</p>
    <p>这是子组件传过来的消息{{num}}</p>
    <button @click="visable">显示</button>
    <button @click="invisable">隐藏</button>
    <mydialog class="test" v-show="dialog_visable" :title="title"></mydialog>
    <p @click="show=!show">点我</p>
  </div>
</template>

<script>
import childSon from "../components/child01";
import mydialog from "../components/mydialog";

export default {
  data() {
    return {
      // username:"lyl",
      // firstname:"cml",
      // age:16
      //传入一个对象，也可以在子组件拿到数据
      userdata: {
        username: "lyl",
        age: 18,
        firstname: "cml",
      },
      num: 13,
      dialog_visable: false,
      title: "你好",
      show: false,
    };
  },
  watch: {
    show(old, now) {
      console.log(old + "  " + now);
    },
  },
  components: {
    //这个名称可以不与文件名相同，但是要跟import 一样，布局里面引用也是使用该名称
    childSon,
    mydialog,
  },
  methods: {
    getNum: function (num) {
      this.num = num;
      this.userdata.age = num;
      console.log("接收到了子组件的消息" + num);
    },
    visable() {
      this.dialog_visable = true;
    },
    invisable() {
      this.dialog_visable = false;
    },
  },
};
</script>
<style  scoped>
</style>