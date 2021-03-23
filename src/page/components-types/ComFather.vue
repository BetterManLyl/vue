<template>
  <div>
    这是父组件

    <child1 ref="child1" :firstValue="firstValue" @firstMethod="firstMethod"></child1>
    <component :is="pagetype"></component>
    <button @click="testCallChild">测试通过ref方式 调用子组件方法</button>
    <button @click="changePage">动态切换组件</button>
  </div>
</template>
<script>
import child1 from "./Child1";
import child2 from "./Child2";
export default {
  components: {
    child1,
    child2,
  },
  data() {
    return {
      firstValue: "这是firstValue",
      pagetype: child1,
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
    changePage() {
      this.pagetype = child2;
    },
  },
};
</script>
<style></style>
