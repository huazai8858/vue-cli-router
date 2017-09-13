import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Table from '@/components/table'
import World from '@/components/World'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/Hello.vue'], resolve)
    },
    {
      path: '/hello',
      component: resolve => require(['@/components/Hello.vue'], resolve),
      children: [
        {
          path: '/hello/world',
          component: World
        }
      ]

    },
    { path: '/table', component: resolve => require(['@/components/table.vue'], resolve) }
  ]
})
