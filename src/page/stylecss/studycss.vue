<template>
  <div class="content">
    <span class="test" @click="listTest()">学习css</span>
    <!--多样式选择-->
    <!--<p class="test content">你好</p>-->

    <div class="in_content1">
      <!--<button class="btnAdd">添加</button>-->
      <p class="test_align" @click="testclick">测试</p>
    </div>
    <div>
      学习font
      <div class="fontstyle">
        <h1>标题大小</h1>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="fontstyle">设置字体样式</p>
        <p class="setdecoration">设置字体样式</p>
        <em>测试斜体</em>

        <p>
          <a class="nounderline" href="">百度一下 </a>
        </p>
      </div>
    </div>
    <button @click="show()">添加</button>
    <p>{{ numbers }}</p>
    <div v-show="isShow">测试computed属性</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "123",
      isShow: false,
      list: [],
      // numbers: 0,
    };
  },
  methods: {
    created() {
      this.list = 1;
      console.log("list:" + this.list);
    },
    mounted() {
      this.list = 1;
      console.log("list:" + this.list);
    },
    listTest() {
      this.list = "1";
      console.log("list:" + this.list.indexOf("1"));
    },
    testclick() {
      let test = [1, 2, 3];
      test.join(",");
      console.log("test:" + test);

      var arr = [1, 2, 3, 4, "巴德", "merge"];
      var str = arr.join(",");
      console.log(str); // 1,2,3,4,巴德,merge
    },
    show() {
      eval("this.test='4655656'");
      console.log(this.test);
    },
  },
  computed: {
    numbers: {
      get() {
        return 465;
      },
      set(val) {
        val++;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
//通配符选择器
* {
  // color: blue;
}
.content {
  scroll-behavior: auto;
  margin: 0;
  padding: 0;
  width: 100%;
  background: no-repeat;
  // background-position: center top;
  background-position: 120px 50px;
  //背景不动
  background-attachment: fixed;
  background-image: url("../../static/img/background.jpg");

  .test {
    font-size: 16px;
    vertical-align: 30px;
  }
  .btnAdd {
    margin-right: 100px;
    float: right;
    color: aqua;
    background-color: blue;
    border: burlywood;
  }
  .test_align {
    margin: auto;
  }
  .fontstyle {
    line-height: 20px;
    font-size: 30px;
    font-family: "宋体";
    font-weight: bold;
    text-align: left; //只能设置水平对齐方式，不能设置垂直对齐
  }
  .setdecoration {
    text-decoration: line-through; //none
    text-indent: 20px;
  }
  .nounderline {
    text-decoration: none;
    .a {
      font-size: 16sp;
    }
  }
}
</style>
