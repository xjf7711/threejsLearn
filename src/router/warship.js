import Layout from '@/views/layout/Layout'
export const warshipRouterMap = [
  {
    path: '/warship',
    component: Layout,
    name: 'Warship',
    redirect: '/warship/overview',
    meta: { title: 'Warship', icon: 'table', noCache: true },
    children: [
      {
        path: 'overview',
        component: () => import('@/pages/warship/Outview.vue'),
        name: 'WarshipOutview',
        meta: { title: 'Outview', icon: 'table', noCache: true }
      },
      {
        path: 'jianjiaban',
        component: () => import('@/pages/warship/JianJiaBan.vue'),
        name: 'WarshipJianjiaban',
        meta: { title: 'Jianjiaban', icon: 'table', noCache: true }
      },
      {
        path: 'jianjiaban4',
        component: () => import('@/pages/warship/JianJiaBan4.vue'),
        name: 'WarshipJianjiaban4',
        meta: { title: 'Jianjiaban4', icon: 'table', noCache: true }
      },
      {
        path: 'JingWeiYiPingTai',
        component: () => import('@/pages/warship/JingWeiYiPingTai.vue'),
        name: 'WarshipJingWeiYiPingTai',
        meta: { title: 'JingWeiYiPingTai', icon: 'table', noCache: true }
      },
      {
        path: 'luoJingJiaBan05',
        component: () => import('@/pages/warship/LuoJingJiaBan05.vue'),
        name: 'WarshipluoJingJiaBan05',
        meta: { title: 'LuoJingJiaBan05', icon: 'table', noCache: true }
      },
      {
        path: 'pingTaiJiaBan',
        component: () => import('@/pages/warship/PingTaiJiaBan.vue'),
        name: 'WarshipPingTaiJiaBan',
        meta: { title: 'PingTaiJiaBan', icon: 'table', noCache: true }
      },
      {
        path: 'shangJiaBan',
        component: () => import('@/pages/warship/ShangJiaBan.vue'),
        name: 'WarshipShangJiaBan',
        meta: { title: 'ShangJiaBan', icon: 'table', noCache: true }
      },
      {
        path: 'shangQiaoLouJiaBan03',
        component: () => import('@/pages/warship/ShangQiaoLouJiaBan03.vue'),
        name: 'WarshipShangQiaoLouJiaBan03',
        meta: { title: 'ShangQiaoLouJiaBan03', icon: 'table', noCache: true }
      },
      {
        path: 'xiaJiaBan',
        component: () => import('@/pages/warship/XiaJiaBan.vue'),
        name: 'WarshipXiaJiaBan',
        meta: { title: 'XiaJiaBan', icon: 'table', noCache: true }
      },
      {
        path: 'xiaQiaoLouJiaBan',
        component: () => import('@/pages/warship/XiaQiaoLouJiaBan.vue'),
        name: 'WarshipXiaQiaoLouJiaBan',
        meta: { title: 'XiaQiaoLouJiaBan', icon: 'table', noCache: true }
      }
    ]
  }
]
