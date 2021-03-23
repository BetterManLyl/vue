<template>
  <div>
    <h1>我是父组件，下面是我的子组件</h1>
    <!--  :  是v-bind的简写-->
    <!-- <childSon :username=username v-bind:age=age :firstname=firstname></childSon> -->
    <!--传入一个对象-->
    <childSon2 v-bind="userdata" :userage="userage" @getMsg="getNum"></childSon2>
    <p>传递给子组件的值{{ userdata }}</p>
    <p>这是子组件传过来的消息{{ num }}</p>
    <button @click="visable">显示</button>
    <button @click="invisable">隐藏</button>
    <mydialog class="test" v-show="dialog_visable" :title="title"></mydialog>
    <p v-on:click.stop="show = !show">点我</p>
    <p v-for="item in list">{{ item }}</p>
    <p v-bind:class="{ active: isActive }">你好</p>
    <p :class="{ active: isActive }">你好</p>

    <button @click="refs()">refs的使用</button>
    <child02
    ref="child2"
      @testfashe="abctst()"
      :username="userdata.username"
      :userData="userdata"
    ><button>插槽的使用</button></child02>
     <child02
    ref="child2"
      @testfashe="abctst()"
      :username="userdata.username"
      :userData="userdata"
    ></child02>
     <child02
    ref="child2"
      @testfashe="abctst()"
      :username="userdata.username"
      :userData="userdata"
    ><p>22222</p></child02>
  </div>
</template>

<script>
import childSon from "../components/child01";
import child02 from "../components/child02";
import mydialog from "../components/mydialog";
import test from '../lib/test.js'

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
      userage: "15",
      num: 13,
      dialog_visable: false,
      title: "你好",
      show: false,
      list: ["1", "2", "3"],
      isActive: true,
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
    child02,
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
    abctst() {
      console.log("abctst");
    },
    refs() {
      console.log(this.$refs.child2.name);
    },
  },
  created: function () {
    console.log("created");
    console.log('test:'+test.flag);

test.sum();
    
  },
  beforeCreate: function () {},
  computed: function () {
    console.log("computed");
  },
};
</script>
<style >
.active {
  color: red;
  text-align: left;
}
</style>