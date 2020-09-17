<template>
  <div class="margin-top">
    测试store
    <input placeholder="请输入需要保存的值" v-model="inputvalue" />
    <br />
    <button class="margin-top" @click="getValue()">获取输入值</button>
    <span>今天天气不错</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputvalue: "",
    };
  },
  created() {},
  methods: {
    submit() {},
    getValue() {
      console.log(this.$test.countNum);
      this.$store.commit("setDemoValue", this.inputvalue);
      this.$store.commit("setTestValue", this.inputvalue);
      setTimeout(() => {
        console.log(this.$store.getters.getDemoValue);
        console.log(this.$store.getters.getTestValue);
      }, 200);
    },
  },
};
</script>

<style >
.margin-top {
  margin-top: 30px;
}
</style>