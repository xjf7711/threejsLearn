<template>
  <div class="example">
    <h2>Example 10.24 - Video texture</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import chroma from 'chroma-js'
import threeMixin from '../../mixin/index'
import Physijs from './js/physi'
Physijs.scripts.worker = 'static/threejs/learning/libs/other/physijs/physijs_worker.js'
Physijs.scripts.ammo = './ammo.js'
export default {
  name: 'Example16',
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
      const ground_material = Physijs.createMaterial(new THREE.MeshStandardMaterial(), 0, 0)

      // Bar
      const ground = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 100), ground_material, 0)
      ground.receiveShadow = true

      this.scene.add(ground)
      this.createPointToPoint(this.scene)
    },
    setGui() {
    },
    render() {
      this.scene.simulate(undefined, 1)
    },
    createPointToPoint(scene) {
      var beads = []
      var rangeMin = -10
      var rangeMax = 10
      var count = 20
      var scale = chroma.scale(['red', 'yellow'])

      for (var i = 0; i < count; i++) {
        var bead = new THREE.SphereGeometry(0.5)
        var physBead = new Physijs.SphereMesh(bead, Physijs.createMaterial(new THREE.MeshStandardMaterial({ color: scale(Math.random()).hex() }), 0, 0))
        physBead.position.set(i * (-rangeMin + rangeMax) / count + rangeMin, 10, Math.random() / 2)
        scene.add(physBead)
        if (i !== 0) {
          var beadConstraint = new Physijs.PointConstraint(beads[i - 1], physBead, physBead.position)
          scene.addConstraint(beadConstraint)
        }
        physBead.castShadow = true
        beads.push(physBead)
      }
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
