<template>
  <div id="loader-json-claraio">
    <h2>{{ title }}</h2>
    <div id="info">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - <a href="https://clara.io" target="_blank" rel="noopener">Clara.io</a> JSON Scene/Object Load Test<br>
      More Information: <a href="https://clara.io/learn/user-guide/data_exchange/threejs_export" target="_blank" rel="noopener">Clara.io ThreeJS Export Documentation</a>
    </div>

  </div>
</template>

<script>
import * as THREE from 'three'
// import Detector from '@/assets/threejs/Detector'

export default {
  name: 'LoaderJsonClaraio',
  data() {
    return {
      title: 'loader-json-claraio',
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,

      mouseX: 0,
      mouseY: 0
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        2000
      )
      this.camera.position.z = 4

      // scene

      this.scene = new THREE.Scene()

      const ambient = new THREE.AmbientLight(0x444444)
      this.scene.add(ambient)

      const directionalLight = new THREE.DirectionalLight(0xffeedd)
      directionalLight.position.set(0, 0, 1).normalize()
      this.scene.add(directionalLight)

      // BEGIN Clara.io JSON loader code
      // const objectLoader = new THREE.JSONLoader()
      const objectLoader = new THREE.ObjectLoader()
      // const geometryLoader = new THREE.BufferGeometryLoader()
      const url = 'static/threejs/examples/models/json/teapot-claraio.json' // object 格式
      // const url = 'static/threejs/examples/json/y5.json' // geometry 格式 没有显示？？？？
      objectLoader.load(url, obj => {
        this.scene.add(obj)
      })
      // END Clara.io JSON loader code

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      this.$el.appendChild(this.renderer.domElement)

      document.addEventListener('mousemove', this.onDocumentMouseMove, false)

      window.addEventListener('resize', this.onWindowResize, false)
    },
    onWindowResize() {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.width, this.height)
    },
    onDocumentMouseMove(event) {
      const windowHalfX = this.width / 2
      const windowHalfY = this.height / 2

      this.mouseX = (event.clientX - windowHalfX) / 2
      this.mouseY = (event.clientY - windowHalfY) / 2
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.render()
    },
    render() {
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05

      this.camera.lookAt(this.scene.position)

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#loader-json-claraio {
  font-family: Monospace;
  background-color: #cccccc;
  color: #fff;
  margin: 0;
  overflow: hidden;
}
#info {
  color: #fff;
  /*position: absolute;*/
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
#info a,
.button {
  color: #f00;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
