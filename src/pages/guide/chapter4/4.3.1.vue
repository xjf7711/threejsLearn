<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example431',
  data() {
    return {
      msg: '例 4.3.1',
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
      const light = new THREE.PointLight(0xffffff, 1, 200)
      light.position.set(10, 15, 25)
      scene.add(light)

      const material = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        specular: 0xffff00,
        shininess: 100
      })

      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(3, 20, 8),
        material
      )
      scene.add(sphere)

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
