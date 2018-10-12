import Layout from '@/views/layout/Layout'
export const practicesRouterMap = [
  {
    path: '/practices',
    component: Layout,
    name: 'Practices',
    redirect: '/Practices/solar',
    meta: { title: 'Practices', icon: 'table', noCache: true },
    children: [
      {
        path: 'solar',
        component: () => import('@/pages/practices/solar/Index.vue'),
        name: 'SolarSystem',
        meta: { title: 'SolarSystem', icon: 'table', noCache: true }
      },
      {
        path: 'datacenter',
        component: () => import('@/pages/practices/datacenter/Index.vue'),
        name: 'datacenter',
        meta: { title: 'Room', icon: 'table', noCache: true }
      },
      {
        path: 'room',
        component: () => import('@/pages/practices/room/Index.vue'),
        name: 'Room',
        meta: { title: 'Room', icon: 'table', noCache: true }
      },
      {
        path: 'serverRoom',
        component: () => import('@/pages/practices/serverRoom/Index.vue'),
        name: 'ServerRoom',
        meta: { title: 'ServerRoom', icon: 'table', noCache: true }
      },
      {
        path: 'warehouse',
        component: () => import('@/pages/practices/warehouse/Index.vue'),
        name: 'Warehouse',
        meta: { title: '3DWarehouse', icon: 'table', noCache: true }
      },
      {
        path: 'city',
        component: () => import('@/pages/practices/City.vue'),
        name: 'City',
        meta: { title: 'City', icon: 'table', noCache: true }
      }
    ]
  }
]
