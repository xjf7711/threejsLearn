<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>

  </div>
</template>

<script>
import * as THREE from 'three'
// import * as Stats from 'static/threejs/guide/lib/stats.js'
export default {
  name: 'Example821',
  data() {
    return {
      msg: '例 8.2.1',
      width: 700,
      height: 500
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      renderer.setClearColor(0x000000)
      const scene = new THREE.Scene()

      const camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      camera.position.set(5, 15, 25)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      const light = new THREE.PointLight(0xffffff, 2, 100)
      light.position.set(0, 1.5, 2)
      scene.add(light)

      const greenCube = new THREE.Mesh(
        new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ color: 0x00ff00 })
      )
      greenCube.position.x = 3
      scene.add(greenCube)

      const whiteCube = new THREE.Mesh(
        new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ color: 0xffffff })
      )
      whiteCube.position.x = -3
      scene.add(whiteCube)

      renderer.render(scene, camera)
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
