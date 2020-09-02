<template>
  <div>
    <p>测试组件的使用</p>
    <button @click="change()">点击修改</button>
    <p>父视图传值给组件：{{testnum}}</p>
    <h1 v-text="localnum+'!'">你好</h1>
    <h1>{{localnum+"!"}}你好</h1>
    <p v-html="html"></p>
    <img v-show="isShow" src="../assets/logo.png" />
    <p v-if="isShow">123</p>
    <p v-else-if="!isShow">456</p>
  </div>
</template>

<script>
import Msg from "../common/msg";
export default {
  name: "testcompon",
  data() {
    return {
      localnum: 123,
      html: "<a href='http://www.baidu.com'>百度</a>",
      isShow: true,
    };
  },
  computed: {
    addNum() {
      return this.localnum++;
    },
  },
  watch: {
    localnum () {
      console.log('改变了')
    },
  },
  props: {
    testnum: Number,
  },
  created() {
    // this.localnum = this.testnum;
  },
  methods: {
    change: function () {
      // var localnum = "";
      // var obj = this;
      // obj.localnum = num;
      // obj.testnum=num;
      // this.localnum = ++num;
      // console.log(this.localnum);
      // this.testnum = this.localnum;
      // Msg.$emit("num", this.localnum);
      this.localnum="123"
      this.$emit("addNum", this.addNum);
    },
  },
};
</script>