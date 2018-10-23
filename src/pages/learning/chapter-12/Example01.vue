<template>
  <div class="example">
    <h2>Example 12.01 - Dominos</h2>
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
  name: 'Example01',
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
      this.scene = new Physijs.Scene()
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
      this.camera.position.set(80, 80, 80)
    },
    setCameraControls() {
      this.cameraControls.minDistance = 20
      this.cameraControls.maxDistance = 400
    },
    initLight() {
      this.setSpotLight()
      this.scene.add(new THREE.AmbientLight(0x0393939))
      this.scene.setGravity(new THREE.Vector3(0, -50, 0))
    },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {
      this.createGroundAndWalls(this.scene)
      var points = this.getPoints()
      var stones = []
      var colors = [0x66ff00, 0x6600ff]
      points.forEach((point, index) => {
        var stoneGeom = new THREE.BoxGeometry(0.6, 6, 2)
        var stone = new Physijs.BoxMesh(
          stoneGeom,
          Physijs.createMaterial(
            new THREE.MeshStandardMaterial({
              color: colors[index % colors.length], transparent: true, opacity: 0.8
            })
          )
        )

        stone.position.copy(point)
        stone.lookAt(this.scene.position)

        stone.position.y = 3.5
        stone.castShadow = true
        stone.receiveShadow = true

        stone.__dirtyRotation = true
        this.scene.add(stone)
        stones.push(stone)
      })

      // set the initial rotiation of a stone so it'll fall down
      stones[0].rotation.x = 0.4
      stones[0].__dirtyRotation = true
    },
    setGui() {
      // setup controls
      const controls = {
        gravityX: 0,
        gravityY: -50,
        gravityZ: 0
      }

      this.gui.add(controls, 'gravityX', -100, 100, 1)
        .onChange((e) => {
          this.scene.setGravity(new THREE.Vector3(controls.gravityX, controls.gravityY, controls.gravityZ))
        })
      this.gui.add(controls, 'gravityY', -100, 100, 1)
        .onChange((e) => {
          this.scene.setGravity(new THREE.Vector3(controls.gravityX, controls.gravityY, controls.gravityZ))
        })
      this.gui.add(controls, 'gravityZ', -100, 100, 1)
        .onChange((e) => {
          this.scene.setGravity(new THREE.Vector3(controls.gravityX, controls.gravityY, controls.gravityZ))
        })
    },
    render() {
      this.scene.simulate(undefined, 1)
    },
    getPoints() {
      var points = []
      var r = 27
      var cX = 0
      var cY = 0

      var circleOffset = 0
      for (var i = 0; i < 1000; i += 6 + circleOffset) {
        circleOffset = 4.5 * (i / 360)

        var x = (r / 1440) * (1440 - i) * Math.cos(i * (Math.PI / 180)) + cX
        var z = (r / 1440) * (1440 - i) * Math.sin(i * (Math.PI / 180)) + cY
        var y = 0

        points.push(new THREE.Vector3(x, y, z))
      }

      return points
    },
    createGroundAndWalls(scene) {
      var textureLoader = new THREE.TextureLoader()
      var ground_material = Physijs.createMaterial(
        new THREE.MeshStandardMaterial(
          { map: textureLoader.load('static/threejs/learning/assets/textures/general/wood-2.jpg') }
        ),
        0.9, 0.3)

      var ground = new Physijs.BoxMesh(new THREE.BoxGeometry(60, 1, 60), ground_material, 0)
      ground.castShadow = true
      ground.receiveShadow = true

      var borderLeft = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 3, 60), ground_material, 0)
      borderLeft.position.x = -31
      borderLeft.position.y = 2
      borderLeft.castShadow = true
      borderLeft.receiveShadow = true

      ground.add(borderLeft)

      var borderRight = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 3, 60), ground_material, 0)
      borderRight.position.x = 31
      borderRight.position.y = 2
      borderRight.castShadow = true
      borderRight.receiveShadow = true

      ground.add(borderRight)

      var borderBottom = new Physijs.BoxMesh(new THREE.BoxGeometry(64, 3, 2), ground_material, 0)
      borderBottom.position.z = 30
      borderBottom.position.y = 2
      borderBottom.castShadow = true
      borderBottom.receiveShadow = true

      ground.add(borderBottom)

      var borderTop = new Physijs.BoxMesh(new THREE.BoxGeometry(64, 3, 2), ground_material, 0)
      borderTop.position.z = -30
      borderTop.position.y = 2
      borderTop.castShadow = true
      borderTop.receiveShadow = true

      ground.add(borderTop)

      scene.add(ground)
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
