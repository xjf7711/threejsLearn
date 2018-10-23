<template>
  <div class="example">
    <h2>Example 10.08 - Bump map</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
// import GLTFLoader from 'three-gltf-loader'
// import GLTFLoader from '../../../assets/threejs/js/loaders/GLTFLoader'
import { addGeometryWithMaterial } from './js/util'
import { addLargeGroundPlane } from '../../mixin/create'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock(),
      controls: null,
      polyhedronMesh: null,
      sphereMesh: null,
      cubeMesh: null
    }
  },
  mounted() {
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    // setScene() {
    //   // create a scene, that will hold all our elements such as objects, cameras and lights.
    // },
    // setRenderer() {
    //   // this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
    //   // this.renderer.sortObjects = false
    // },
    setCamera() {
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(0, 20, 40)

      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initLight() {
      this.setSpotLight()
      this.scene.add(new THREE.AmbientLight(0x444444))
    },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {
      const groundPlane = addLargeGroundPlane(this.scene)
      groundPlane.position.y = -10
      // this.fbxLoad()
    },
    setGui() {
      this.controls = {
        material: null
      }
      const textureLoader = new THREE.TextureLoader()
      const cube = new THREE.BoxGeometry(16, 16, 16)
      const cubeMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('static/threejs/learning/assets/textures/stone/stone.jpg'),
        metalness: 0.2,
        roughness: 0.07
      })

      const cubeMaterialWithBumpMap = cubeMaterial.clone()
      cubeMaterialWithBumpMap.bumpMap = textureLoader.load('../../assets/textures/stone/stone-bump.jpg')

      const cube1 = addGeometryWithMaterial(this.scene, cube, 'cube-1', this.gui, this.controls, cubeMaterial)
      cube1.position.x = -17
      cube1.rotation.y = 1 / 3 * Math.PI

      const cube2 = addGeometryWithMaterial(this.scene, cube, 'cube-2', this.gui, this.controls, cubeMaterialWithBumpMap)
      cube2.position.x = 17
      cube2.rotation.y = -1 / 3 * Math.PI

      this.gui.add(cubeMaterialWithBumpMap, 'bumpScale', -1, 1, 0.001)
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 900px;
    background-color: #eeeeee;
  }
</style>
