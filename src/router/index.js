import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import A from '@/components/a'
import B from '@/components/b'
import A1 from '@/components/a1'
import B1 from '@/components/b1'
import ERROR from '@/components/error'
import VueRouter from 'vue-router'
import testpage from '../page/testpage'
import parent from '../page/parent'
import slot from '../page/slot'
import dynamicStyle from '../page/dynamicStyle'
import table from '../page/table'
import store from '../page/store'
import onclick from '../page/onclick'
Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'first',
//     component: First,
//     children: [{
//       path: '/a',
//       name: 'a',
//       component: A
//     },
//     {
//       path: '/A1', 
//       component: A1
//     },
//     {
//       path: '/error',
//       name: "haha",
//       component: ERROR,
//     },
//     //子路由的实现，注意子路由 同一个页面显示父页面和子页面
//     {
//       path: '/b',
//       name: 'b',
//       component: B,
//       children: [{
//         path: '/B1',
//         component: B1
//       }]
//     }]
//   },

// ]

// const routertest = new VueRouter({
//   routers
// })

export default new VueRouter({
  routes:[
    {
      path: '/',
      name: 'first',
      component: First,
      children: [
      {
        path: '/A1', 
        component: A1
      },
      {
        path: '/testpage', 
        component: testpage
      },
      {
        path: '/parent', 
        component: parent
      },
      {
        path: '/onclick', 
        component: onclick
      },
      {
        path: '/slot', 
        component: slot
      },
      {
        path: '/dynamicStyle', 
        component: dynamicStyle
      },
      {
        path: '/table', 
        component: table
      },{
        path: '/store', 
        component: store
      },
      {
        path: '/error',
        name: "haha",
        component: ERROR,
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
      }],
    },
    {
      path: '/a',
      name: 'a',
      component: A
    },
  
  ]
})
