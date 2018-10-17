<template>
  <div class="example">
    <h2>{{ title }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
// import OBJLoader from '@/assets/threejs/js/loaders/OBJLoader'
import { OBJLoader } from 'three-obj-mtl-loader'
// import OBJLoader from 'static/threejs/examples/js/loaders/OBJLoader.js'
// import 'static/threejs/examples/js/loaders/OBJLoader.js'
// import * as Stats from 'static/threejs/guide/lib/stats.js'
import stats from '../../mixin/stats'
import animate from '../../mixin/animate'
export default {
  name: 'Teapot721',
  mixins: [stats, animate],
  data() {
    return {
      title: '例 7.2.1',
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,
      mesh: null,
      id: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      this.renderer.setClearColor(0x000000)
      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 1000)
      this.camera.position.set(5, 5, 5)
      this.camera.lookAt(new THREE.Vector3(0, 2, 0))
      // this.scene.add(this.camera)

      // instantiate a loader
      const loader = new OBJLoader()
      const url = 'static/threejs/guide/lib/port.obj'

      // load a resource
      loader.load(
        // resource URL
        url,
        // called when resource is loaded
        object => {
          // scene.add( object );
          //
          object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.side = THREE.DoubleSide
            }
          })
          this.mesh = object
          this.scene.add(object)
        },
        // called when loading is in progresses
        function(xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        // called when loading has errors
        function(error) {
          console.log('An error happened', error)
        }
      )

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      this.scene.add(light)

      // this.id = setInterval(this.draw, 500)
    },
    render() {
      this.renderer && this.renderer.render(this.scene, this.camera)

      this.mesh.rotation.y += 0.01
      if (this.mesh.rotation.y > Math.PI * 2) {
        this.mesh.rotation.y -= Math.PI * 2
      }
    }
  }
}
</script>

<style scoped>
.example {
  background-color: #dddddd;
  width: 100%;
  height: 800px;
}
</style>
