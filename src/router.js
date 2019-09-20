import Vue from 'vue'
import Router from 'vue-router'
import AuthRequired from '@/utils/AuthRequired'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "app" */ './views/app'),
    redirect: '/app/dashboards',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'app/dashboards',
        component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards'),
        redirect: '/app/dashboards/default',
        children: [
          { path: 'default', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Default') },
          { path: 'analytics', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Analytics') },
          { path: 'ecommerce', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Ecommerce') },
          { path: 'content', component: () => import(/* webpackChunkName: "dashboards" */ './views/app/dashboards/Content') }
        ]
      },
      {
        path: 'app/pages',
        component: () => import(/* webpackChunkName: "pages" */ './views/app/pages'),
        redirect: '/app/pages/data-list',
        children: [
          { path: 'data-list', component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/DataList') },
          { path: 'thumb-list', component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/ThumbList') },
          { path: 'image-list', component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/ImageList') },
          { path: 'details', component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/Details') },
          { path: 'search', component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/Search') },
          { path: 'mailing', component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/Mailing') },
          { path: 'invoice', component: () => import(/* webpackChunkName: "pages" */ './views/app/pages/Invoice') }
        ]
      },
      {
        path: 'app/applications',
        component: () => import(/* webpackChunkName: "applications" */ './views/app/applications'),
        redirect: '/app/applications/todo',
        children: [
          { path: 'todo', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/Todo') },
          { path: 'survey', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/Survey') },
          { path: 'survey/:id', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/SurveyDetail'), props: true },
          { path: 'chat', component: () => import(/* webpackChunkName: "applications" */ './views/app/applications/Chat') }
        ]
      },
      {
        path: 'app/ui',
        component: () => import(/* webpackChunkName: "ui" */ './views/app/ui'),
        redirect: '/app/ui/alerts',
        children: [
          { path: 'alerts', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Alerts') },
          { path: 'badges', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Badges') },
          { path: 'buttons', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Buttons') },
          { path: 'cards', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Cards') },
          { path: 'carousel', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Carousel') },
          { path: 'charts', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Charts') },
          { path: 'collapse', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Collapse') },
          { path: 'dropdowns', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Dropdowns') },
          { path: 'editors', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Editors') },
          { path: 'forms', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Forms') },
          { path: 'form-components', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/FormComponents') },
          { path: 'icons', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Icons') },
          { path: 'input-groups', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/InputGroups') },
          { path: 'jumbotron', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Jumbotron') },
          { path: 'maps', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Maps') },
          { path: 'modal', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Modal') },
          { path: 'navigation', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Navigation') },
          { path: 'popover-tooltip', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/PopoverTooltip') },
          { path: 'sortable', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Sortable') },
          { path: 'tables', component: () => import(/* webpackChunkName: "ui" */ './views/app/ui/Tables') }
        ]
      }
    ]
  },
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error') },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ './views/user'),
    redirect: '/user/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/user/Login') },
      { path: 'register', component: () => import(/* webpackChunkName: "user" */ './views/user/Register') },
      { path: 'forgot-password', component: () => import(/* webpackChunkName: "user" */ './views/user/ForgotPassword') }
    ]
  },
  {
    path: '/english',
    component: () => import(/* webpackChunkName: "english" */ './views/english'),
    redirect: '/english',
    children: [
      { path: 'courses', component: () => import(/* webpackChunkName: "english" */ './views/english/course/List') },
      { path: 'course/:id', component: () => import(/* webpackChunkName: "english" */ './views/english/course/Detail') },
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
