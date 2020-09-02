<template>
  <div>
    我是子组件下面是
    <p>接收来自父组件的消息{{username}}{{age}}{{firstname}}</p>

    <button @click="sendMsg()">发送消息给父组件</button>
    <input type="button" value="点击我修改user里面的username" @click="changeUsername" />
  </div>
</template>

<script>
export default {
  name: "child01",
  data() {
    return {
      num: 13,
      user: {
        username: "lyl",
        sex: "男",
        age: "18",
      },
    };
  },

  //监听data里面数据的改变
  watch: {
    /*
     *监听num数据的改变
     *@params old 旧数据
     *@params now 新数据
     */
    num: function (old, now) {
      console.log("old:" + old + " now:" + now);
    },

    /**
     * 写法一：
     * 监听user更新，只要有属性值修改 都会监听到
     */
    user: {
      handler: function (old, now) {
        console.log("old username:" + old + " now:" + now);
      },
      deep: true,
    },
    /**
     * 写法二：
     * 监听user对象里面username属性的更新
     */
    "user.username": {
      handler: function (old, now) {
        console.log("old username:" + old + " now:" + now);
      },
    },

    /**
     * 写法三：
     */
    "user.username": function (old, now) {
      console.log("old username:" + old + " now:" + now);
    },
  },
  /**
   * 获取父组件传递过来的值
   */
  props: {
    username: {
      type: [String, Number], //类型可以是多种
      required: true,
    },
    age: {
      type: Number, //规定值的类型
      required: true, //必须传值，否则报错
    },
    firstname: String,
  },
  /**
   * 钩子函数 created
   */
  created: function () {
    console.log("created:" + this.username);
  },
  /**
   * 方法体
   */
  methods: {
    sendMsg() {
      this.$emit("getMsg", this.num++);
    },
    changeUsername() {
      this.user.username += "cml";
    },
  },
};
</script>