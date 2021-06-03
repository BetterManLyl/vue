// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vconsole from 'vconsole';
import test from './common/js/test'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
let vConsole = new Vconsole();
export default vConsole

//导入store
import store from '../src/store'
import dialog from '../src/common/js/dialog'
//使用全局的loading
import loading from '../src/common/components/loading/loading'
import ElementUi from 'element-ui'
import  globalf from '../src/common/js/global.js'

//配置axios 全局使用  $后的名字为自定义
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$test = test
Vue.use(ElementUI);
//use
Vue.use(loading)
Vue.use(dialog);
Vue.use(ElementUi);
Vue.mixin(globalf);
// 图片转base64格式 挂载在全局
Vue.prototype.$base64Img = (e) => {
  return new Promise(function (resolve, reject) { // 使用Promise进行异步处理
    let fileSize = 0
    const fileMaxSize = 1024 // 设置图片最大为 1M
    fileSize = e.target.files[0].size // 获取图片大小
    const size = fileSize / 1024
    const file = e.target.files[0] // 获取图片文件对象
    const reader = new FileReader() // 实例化一个对象
    if (size > fileMaxSize) {
      e.target.value = '' // 内容清空
      resolve({ err: '图片大小必须小于1M' })
    } else if (size <= 0) {
      e.target.value = '' // 内容清空
      resolve({ err: '图片大小大小不能为0M' })
    } else {
      reader.readAsDataURL(file) // 把图片文件对象转换base64
      reader.onload = function (e) {
        resolve(e.target.result) // 回到函数返回base64值
      }
    }
  })
}
/* eslint-disable no-new */
new Vue({
  el: '#app', //app的实例，找到index.html id为“app”的
  store, //使用store
  router,
  components: {
    App
  }, //app的组件
  template: '<App/>',

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
