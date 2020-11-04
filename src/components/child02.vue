<template>
  <div style="margin-top: 120px">
    这是child02

    <p>{{ userData.username}}</p>
    <br />
    <button @click="changeUsername()">修改username值</button>
    <button @click="fashe()">发送消息给父组件</button>
    <slot><p>1111</p></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"lyl"
    };
  },
  created() {
    console.log(" child02 username:" + this.username);
  },
  props: {
    userData: {
      type: Object,
      default() {
        return {};
      },
    },
    username: {
      type: String,
      require: true,
    },
  },
  computed: {},
  methods: {
    //不能改变props属性值
    changeUsername() {
      this.username = "cml";
      console.log('changeUsername');
      
    },
    fashe(){
      console.log('ttt');
      
      this.$emit("testfashe");
    },

    testrefs(){
      console.log('testrefs');
    }
  },
  watch: {
    username() {
      console.log("username changed " + this.username);
    },
  },
};
</script>