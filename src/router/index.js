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
import v_key from '../page/v_key'
import bookshop from '../page/bookshop'
import takephoto from '../page/takephoto'
import studycss from '../page/stylecss/studycss'
import studycss2 from '../page/stylecss/studycss2'
import jsfunction from '../page/jsfunction'
import ComFather from '../page/components-types/ComFather'
import iframee from '../page/iframe/iframee'
import promise from '../page/promise/PromiseEx'
import computed from '../page/computed/ComputedTe'
import arrowfunc from '../page/arrowfunc/ArrowFunc.vue'
import router_save from '../page/router_save/RouterSave.vue'
import one from '../page/One.vue'
import two from '../page/Two.vue'
import three from '../page/Three.vue'

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
  //history 该模式，地址栏不会有"#"
  // mode: "history",
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'first',
      // redirect:false?'/':'/a',
      component: First,
      children: [
        {
          path: '/A1/:userId',
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
        }, {
          path: '/v_key',
          component: v_key
        },
        {
          path: '/bookshop',
          component: bookshop
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
        }, {
          path: '/store',
          component: store
        },
        {
          path: '/error',
          name: "haha",
          component: ERROR,
        },
        {
          path: '/takephoto',
          name: "haha",
          component: takephoto,
        },
        {
          path: '/studycss',
          name: "studycss",
          component: studycss,
        },
        {
          path: '/jsfunction',
          name: "jsfunction",
          component: jsfunction,
        },
        {
          path: '/comfather',
          name: "ComFather",
          component: ComFather,
        },
        {
          path: '/iframee',
          name: "iframee",
          component: iframee,
        },
        {
          path: '/router_save',
          name: "router_save",
          component: router_save,
          meta: { keepAlive: true }, //true缓存 false不缓存 还需要在路由跳转里面设置keep-alive
          beforeEnter: (to, from, next) => {
            console.log("lyllylyl");
            next((vm)=>{
              console.log("lyllylyl",from);
            });
          }

        },
        {
          path: '/promise',
          name: "promise",
          component: promise,
        },
        {
          path: '/computed',
          name: "computed",
          component: computed,
        },
        {
          path: '/studycss2',
          name: "studycss2",
          component: studycss2,
        },
        {
          path: '/arrowfunc',
          name: "arrowfunc",
          component: arrowfunc,
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

    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
  ]
})
