import Layout from '@/views/layout/Layout'
export const guideRouterMap = [
  {
    path: '',
    // component: Layout,
    // hidden: true,
    // name: 'homePage',
    redirect: '/threejsGuide/index'
    // children: [{
    //   path: 'homePage',
    //   // redirect: '/devices',
    //   component: () => import('@/pages/oil/homePage/index'),
    //   hidden: true,
    //   name: 'HomePage',
    //   meta: { title: 'HomePage', icon: 'homepage', noCache: true }
    // }]
  },
  // {
  //   path: '/threejs/guide',
  //   name: 'guide-index',
  //   title: '目录',
  //   component: () => import('@/pages/threeGuide/index/Index'),
  //   hidden: true
  // },
  {
    path: '/threejsGuide',
    component: Layout,
    // hidden: true,
    noDropdown: true,
    name: 'ThreejsGuide',
    // redirect: '/threejsGuide/index',
    children: [{
      path: 'index',
      component: () => import('@/pages/threeGuide/index/Index'),
      name: 'ThreejsGuideIndex',
      meta: { title: 'catalogue', icon: 'table', noCache: true }
    }]
  },
  {
    path: '/preface',
    name: 'preface',
    title: '前言',
    noDropdown: true,
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'preface-index',
        component: () => import('@/pages/threeGuide/preface/Index.vue'),
        meta: { title: 'preface', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter1',
    name: 'chapter1',
    component: Layout,
    meta: { title: 'chapter1', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter1-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter1/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: '1',
        name: 'example1-1-1',
        title: 'example1-1',
        component: () => import('@/pages/threeGuide/chapter1/1.1.1.vue'),
        meta: { title: 'example1-1-1', icon: 'table', noCache: true }
      },
      {
        path: '2',
        name: 'example1-2-1',
        title: 'example2-1',
        component: () => import('@/pages/threeGuide/chapter1/1.2.1.vue'),
        meta: { title: 'example1-2-1', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter2',
    name: 'chapter2',
    component: Layout,
    meta: { title: 'chapter2', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter2-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter2/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: '1',
        name: 'example2-3-1',
        title: 'example2-3-1',
        component: () => import('@/pages/threeGuide/chapter2/2.3.1.vue'),
        meta: { title: 'example2-3-1', icon: 'table', noCache: true }
      },
      {
        path: '2',
        name: 'example2-4-1',
        title: 'example4-1',
        component: () => import('@/pages/threeGuide/chapter2/2.4.1.vue'),
        meta: { title: 'example2-4-1', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter3',
    name: 'chapter3',
    component: Layout,
    meta: { title: 'chapter3', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter3-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter3/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: '1',
        name: 'example3-1-1',
        component: () => import('@/pages/threeGuide/chapter3/3.1.1.vue'),
        meta: { title: 'example3-1-1', icon: 'table', noCache: true }
      },
      {
        path: '2',
        name: 'example3-2-1',
        component: () => import('@/pages/threeGuide/chapter3/3.2.1.vue'),
        meta: { title: 'example3-2-1', icon: 'table', noCache: true }
      },
      {
        path: '3',
        name: 'example3-3-1',
        component: () => import('@/pages/threeGuide/chapter3/3.3.1.vue'),
        meta: { title: 'example3-3-1', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter4',
    name: 'chapter4',
    component: Layout,
    meta: { title: 'chapter4', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter4-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter4/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: '1',
        name: 'example4-1-1',
        component: () => import('@/pages/threeGuide/chapter4/4.1.1.vue'),
        meta: { title: 'example4-1-1', icon: 'table', noCache: true }
      },
      {
        path: '2',
        name: 'example4-2-1',
        component: () => import('@/pages/threeGuide/chapter4/4.2.1.vue'),
        meta: { title: 'example4-2-1', icon: 'table', noCache: true }
      },
      {
        path: '3',
        name: 'example4-3-1',
        component: () => import('@/pages/threeGuide/chapter4/4.3.1.vue'),
        meta: { title: 'example4-3-1', icon: 'table', noCache: true }
      },
      {
        path: '4',
        name: 'example4-4-1',
        component: () => import('@/pages/threeGuide/chapter4/4.4.1.vue'),
        meta: { title: 'example4-4-1', icon: 'table', noCache: true }
      },
      {
        path: '5-1',
        name: 'example4-5-1',
        component: () => import('@/pages/threeGuide/chapter4/4.5.1.vue'),
        meta: { title: 'example4-5-1', icon: 'table', noCache: true }
      },
      {
        path: '5-2',
        name: 'example4-5-2',
        component: () => import('@/pages/threeGuide/chapter4/4.5.2.vue'),
        meta: { title: 'example4-5-2', icon: 'table', noCache: true }
      },
      {
        path: '5-3',
        name: 'example4-5-3',
        component: () => import('@/pages/threeGuide/chapter4/4.5.3.vue'),
        meta: { title: 'example4-5-3', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter5',
    name: 'chapter5',
    component: Layout,
    meta: { title: 'chapter5', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter5-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter5/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: '1',
        name: 'example5-1-1',
        component: () => import('@/pages/threeGuide/chapter5/5.1.1.vue'),
        meta: { title: 'example5-1-1', icon: 'table', noCache: true }
      },
      {
        path: '2-1',
        name: 'example5-2-1',
        component: () => import('@/pages/threeGuide/chapter5/5.2.1.vue'),
        meta: { title: 'example5-2-1', icon: 'table', noCache: true }
      },
      {
        path: '2-2',
        name: 'example5-2-2',
        component: () => import('@/pages/threeGuide/chapter5/5.2.2.vue'),
        meta: { title: 'example5-2-2', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter6',
    name: 'chapter6',
    component: Layout,
    meta: { title: 'chapter6', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter6-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter6/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: '1-1',
        name: 'example6-1-1',
        component: () => import('@/pages/threeGuide/chapter6/6.1.1.vue'),
        meta: { title: 'example6-1-1', icon: 'table', noCache: true }
      },
      {
        path: '1-2',
        name: 'example6-1-2',
        component: () => import('@/pages/threeGuide/chapter6/6.1.2.vue'),
        meta: { title: 'example6-1-2', icon: 'table', noCache: true }
      },
      {
        path: '2-1',
        name: 'example6-2-1',
        component: () => import('@/pages/threeGuide/chapter6/6.2.1.vue'),
        meta: { title: 'example6-2-1', icon: 'table', noCache: true }
      },
      {
        path: '2-2',
        name: 'example6-2-2',
        component: () => import('@/pages/threeGuide/chapter6/6.2.2.vue'),
        meta: { title: 'example6-2-2', icon: 'table', noCache: true }
      },
      {
        path: '3',
        name: 'dropball6-3-1',
        component: () => import('@/pages/threeGuide/chapter6/6.3.1.vue'),
        meta: { title: 'example6-3-1', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter7',
    name: 'chapter7',
    component: Layout,
    meta: { title: 'chapter7', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter7-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter7/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: '2',
        name: 'example7-2-1',
        component: () => import('@/pages/threeGuide/chapter7/7.2.1.vue'),
        meta: { title: 'example7-2-1', icon: 'table', noCache: true }
      },
      {
        path: '3-1',
        name: 'example7-3-1',
        component: () => import('@/pages/threeGuide/chapter7/7.3.1.vue'),
        meta: { title: 'example7-3-1', icon: 'table', noCache: true }
      },
      {
        path: '3-2',
        name: 'example7-3-2',
        component: () => import('@/pages/threeGuide/chapter7/7.3.2.vue'),
        meta: { title: 'example7-3-2', icon: 'table', noCache: true }
      },
      {
        path: '3-3',
        name: 'example7-3-3',
        component: () => import('@/pages/threeGuide/chapter7/7.3.3.vue'),
        meta: { title: 'example7-3-3', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter8',
    name: 'chapter8',
    component: Layout,
    meta: { title: 'chapter8', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter8-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter8/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: 'example8-1-1',
        name: 'example8-1-1',
        component: () => import('@/pages/threeGuide/chapter8/8.1.1.vue'),
        meta: { title: 'example8-1-1', icon: 'table', noCache: true }
      },
      {
        path: 'example8-1-2',
        name: 'example8-1-2',
        component: () => import('@/pages/threeGuide/chapter8/8.1.2.vue'),
        meta: { title: 'example8-1-2', icon: 'table', noCache: true }
      },
      {
        path: 'example8-1-3',
        name: 'example8-1-3',
        component: () => import('@/pages/threeGuide/chapter8/8.1.3.vue'),
        meta: { title: 'example8-1-3', icon: 'table', noCache: true }
      },
      {
        path: 'example8-2-1',
        name: 'example8-2-1',
        component: () => import('@/pages/threeGuide/chapter8/8.2.1.vue'),
        meta: { title: 'example8-2-1', icon: 'table', noCache: true }
      },
      {
        path: 'example8-3-1',
        name: 'example8-3-1',
        component: () => import('@/pages/threeGuide/chapter8/8.3.1.vue'),
        meta: { title: 'example8-3-1', icon: 'table', noCache: true }
      },
      {
        path: 'example8-4-1',
        name: 'example8-4-1',
        component: () => import('@/pages/threeGuide/chapter8/8.4.1.vue'),
        meta: { title: 'example8-4-1', icon: 'table', noCache: true }
      },
      {
        path: 'example8-5-1',
        name: 'example8-5-1',
        component: () => import('@/pages/threeGuide/chapter8/8.5.1.vue'),
        meta: { title: 'example8-5-1', icon: 'table', noCache: true }
      }
    ]
  },
  {
    path: '/chapter9',
    name: 'chapter9',
    component: Layout,
    meta: { title: 'chapter9', icon: 'table', noCache: true },
    children: [
      {
        path: 'index',
        name: 'chapter9-index',
        title: 'introduction',
        component: () => import('@/pages/threeGuide/chapter9/Index.vue'),
        meta: { title: 'introduction', icon: 'table', noCache: true }
      },
      {
        path: 'example9-3-1',
        name: 'example9-3-1',
        component: () => import('@/pages/threeGuide/chapter9/9.3.1.vue'),
        meta: { title: 'example9-3-1', icon: 'table', noCache: true }
      }
    ]
  }
]
