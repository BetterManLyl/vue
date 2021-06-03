<template>
  <div>
    这是父组件

    <!-- <child1 ref="child1" :firstValue="firstValue" @firstMethod="firstMethod"></child1>
    <component :is="pagetype"></component>
    <button @click="testCallChild">测试通过ref方式 调用子组件方法</button>
    <button @click="changeDymicPage">动态切换组件</button>

    <button @click="changeStaticPage">静态切换组件</button>
    <child3 v-if="step"></child3>
    <child4 v-if="!step"></child4>

    <br />
    <br /> -->

    <h1>测试子组件包含子组件</h1>
    <button @click="show">展示</button>
    <child1 v-if="isShow" @hide="hide"></child1>
  </div>
</template>
<script>
import child1 from "./Child1";
import child2 from "./Child2";
import child3 from "./Child3";
import child4 from "./Child4";
export default {
  components: {
    child1,
    child2,
    child3,
    child4,
  },
  data() {
    return {
      firstValue: "这是firstValue",
      pagetype: child1,
      step: true,
      isShow: false,
    };
  },
  methods: {
    firstMethod(value) {
      console.log("value:" + value);
    },
    //通过refs方式调用自附件里面的方法
    testCallChild() {
      let test = this.$refs.child1.testMthod();
      console.log(test);
    },
    changeDymicPage() {
      if (this.pagetype == child1) {
        this.pagetype = child2;
      } else {
        this.pagetype = child1;
      }
    },
    changeStaticPage() {
      this.step = !this.step;
    },
    hide() {
      this.isShow = false;
    },
    show() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style></style>
