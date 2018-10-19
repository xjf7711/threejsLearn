<template>
  <div class="example">
    <h2>Example 09.16 - animation from gltf </h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
import GLTFLoader from 'three-gltf-loader'
// import GLTFLoader from '../../../assets/threejs/js/loaders/GLTFLoader'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      cube: null,
      sphere: null,
      cylinder: null,
      clock: new THREE.Clock()
    }
  },
  mounted() {
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    setScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
    },
    setRenderer() {
      this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
      this.renderer.sortObjects = false
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(-50, 40, 60)

      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initLight() {
      // add spotlight for the shadows
      var spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-50, 70, 60)
      spotLight.intensity = 1
      this.scene.add(spotLight)
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
    },
    initModels() {
      this.fbxLoad()
    },
    fbxLoad() {
      const loader = new GLTFLoader()
      loader.load('static/threejs/learning/assets/models/gltf/Cesium_Air.gltf', function(scene) {
        console.log(scene)
        // scene.add(mesh)
      })
    },
    render() {
      // this.renderer && this.renderer.clear()
      const delta = this.clock.getDelta()
      // 更新控制器
      this.cameraControls && this.cameraControls.update(delta)
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
