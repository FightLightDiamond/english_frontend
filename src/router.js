import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
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
    path: '/admin',
    component: () => import(/* webpackChunkName: "user" */ './views/user'),
    redirect: '/admin/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/admin/Login') },
    ]
  },
  {
    path: '/manager',
    component: () => import(/* webpackChunkName: "user" */ './views/manager'),
    redirect: '/manager',
    children: [
      { path: '/', component: () => import(/* webpackChunkName: "user" */ './views/manager/Admin') },
    ]
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "english" */ './views/english'),
    redirect: '/english',
    children: [
      { path: '/english', component: () => import(/* webpackChunkName: "english" */ './views/english/Home') },
      { path: '/remind', component: () => import(/* webpackChunkName: "english" */ './views/english/Remind') },
      { path: '/about', component: () => import(/* webpackChunkName: "english" */ './views/english/About') },
      { path: '/blog', component: () => import(/* webpackChunkName: "english" */ './views/english/Blog') },
      { path: '/contact', component: () => import(/* webpackChunkName: "english" */ './views/english/Contact') },

      { path: 'courses', component: () => import(/* webpackChunkName: "english" */ './views/english/course/List') },

      { path: 'histories', component: () => import(/* webpackChunkName: "english" */ './views/english/history/History') },
      { path: 'histories/listen', component: () => import(/* webpackChunkName: "english" */ './views/english/history/Listen') },
      { path: 'histories/read', component: () => import(/* webpackChunkName: "english" */ './views/english/history/Read') },
      { path: 'histories/write', component: () => import(/* webpackChunkName: "english" */ './views/english/history/Write') },
      { path: 'histories/speak', component: () => import(/* webpackChunkName: "english" */ './views/english/history/Speak') },

      { path: 'courses/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/course/Detail') },
      { path: 'listen/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/test/Listen') },
      { path: 'read/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/test/Read') },
      { path: 'write/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/test/Write') },
      { path: 'speak/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/test/Speak') }
    ]
  },
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error') },
  { path: '*', component: () => import(/* webpackChunkName: "error" */ './views/Error') }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
