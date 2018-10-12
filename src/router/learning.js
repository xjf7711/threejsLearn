import Layout from '@/views/layout/Layout'
import Example from '@/pages/threeExample/Example.vue'
export const learningRouterMap = [
  {
    path: '/learning',
    component: Layout,
    name: 'Learning',
    meta: { title: 'Learning', icon: 'table', noCache: true },
    children: [
      {
        path: '/chapter1',
        component: Example,
        name: 'Chapter-01',
        redirect: '/chapter1/lexample02',
        meta: { title: 'chapter1', icon: 'table', noCache: true },
        children: [
          {
            path: 'example02',
            component: () => import('@/pages/threeLesson/chapter-01/Example02.vue'),
            name: 'Example0102Index',
            meta: { title: 'example02', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/threeLesson/chapter-01/Example03.vue'),
            name: 'Example0103Index',
            meta: { title: 'example03', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/threeLesson/chapter-01/Example04.vue'),
            name: 'Example0104Index',
            meta: { title: 'example04', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/threeLesson/chapter-01/Example05.vue'),
            name: 'Example0105Index',
            meta: { title: 'example05', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/threeLesson/chapter-01/Example06.vue'),
            name: 'Example0106Index',
            meta: { title: 'example06', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter2',
        component: Example,
        name: 'Chapter-02',
        redirect: '/chapter1/example01',
        meta: { title: 'chapter2', icon: 'table', noCache: true },
        children: [
          {
            path: 'example01',
            component: () => import('@/pages/threeLesson/chapter-02/Example01.vue'),
            name: 'Example0201Index',
            meta: { title: 'example01', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/threeLesson/chapter-02/Example02.vue'),
            name: 'Example0202Index',
            meta: { title: 'example02', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/threeLesson/chapter-02/Example03.vue'),
            name: 'Example0203Index',
            meta: { title: 'example03', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/threeLesson/chapter-02/Example04.vue'),
            name: 'Example0204Index',
            meta: { title: 'example04', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/threeLesson/chapter-02/Example05.vue'),
            name: 'Example0205Index',
            meta: { title: 'example05', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/threeLesson/chapter-02/Example06.vue'),
            name: 'Example0206Index',
            meta: { title: 'example06', icon: 'table', noCache: true }
          },
          {
            path: 'example07',
            component: () => import('@/pages/threeLesson/chapter-02/Example07.vue'),
            name: 'Example0207Index',
            meta: { title: 'example07', icon: 'table', noCache: true }
          },
          {
            path: 'example08',
            component: () => import('@/pages/threeLesson/chapter-02/Example08.vue'),
            name: 'Example0208Index',
            meta: { title: 'example08', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter3',
        component: Example,
        name: 'Chapter-03',
        redirect: '/chapter3/example01',
        meta: { title: 'chapter3', icon: 'table', noCache: true },
        children: [
          {
            path: 'example01',
            component: () => import('@/pages/threeLesson/chapter-03/Example01.vue'),
            name: 'Example0301Index',
            meta: { title: 'example01', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/threeLesson/chapter-03/Example02.vue'),
            name: 'Example0302Index',
            meta: { title: 'example02', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/threeLesson/chapter-03/Example03.vue'),
            name: 'Example0303Index',
            meta: { title: 'example03', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/threeLesson/chapter-03/Example04.vue'),
            name: 'Example0304Index',
            meta: { title: 'example04', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/threeLesson/chapter-03/Example05.vue'),
            name: 'Example0305Index',
            meta: { title: 'example05', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/threeLesson/chapter-03/Example06.vue'),
            name: 'Example0306Index',
            meta: { title: 'example06', icon: 'table', noCache: true }
          },
          {
            path: 'example07',
            component: () => import('@/pages/threeLesson/chapter-03/Example07.vue'),
            name: 'Example0307Index',
            meta: { title: 'example07', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter4',
        component: Example,
        name: 'Chapter-04',
        redirect: '/chapter4/example01',
        meta: { title: 'chapter4', icon: 'table', noCache: true },
        children: [
          {
            path: 'example01',
            component: () => import('@/pages/threeLesson/chapter-04/Example01.vue'),
            name: 'Example0401Index',
            meta: { title: 'example01', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/threeLesson/chapter-04/Example02.vue'),
            name: 'Example0402Index',
            meta: { title: 'example02', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter5',
        component: Example,
        name: 'Chapter-05',
        redirect: '/chapter5/example03',
        meta: { title: 'chapter5', icon: 'table', noCache: true },
        children: [
          {
            path: 'example03',
            component: () => import('@/pages/threeLesson/chapter-05/Example03.vue'),
            name: 'Example0503Index',
            meta: { title: 'example03', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/threeLesson/chapter-05/Example06.vue'),
            name: 'Example0506Index',
            meta: { title: 'example06', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter6',
        component: Example,
        name: 'Chapter-06',
        redirect: '/chapter6/example03',
        meta: { title: 'chapter6', icon: 'table', noCache: true },
        children: [
          {
            path: 'example03',
            component: () => import('@/pages/threeLesson/chapter-06/Example03.vue'),
            name: 'Example0603Index',
            meta: { title: 'example03', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/threeLesson/chapter-06/Example04.vue'),
            name: 'Example0604Index',
            meta: { title: 'example04', icon: 'table', noCache: true }
          },
          {
            path: 'example08',
            component: () => import('@/pages/threeLesson/chapter-06/Example08.vue'),
            name: 'Example0608Index',
            meta: { title: 'example08', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter8',
        component: Example,
        name: 'Chapter-08',
        redirect: '/chapter3/example01',
        meta: { title: 'chapter8', icon: 'table', noCache: true },
        children: [
          {
            path: 'example01',
            component: () => import('@/pages/threeLesson/chapter-08/Example01.vue'),
            name: 'Example0801Index',
            meta: { title: 'example01', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/threeLesson/chapter-08/Example02.vue'),
            name: 'Example0802Index',
            meta: { title: 'example02', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/threeLesson/chapter-08/Example03.vue'),
            name: 'Example0803Index',
            meta: { title: 'example03', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/threeLesson/chapter-08/Example05.vue'),
            name: 'Example0805Index',
            meta: { title: 'example05', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/threeLesson/chapter-08/Example06.vue'),
            name: 'Example0806Index',
            meta: { title: 'example06', icon: 'table', noCache: true }
          },
          {
            path: 'example07',
            component: () => import('@/pages/threeLesson/chapter-08/Example07.vue'),
            name: 'Example0807Index',
            meta: { title: 'example07', icon: 'table', noCache: true }
          },
          {
            path: 'example08',
            component: () => import('@/pages/threeLesson/chapter-08/Example08.vue'),
            name: 'Example0808Index',
            meta: { title: 'example08', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter9',
        component: Example,
        name: 'Chapter-09',
        redirect: '/chapter9/example02',
        meta: { title: 'chapter9', icon: 'table', noCache: true },
        children: [
          {
            path: 'example01',
            component: () => import('@/pages/threeLesson/chapter-09/Example01.vue'),
            name: 'Example0901Index',
            meta: { title: 'example01', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/threeLesson/chapter-09/Example02.vue'),
            name: 'Example0902Index',
            meta: { title: 'example02', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/threeLesson/chapter-09/Example03.vue'),
            name: 'Example0903Index',
            meta: { title: 'example03', icon: 'table', noCache: true }
          },
          {
            path: 'example07',
            component: () => import('@/pages/threeLesson/chapter-09/Example07.vue'),
            name: 'Example0907Index',
            meta: { title: 'example07', icon: 'table', noCache: true }
          }
        ]
      }
    ]
  }
]
