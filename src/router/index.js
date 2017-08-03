import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/layout/Index'

import Login from '@/session/Login'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/login', component: Login},
    {
      path: '/',
      component: Index,
      children: [
        {path: '/home', component: resolve => require( ['@/home/Home.vue'] , resolve ) },
        {path: '/teacher', component: resolve => require(['@/teacher/List.vue'], resolve)},
        {path: '/teacher/list2', component: resolve => require(['@/teacher/List2.vue'], resolve)},
        {path: '/teacher/edit', component: resolve => require(['@/teacher/Edit.vue'], resolve)},
        {path: '/teacher/add', component: resolve => require(['@/teacher/Add.vue'], resolve)},
        {path: '/user', component: resolve => require(['@/user/List.vue'], resolve)}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path != '/login') {
    // 如果已经登录了，则 next 渲染该组件
    // 苟泽，跳转到登录页
    // if (Cookies.get('PHPSESSID')) {
      return next()
    // }
    router.push(`/login?redirect=${to.path}`)
  } else {
    next()
  }
})


export default router
