<template>
  <div :class="{margin:ismargin}">
    <p :class="{textColor:isRed}">动态绑定样式</p>
    <!--动态绑定class样式  background为样式名称  isActive是data里面的布尔值-->
    <button :class="{background:isActive}">你好</button>
    <!--active的引号 可加 也可以不加-->
    <button :class="{'active':isActive==index}" @click="changeStyle">点击修改样式</button>
    <p :class="{textColor:isRed,background:isActive}">绑定并判断多个样式</p>

    <!--注意  这里的单引号 不能去掉-->
    <p :class="[isActive?'style1':'style2']">通过三元运算符判断使用样式</p>
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
    };
  },
  methods: {
    changeStyle() {
      this.isActive = !this.isActive;
    },
  },
  computed: {},
};
</script>
<style >
.background {
  width: 200px;
}
.style1 {
  color: red;
}
.style2 {
  color: purple;
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
</style>