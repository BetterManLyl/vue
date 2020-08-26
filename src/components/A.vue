<template>
  <div>
    <p>这是A页面</p>
    <router-link to="/">返回</router-link>
    <router-link to="/A1">转向A1</router-link>
    <!--子路由的实现需要在父视图里面添加</router-view>-->
    <router-view></router-view>
  </div>
</template>

<style>
</style>