<template>
  <div>
    <button @click="promise_01">测试promise</button>
    <button @click="getPromiseResult">获取promise的返回值</button>
    <button @click="getMorePromiseRes">获取多次处理的结果</button>
    <button @click="getPromiseAll">获取all返回的结果</button>
    <promise_01></promise_01>
  </div>
</template>
<script>
import promise_01 from "./Promise_01";
import utils from "@/common/js/utils.js";
export default {
  components: { promise_01 },
  data() {
    return {};
  },
  methods: {
    //promise参数使用
    promise_01() {
      let json = {
        name: "lyl",
        age: "20",
      };
      return new Promise((resolve, reject) => {
        // resolve(json);
        reject("error");
      })
        .then(
          (res) => {
            console.log("lyl then:" + res);
          }
          //   (error) => {
          //     console.log("lyl then:" + error);
          //   }
        )
        .catch((error) => {
          console.log("lyl catch");
        });
    },
    getPromiseResult() {
      let res1 = this.promise_01();
      utils.getPerson();
      //   res1.then((res) => {
      //     console.log("res:" + res.name);
      //   });
    },
    /**
     * 获取多次返回Promise处理之后的结果
     */
    getMorePromiseRes() {
      return new Promise((resolve, reject) => {
        resolve("第一次结果");
      })
        .then((res) => {
          return new Promise((resolve) => {
            resolve("第二次结果");
          });
        })
        .then((res) => {
          console.log("最终结果：" + res);
        });
    },
    getMorePromiseRes2() {
      return new Promise((resolve, reject) => {
        resolve("第一次结果");
      })
        .then((res) => {
          //直接调用
          return Promise.resolve("第二次结果");
        })
        .then((res) => {
          console.log("最终结果：" + res);
        });
    },
    /**
     * 需要两次耗时任务都结束才能处理下一步结果的 需求
     */
    getPromiseAll() {
      Promise.all([
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("promise 1");
          }, 1000);
        }),
        new Promise((resolve, reject) => {
          JSON;
          setTimeout(() => {
            resolve("promise 2");
          }, 2000);
        }),
      ]).then((results) => {
        results.forEach((element) => {
          console.log(element);
        });
      });
    },

    getPromise(key) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if ("lyl" == key) {
            resolve(key);
          }
        }, 1000);
      });
    },
  },
};
</script>
