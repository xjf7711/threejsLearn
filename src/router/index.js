import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
// import { elementConstantRouterMap, elementAsyncRouterMap } from './element'
import { examplesRouterMap } from './examples'
import { guideRouterMap } from './guide'
import { blogRouterMap } from './blog'
import { learningRouterMap } from './learning'
import { practicesRouterMap } from './practices'
import { prisonRouterMap } from './prison'
import { warshipRouterMap } from './warship'
/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/gltf',
    name: 'gltf',
    meta: { title: 'fbx', icon: 'table', noCache: true },
    // component: () => import('@/pages/examples/webgl/loader/Gltf.vue')
    component: () => import('@/pages/learning/chapter-09/Example14.vue')
  },
  {
    path: '/fbx',
    name: 'fbx',
    meta: { title: 'fbx', icon: 'table', noCache: true },
    component: () => import('@/pages/learning/chapter-09/Example15.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  }
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: 'dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // ...elementAsyncRouterMap,
  ...examplesRouterMap,
  ...blogRouterMap,
  ...guideRouterMap,
  ...learningRouterMap,
  ...practicesRouterMap,
  ...prisonRouterMap,
  ...warshipRouterMap,
  { path: '*', redirect: '/404', hidden: true }
]
