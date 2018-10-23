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
// import { addGeometryWithMaterial } from './js/util'
import { addLargeGroundPlane } from '../../mixin/create'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock(),
      controls: null,
      sphereMaterial: null,
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
      groundPlane.position.y = -8
      groundPlane.receiveShadow = true
      // this.fbxLoad()
      var textureLoader = new THREE.TextureLoader()
      var sphere = new THREE.SphereGeometry(8, 180, 180)
      this.sphereMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('static/threejs/learning/assets/textures/w_c.jpg'),
        displacementMap: textureLoader.load('static/threejs/learning/assets/textures/w_d.png'),
        metalness: 0.02,
        roughness: 0.07,
        color: 0xffffff
      })
      this.sphereMesh = new THREE.Mesh(sphere, this.sphereMaterial)
      this.sphereMesh.castShadow = true

      // addGeometryWithMaterial(scene, sphere, 'sphere', gui, controls, sphereMaterial);

      this.scene.add(this.sphereMesh)
    },
    setGui() {
      this.controls = {
        displacementScale: 1,
        displacementBias: 0
      }
      this.gui.add(this.controls, 'displacementScale', -5, 5, 0.01).onChange((e) => { this.sphereMaterial.displacementScale = e })
      this.gui.add(this.controls, 'displacementBias', -5, 5, 0.01).onChange((e) => { this.sphereMaterial.displacementBias = e })
    },
    render() {
      if (this.sphereMesh) this.sphereMesh.rotation.y += 0.01
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
