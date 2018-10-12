import Layout from '@/views/layout/Layout'
export const lessonRouterMap = [
  {
    path: '',
    redirect: '/blogs/lesson1'
  },
  {
    path: '/blogs',
    component: Layout,
    name: 'Blogs',
    redirect: '/blogs/lesson1',
    meta: { title: 'Blogs', icon: 'table', noCache: true },
    children: [
      {
        path: 'lesson1',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson1.vue'),
        name: 'Lesson1Index',
        meta: { title: 'lesson1', icon: 'table', noCache: true }
      },
      {
        path: 'lesson2',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson2.vue'),
        name: 'Lesson2Index',
        meta: { title: 'lesson2', icon: 'table', noCache: true }
      },
      {
        path: 'lesson3',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson3.vue'),
        name: 'Lesson3Index',
        meta: { title: 'lesson3', icon: 'table', noCache: true }
      },
      {
        path: 'lesson4',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson4.vue'),
        name: 'Lesson4Index',
        meta: { title: 'lesson4', icon: 'table', noCache: true }
      },
      {
        path: 'lesson5',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson5.vue'),
        name: 'Lesson5Index',
        meta: { title: 'lesson5', icon: 'table', noCache: true }
      },
      {
        path: 'lesson6',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson6.vue'),
        name: 'Lesson6Index',
        meta: { title: 'lesson6', icon: 'table', noCache: true }
      },
      {
        path: 'lesson7',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson7.vue'),
        name: 'Lesson7Index',
        meta: { title: 'lesson7', icon: 'table', noCache: true }
      },
      {
        path: 'lesson8',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson8.vue'),
        name: 'Lesson8Index',
        meta: { title: 'lesson8', icon: 'table', noCache: true }
      },
      {
        path: 'lesson9',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson9.vue'),
        name: 'Lesson9Index',
        meta: { title: 'lesson9', icon: 'table', noCache: true }
      },
      {
        path: 'lesson10',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson10.vue'),
        name: 'Lesson10Index',
        meta: { title: 'lesson10', icon: 'table', noCache: true }
      },
      {
        path: 'lesson11',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson11.vue'),
        name: 'Lesson11Index',
        meta: { title: 'lesson11', icon: 'table', noCache: true }
      },
      {
        path: 'lesson12',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson12.vue'),
        name: 'Lesson12Index',
        meta: { title: 'lesson12', icon: 'table', noCache: true }
      },
      {
        path: 'lesson13',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson13.vue'),
        name: 'Lesson13Index',
        meta: { title: 'lesson13', icon: 'table', noCache: true }
      },
      {
        path: 'lesson14',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson14.vue'),
        name: 'Lesson14Index',
        meta: { title: 'lesson14', icon: 'table', noCache: true }
      },
      {
        path: 'lesson15',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson15.vue'),
        name: 'Lesson15Index',
        meta: { title: 'lesson15', icon: 'table', noCache: true }
      },
      {
        path: 'lesson16',
        component: () => import('@/pages/threeLesson/chapter-01/Lesson16.vue'),
        name: 'Lesson16Index',
        meta: { title: 'lesson16', icon: 'table', noCache: true }
      },
      {
        path: 'lesson17',
        component: () => import('@/pages/threeLesson/chapter-02/Lesson17.vue'),
        name: 'Lesson17Index',
        meta: { title: 'lesson17', icon: 'table', noCache: true }
      },
      {
        path: 'lesson18',
        component: () => import('@/pages/threeLesson/chapter-02/Lesson18.vue'),
        name: 'Lesson18Index',
        meta: { title: 'lesson18', icon: 'table', noCache: true }
      },
      {
        path: 'lesson19',
        component: () => import('@/pages/threeLesson/chapter-02/Lesson19.vue'),
        name: 'Lesson19Index',
        meta: { title: 'lesson19', icon: 'table', noCache: true }
      },
      {
        path: 'lesson20',
        component: () => import('@/pages/threeLesson/chapter-02/Lesson20.vue'),
        name: 'Lesson20Index',
        meta: { title: 'lesson20', icon: 'table', noCache: true }
      },
      {
        path: 'lesson21',
        component: () => import('@/pages/threeLesson/chapter-02/Lesson21.vue'),
        name: 'Lesson21Index',
        meta: { title: 'lesson21', icon: 'table', noCache: true }
      },
      {
        path: 'lesson22',
        component: () => import('@/pages/threeLesson/chapter-02/Lesson22.vue'),
        name: 'Lesson22Index',
        meta: { title: 'lesson22', icon: 'table', noCache: true }
      },
      {
        path: 'lesson23',
        component: () => import('@/pages/threeLesson/chapter-03/Lesson23.vue'),
        name: 'Lesson23Index',
        meta: { title: 'lesson23', icon: 'table', noCache: true }
      },
      {
        path: 'lesson24',
        component: () => import('@/pages/threeLesson/chapter-03/Lesson24.vue'),
        name: 'Lesson24Index',
        meta: { title: 'lesson24', icon: 'table', noCache: true }
      },
      {
        path: 'lesson25',
        component: () => import('@/pages/threeLesson/chapter-03/Lesson25.vue'),
        name: 'Lesson25Index',
        meta: { title: 'lesson25', icon: 'table', noCache: true }
      },
      {
        path: 'lesson26',
        component: () => import('@/pages/threeLesson/chapter-03/Lesson26.vue'),
        name: 'Lesson26Index',
        meta: { title: 'lesson26', icon: 'table', noCache: true }
      },
      {
        path: 'lesson27',
        component: () => import('@/pages/threeLesson/chapter-03/Lesson27.vue'),
        name: 'Lesson27Index',
        meta: { title: 'lesson27', icon: 'table', noCache: true }
      },
      {
        path: 'lesson28',
        component: () => import('@/pages/threeLesson/chapter-03/Lesson28.vue'),
        name: 'Lesson28Index',
        meta: { title: 'lesson28', icon: 'table', noCache: true }
      },
      {
        path: 'lesson29',
        component: () => import('@/pages/threeLesson/chapter-03/Lesson29.vue'),
        name: 'Lesson29Index',
        meta: { title: 'lesson29', icon: 'table', noCache: true }
      },
      {
        path: 'lesson51',
        component: () => import('@/pages/threeLesson/chapter-06/Lesson51.vue'),
        name: 'Lesson51Index',
        meta: { title: 'lesson51', icon: 'table', noCache: true }
      },
      {
        path: 'Lesson58',
        component: () => import('@/pages/threeLesson/chapter-09/Lesson58.vue'),
        name: 'Lesson58',
        meta: { title: 'lesson58', icon: 'table', noCache: true }
      },
      {
        path: 'Lesson80',
        component: () => import('@/pages/threeLesson/chapter-09/Lesson80.vue'),
        name: 'Lesson80',
        meta: { title: 'lesson80', icon: 'table', noCache: true }
      },
      {
        path: 'Lesson81',
        component: () => import('@/pages/threeLesson/chapter-09/Lesson81.vue'),
        name: 'Lesson81',
        meta: { title: 'lesson81', icon: 'table', noCache: true }
      },
      {
        path: 'Lesson82',
        component: () => import('@/pages/threeLesson/chapter-09/Lesson82.vue'),
        name: 'Lesson82',
        meta: { title: 'lesson82', icon: 'table', noCache: true }
      },
      {
        path: 'lesson88',
        component: () => import('@/pages/threeLesson/chapter-08/Lesson88.vue'),
        name: 'Lesson88Index',
        meta: { title: 'lesson88', icon: 'table', noCache: true }
      },
      {
        path: 'lesson102',
        component: () => import('@/pages/threeLesson/chapter-05/Lesson102.vue'),
        name: 'Lesson102Index',
        meta: { title: 'lesson102', icon: 'table', noCache: true }
      }
    ]
  }
]
