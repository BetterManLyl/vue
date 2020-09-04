
<template>
  <div>
    <router-link to="/a">转向A页面</router-link>
    <router-link to="/b">转向B页面</router-link>
    <router-link to="/error">转向404页面</router-link>
    <router-link to="/testpage">转向study页面</router-link>
    <router-link to="/parent">转向父页面</router-link>
    <router-link to="/slot">插槽</router-link>
<router-link to="/dynamicStyle">动态绑定样式</router-link>
    <router-view></router-view>
  </div>
</template>

