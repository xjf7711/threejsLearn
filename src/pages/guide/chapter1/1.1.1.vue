<template>
  <div class="example">
    <h2>{{ title }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example111',
  data() {
    return {
      title: '例1.1.1',
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
      renderer.setClearColor(0x0000ff) // black

      const scene = new THREE.Scene()

      const camera = new THREE.PerspectiveCamera(45, 4 / 3, 3, 1000)
      camera.position.set(0, 0, 5)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      const material = new THREE.MeshBasicMaterial({
        color: 0xff00ff // white
      })
      // plane
      const planeGeo = new THREE.PlaneGeometry(1.5, 1.5)
      const plane = new THREE.Mesh(planeGeo, material)
      plane.position.x = 1
      scene.add(plane)

      // triangle
      const triGeo = new THREE.Geometry()
      triGeo.vertices = [
        new THREE.Vector3(0, -0.8, 0),
        new THREE.Vector3(-2, -0.8, 0),
        new THREE.Vector3(-1, 0.8, 0)
      ]
      triGeo.faces.push(new THREE.Face3(0, 2, 1))
      const triangle = new THREE.Mesh(triGeo, material)
      scene.add(triangle)

      renderer.render(scene, camera)
    }
  }
}
</script>

<style scoped>
.example {
  background-color: #ddd;
  width: 100%;
  height: 800px;
}
</style>
