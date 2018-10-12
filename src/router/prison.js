import Layout from '@/views/layout/Layout'
export const prisonRouterMap = [
  {
    path: '/prison',
    component: Layout,
    name: 'Prison',
    redirect: '/prison/dimian',
    meta: { title: 'Prison', icon: 'table', noCache: true },
    children: [
      {
        path: 'diMianA',
        component: () => import('@/pages/prison/DiMianA.vue'),
        name: 'PrisonDimianA',
        meta: { title: 'DiMianA', icon: 'table', noCache: true }
      },
      {
        path: 'diMianB',
        component: () => import('@/pages/prison/DiMianB.vue'),
        name: 'PrisonDiMianB',
        meta: { title: 'DiMianB', icon: 'table', noCache: true }
      },
      {
        path: 'diCeng',
        component: () => import('@/pages/prison/DiCeng.vue'),
        name: 'PrisonDiCeng',
        meta: { title: 'DiCeng', icon: 'table', noCache: true }
      },
      {
        path: 'duiJiangJi',
        component: () => import('@/pages/prison/DuiJiangJi.vue'),
        name: 'PrisonDuiJiangJi',
        meta: { title: 'DuiJiangJi', icon: 'table', noCache: true }
      }
    ]
  }
]
