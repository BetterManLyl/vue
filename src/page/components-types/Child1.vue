<template>
  <div ref="box">
    <p class="test">这是子组件一 包含组件二和组件三</p>
    <p>{{ testValue==""?"你好你叫什么名字":"" }}</p>
    <!-- <p>测试对象传值：{{ testObj.name }}</p> -->
    <!-- <div @click="firstClick">{{ firstValue }}</div>
    <button @click="changeCom()">切换组件</button>
    <button @click="replaceAll">全部替换</button>
    <child2 @skipThree="skipThree" v-if="step"></child2>
    <child3 @hide="hide()" v-if="!step"></child3>
    <img id="image" src="url" alt="" />
    <img class="testimg" src="@/html/image/input_type.jpg" alt=""> -->
  </div>
</template>
<script>
import child2 from "./Child2";
import child3 from "./Child3";
import { base64 } from "./img";
export default {
  components: {
    child2,
    child3,
  },
  props: {
    firstValue: {
      type: String,
      requifred: true,
    },
    testValue: {
      type: String,
      default: "",
    },
    testObj: {
      type: Object,
    },
  },

  watch: {
    // "testObj.name": function (val) {
    //   console.log("watch testObj :" + val);
    // },
  },

  data() {
    return {
      step: true,
      url: "",
    };
  },
  created() {
    console.log("created:" + base64);
    let cus = ["1", "2", "3"];
    // cus = cus.join(",");
    if (cus) {
      console.log("lyl cus:" + cus);
    }
  },

  computed: {},
  filters: {
    testFilter(value) {
      return value + "!!!0";
    },
  },
  mounted() {
    console.log("lyl testValue:" + this.testValue);
    // this.base64();
    console.log(this.$parent);
    console.log("李跃龙 mounted");
    let test = new Test();
    test.test();
    const promise = new Promise((resolve, reject) => {
      console.log(1);
      resolve();
      console.log(2);
    }).then(() => {
      console.log(3);
    });

    console.log(4);
    // console.log("mounted");
    // console.log("lyl:" + this.testValue);
  },

  methods: {
    base64() {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let imagePath;
      let image = document.getElementById("image");
      //为了在方法内部的方法中使用this对象，相当于起别名。
      let _this = this;
      // let image = new Image();
      image.src = base64;

      image.onload = function (e) {
        let width = image.offsetWidth;
        console.log("width:" + width + "height:" + image.offsetHeight);
        let num = width / image.offsetHeight;
        if (width > 200) {
          //如果等比缩放可以计算宽度和长度，我这里不需要等比缩放，所以直接写死
          var anw = document.createAttribute("width");
          anw.nodeValue = 100;
          var anh = document.createAttribute("height");
          anh.nodeValue = 100 / num;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);
          ctx.drawImage(image, 0, 0, 100, 100 * num);
          imagePath = canvas.toDataURL();
          image.src = imagePath;
          console.log("imagePath:" + imagePath);
        }
      };
    },

    //全部替换
    replaceAll() {
      let str = "你好-你好-你好！！！";
      let rep = str.replace(/-/g, "");

      let str2 = "你好-你好-你好！！！";
      let rep2 = str2.replace(new RegExp("-", "g"), "");

      console.log("lyl", rep);
      console.log("lyl", rep2);
    },
    //子传父方法
    firstClick() {
      this.$emit("firstMethod", "123");
    },
    changeCom() {
      this.step = !this.step;
    },
    testMthod() {
      console.log("456");
      return "456";
    },
    skipThree() {
      this.step = !this.step;
    },
    hide() {
      // this.step = !this.step;
      // this.$emit("hide");
    },
  },
};
// function Test(){
//   console.log("lyl Test");
// }
class Test {
  constructor() {
    console.log("constructor");
  }

  test() {
    console.log("test");
  }
}
</script>
<style scoped>
.test {
  font-size: 20px;
  color: red;
  display: inline-block;
}
.testimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
