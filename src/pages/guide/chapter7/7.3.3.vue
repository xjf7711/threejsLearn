<template>
  <div class="example">
    <h2>{{ title }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
import ColladaLoader from '@/assets/threejs/js/loaders/ColladaLoader'
// import ColladaLoader from 'static/threejs/examples/js/loaders/ColladaLoader'
// import "static/threejs/examples/js/loaders/ColladaLoader";
export default {
  name: 'Example733',
  data() {
    return {
      title: '例 7.3.3',
      width: 700,
      height: 500,

      render: null,
      scene: null,
      camera: null,
      id: null
    }
  },
  mounted() {
    // THREE.ColladaLoader = ColladaLoader()
    this.init()
  },
  methods: {
    init() {
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      this.renderer.setClearColor(0x000000)
      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      this.camera.position.set(15, 25, 25)
      this.camera.lookAt(new THREE.Vector3(0, 2, 0))
      this.scene.add(this.camera)

      const loader = new ColladaLoader()

      // loader.load("/guide/lib/y5.dae", collada => {
      loader.load('static/threejs/guide/lib/port.dae', collada => {
        if (collada.scene.children.length > 0) {
          this.scene.add(collada.scene.children[0])
        }
      })

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      this.scene.add(light)

      this.id = setInterval(this.draw, 20)
    },
    draw() {
      this.renderer.render(this.scene, this.camera)
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
