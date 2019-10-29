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
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/auth/Login') },
    ]
  },
  {
    path: '/administrator',
    component: () => import(/* webpackChunkName: "user" */ './views/Administrator'),
    redirect: '/administrator',
    children: [
      { path: '/administrator/dashboard', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/Dashboard') },
      { path: '/administrator/admins', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/admin/Index') },
      { path: '/administrator/users', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/user/Index') },
      { path: '/administrator/courses', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/course/Index') },
      { path: '/administrator/courses/create', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/course/Create') },
      { path: '/administrator/courses/:id/update', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/course/Update') },
      { path: '/administrator/lessons', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/lesson/Index') },
      { path: '/administrator/lessons/create', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/lesson/Create') },
      { path: '/administrator/lessons/:id/update', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/lesson/Update') },
      { path: '/administrator/contacts', component: () => import(/* webpackChunkName: "user" */ './views/Administrator/contact/Index') },
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
