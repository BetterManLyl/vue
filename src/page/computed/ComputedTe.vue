<!--computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化-->
<template>
  <div>
    <h1>computed使用测试</h1>
    <p>{{ fullName }}</p>
    <button @click="test">测试</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "li",
      lastName: "yuelong",
      count: "1",
    };
  },
  created() {
    console.log("lyl created");
  },
  mounted() {
    console.log("lyl mounted");
  },
  computed: {
    fullName: {
      //只有在值发生变化的时候  get方法才会触发
      get() {
        console.log("lyl fullname get");
        return this.firstName + this.lastName;
      },
      set(val) {
        //
        console.log("lyl fullname set");
        if ("liyuelong" == this.fullName) {
          this.firstName = "chen";
          this.lastName = "manli";
        } else {
          this.firstName = "li";
          this.lastName = "yuelong";
        }
      },
    },
  },
  methods: {
    test() {
      this.fullName = "liyuelong";
    },
  },
};
</script>
