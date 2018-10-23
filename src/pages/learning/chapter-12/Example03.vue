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
import Perlin from './js/perlin'
Physijs.scripts.worker =
  'static/threejs/learning/libs/other/physijs/physijs_worker.js'
Physijs.scripts.ammo = './ammo.js'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock()
    }
  },
  mounted() {},
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
      this.camera.position.set(50, 120, 220)
    },
    setCameraControls() {
      this.cameraControls.minDistance = 20
      this.cameraControls.maxDistance = 500
    },
    initLight() {
      // this.setSpotLight()
      this.setHemisphereLight()
      this.scene.add(new THREE.AmbientLight(0x0393939))
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
    },
    initModels() {
      // this.fbxLoad()
      // setup the heightmap
      const date = new Date()
      const pn = new Perlin('rnd' + date.getTime())
      const map = this.createHeightMap(pn)
      this.scene.add(map)
    },
    setGui() {
      var meshes = []
      const self = this
      var controls = {
        addSphereMesh: function() {
          var sphere = new Physijs.SphereMesh(
            new THREE.SphereGeometry(3, 20),
            self.getMaterial()
          )
          self.setPosAndShade(sphere)
          meshes.push(sphere)
          self.scene.add(sphere)
        },
        addBoxMesh: function() {
          var cube = new Physijs.BoxMesh(
            new THREE.BoxGeometry(4, 2, 6),
            self.getMaterial()
          )
          self.setPosAndShade(cube)
          meshes.push(cube)
          self.scene.add(cube)
        },
        addCylinderMesh: function() {
          var cylinder = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(2, 2, 6),
            self.getMaterial()
          )
          self.setPosAndShade(cylinder)
          meshes.push(cylinder)
          self.scene.add(cylinder)
        },
        addConeMesh: function() {
          var cone = new Physijs.ConeMesh(
            new THREE.CylinderGeometry(0, 3, 7, 20, 10),
            self.getMaterial()
          )
          self.setPosAndShade(cone)
          meshes.push(cone)
          self.scene.add(cone)
        },
        addPlaneMesh: function() {
          var plane = new Physijs.PlaneMesh(
            new THREE.PlaneGeometry(5, 5, 10, 10),
            self.getMaterial()
          )
          self.setPosAndShade(plane)
          meshes.push(plane)
          self.scene.add(plane)
        },
        addCapsuleMesh: function() {
          var merged = new THREE.Geometry()
          var cyl = new THREE.CylinderGeometry(2, 2, 6)
          var top = new THREE.SphereGeometry(2)
          var bot = new THREE.SphereGeometry(2)

          var matrixA = new THREE.Matrix4()
          matrixA.makeTranslation(0, 3, 0)
          top.applyMatrix(matrixA)

          var matrixB = new THREE.Matrix4()
          matrixB.makeTranslation(0, -3, 0)
          bot.applyMatrix(matrixB)

          // merge to create a capsule
          merged.merge(top)
          merged.merge(bot)
          merged.merge(cyl)

          // create a physijs capsule mesh
          var capsule = new Physijs.CapsuleMesh(merged, self.getMaterial())
          self.setPosAndShade(capsule)

          meshes.push(capsule)
          self.scene.add(capsule)
        },
        addConvexMesh: function() {
          var convex = new Physijs.ConvexMesh(
            new THREE.TorusKnotGeometry(3.5, 2.3, 64, 8, 2, 3, 10),
            self.getMaterial()
          )
          self.setPosAndShade(convex)
          meshes.push(convex)
          self.scene.add(convex)
        },
        clearMeshes: function() {
          meshes.forEach(function(e) {
            self.scene.remove(e)
          })
          meshes = []
        }
      }

      this.gui.add(controls, 'addPlaneMesh')
      this.gui.add(controls, 'addBoxMesh')
      this.gui.add(controls, 'addSphereMesh')
      this.gui.add(controls, 'addCylinderMesh')
      this.gui.add(controls, 'addConeMesh')
      this.gui.add(controls, 'addCapsuleMesh')
      this.gui.add(controls, 'addConvexMesh')
      this.gui.add(controls, 'clearMeshes')
    },
    render() {
      this.scene.simulate(undefined, 1)
    },
    getMaterial() {
      var scale = chroma.scale(['blue', 'white', 'red', 'yellow'])
      return Physijs.createMaterial(
        new THREE.MeshPhongMaterial({ color: scale(Math.random()).hex() }),
        0.5,
        0.7
      )
    },
    createHeightMap(pn) {
      var ground_material = Physijs.createMaterial(
        new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load(
            'static/threejs/learning/assets/textures/ground/grasslight-big.jpg'
          )
        }),
        0.3,
        0.8
      )
      var ground_geometry = new THREE.PlaneGeometry(220, 200, 100, 100)
      for (var i = 0; i < ground_geometry.vertices.length; i++) {
        var vertex = ground_geometry.vertices[i]
        var value = pn.noise(vertex.x / 12, vertex.y / 12, 0)
        vertex.z = value * 13
      }
      ground_geometry.computeFaceNormals()
      ground_geometry.computeVertexNormals()

      var ground = new Physijs.HeightfieldMesh(
        ground_geometry,
        ground_material,
        0,
        100,
        100
      )
      ground.rotation.x = Math.PI / -2
      ground.rotation.y = 0.5
      ground.receiveShadow = true

      return ground
    },
    setPosAndShade(obj) {
      obj.position.set(Math.random() * 20 - 45, 40, Math.random() * 20 - 5)
      obj.rotation.set(
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI
      )
      obj.castShadow = true
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
