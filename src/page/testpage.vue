<template>
  <div>
    <!--添加子组件，并绑定参数testnum-->
    <testcompon :testnum="testnum" @addNum="addNum"></testcompon>
    <input type="button" value="点我改变值" @click="changeValue()" />
  </div>
</template>

<script>
import testcompon from "../components/testcompon";
import Msg from "../common/msg";
export default {
  name: "testpage",
  data() {
    return {
      testnum: 569,
    };
  },
  components: {
    testcompon,
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    // var obj = this;
    // Msg.$on("num", function (num) {
    //   obj.testcompon = num;
    // });
  },
  updated() {
    console.log("updated");
  },
  methods: {
    addNum: function (num) {
      console.log("我是父类" + num);
    },
    changeValue: function () {
      this.testnum = 456;
      console.log("456");
    },
  },
};
</script>