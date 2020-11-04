<template>
  <div>
    我是子组件下面是
    <p>接收来自父组件的消息{{ username }}{{ age }}{{ firstname }}</p>

    <button @click="sendMsg()">发送消息给父组件</button>
    <input
      type="button"
      value="点击我修改user里面的username"
      @click="changeUsername"
    />
    <button @click="requestUrl">点击我使用axios进行网络请求</button>
    <p>{{ user.username }}</p>
    <!--使用v-bind和 v-on实现v-model-->
    <input
      ref="testref"
      @input="handleInput($event)"
      type="text"
      placeholder="how are you"
      v-bind:value="message"
    />
    <input v-model.lazy="message" placeholder="请输入" />
    <input v-model="user.username" placeholder="请输入" />
    <input type="checkbox" v-model="isCheck" />
    <p>{{ "输入的内容是：" + message }}</p>
    <div class="changeList">
      <p v-for="item in changeList">{{ item.value }}</p>
    </div>
     <div class="changeList">
      <p v-for="item in newList">{{ item.value }}</p>
    </div>
    <loading></loading>
  </div>
</template>

<script>
export default {
  name: "child01",
  data() {
    return {
      num: 13,
      data: 56,
      user: {
        username: "lyl",
        sex: "男",
        age: "18",
      },
      message: "你好",
      isCheck: true,
      changeList: [
        {
          key: "cml",
          value: "陈曼丽",
        },
        {
          key: "lyl",
          value: "李跃龙",
        },
        {
          key: "tb",
          value: "李糖宝",
        },
        {
          key: "lyy",
          value: "老爷爷",
        },
      ],
      returnJson: '{"lyl":"李跃龙","cml":"陈曼丽"}',
      newList:[]
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
     * 注意，监听方法会被覆盖 同时使用方法三和方法二 只会执行方法三
     */
    "user.username": function (old, now) {
      console.log("old username:" + old + " now:" + now);
    },
  },
  /**
   * 获取父组件传递过来的值
   */
  props: {
    userdata: {
      type: Object,
      default() {
        return {};
      },
    },
    username: {
      type: [String, Number], //类型可以是多种
      required: true,
    },
    age: {
      type: Number, //规定值的类型
      required: true, //必须传值，否则报错
    },
    firstname: String,
    userage: String,
  },

  /**
   * 钩子函数 created
   */
  created: function () {
    console.log("created:" + this.username);
    console.log("created 2:" + this.userage);

    let _this = this;
    // this.changeList.filter(function (item) {
    //   console.log("item:" + item.value);
    //   // if (item.value.indexOf()) {
    //   //   newList.push(item);
    //   // }
    //   if (_this.returnJson.match(item.key)) {
    //     this.newList.push(item);
    //   }
    // });

let json=JSON.parse(_this.returnJson)
    for (var key in json) {
      console.log("key:" + key);
      for (let item of this.changeList) {
        if (key.match(item.key)) {
          this.newList.push(item);
        }
      }
      // this.changeList.filter(function (item) {});
    }
    console.log(this.newList.length);
    let jsontest={
          key: "test",
          value: "test",
    }

this.newList.unshift(jsontest);
console.log('newList:'+this.newList[0].value);

  },
  /**
   * 方法体
   */
  methods: {
    testPromise(data) {
      return new Promise(function (resolve, reject) {
        if (data > 5) {
          console.log("Promise执行");
          resolve(data);
        } else {
          reject("数据都是不大于5");
        }
      });
    },

    function1(data) {
      var _this = this;
      console.log("function1执行");
      this.testPromise(data)
        .then(function (num) {
          console.log("then方法执行");
        })
        .catch(function (num) {
          console.log("catch方法执行" + num);
        });
    },
    sendMsg() {
      // this.$router.push({ path: "/A1" });
      this.$refs.testref.value = "89898989";
      this.function1(12);
      this.$mydialog("你好", "测试log", 3000);

      this.$emit("getMsg", this.num++);
      if (this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
    changeUsername() {
      this.user.username += "cml";
    },
    //使用axios进行网络请求
    requestUrl() {
      var url =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http
        .get(url)
        .then(function (res) {
          console.log("请求到的数据66666：" + res);
        })
        .catch((error) => {
          console.log("出错了" + error);
        });
    },
    handleInput: function (event) {
      console.log(event);
      console.log(event.data);
      this.message = event.target.value;
      this.username = event.target.value;
    },
  },
};
</script>

<style >
.backBlack {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>