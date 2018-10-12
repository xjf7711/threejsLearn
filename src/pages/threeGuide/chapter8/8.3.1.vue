<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>

  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Example831',
  data() {
    return {
      msg: '例 8.3.1',
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

      const light = new THREE.DirectionalLight()
      light.position.set(2, 5, 3)
      scene.add(light)

      const rightCube = new THREE.Mesh(
        new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ color: 0x00ff00 })
      )
      rightCube.position.x = 3
      rightCube.position.y = -2
      scene.add(rightCube)

      const leftCube = new THREE.Mesh(
        new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({ color: 0x00ff00 })
      )
      leftCube.position.x = -3
      scene.add(leftCube)

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
