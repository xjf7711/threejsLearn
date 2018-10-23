<template>
  <div class="example">
    <h2>Example 10.10 - Displacement map</h2>
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
      controls: {},
      sphere: null,
      sphereMaterial: null
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
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
    },
    initModels() {
      const groundPlane = addLargeGroundPlane(this.scene)
      groundPlane.position.y = -8

      var textureLoader = new THREE.TextureLoader()
      this.sphere = new THREE.SphereGeometry(8, 180, 180)
      this.sphereMaterial = new THREE.MeshStandardMaterial({
        alphaMap: textureLoader.load('static/threejs/learning/assets/textures/alpha/partial-transparency.png'),
        metalness: 0.02,
        roughness: 0.07,
        color: 0xffffff,
        alphaTest: 0.5
      })

      this.sphereMaterial.alphaMap.wrapS = THREE.RepeatWrapping
      this.sphereMaterial.alphaMap.wrapT = THREE.RepeatWrapping
      this.sphereMaterial.alphaMap.repeat.set(8, 8)
    },
    setGui() {
      this.controls = {}
      var mesh = addGeometryWithMaterial(this.scene, this.sphere, 'sphere', this.gui, this.controls, this.sphereMaterial)
      mesh.castShadow = false
      mesh.receiveShadow = false
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
