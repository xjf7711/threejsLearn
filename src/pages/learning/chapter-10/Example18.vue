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
// import { addLargeGroundPlane } from '../../mixin/create'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      controls: null,
      cube1: null,
      cubeCamera: null,
      sphere1: null
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
    // initLight() {
    //   this.setSpotLight()
    //   this.scene.add(new THREE.AmbientLight(0x444444))
    // },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {
    },
    setGui() {
      this.controls = {
        normalScaleX: 1,
        normalScaleY: 1
      }

      const urls = [
        'static/threejs/learning/assets/textures/cubemap/colloseum/right.png',
        'static/threejs/learning/assets/textures/cubemap/colloseum/left.png',
        'static/threejs/learning/assets/textures/cubemap/colloseum/top.png',
        'static/threejs/learning/assets/textures/cubemap/colloseum/bottom.png',
        'static/threejs/learning/assets/textures/cubemap/colloseum/front.png',
        'static/threejs/learning/assets/textures/cubemap/colloseum/back.png'
      ]

      const cubeLoader = new THREE.CubeTextureLoader()
      const textureLoader = new THREE.TextureLoader()
      const cubeMap = cubeLoader.load(urls)
      this.scene.background = cubeMap

      const cubeMaterial = new THREE.MeshStandardMaterial({
        envMap: cubeMap,
        color: 0xffffff,
        metalness: 1,
        roughness: 0
      })

      const sphereMaterial = cubeMaterial.clone()
      sphereMaterial.normalMap = textureLoader.load('static/threejs/learning/assets/textures/engraved/Engraved_Metal_003_NORM.jpg')
      sphereMaterial.aoMap = textureLoader.load('static/threejs/learning/assets/textures/engraved/Engraved_Metal_003_OCC.jpg')
      sphereMaterial.shininessMap = textureLoader.load('static/threejs/learning/assets/textures/engraved/Engraved_Metal_003_ROUGH.jpg')

      this.cubeCamera = new THREE.CubeCamera(0.1, 100, 512)
      this.scene.add(this.cubeCamera)

      const cube = new THREE.CubeGeometry(26, 22, 12)
      this.cube1 = addGeometryWithMaterial(this.scene, cube, 'cube', this.gui, this.controls, cubeMaterial)
      this.cube1.position.x = -15
      this.cube1.rotation.y = -1 / 3 * Math.PI
      this.cubeCamera.position.copy(this.cube1.position)
      cubeMaterial.envMap = this.cubeCamera.renderTarget

      const sphere = new THREE.SphereGeometry(5, 50, 50)
      this.sphere1 = addGeometryWithMaterial(this.scene, sphere, 'sphere', this.gui, this.controls, sphereMaterial)
      this.sphere1.position.x = 15
    },
    render() {
      if (this.cube1) this.cube1.visible = false
      if (this.cubeCamera) this.cubeCamera.updateCubeMap(this.renderer, this.scene)
      if (this.cube1) this.cube1.visible = true
      if (this.cube1) this.cube1.rotation.y += 0.01
      if (this.sphere1) this.sphere1.rotation.y -= 0.01
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
