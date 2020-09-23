
<template>
  <div>
    <router-link to="/a">转向A页面</router-link>
    <router-link to="/b">转向B页面</router-link>
    <router-link to="/error">转向404页面</router-link>
    <router-link to="/testpage">转向study页面</router-link>
    <router-link to="/parent">转向父页面</router-link>
    <router-link to="/slot">插槽</router-link>
    <router-link to="/dynamicStyle">动态绑定样式</router-link>
    <router-link to="/table">表格</router-link>
    <br />
    <router-link to="/store">store测试</router-link>
    <router-link to="/onclick">事件监听</router-link>
    <router-link to="/v_key">条件选择</router-link>
    <p @click="goPage" v-if="goBack">返回上一页</p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goBack: false,
    };
  },
  methods: {
    goPage() {
      // this.$router.push({path:'/A1'});
      // this.$router.go(-1);
      this.$router.push({ path: "/A1" });
    },
  },
};
</script>
