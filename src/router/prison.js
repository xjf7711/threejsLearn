import Layout from '@/views/layout/Layout'
import Prison from '@/pages/Page'
export const prisonRouterMap = [
  {
    path: '/prison',
    component: Layout,
    name: 'Prison',
    redirect: '/prison/dimian',
    meta: { title: 'Prison', icon: 'table', noCache: true },
    children: [
      {
        path: 'scene',
        component: Prison,
        name: 'PrisonDimianA',
        meta: { title: '场景', icon: 'table', noCache: true },
        children: [
          {
            path: 'diMian',
            component: () => import('@/pages/prison/DiMianA.vue'),
            name: 'PrisonDimian',
            meta: { title: '地面', icon: 'table', noCache: true }
          },
          // {
          //   path: 'diMianB',
          //   component: () => import('@/pages/prison/DiMianB.vue'),
          //   name: 'PrisonDiMianB',
          //   meta: { title: 'DiMianB', icon: 'table', noCache: true }
          // },
          {
            path: 'diCeng',
            component: () => import('@/pages/prison/DiCeng.vue'),
            name: 'PrisonDiCeng',
            meta: { title: 'DiCeng', icon: 'table', noCache: true }
          },
          {
            path: 'wuJianShe',
            component: () => import('@/pages/prison/WuJianShe.vue'),
            name: 'WuJianShe',
            meta: { title: '五监舍', icon: 'table', noCache: true }
          },
          {
            path: 'liuJianShe',
            component: () => import('@/pages/prison/LiuJianShe.vue'),
            name: 'LiuJianShe',
            meta: { title: '六监舍', icon: 'table', noCache: true }
          },
          {
            path: 'qiChangFang',
            component: () => import('@/pages/prison/QiChangFang.vue'),
            name: 'QiChangFang',
            meta: { title: '七厂房', icon: 'table', noCache: true }
          },
          {
            path: 'baChangFang',
            component: () => import('@/pages/prison/BaChangFangA.vue'),
            name: 'BaChangFang',
            meta: { title: '八厂房', icon: 'table', noCache: true }
          },
          // {
          //   path: 'baChangFangB',
          //   component: () => import('@/pages/prison/BaChangFangB.vue'),
          //   name: 'BaChangFangB',
          //   meta: { title: '靶场房B', icon: 'table', noCache: true }
          // },
          {
            path: 'danGuanLou',
            component: () => import('@/pages/prison/DanGuanLou.vue'),
            name: 'DanGuanLou',
            meta: { title: '单管楼', icon: 'table', noCache: true }
          },
          {
            path: 'jianYuDaMen',
            component: () => import('@/pages/prison/JianYuDaMen.vue'),
            name: 'JianYuDaMen',
            meta: { title: '监狱大门', icon: 'table', noCache: true }
          },
          {
            path: 'jianZhuA',
            component: () => import('@/pages/prison/JianZhuA.vue'),
            name: 'JianZhuA',
            meta: { title: '建筑A', icon: 'table', noCache: true }
          },
          {
            path: 'jiaoXueLou',
            component: () => import('@/pages/prison/JiaoXueLouA.vue'),
            name: 'JiaoXueLouA',
            meta: { title: '教学楼', icon: 'table', noCache: true }
          },
          // {
          //   path: 'jiaoXueLouB',
          //   component: () => import('@/pages/prison/JiaoXueLouB.vue'),
          //   name: 'JiaoXueLouB',
          //   meta: { title: '教学楼B', icon: 'table', noCache: true }
          // },
          {
            path: 'jieJianShi',
            component: () => import('@/pages/prison/JieJianShi.vue'),
            name: 'JieJianShi',
            meta: { title: '接见室', icon: 'table', noCache: true }
          },
          {
            path: 'jinBiShi',
            component: () => import('@/pages/prison/JinBiShi.vue'),
            name: 'JinBiShi',
            meta: { title: '禁闭室', icon: 'table', noCache: true }
          },

          {
            path: 'shiTang',
            component: () => import('@/pages/prison/ShiTang.vue'),
            name: 'ShiTang',
            meta: { title: '食堂', icon: 'table', noCache: true }
          },
          {
            path: 'xinJianShe',
            component: () => import('@/pages/prison/XinJianShe.vue'),
            name: 'XinJianShe',
            meta: { title: '新监舍', icon: 'table', noCache: true }
          },
          {
            path: 'yiYuan',
            component: () => import('@/pages/prison/YiYuan.vue'),
            name: 'YiYuan',
            meta: { title: '医院', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: 'property',
        component: Prison,
        name: 'Property',
        meta: { title: '道具', icon: 'table', noCache: true },
        children: [
          {
            path: 'duiJiangJi',
            component: () => import('@/pages/prison/DuiJiangJi.vue'),
            name: 'PrisonDuiJiangJi',
            meta: { title: 'DuiJiangJi', icon: 'table', noCache: true }
          },
          {
            path: 'luYouQi',
            component: () => import('@/pages/prison/LuYouQi.vue'),
            name: 'LuYouQi',
            meta: { title: '路由器', icon: 'table', noCache: true }
          },
          {
            path: 'sheXiangTou',
            component: () => import('@/pages/prison/SheXiangTou.vue'),
            name: 'SheXiangTou',
            meta: { title: '摄像头', icon: 'table', noCache: true }
          },
          {
            path: 'men',
            component: () => import('@/pages/prison/Door.vue'),
            name: 'Door',
            meta: { title: '门', icon: 'table', noCache: true }
          },
          {
            path: 'baojingqi',
            component: () => import('@/pages/prison/BaoJingQi.vue'),
            name: 'BaoJingQi',
            meta: { title: '报警器', icon: 'table', noCache: true }
          }
        ]
      }
    ]
  }
]
