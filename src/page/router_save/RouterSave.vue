<template>
  <div class="container">
    <div>
      <div>{{ message }}</div>
      <button @click="gtouchstart()">计算宽高</button>
      <button @click="elevate2">计算宽高2</button>
      <button @click="getScreenSize">获取分辨率</button>

      <button @tap="tapClick()">tap事件</button>

      <div class="testdiv" v-show="false">
        <div
          @tap="tapClick()"
          v-show="false"
          sstyle="position:absolute"
          @click.stop="click1()"
        >
          事件冒泡
        </div>
        <div v-show="isShow">
          <button @touchstart="gtouchstart()" @click="clickMe">点击我</button>
        </div>
      </div>

      <div>
        <div class="show1" @click="show1($event)">
          <div @touchstart="gtouchstart()" class="show2" @click="show2($event)">
            点击我呀
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "缓存",
      enterName: "",
      isShow: false,
    };
  },
  created() {},
  mounted() {
    //返回当前显示设备的物理像素分辨率与 CSS 像素分辨率的比率
    console.log("lyl devicePixelRatio:" + window.devicePixelRatio);
    console.log("mounted");
    if (this.enterName == "arrowfunc") {
      this.message = "arrowfunc";
      return;
    }
    this.message = "路由";
    console.log("current route path:" + this.$route.name);
  },
  beforeDestroy() {},
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log("from:", from);
    // if (from.name == "arrowfunc") {
    //   // 设置下一个路由的 meta
    //   to.meta.keepAlive = false; // 让 A 不缓存，即刷新
    // }
    // this.enterName = from.name;
    next((vm) => {
      //因为当钩子执行前，组件实例还没被创建 next里面的回调在mounted之后才会执行
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      // 通过 `vm` 访问组件实例
      vm.message = from.name;
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`

    this.enterName = from.name;
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  },
  methods: {
    tapClick() {
      console.log("tapclick");
    },
    show1(e) {
      e.stopPropagation();
      console.log("show1" + e.target);
    },
    show2(e) {
      console.log("classList:" + e.target.classList[0]);
      console.log("show2");
    },
    clickMe() {
      console.log("clickMe");
    },
    async gtouchstart() {
      console.log("gtouchstart");

      // setTimeout(() => {
      //   console.log("2000")
      // }, 2000);

      let test = await this.testP();

      // new Promise((resolve,reject)=>{

      // })

      console.log("3000");
    },

    async testP() {
      return new Promise((resolve) => {
        console.log("lyl peo");
         setTimeout(() => {
           console.log("lyl peo111");
           resolve();
         }, 2000);
      });
    },

    bodyTouchMove() {
      console.log("bodyTouchMove");
    },
    bodyTouchEnd() {
      console.log("bodyTouchEnd");
    },
    click1() {
      console.log("click1");
      this.isShow = true;
    },
    elevate() {
      let size = window.Android.getScreenSize();
      size = JSON.parse(size);
      console.log("lyl:" + size);
      //总高度
      let height = size.height;
      //总宽度
      let width = size.width;
      console.log("lyl height:" + height + " width:" + width);
      //pad高度
      let padHeight = (height - height * 0.1) / 2;
      let padWidth = padHeight;
      //fes宽度
      let fesWidth = width - padHeight;
      //fes高度
      let fesHeight = height - height * 0.1;

      //广告宽高
      let adsWidth = padHeight;
      let adsHeight = padHeight;
      console.log(
        "padWidth:" +
          padWidth +
          " padHeight:" +
          padHeight +
          " fesWidth:" +
          fesWidth +
          " fesHeight:" +
          fesHeight
      );
    },
    elevate2() {
      let poseMessage = {
        type: "test",
        name: "lyl test",
      };
      window.postMessage(poseMessage, "*");
      let devicePixelRatio = window.devicePixelRatio;
      console.log("devicePixelRatio:" + devicePixelRatio);

      //总高度
      let height = window.screen.height * devicePixelRatio;
      //总宽度
      let width = window.screen.width * devicePixelRatio;
      console.log("lyl height:" + height + " width:" + width);
      //pad高度
      let padHeight = (height - height * 0.1) / 2;
      let padWidth = padHeight;
      //fes宽度
      let fesWidth = width - padHeight;
      //fes高度
      let fesHeight = height - height * 0.1;

      //广告宽高
      let adsWidth = padHeight;
      let adsHeight = padHeight;
      console.log(
        "padWidth:" +
          padWidth +
          " padHeight:" +
          padHeight +
          " fesWidth:" +
          fesWidth +
          " fesHeight:" +
          fesHeight
      );
    },
    getScreenSize() {
      let webHeight = document.body.clientHeight;
      let webWidth = document.body.clientWidth;

      console.log("webHeight:" + webHeight + " webWidth:" + webWidth);

      let int = window.Android.getScreenSize();
      console.log("lyl:" + JSON.stringify(int));
    },
  },
};
</script>
<style >
.container {
  background-color: #ff0000;
}
.testdiv {
  display: flex;
  background: #fff;
  position: absolute;
}
</style>
