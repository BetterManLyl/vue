<template>
  <div class="content">
    <p class="p1">  我是A1</p>
    <p><router-link to="/A">返回上一级</router-link></p>
    <p><router-link to="/">返回首页</router-link></p>
    <!--拿到上个页面传过来的值-->
    <h1>{{userId}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
};
</script>
</style>