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
      controls: null,
      spotLight: null,
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
      this.spotLight = this.scene.getObjectByName('spotLight')
      this.spotLight.intensity = 0.1
      this.scene.remove(this.scene.getObjectByName('ambientLight'))
    },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {
      const groundPlane = addLargeGroundPlane(this.scene)
      groundPlane.position.y = -8
    },
    setGui() {
      this.controls = {
        lightIntensity: 0.1
      }
      var textureLoader = new THREE.TextureLoader()
      var cubeMaterial = new THREE.MeshStandardMaterial({
        emissive: 0xffffff,
        emissiveMap: textureLoader.load('static/threejs/learning/assets/textures/emissive/lava.png'),
        normalMap: textureLoader.load('static/threejs/learning/assets/textures/emissive/lava-normals.png'),
        metalnessMap: textureLoader.load('static/threejs/learning/assets/textures/emissive/lava-smoothness.png'),
        metalness: 1,
        roughness: 0.4,
        normalScale: new THREE.Vector2(4, 4)
      })

      var cube = new THREE.BoxGeometry(16, 16, 16)
      var cube1 = addGeometryWithMaterial(this.scene, cube, 'cube', this.gui, this.controls, cubeMaterial)
      cube1.rotation.y = 1 / 3 * Math.PI
      cube1.position.x = -12

      var sphere = new THREE.SphereGeometry(9, 50, 50)
      var sphere1 = addGeometryWithMaterial(this.scene, sphere, 'sphere', this.gui, this.controls, cubeMaterial.clone())
      sphere1.rotation.y = 1 / 6 * Math.PI
      sphere1.position.x = 15

      this.gui.add(this.controls, 'lightIntensity', 0, 1, 0.01).onChange((e) => {
        this.spotLight.intensity = e
      })
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
