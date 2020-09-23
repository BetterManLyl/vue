<template>
  <div style="margin-top :50px">
    <!-- <p v-if="isShow">你好</p>
    <p v-else>你叫什么名字</p>-->

    <!--加个 key 防止虚拟dom进行复用-->
    <span>if-else</span>
    <br />
    <span v-if="isShow">
      <label for="username">用户账号</label>
      <input id="username" placeholder="请输入用户账号" key="username" />
    </span>
    <span v-else>
      <label for="email">用户邮箱</label>
      <input placeholder="请输入用户邮箱" id="email" key="email" />
    </span>
    <span>
      <button @click="switch_()">切换类型</button>
    </span>

    <br />
    <span v-show="isShow">
      <label for="username_">用户账号</label>
      <input id="username_" placeholder="请输入用户账号" />
    </span>
    <span v-show="!isShow">
      <label for="email_">用户邮箱</label>
      <input placeholder="请输入用户邮箱" id="email_" />
    </span>
    <span>
      <button @click="switch_()">切换类型</button>
    </span>
    <br />
    <button @click="addItem()">添加元素</button>
    <p v-for="(item,i) in list" :key="i">第{{i+1}}个{{item.name}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      list: [
        {
          key: 1,
          name: "lyl",
        },
        {
          key: 2,
          name: "cml",
        },
        {
          key: 3,
          name: "lmc",
        },
        {
          key: 4,
          name: "haha",
        },
      ],
    };
  },
  methods: {
    switch_() {
      this.isShow = !this.isShow;
    },
    addItem(){
      let item_01={key:5,name:'qq'}
      //push是往最后的位置添加
      // this.list.push(item_01)
      //unshift在最前的位置添加
      this.list.unshift(item_01);
    }
  },
};
</script>