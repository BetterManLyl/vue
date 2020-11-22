<template>
  <div>
    <p @click="test()">这是A页面</p>
    <!--v-text="msg"与下面绑定的效果一样-->
    <p v-text="msg" />
    <p>{{ msg }}</p>
    <h1 @click="testme(msg)">你叫什么名字</h1>
    <p>测试全局变量{{ this.$store.state.count }}</p>
    <router-link to="/">返回</router-link>
    <router-link to="/A1">转向A1</router-link>
    <div v-for="(item, index) in List">
      <span
        ><p>{{ index }}</p>
        <p v-show="item.isShow">请输入值</p>
        <input
          @blur="blur(index)"
          @change="change(index)"
          v-model="item.input"
          @input="inputChange(index)"
          placeholder="请输入"
      /></span>
    </div>
    <button @click="addItem()">添加</button>
    <button @click="listItem()">当前数据</button>
    <button @click="submit()">提交</button>
    <!--子路由的实现需要在父视图里面添加</router-view>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "123",
      List: [],
      testList: [
        { key: "one", value: "1" },
        { key: "two", value: "2" },
        { key: "three", value: "3" },
      ],
    };
  },
  methods: {
    test: function (params) {
      console.log(this.msg);
      alert("haha");
    },
    testme: function (params) {
      console.log(params);
    },
    addItem() {
      let obj = {
        key: "1",
        value: "1",
        input: "",
        isShow: false,
      };
      this.List.push(obj);
    },
    listItem() {
      for (let item of this.List) {
        console.log("item:" + item.input);
      }

      for (let item of this.testList) {
        if("one"==item.key){
console.log('哈哈哈哈');

        }
       console.log('item:'+item.key+" "+item.value);
       
      }
    },
    submit() {
      for (let index in this.List) {
        if (this.List[index].input.length <= 0) {
          this.List[index].isShow = true;
          console.log("请在第" + index + "输入值");
        }
      }
    },
    blur(index) {
      console.log(" blur index:" + index + " value:" + this.List[index].input);
      for (let index in this.List) {
        if (this.List[index].input.length <= 0) {
          this.List[index].isShow = true;
          console.log("请在第" + index + "输入值");
        }
      }
    },
    change(index, event) {
      console.log(" change index:" + index);
    },

    inputChange(index) {
      this.List[index].isShow = false;
      console.log("change：" + event.target.value);
    },
  },
  mounted() {
    this.List.push({
      key: "1",
      value: "1",
      input: "",
    });
  },

  // data:{
  //   msg : '456',
  // }
};
</script>
<style>
</style>