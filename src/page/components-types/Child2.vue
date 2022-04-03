<template>
  <div>
    <div>这是子组件二</div>
    <p>{{ message }}</p>
    <button @click="changeMessage">修改值</button>
    <button @click="skipThree">跳转到组件三</button>
    
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
    return { message: "这是初始值" };
  },
  created() {
    console.log("created 2");
  },
  mounted() {
     console.log((this.$parent));
    console.log("mounted 2");
  },
  methods: {
    skipThree() {
      this.$emit("skipThree");
    },
    changeMessage() {
      this.message = "这是修改后的值";
    },
  },
};
</script>
