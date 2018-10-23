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
      clock: new THREE.Clock(),
      controls: null,
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
    },
    setGui() {
      this.controls = {
      }
      const textureLoader = new THREE.TextureLoader()
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: textureLoader.load('static/threejs/learning/assets/textures/earth/Earth.png'),
        normalMap: textureLoader.load('static/threejs/learning/assets/textures/earth/EarthNormal.png'),
        specularMap: textureLoader.load('static/threejs/learning/assets/textures/earth/EarthSpec.png'),
        normalScale: new THREE.Vector2(6, 6)
      })

      const sphere = new THREE.SphereGeometry(9, 50, 50)
      this.sphere1 = addGeometryWithMaterial(this.scene, sphere, 'sphere', this.gui, this.controls, earthMaterial.clone())
      this.sphere1.rotation.y = 1 / 6 * Math.PI
    },
    render() {
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
