<template>
  <div id="collada">
    <h2>{{ title }}</h2>
    <div id="container"/>
    <div id="info">
      <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> collada loader
      | Elf Girl by <a href="https://sketchfab.com/yellow09" target="_blank" rel="noopener">halloween</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC Attribution</a>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import ColladaLoader from '@/assets/threejs/js/loaders/ColladaLoader.js'
import Detector from '@/assets/threejs/Detector'

// "js/libs/stats.min.js"

export default {
  name: 'Collada',
  data() {
    return {
      title: 'collada',
      container: null,
      width: 700,
      height: 400,
      // stats,
      clock: null,
      camera: null,
      scene: null,
      renderer: null,
      elf: null
    }
  },
  mounted() {
    if (!Detector.webgl) Detector.addGetWebGLMessage()
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = document.getElementById('container')

      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.1,
        2000
      )
      this.camera.position.set(8, 10, 8)
      this.camera.lookAt(new THREE.Vector3(0, 3, 0))

      this.scene = new THREE.Scene()

      this.clock = new THREE.Clock()

      // loading manager

      const loadingManager = new THREE.LoadingManager(() => {
        this.scene.add(this.elf)
      })

      // collada

      const loader = new ColladaLoader(loadingManager)

      // const url ='/guide/lib/port.dae'
      // const url = '/examples/models/collada/elf/elf.dae'
      // const url = '/examples/y5/y5.dae'
      const url = 'static/threejs/examples/obj/teaport.dae'
      loader.load(url, collada => {
        this.elf = collada.scene
      })

      //

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
      this.scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(1, 1, 0).normalize()
      this.scene.add(directionalLight)

      //

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      container.appendChild(this.renderer.domElement)

      //

      // stats = new Stats();
      // container.appendChild( stats.dom );

      //

      window.addEventListener('resize', this.onWindowResize, false)
    },
    onWindowResize() {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.width, this.height)
    },
    animate() {
      requestAnimationFrame(this.animate)

      this.render()
      // stats.update();
    },
    render() {
      const delta = this.clock.getDelta()

      if (this.elf !== null) {
        this.elf.rotation.z += delta * 0.5
      }

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#collada {
  background: #777;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

#info {
  /*position: absolute;*/
  top: 0;
  width: 100%;
  color: #ffffff;
  padding: 5px;
  font-family: Monospace;
  font-size: 13px;
  text-align: center;
}

a {
  color: #ffffff;
}
</style>
