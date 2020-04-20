import Vue from 'vue'
import Router from 'vue-router'

// 使用router 插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    }, {
      path: '/home',
      name: 'home',
      component: () => import('@/components/Home')
    },
    {
      path: '/login',
      component: () => import('@/components/login'),
      hidden: true
    },
  ]
})
