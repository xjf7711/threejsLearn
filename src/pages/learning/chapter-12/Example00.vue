<template>
  <div class="example">
    <h2>Example 10.24 - Video texture</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
// inject Three.js
// const Physijs = require('physijs-webpack')(THREE)
import Physijs from './js/physi'
Physijs.scripts.worker = 'static/threejs/learning/libs/other/physijs/physijs_worker.js'
Physijs.scripts.ammo = './ammo.js'
export default {
  name: 'Example1',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock()
    }
  },
  mounted() {
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    initScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new Physijs.Scene({ reportSize: 10, fixedTimeStep: 1 / 60 })
      this.scene.setGravity(new THREE.Vector3(0, -10, 0))
      this.scene.simulate()
    },
    // setRenderer() {
    //   // this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
    //   // this.renderer.sortObjects = false
    // },
    setCamera() {
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(10, 10, 10)
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
      // this.fbxLoad()
    },
    setGui() {
    },
    render() {
      this.scene.simulate(undefined, 1)
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
