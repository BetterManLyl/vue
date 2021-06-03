<template>
  <div>
    这是子组件四
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
    console.log("created 4");
  },
  mounted() {
    console.log("mounted 4");
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
