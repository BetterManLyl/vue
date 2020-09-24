<template>
  <div :class="{ margin: ismargin }">
    <p :class="{ textColor: isRed }">动态绑定样式</p>
    <!--动态绑定class样式  background为样式名称  isActive是data里面的布尔值-->
    <button :class="{ background: isActive }">你好</button>
    <!--active的引号 可加 也可以不加-->
    <button :class="{ active: isActive == index }" @click="changeStyle">
      点击修改样式
    </button>
    <p :class="{ textColor: isRed, background: isActive }">
      绑定并判断多个样式
    </p>

    <!--注意  这里的单引号 不能去掉-->
    <p :class="[isActive ? 'style1' : 'style2']" class="class01">
      通过三元运算符判断使用样式
    </p>

    <!--{}里面跟着的是对象-->
    <!-- <p v-bind:class="{"key:value key:value"}"></p> -->
    <!-- <p v-bind:class="{类名1：boolean , 类名2:boolean}"></p> -->
    <p :class="{ class1: isClass1, class2: isClass2 }">你好</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      ismargin: true,
      isRed: true,
      index: 0,
      isClass1: false,
      isClass2: true,
    };
  },
  methods: {
    changeStyle() {
      this.isActive = !this.isActive;
      new Promise(function (resolve, reject) {});
    },
  },
  computed: {},
};
</script>
<style >
.background {
  width: 200px;
}
* {
  color: black;
}
.style1 {
  color: red;
}
.style2 {
  color: purple;
}
.class01 {
  color: green;
}
.margin {
  margin-top: 100px;
}
.textColor {
  color: red;
}
.active {
  width: 200px;
}
.class1 {
  color: red;
}
.class2 {
  color: yellow;
}
</style>