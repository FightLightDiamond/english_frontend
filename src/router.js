import Vue from 'vue'
import Router from 'vue-router'
import AuthRequired from '@/utils/AuthRequired'

Vue.use(Router)

const routes = [
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error') },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "user" */ './views/user'),
    redirect: '/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/user/Login') },
      { path: 'register', component: () => import(/* webpackChunkName: "user" */ './views/user/Register') },
      { path: 'forgot-password', component: () => import(/* webpackChunkName: "user" */ './views/user/ForgotPassword') },
      { path: 'reset-password', component: () => import(/* webpackChunkName: "user" */ './views/user/ForgotPassword') }
    ]
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "english" */ './views/english'),
    redirect: '/english',
    children: [
      { path: '/english', component: () => import(/* webpackChunkName: "english" */ './views/english/Home') },
      { path: 'courses', component: () => import(/* webpackChunkName: "english" */ './views/english/course/List') },
      { path: 'courses/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/course/Detail') },
      { path: 'listen/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/test/Listen') },
      { path: 'read/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/test/Read') },
      { path: 'write/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/test/Write') }
    ]
  },
  { path: '*', component: () => import(/* webpackChunkName: "error" */ './views/Error') }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
