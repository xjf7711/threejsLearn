import Layout from '@/views/layout/Layout'
import Example from '@/pages/threeExample/Example.vue'
export const examplesRouterMap = [
  // {
  //   path: '/index',
  //   name: 'example-index',
  //   // title: '目录',
  //   meta: { title: 'index', icon: 'table', noCache: true },
  //   component: () => import('@/pages/threeExample/index/Index')
  //   // hidden: true
  // },
  {
    path: '/webgl',
    name: 'webgl',
    title: 'webgl',
    component: Layout,
    meta: { title: 'webgl', icon: 'table', noCache: true },
    children: [
      // {
      //   path: 'index',
      //   name: 'animation-index',
      //   meta: { title: 'index', icon: 'table', noCache: true },
      //   component: () => import('@/pages/threeExample/webgl/animation/Index')
      // },
      {
        path: 'animation-cloth',
        name: 'animation-cloth',
        // title: '衣服',
        meta: { title: 'cloth', icon: 'table', noCache: true },
        component: () => import('@/pages/threeExample/webgl/animation/Cloth')
      },
      {
        path: 'geometry',
        name: 'geometry',
        meta: { title: 'Geometry', icon: 'table', noCache: true },
        component: Example,
        children: [
          {
            path: 'cube',
            name: 'cube',
            meta: { title: 'cube', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/geometry/Cube.vue')
          },
          {
            path: 'extrude-shapes',
            name: 'extrude-shapes',
            meta: { title: 'shapes', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/geometry/ExtrudeShapes')
          },
          {
            path: 'extrude-shapes2',
            name: 'extrude-shapes2',
            meta: { title: 'shapes2', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/geometry/ExtrudeShapes2')
          },
          {
            path: 'text',
            name: 'text',
            meta: { title: 'text', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/geometry/Text.vue')
          },
          {
            path: 'teapot',
            name: 'teapot',
            meta: { title: 'teapot', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/geometry/Teapot.vue')
          }
        ]
      },
      {
        path: 'loaders',
        name: 'loaders',
        redirect: 'loaders/3ds',
        component: Example,
        meta: { title: 'loaders', icon: 'table', noCache: true },
        children: [
          {
            path: '3ds',
            name: '3ds',
            meta: { title: '3ds', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/3ds.vue')
          },
          {
            path: 'collada',
            name: 'collada',
            meta: { title: 'collada', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/Collada.vue')
          },
          {
            path: 'fbx',
            name: 'fbx',
            meta: { title: 'fbx', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/Fbx.vue')
          },
          {
            path: 'fbx-dancing',
            name: 'fbx-dancing',
            meta: { title: 'fbx', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/FbxDancer.vue')
          },
          {
            path: 'json-blender',
            name: 'json-blender',
            meta: { title: 'json-blender', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/JsonBlender.vue')
          },
          {
            path: 'json-buffergeometry',
            name: 'json-buffergeometry',
            meta: { title: 'json-buffergeometry', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/JsonBufferGeometry.vue')
          },
          {
            path: 'json-claraio',
            name: 'json-claraio',
            meta: { title: 'json-claraio', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/JsonClaraio.vue')
          },
          {
            path: 'collada-skinning',
            name: 'collada-skinning',
            meta: { title: 'collada-skinning', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/ColladaSkinning.vue')
          },
          {
            path: 'gltf',
            name: 'gltf',
            meta: { title: 'gltf', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/Gltf.vue')
          },
          {
            path: 'obj2',
            name: 'obj2',
            meta: { title: 'obj2', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/Obj2.vue')
          },
          {
            path: 'obj-mtl',
            name: 'obj-mtl',
            meta: { title: 'obj-mtl', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/loader/Objmtl.vue')
          }
        ]
      },
      {
        path: 'shaders',
        name: 'shaders',
        redirect: 'ocean',
        meta: { title: 'shaders', icon: 'table', noCache: true },
        component: Example,
        children: [
          {
            path: 'ocean',
            name: 'ocean-mtl',
            meta: { title: 'Ocean', icon: 'table', noCache: true },
            component: () => import('@/pages/threeExample/webgl/shaders/Ocean.vue')
          }
        ]
      }
    ]
  }
]
