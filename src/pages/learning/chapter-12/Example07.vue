<template>
  <div class="example">
    <h2>Example 12.07 - Audio</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
import FirstPersonControls from 'first-person-controls'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock(),
      controls: null
    }
  },
  mounted() {},
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    setScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene.fog = new THREE.FogExp2(0x000000, 0.0035)
    },
    // setRenderer() {
    //   // this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
    //   // this.renderer.sortObjects = false
    // },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        50,
        this.width / this.height,
        1,
        10000
      )
      this.camera.position.set(-200, 25, 0)
    },
    initCameraControls() {
      this.controls = new FirstPersonControls(this.camera, this.renderer.domElement)
      this.controls.movementSpeed = 70
      this.controls.lookSpeed = 0.15
      this.controls.noFly = true
      this.controls.lookVertical = false
    },
    initLight() {
      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(0, 0.5, 1).normalize()
      this.scene.add(light)
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
      var helper = new THREE.GridHelper(500, 10)
      helper.position.y = 0.1
      this.scene.add(helper)
    },
    initModels() {
      var listener1 = new THREE.AudioListener()
      this.camera.add(listener1)
      var listener2 = new THREE.AudioListener()
      this.camera.add(listener2)
      var listener3 = new THREE.AudioListener()
      this.camera.add(listener3)

      var cube = new THREE.BoxGeometry(40, 40, 40)

      var material_1 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: new THREE.TextureLoader().load('static/threejs/learning/assets/textures/animals/cow.png')
      })

      var material_2 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: new THREE.TextureLoader().load('static/threejs/learning/assets/textures/animals/dog.jpg')
      })

      var material_3 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: new THREE.TextureLoader().load('static/threejs/learning/assets/textures/animals/cat.jpg')
      })

      // sound spheres
      var mesh1 = new THREE.Mesh(cube, material_1)
      mesh1.position.set(0, 20, 100)
      var mesh2 = new THREE.Mesh(cube, material_2)
      mesh2.position.set(0, 20, 0)
      var mesh3 = new THREE.Mesh(cube, material_3)
      mesh3.position.set(0, 20, -100)

      this.scene.add(mesh1)
      this.scene.add(mesh2)
      this.scene.add(mesh3)

      var posSound1 = new THREE.PositionalAudio(listener1)
      var posSound2 = new THREE.PositionalAudio(listener1)
      var posSound3 = new THREE.PositionalAudio(listener1)

      var audioLoader = new THREE.AudioLoader()
      audioLoader.load('static/threejs/learning/assets/audio/cow.ogg', function(buffer) {
        posSound1.setBuffer(buffer)
        posSound1.setRefDistance(30)
        posSound1.play()
        posSound1.setRolloffFactor(10)
        posSound1.setLoop(true)
      })

      audioLoader.load('static/threejs/learning/assets/audio/dog.ogg', function(buffer) {
        posSound2.setBuffer(buffer)
        posSound2.setRefDistance(30)
        posSound2.play()
        posSound2.setRolloffFactor(10)
        posSound2.setLoop(true)
      })

      audioLoader.load('static/threejs/learning/assets/audio/cat.ogg', function(buffer) {
        posSound3.setBuffer(buffer)
        posSound3.setRefDistance(30)
        posSound3.play()
        posSound3.setRolloffFactor(10)
        posSound3.setLoop(true)
      })

      mesh1.add(posSound1)
      mesh2.add(posSound2)
      mesh3.add(posSound3)
    },
    setGui() {},
    render() {
      var delta = this.clock.getDelta()
      // const time = this.clock.getElapsedTime() * 5
      if (this.controls) this.controls.update(delta)
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
