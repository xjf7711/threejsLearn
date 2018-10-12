<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example411',
  data() {
    return {
      msg: '例 4.1.1',
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
      const camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      camera.position.set(25, 25, 25)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      // light
      const light = new THREE.PointLight(0xffffff, 1, 100)
      light.position.set(10, 15, 5)
      scene.add(light)

      const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        opacity: 0.75
      })

      const cube = new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5), material)
      scene.add(cube)

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
