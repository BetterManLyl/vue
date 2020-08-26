import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import A from '@/components/a'
import B from '@/components/b'
import A1 from '@/components/a1'
import B1 from '@/components/b1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: First,
      children: [{
        path: '/a',
        name: 'a',
        component: A
      },
      {
        path: '/A1',
        component: A1
      },
      //子路由的实现，注意子路由 同一个页面显示父页面和子页面
      {
        path: '/b',
        name: 'b',
        component: B,
        children: [{
          path: '/B1',
          component: B1
        }]
      }]
    },

  ]
})
