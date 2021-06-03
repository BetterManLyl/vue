<template>
  <div>
    这是子组件三
    <div @click="firstClick">{{ firstValue }}</div>
    <div>{{ message }}</div>
    <button @click="changeComputed">修改计算属性的值</button>
    <button @click="hide">隐藏</button>
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
  computed: {
    test111: {
      get() {
        console.log("computer get:" + this.message);
        return this.message;
      },
      set(val) {
        console.log("computer set:" + val);
        this.message = val;
      },
    },
  },
  data() {
    return {
      message: "111",
    };
  },
  created() {
    console.log("created 3" + this.test111);
  },
  mounted() {
    console.log("mounted 3");
  },

  methods: {
    changeComputed() {
      this.test111 = "222";
    },
    test() {
      this.firstValue = "test";
    },
    //子传父方法
    firstClick() {
      this.$emit("firstMethod", "123");
    },

    testMthod() {
      console.log("456");
      return "456";
    },
    hide() {
      this.$emit("hide");
    },
  },
};
</script>
