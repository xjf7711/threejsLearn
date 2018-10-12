<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example231',
  data() {
    return {
      msg: '例 2.3.1',
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

      // camera
      // canvas size is 400x300
      const camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10)
      camera.position.set(0, 0, 5)
      // camera.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(camera)

      // a cube in the scene
      const cube = new THREE.Mesh(
        new THREE.CubeGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe: true
        })
      )
      scene.add(cube)

      // render
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
