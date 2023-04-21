<template>
  <div class="66666666666666">
    这是父组件

    <!-- <child1 ref="child1" :firstValue="firstValue" @firstMethod="firstMethod"></child1>
    <component :is="pagetype"></component>
    <button @click="testCallChild">测试通过ref方式 调用子组件方法</button>
    <button @click="changeDymicPage">动态切换组件</button>

    <button @click="changeStaticPage">静态切换组件</button>
    <child3 v-if="step"></child3>
    <child4 v-if="!step"></child4>

    <br />
    <br /> -->

    <h1>测试子组件包含子组件</h1>
    <button @click="show">展示</button>
    <button @click="change">修改父组件值，测试子组件是否修改</button>

    <input type="text" placeholder="请输入" id="password">

    <button @click="testShake">提交</button>

    <div class="item">
      <p>
        test
      </p>
    </div>

    <!--:testValue="testValue"-->
    <child1 v-if="isShow" @hide="hide" :testObj="testObj"></child1>
  </div>
</template>
<script>
import child1 from "./Child1";
import child2 from "./Child2";
import child3 from "./Child3";
import child4 from "./Child4";
import a from "../mixin/amix";
import b from "../mixin/bmix";
export default {
  components: {
    child1,
    child2,
    child3,
    child4,
  },
  mixins: [a, b],
  data() {
    return {
      firstValue: "这是firstValue",
      pagetype: child1,
      step: true,
      isShow: false,
      testValue: "你好",
      testObj: {
        name: "lyl",
      },
      name:"parent"
    };
  },

  beforeRouteEnter(to, from, next) {
    console.log("lyl beforeRouteEnter:" + to + " from:" + from);
    next((vm) => {
      // 通过 `vm` 访问组件实例
      console.log("lyl beforeRouteEnter");
    });

  },

  beforeRouteLeave(to, from, next) {
    console.log("lyl beforeRouteLeave:" + to + " from:" + from);

    alert("当前修改还未保存！");
    next();
  },

  destroyed() {
    console.log("lyl destroyed");
  },

  mounted() {

    console.log('测试mixa:'+this.name);
    


    let num = this.addDecimals(2.1, 2.1);
    console.log("lyl num:" + num)
    let num2 = this.addDecimals2(2.12, 2.12);
    console.log("lyl num2:" + num2)
    // document.addEventListener("touched", function () {
    //   console.log("组件touch");
    // });
    console.log("0000");
    // console.log(this);
    // window.postMessage("发送消息到testListener","*");
    // 子页面发送消息
    // window.top.postMessage("close", "*");
    this.firstMethod("");
  },
  methods: {
    addDecimals(a, b) { // 将小数转换为整数
      let aInt = a * Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
      let bInt = b * Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
      // 计算整数之和 
      let sumInt = aInt + bInt;
      // 返回小数之和 
      return sumInt / Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
    },
    addDecimals2(a, b) { // 将小数转换为整数
      return a + b;
    },
    async test() {
      return "222";
    },

    testShake() {
      this.shake("password")
    },

    shake(elemId) {
      let elem = document.getElementById(elemId);
      if (elem) {
        elem.classList.add('shake');
        setTimeout(() => { elem.classList.remove('shake') }, 800)
      }
    },

    firstMethod(value) {
      this.test().then((data) => {
        console.log("lyl data:" + data);
      });
      console.log("value:" + value);
    },
    //通过refs方式调用自附件里面的方法
    testCallChild() {
      let test = this.$refs.child1.testMthod();
      console.log(test);
    },
    changeDymicPage() {
      if (this.pagetype == child1) {
        this.pagetype = child2;
      } else {
        this.pagetype = child1;
      }
    },
    changeStaticPage() {
      this.step = !this.step;
    },
    hide() {
      this.isShow = false;
    },
    show() {
      this.isShow = !this.isShow;
    },
    change() {
      this.testValue = Math.random() + "cml";
      this.testObj.name = Math.random() + "cml";
    },
  },
};
</script>
<style  scoped lang="scss">
.item {
  width: 100px;
  height: 150px;
  background: #FFF;
  border-radius: 5px;
  background: #ff0;
}

.item:hover {
  animation-delay: 0s;
  animation-name: shock;
  animation-duration: .1s;
  animation-iteration-count: 3;
  animation-direction: normal;
  animation-timing-function: linear;
}

@keyframes shock {
  0% {
    margin-left: 0px;
    margin-right: 5px;
    margin-top: 0px;
  }

  100% {
    margin-left: 5px;
    margin-right: 0px;
    margin-top: 5px;
  }
}

.shake {
  border-color: red;
  animation: shake 800ms ease-in-out;
}

@keyframes shake {

  /* 动画需：“对称”实现 */
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(+2px, 0, 0);
  }

  30%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(+4px, 0, 0);
  }

  50% {
    transform: translate3d(-4px, 0, 0);
  }
}
</style>
