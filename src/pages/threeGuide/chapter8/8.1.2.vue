<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example812',
  data() {
    return {
      msg: '例 8.1.2',
      width: 700,
      height: 500,

      render: null,
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
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      renderer.setClearColor(0x000000)
      const scene = new THREE.Scene()

      const camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      camera.position.set(5, 15, 25)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      const light = new THREE.AmbientLight(0xff0000)
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
