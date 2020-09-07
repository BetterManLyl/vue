// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


//导入store
import store from '../src/store'
import dialog from '../src/common/js/dialog'
//使用全局的loading
import loading from '../src/common/components/loading/loading'
import ElementUi from 'element-ui'

//配置axios 全局使用  $后的名字为自定义
Vue.prototype.$http = axios
Vue.config.productionTip = false

//use
Vue.use(loading)
Vue.use(dialog);
Vue.use(ElementUi);


/* eslint-disable no-new */
new Vue({
  el: '#app',//app的实例，找到index.html id为“app”的
  store,//使用store
  router,
  components: { App },//app的组件
  template: '<App/>'
})
//全局组件,在template中只能有一个div类型的根标签。放在Vue实例前面。
// Vue.component(
//   'my-componetn', {
//   template: `
//   <div>
//       <h2>Hello</h2>
//       <p>{{name}}</p>
//       <button @click="changeName()">changeName</button>
//   </div>`,
//   data() {
//     return {
//       name: "Vue"
//     }
//   },
//   methods: {
//     changeName() {
//       this.name = "qwe"
//     }
//   }
// })

// Vue.component("counter",{    //1.组件名为"conter"; 2.data 写函数; 3.template 写组件的内容（元素和触发的事件）
// 	data:function(){
// 			return {count:0}
// 			},

// //template 是模板的意思，在 html 里面是一个可以同时控制多个子元素的父元素。在这里定义了组件的内容
// 	template:'<button v-on:click="count++">点击计算点击次数：{{count}}次</button>'
// })