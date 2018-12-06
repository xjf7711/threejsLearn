<template>
  <div class="example">
    <h2>Example 12.02 - Material</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
import Physijs from './js/physi'

export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock(),
      direction: 1,
      ground: null
    }
  },
  created() {
    Physijs.scripts.worker = 'static/threejs/learning/libs/other/physijs/physijs_worker.js'
    Physijs.scripts.ammo = './ammo.js'
  },
  mounted() {
  },
  // destroyed() {
  //   Physijs.scripts = null
  // },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    initScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new Physijs.Scene()
      // this.scene.setGravity(new THREE.Vector3(0, -10, 0));
      this.scene.simulate()
    },
    // setRenderer() {
    //   // this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
    //   // this.renderer.sortObjects = false
    // },
    setCamera() {
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(50, 80, 90)
    },
    // initCameraControls() {
    //   this.initTrackballControls(this.camera, this.renderer)
    // },
    setCameraControls() {
      this.cameraControls.minDistance = 20
      this.cameraControls.maxDistance = 500
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
      // Materials
      const ground_material = Physijs.createMaterial(
        new THREE.MeshPhongMaterial({
          map: new THREE.TextureLoader().load('static/threejs/learning/assets/textures/general/floor-wood.jpg')
        }),
        0.9,
        0.6)
      ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping
      ground_material.map.repeat.set(4, 8)

      // Ground
      this.ground = new Physijs.BoxMesh(new THREE.BoxGeometry(60, 1, 130), ground_material, 0)
      this.ground.receiveShadow = true
      this.ground.castShadow = true

      var borderLeft = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 6, 130), ground_material, 0)
      borderLeft.position.x = -31
      borderLeft.position.y = 2
      borderLeft.receiveShadow = true
      borderLeft.castShadow = true

      this.ground.add(borderLeft)

      var borderRight = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 6, 130), ground_material, 0)
      borderRight.position.x = 31
      borderRight.position.y = 2

      this.ground.add(borderRight)

      var borderBottom = new Physijs.BoxMesh(new THREE.BoxGeometry(64, 6, 2), ground_material, 0)
      borderBottom.position.z = 65
      borderBottom.position.y = 2
      this.ground.add(borderBottom)

      var borderTop = new Physijs.BoxMesh(new THREE.BoxGeometry(64, 6, 2), ground_material, 0)
      borderTop.position.z = -65
      borderTop.position.y = 2
      this.ground.add(borderTop)
      this.scene.add(this.ground)
    },
    setGui() {
      var colors = [0x66ff00, 0x6600ff, 0x0066ff, 0xff6600, 0xff0066]
      var meshes = []
      const self = this
      var controls = new function() {
        this.cubeRestitution = 0.4
        this.cubeFriction = 0.4
        this.sphereRestitution = 0.9
        this.sphereFriction = 0.1

        this.clearMeshes = function() {
          meshes.forEach(function(e) { self.scene.remove(e) })
          meshes = []
        }

        this.addSpheres = function() {
          var colorSphere = colors[Math.floor(Math.random() * 5)]
          for (var i = 0; i < 5; i++) {
            var sphere = new Physijs.SphereMesh(new THREE.SphereGeometry(2, 20), Physijs.createMaterial(new THREE.MeshStandardMaterial({ color: colorSphere }), controls.sphereFriction, controls.sphereRestitution))
            sphere.position.set(Math.random() * 50 - 25, 20 + Math.random() * 5, Math.random() * 50 - 25)

            meshes.push(sphere)
            self.scene.add(sphere)
          }
        }

        this.addCubes = function() {
          var colorBox = colors[Math.floor(Math.random() * 5)]
          for (var i = 0; i < 5; i++) {
            const box = new Physijs.BoxMesh(new THREE.BoxGeometry(4, 4, 4),
              Physijs.createMaterial(new THREE.MeshStandardMaterial({ color: colorBox }), controls.cubeFriction, controls.cubeRestitution))
            box.position.set(Math.random() * 50 - 25, 20 + Math.random() * 5, Math.random() * 50 - 25)
            box.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2)

            meshes.push(box)
            self.scene.add(box)
          }
        }
      }()
      this.gui.add(controls, 'cubeRestitution', 0, 1)
      this.gui.add(controls, 'cubeFriction', 0, 1)
      this.gui.add(controls, 'sphereRestitution', 0, 1)
      this.gui.add(controls, 'sphereFriction', 0, 1)
      this.gui.add(controls, 'addCubes')
      this.gui.add(controls, 'addSpheres')
      this.gui.add(controls, 'clearMeshes')
    },
    render() {
      if (this.ground) this.ground.rotation.x += 0.003 * this.direction

      if (this.ground && this.ground.rotation.x < -0.5) this.direction = 1
      if (this.ground && this.ground.rotation.x > 0.5) this.direction = -1
      if (this.ground) this.ground.__dirtyRotation = true
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
