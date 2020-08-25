import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import A from '@/components/a'
import B from '@/components/b'
import A1 from '@/components/a1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: First
    },
    {
      path: '/a',
      name: 'a',
      component: A,
      children: [{
        path: '/A1',
        component: A1
      }]
    },
    {
      path: '/b',
      name: 'b',
      component: B
    },
  ]
})
