import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./views/user'),
    redirect: '/login',
    children: [
      { path: 'login', component: () => import('./views/user/Login') },
      { path: 'register', component: () => import('./views/user/Register') },
      { path: 'forgot-password', component: () => import('./views/user/ForgotPassword') },
      { path: 'reset-password', component: () => import('./views/user/ForgotPassword') }
    ]
  },
  {
    path: '/admin',
    component: () => import('./views/user'),
    redirect: '/admin/login',
    children: [
      { path: 'login', component: () => import('./views/Administrator/auth/Login') }
    ]
  },
  {
    path: '/administrator',
    component: () => import('./views/Administrator'),
    redirect: '/administrator',
    children: [
      { path: '/administrator/dashboard', component: () => import('./views/Administrator/Dashboard') },
      { path: '/administrator/admins', component: () => import('./views/Administrator/admin/Index') },
      { path: '/administrator/admins/create', component: () => import('./views/Administrator/admin/Create') },
      { path: '/administrator/admins/:id/update', component: () => import('./views/Administrator/admin/Update') },
      { path: '/administrator/users', component: () => import('./views/Administrator/user/Index') },
      { path: '/administrator/users/create', component: () => import('./views/Administrator/user/Create') },
      { path: '/administrator/users/:id/update', component: () => import('./views/Administrator/user/Update') },
      { path: '/administrator/courses', component: () => import('./views/Administrator/course/Index') },
      { path: '/administrator/courses/create', component: () => import('./views/Administrator/course/Create') },
      { path: '/administrator/courses/:id/update', component: () => import('./views/Administrator/course/Update') },
      { path: '/administrator/lessons', component: () => import('./views/Administrator/lesson/Index') },
      { path: '/administrator/lessons/create', component: () => import('./views/Administrator/lesson/Create') },
      { path: '/administrator/lessons/:id/update', component: () => import('./views/Administrator/lesson/Update') },
      { path: '/administrator/contacts', component: () => import('./views/Administrator/contact/Index') },
      { path: '/administrator/gcrads/create', component: () => import('./views/Administrator/gcard/create') },
      { path: '/administrator/gcrads/:id', component: () => import('./views/Administrator/gcard/update') },
      { path: '/administrator/gcrads', component: () => import('./views/Administrator/gcard/index') },


      { path: '/administrator/questions', component: () => import('./views/Administrator/questions/index') },
      { path: '/administrator/questions/create', component: () => import('./views/Administrator/questions/create') },
      { path: '/administrator/questions/:id/update', component: () => import('./views/Administrator/questions/update') },
    ]
  },
  {
    path: '/',
    component: () => import('./views/english'),
    redirect: '/english',
    children: [
      { path: '/english', component: () => import('./views/english/Home') },
      { path: '/profiles', component: () => import('./views/english/user/Profile') },
      { path: '/change-password', component: () => import('./views/english/user/ChangePassword') },

      { path: '/remind', component: () => import('./views/english/Remind') },
      { path: '/about', component: () => import('./views/english/About') },
      { path: '/blog', component: () => import('./views/english/Blog') },
      { path: '/contact', component: () => import('./views/english/Contact') },

      { path: 'courses', component: () => import('./views/english/course/List') },
      { path: 'histories', component: () => import('./views/english/history/History') },
      { path: 'histories/listen', component: () => import('./views/english/history/Listen') },
      { path: 'histories/read', component: () => import('./views/english/history/Read') },
      { path: 'histories/write', component: () => import('./views/english/history/Write') },
      { path: 'histories/speak', component: () => import('./views/english/history/Speak') },

      { path: 'courses/:id', component: () => import('./views/english/course/Detail') },
      { path: 'listen/:id', component: () => import('./views/english/test/Listen') },
      { path: 'read/:id', component: () => import('./views/english/test/Read') },
      { path: 'write/:id', component: () => import('./views/english/test/Write') },
      { path: 'speak/:id', component: () => import('./views/english/test/Speak') }
    ]
  },
  {
    path: '/chat',
    component: () => import('./views/messages'),
    children: [
      { path: '/', component: () => import('./views/messages/ChatApp') }
    ]
  },
  {
    path: '/blog',
    component: () => import('./views/messages'),
    children: [
      { path: 'list', component: () => import('./views/blog/BlogList') },
      { path: 'wc', component: () => import('./views/blog/wc') },
      { path: 'detail/:id', component: () => import('./views/blog/BlogDetail') },
      { path: 'create', component: () => import('./views/blog/create') },
      { path: 'update/:id', component: () => import('./views/blog/update') },
    ]
  },
  {
    path: '/train',
    component: () => import('./views/train'),
    redirect: '/train/re',
    children: [
      { path: '/re', component: () => import('./views/train/Register') }
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
