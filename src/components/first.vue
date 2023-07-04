<template>
  <div>
    <!--可以设置tag属性-->
    <router-link tag="button" active-class="active" to="/one">转向A页面</router-link>
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
    <router-link to="/bookshop">综合练习购物车</router-link>
    <p @click="goPage" v-if="goBack">返回上一页</p>
    <router-link to="/takephoto">拍照</router-link>
    <router-link to="/studycss">学习css</router-link>
    <router-link to="/studycss2">学习css</router-link>
    <router-link to="/jsfunction">js常用方法总结</router-link>
    <router-link to="/comfather">父子组件</router-link>
    <router-link to="/iframee">Iframe的使用</router-link>
    <br />
    <router-link to="/promise">promise</router-link>
    <router-link to="/computed">computed使用测试</router-link>
    <router-link to="/arrowfunc">箭头函数</router-link>
    <router-link to="router_save">导航守卫</router-link>
    <button @click="skip">跳转</button>
    <router-view > </router-view>
    <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      goBack: false,
    };
  },
  
  created(){
    let arry = [1,2,3,4]

    console.log(...arry)

    let num2 = [...arry];

 console.log(num2)
  },
  methods: {
    goPage() {
      // this.$router.push({path:'/A1'});
      // this.$router.go(-1);
      this.$router.push({ path: "/A1" });
    },
    skip() {
      this.$router.push({
        path: '/testpage', query: {
          a: '1'
        }
      })

    }
  },
};
</script>
<!--scoped只对当前页面有效果-->
<style scoped>
.router-link-active {
  color: red;
}

p {
  color: red;
}
</style>
>
