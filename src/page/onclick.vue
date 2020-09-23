<template>
  <div>
    <button @click="click_01()">按钮1</button>
    <button @click="click_02(abc)">按钮2</button>
    <button @click="click_03">按钮3</button>
    <button @click="click_04(132)">按钮4</button>
    <!-- 通过$event传入时间 -->
    <button @click="click_05($event)">按钮5</button>

    <br />

    <span>v-on的修饰符</span>

    <div @click="click_div()">
      11111
     <!-- 冒泡 -->
      <button @click.stop="click_07()">按钮6</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abc: "123",
    };
  },
  methods: {
    click_01() {
      console.log("click_01");
    },
    click_02(num) {
      console.log("click_02:" + num);
    },
    click_03() {
      console.log("click_03" + event);
    },
    click_04(num, event) {
      console.log("click_04");
    },
    click_05() {
      console.log("click_05" + event);
    },
    click_div() {
      console.log("click_div");
    },
    click_07() {
      console.log("click_06");
    },
  },
};
</script>