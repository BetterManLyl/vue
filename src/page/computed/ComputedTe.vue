<!--computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化-->
<template>
  <div>
    <h1>computed使用测试</h1>
    <p>{{ fullName }}</p>
    <button @click="test">测试</button>
    <input ref="inputd" type="text" @focus="inFocus" />

    <p>{{ fullName }}</p>
    <p>{{ fullName }}</p>
    <p>{{ fullName }}</p>
    <p>{{ fullName }}</p>

    <p>{{ getfullName() }}</p>
    <p>{{ getfullName() }}</p>
    
   

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
          parseInt("11").toFixed;
          this.firstName = "li";
          this.lastName = "yuelong";
        }
      },
    },
  },
  methods: {
    getfullName() {
      console.log("getfullName")
      return this.firstName + this.lastName;
    },
    test() {
      this.firstName = "cml"
      //顶层对象赋值 顶层对象在浏览器环境中指的是window对象，在node环境中指的是global对象
      window.a = "ssss";
      console.log("a:" + a);

      let f = this.inFocus();
      f();
      // this.fullName = "liyuelong";
      let hasFocus = this.$refs.inputd.focus();
    },
    inFocus() {
      let test1 = "222";
      let test2 = test1;
      test1 = "333";
      console.log(test2);

      const a = "11";
      // console.log("input 获取焦点");
      return function f() {
        console.log("lyl 这是一个函数里面的函数");
      };
    },
  },
};
</script>

<style scoped>

p{
  /* color: black; */
}
</style>
