<template>
  <div>
    <button @click="twoFunc()">测试</button>
    <input :class="{isActive:true}" v-test />
    <div>
      <p v-for="(item, index) in testlist" :key="index">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
import arrowfunc from "./ArrowFunc.js";
import test3 from "@/common/js/test2.js";
import main from "@/main.js"

export default {
  data() {
    return {
      testarr: [1, 2, 3, 4],
      test2: "你好",
      testlist: [
        {
          name: "lyl",
        },
        {
          name: "lyl1",
        },
        {
          name: "lyl2",
        },
        {
          name: "lyl3",
        },
      ],
    };
  },
   
  created() {
    // this.testlist[0].name = "test";
    let item = {
      name: "test",
    };
    let timer = setTimeout(() => {
      console.log("这是3s中之后执行的");
    }, 3000);
    // setTimeout(() => {
    //   clearTimeout(timer);
    //    console.log("结束上面的定时任务");
    // }, 1000);
    main.test11();
    this.$set(this.testlist, 0, item);
    console.log(test3.a);
    this.testPromise().then((res) => {
      console.log("lyl res:" + JSON.stringify(res));
    });



    // setTimeout(() => {
    //   console.log("lyl 2000s");
    // }, 2000);
  },
  
  methods: {
    oneFunc() {
      var f = (v) => {
        console.log("oneFunc");
        return "oneFunc";
      };
    },
    //调用外部js的箭头函数
    twoFunc() {
      //h5调用android方法
      window.Android.takePhoto();
      //   console.log(this);
      //   console.log(arrowfunc.v1("test"));
      //   let array = ["1", "2"];
      //   console.log(arrowfunc.isArray(["1"]));
      //   console.log(arrowfunc.test2);
      //   console.log(arrowfunc.test3);
      //   arrowfunc.test4("name", "age");
      //   arrowfunc.test5("name", "age");
      //   console.log(arrowfunc.test6("1"));
      arrowfunc.obj.test(function callback(params) {
        console.log(params);
      });
      let array = [];
      arrowfunc.obj.test1((callback) => {
        console.log(callback);
      });
      arrowfunc.show();
      this.testarr.forEach((item) => {
        console.log("this是", this);
      });
    },

    testPromise() {
      let a1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("2结束");
        }, 1000);
      });
      let a2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("1结束");
        }, 2000);
      });
      return Promise.all([a1, a2]);
    },
  },
};
</script>

<style scoped></style>
