<template>
  <div>
    这是子组件一
    <div @click="firstClick">{{ firstValue }}</div>
  </div>
</template>
<script>
export default {
  props: {
    firstValue: {
      type: String,
      requifred: true,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  methods: {
    //子传父方法
    firstClick() {
      this.$emit("firstMethod", "123");
    },

    testMthod() {
      console.log("456");
      return "456";
    },
  },
};
</script>
