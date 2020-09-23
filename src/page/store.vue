<template>
  <div class="margin-top">
    测试store
    <input placeholder="请输入需要保存的值" v-model="inputvalue" />
    <input type="text" v-model="inputvalue" />
    <br />
    <button class="margin-top" @click="getValue()">获取输入值</button>
    <span>今天天气不错</span>
  </div>
</template>

<script>
// 创建构造器
// import Vue from "vue";
// var Profile = Vue.extend({
//   template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
//   data: function () {
//     return {
//       firstName: "Walter",
//       lastName: "White",
//       alias: "Heisenberg",
//     };
//   },
// });
// console.log("1");
// // 创建 Profile 实例，并挂载到一个元素上。
// document.body.appendChild(
//   new Profile().$mount(document.createElement("div")).$el
// );
console.log("2");
export default {
  data() {
    return {
      inputvalue: "",
    };
  },
  created() {},
  //计算属性 computed 是对自己定义的变量进行监控，这里的变量不是在data里面定义的，直接在computed进行定义
  computed: {
    testnum: {
      get() {
        return this.$store.getters.getDemoValue;
      },
      //当修改了testnum的值，则会调用set方法
      set(val) {
        this.$store.commit("setDemoValue", val);
      },
    },
  },
  //监听data里面改变的值
  watch: {
    inputvalue(current, old) {
      console.log("改变了" + current + " " + old);
      this.testnum = current;
    },
  },
  methods: {
    submit() {},
    getValue() {
      console.log(this.$store.getters.getDemoValue);
    },
  },
};
</script>

<style >
.margin-top {
  margin-top: 30px;
}
</style>