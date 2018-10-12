<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>

  </div>
</template>

<script>
import * as THREE from 'three'
import axios from 'axios'
export default {
  name: 'Example931',
  data() {
    return {
      msg: '例 9.3.1',
      width: 700,
      height: 500,
      renderer: null,
      scene: null,
      camera: null,
      cube: null
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

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      this.camera.position.set(5, 15, 25)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.scene.add(this.camera)

      const light = new THREE.DirectionalLight()
      light.position.set(3, 2, 5)
      this.scene.add(light)

      // load shader
      axios.get('static/threejs/guide/shader/my.vs').then(vShader => {
        console.log('static/threejs/guide/shader/my.vs vShader is ', vShader)
        axios.get('static/threejs/guide/shader/my.fs').then(fShader => {
          const material = new THREE.ShaderMaterial({
            vertexShader: vShader.data,
            fragmentShader: fShader.data
          })

          this.cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), material)
          this.scene.add(this.cube)
          this.draw()
        })
      })
    },
    draw() {
      this.cube.rotation.y += 0.01
      if (this.cube.rotation.y > Math.PI * 2) {
        this.cube.rotation.y -= Math.PI * 2
      }
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.draw)
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
