<template>
  <div>
    <p class="test">这是子组件一 包含组件二和组件三</p>
    <div @click="firstClick">{{ firstValue }}</div>
    <button @click="changeCom()">切换组件</button>
    <child2 @skipThree="skipThree" v-if="step"></child2>
    <child3 @hide="hide()" v-if="!step"></child3>
  </div>
</template>
<script>
import child2 from "./Child2";
import child3 from "./Child3";
export default {
  components: {
    child2,
    child3,
  },
  props: {
    firstValue: {
      type: String,
      requifred: true,
    },
  },

  data() {
    return { step: true };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },

  methods: {
    //子传父方法
    firstClick() {
      this.$emit("firstMethod", "123");
    },
    changeCom() {
      this.step = !this.step;
    },
    testMthod() {
      console.log("456");
      return "456";
    },
    skipThree() {
      this.step = !this.step;
    },
    hide() {
      // this.step = !this.step;
      // this.$emit("hide");
    },
  },
};
</script>
<style scoped>
.test {
  font-size: 20px;
  color: red;
  display: inline-block;
}
</style>
