import Layout from '@/views/layout/Layout'
import Example from '@/pages/examples/Example.vue'
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
        // redirect: '/chapter1/lexample02',
        meta: { title: 'chapter1', icon: 'table', noCache: true },
        children: [
          {
            path: 'example02',
            component: () => import('@/pages/learning/chapter-01/Example02.vue'),
            name: 'Example0102Index',
            meta: { title: '02-first-scene', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/learning/chapter-01/Example03.vue'),
            name: 'Example0103Index',
            meta: { title: '03-materials-light', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/learning/chapter-01/Example04.vue'),
            name: 'Example0104Index',
            meta: { title: '04-materials-light-animation', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/learning/chapter-01/Example05.vue'),
            name: 'Example0105Index',
            meta: { title: '05-control-gui', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/learning/chapter-01/Example06.vue'),
            name: 'Example0106Index',
            meta: { title: '06-screen-size-change', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter2',
        component: Example,
        name: 'Chapter-02',
        // redirect: '/chapter1/example01',
        meta: { title: 'chapter2', icon: 'table', noCache: true },
        children: [
          {
            path: 'example01',
            component: () => import('@/pages/learning/chapter-02/Example01.vue'),
            name: 'Example0201Index',
            meta: { title: '01-basic-scene', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/learning/chapter-02/Example02.vue'),
            name: 'Example0202Index',
            meta: { title: '02-foggy-scene', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/learning/chapter-02/Example03.vue'),
            name: 'Example0203Index',
            meta: { title: '03-forced-materials', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/learning/chapter-02/Example04.vue'),
            name: 'Example0204Index',
            meta: { title: '04-geometries', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/learning/chapter-02/Example05.vue'),
            name: 'Example0205Index',
            meta: { title: '05-custom-geometry', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/learning/chapter-02/Example06.vue'),
            name: 'Example0206Index',
            meta: { title: '06-mesh-properties', icon: 'table', noCache: true }
          },
          {
            path: 'example07',
            component: () => import('@/pages/learning/chapter-02/Example07.vue'),
            name: 'Example0207Index',
            meta: { title: '07-both-cameras', icon: 'table', noCache: true }
          },
          {
            path: 'example08',
            component: () => import('@/pages/learning/chapter-02/Example08.vue'),
            name: 'Example0208Index',
            meta: { title: '08-cameras-lookat', icon: 'table', noCache: true }
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
            component: () => import('@/pages/learning/chapter-03/Example01.vue'),
            name: 'Example0301Index',
            meta: { title: '01-ambient-light', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/learning/chapter-03/Example02.vue'),
            name: 'Example0302Index',
            meta: { title: '02-point-light', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/learning/chapter-03/Example03.vue'),
            name: 'Example0303Index',
            meta: { title: '03-spot-light', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/learning/chapter-03/Example04.vue'),
            name: 'Example0304Index',
            meta: { title: '04-directional-light', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/learning/chapter-03/Example05.vue'),
            name: 'Example0305Index',
            meta: { title: '05-hemisphere-light', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/learning/chapter-03/Example06.vue'),
            name: 'Example0306Index',
            meta: { title: '06-area-light', icon: 'table', noCache: true }
          },
          {
            path: 'example07',
            component: () => import('@/pages/learning/chapter-03/Example07.vue'),
            name: 'Example0307Index',
            meta: { title: '07-lensflares', icon: 'table', noCache: true }
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
            component: () => import('@/pages/learning/chapter-04/Example01.vue'),
            name: 'Example0401Index',
            meta: { title: '01-basic-mesh-material', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/learning/chapter-04/Example02.vue'),
            name: 'Example0402Index',
            meta: { title: '02-depth-material', icon: 'table', noCache: true }
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
            component: () => import('@/pages/learning/chapter-05/Example03.vue'),
            name: 'Example0503Index',
            meta: { title: '03-basic-3d-geometries-ring', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/learning/chapter-05/Example06.vue'),
            name: 'Example0506Index',
            meta: { title: '06-basic-3d-geometries-cylinder', icon: 'table', noCache: true }
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
            component: () => import('@/pages/learning/chapter-06/Example03.vue'),
            name: 'Example0603Index',
            meta: { title: '03-extrude-geometry', icon: 'table', noCache: true }
          },
          {
            path: 'example04',
            component: () => import('@/pages/learning/chapter-06/Example04.vue'),
            name: 'Example0604Index',
            meta: { title: '04-extrude-tube', icon: 'table', noCache: true }
          },
          {
            path: 'example08',
            component: () => import('@/pages/learning/chapter-06/Example08.vue'),
            name: 'Example0608Index',
            meta: { title: '08-binary-operations', icon: 'table', noCache: true }
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
            component: () => import('@/pages/learning/chapter-08/Example01.vue'),
            name: 'Example0801Index',
            meta: { title: '01-grouping', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/learning/chapter-08/Example02.vue'),
            name: 'Example0802Index',
            meta: { title: '02-merging', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/learning/chapter-08/Example03.vue'),
            name: 'Example0803Index',
            meta: { title: '03-load-save-json-object', icon: 'table', noCache: true }
          },
          {
            path: 'example05',
            component: () => import('@/pages/learning/chapter-08/Example05.vue'),
            name: 'Example0805Index',
            meta: { title: '05-blender-from-json', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/learning/chapter-08/Example06.vue'),
            name: 'Example0806Index',
            meta: { title: '06-load-obj', icon: 'table', noCache: true }
          },
          {
            path: 'example07',
            component: () => import('@/pages/learning/chapter-08/Example07.vue'),
            name: 'Example0807Index',
            meta: { title: '07-load-obj-mtl', icon: 'table', noCache: true }
          },
          {
            path: 'example08',
            component: () => import('@/pages/learning/chapter-08/Example08.vue'),
            name: 'Example0808Index',
            meta: { title: '08-load-collada', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter9',
        component: Example,
        name: 'Chapter-09',
        // redirect: '/chapter9/example02',
        meta: { title: 'chapter9', icon: 'table', noCache: true },
        children: [
          {
            path: 'example01',
            component: () => import('@/pages/learning/chapter-09/Example01.vue'),
            name: 'Example0901Index',
            meta: { title: '01-basic-animation', icon: 'table', noCache: true }
          },
          {
            path: 'example02',
            component: () => import('@/pages/learning/chapter-09/Example02.vue'),
            name: 'Example0902Index',
            meta: { title: '02-selecting-objects', icon: 'table', noCache: true }
          },
          {
            path: 'example03',
            component: () => import('@/pages/learning/chapter-09/Example03.vue'),
            name: 'Example0903Index',
            meta: { title: '03-animation-tween', icon: 'table', noCache: true }
          },
          {
            path: 'example06',
            component: () => import('@/pages/learning/chapter-09/Example06.vue'),
            name: 'Example0906Index',
            meta: { title: '06-first-person-camera', icon: 'table', noCache: true }
          },
          {
            path: 'example14',
            component: () => import('@/pages/learning/chapter-09/Example14.vue'),
            name: 'Example0914Index',
            meta: { title: '14-animation-from-gltf', icon: 'table', noCache: true }
          }
        ]
      },
      {
        path: '/chapter10',
        component: Example,
        name: 'Chapter-10',
        // redirect: '/chapter10/example02',
        meta: { title: 'chapter10', icon: 'table', noCache: true },
        children: [
          // {
          //   path: 'example01',
          //   component: () => import('@/pages/learning/chapter-10/Example01.vue'),
          //   name: 'Example1001Index',
          //   meta: { title: '01-basic-animation', icon: 'table', noCache: true }
          // },
          // {
          //   path: 'example02',
          //   component: () => import('@/pages/learning/chapter-10/Example02.vue'),
          //   name: 'Example1002Index',
          //   meta: { title: '02-selecting-objects', icon: 'table', noCache: true }
          // },
          // {
          //   path: 'example03',
          //   component: () => import('@/pages/learning/chapter-10/Example03.vue'),
          //   name: 'Example1003Index',
          //   meta: { title: '03-animation-tween', icon: 'table', noCache: true }
          // },
          // {
          //   path: 'example06',
          //   component: () => import('@/pages/learning/chapter-10/Example06.vue'),
          //   name: 'Example1006Index',
          //   meta: { title: '06-first-person-camera', icon: 'table', noCache: true }
          // },
          // {
          //   path: 'example14',
          //   component: () => import('@/pages/learning/chapter-10/Example14.vue'),
          //   name: 'Example1014Index',
          //   meta: { title: '14-animation-from-gltf', icon: 'table', noCache: true }
          // },
          {
            path: 'example24',
            component: () => import('@/pages/learning/chapter-10/Example24.vue'),
            name: 'Example1024Index',
            meta: { title: '24-video-texture', icon: 'table', noCache: true }
          }
        ]
      }
    ]
  }
]
