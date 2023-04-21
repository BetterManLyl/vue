<template>
  <div class="shop_container">
    <div class="main">
      <button @click="promise_01">测试promise</button>
      <button @click="getPromiseResult">获取promise的返回值</button>
      <button @click="getMorePromiseRes">获取多次处理的结果</button>
      <button @click="getPromiseAll">获取all返回的结果</button>
      <button @click="list(obj)">遍历</button>
      <button @click="lists(objs)">遍历2</button>
      <button @click="rest()">rest参数</button>
      <p v-text="msg" @click="test('333', $event)" debounce="5000"></p>
      <p>{{ msg }}</p>
      <promise_01></promise_01>


      <button @touchstart.prevent="touchstart1" @touchend.prevent="touchend1" @click.prevent="btnClick1">测试点击事件</button>

    </div>
  </div>
</template>
<script>
import promise_01 from "./Promise_01";
import utils from "@/common/js/utils.js";
export default {
  components: { promise_01 },
  data() {
    return {
      isstop: false,
      obj: {
        name: "lyl",
        like: [
          {
            name: "cml",
          },
          {
            name: "cml1",
          },
          {
            name: "cml2",
          },
          {
            name: [
              {
                age: 15,
              },
              {
                age: 16,
              },
              {
                age: 17,
              },
              {
                age: [
                  {
                    haha: "haha",
                  },
                  {
                    haha: "xixi",
                  },
                  {
                    haha: "gaga",
                  },
                  {
                    haha: "houhou",
                  },
                ],
              },
            ],
          },
        ],
      },
      objs: [
        {
          like: [
            {
              name: [
                {
                  age: [
                    {
                      haha: "haha",
                    },
                    {
                      haha: "xixi",
                    },
                    {
                      haha: "gaga",
                    },
                    {
                      haha: "houhou",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      msg: "v-text"
    };
  },
  mounted() {
    // console.log("1111111");
    // document.addEventListener("touchend", function () {
    //   console.log("touchend 3333");
    // });
  },
  activated() {
    // console.log("222");
  },
  methods: {

    touchstart1() {
      console.log('touchstart0000');

    },
    touchend1() {
      console.log('lyl00000');
      
      this.$router.go(-1)
      console.log('touchend 0000');
    },
    btnClick1() {
      console.log('btnClick 0000');

    },



    test(msg, event) {

      console.log('ltltllt:' + msg);
      console.log(event);

    },
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
      this.list(obj);

      Promise.all([
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("promise 1");
          }, 5000);
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

    list(obj) {
      //遍历对象
      for (let key in obj) {
        //如果遍历的是个数组 继续遍历
        if (Array.isArray(obj[key])) {
          for (let i = 0; i < obj[key].length; i++) {
            this.list(obj[key][i]);
          }
        }

        console.log("lyl_1:" + JSON.stringify(obj[key]));
      }
    },
    lists() {
      //如果遍历的是个数组 继续遍历
      for (let i = 0; i < obj[key].length; i++) {
        this.list(obj[key][i]);
      }
    },

    rest() {
      this.rest1("1", "2", "3");
      this.rest2();
    },

    rest1(data1, ...data) {
      console.log("lyl", data);

      data.forEach((element) => {
        console.log("lyl", element);
      });
    },

    rest2() {
      let data1 = [1, 2, 3];
      let data2 = [4, 5, "6"];
      console.log("lyl", [...data1, ...data2]);
      console.log("lyl", data1.concat(data2));
      let data3 = data1.push(...data2);
      console.log("lyl", data3);
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
<style>
.shop_container {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
  background: fuchsia;
  /* margin: 0 auto; */
  line-height: 100%;
}

.main {
  /* margin: auto; */
}
</style>
