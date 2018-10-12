<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example331',
  data() {
    return {
      msg: '例 3.3.1',
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

      // draw axes to help you understand the coordinate
      this.drawAxes(scene)

      const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
      })

      // init an empty geometry
      const geometry = new THREE.Geometry()

      // set vertices
      // 4 vertices on top
      geometry.vertices.push(new THREE.Vector3(-1, 2, -1))
      geometry.vertices.push(new THREE.Vector3(1, 2, -1))
      geometry.vertices.push(new THREE.Vector3(1, 2, 1))
      geometry.vertices.push(new THREE.Vector3(-1, 2, 1))
      // 4 vertices on bottom
      geometry.vertices.push(new THREE.Vector3(-2, 0, -2))
      geometry.vertices.push(new THREE.Vector3(2, 0, -2))
      geometry.vertices.push(new THREE.Vector3(2, 0, 2))
      geometry.vertices.push(new THREE.Vector3(-2, 0, 2))

      // set faces
      // top face
      geometry.faces.push(new THREE.Face3(0, 1, 3))
      geometry.faces.push(new THREE.Face3(1, 2, 3))
      // bottom face
      geometry.faces.push(new THREE.Face3(4, 5, 6))
      geometry.faces.push(new THREE.Face3(5, 6, 7))
      // side faces
      geometry.faces.push(new THREE.Face3(1, 5, 6))
      geometry.faces.push(new THREE.Face3(6, 2, 1))
      geometry.faces.push(new THREE.Face3(2, 6, 7))
      geometry.faces.push(new THREE.Face3(7, 3, 2))
      geometry.faces.push(new THREE.Face3(3, 7, 0))
      geometry.faces.push(new THREE.Face3(7, 4, 0))
      geometry.faces.push(new THREE.Face3(0, 4, 5))
      geometry.faces.push(new THREE.Face3(0, 5, 1))

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // render
      renderer.render(scene, camera)
    },
    drawAxes(scene) {
      // x-axis
      const xGeo = new THREE.Geometry()
      xGeo.vertices.push(new THREE.Vector3(0, 0, 0))
      xGeo.vertices.push(new THREE.Vector3(1, 0, 0))
      const xMat = new THREE.LineBasicMaterial({
        color: 0xff0000
      })
      const xAxis = new THREE.Line(xGeo, xMat)
      scene.add(xAxis)

      // y-axis
      const yGeo = new THREE.Geometry()
      yGeo.vertices.push(new THREE.Vector3(0, 0, 0))
      yGeo.vertices.push(new THREE.Vector3(0, 1, 0))
      const yMat = new THREE.LineBasicMaterial({
        color: 0x00ff00
      })
      const yAxis = new THREE.Line(yGeo, yMat)
      scene.add(yAxis)

      // z-axis
      const zGeo = new THREE.Geometry()
      zGeo.vertices.push(new THREE.Vector3(0, 0, 0))
      zGeo.vertices.push(new THREE.Vector3(0, 0, 1))
      const zMat = new THREE.LineBasicMaterial({
        color: 0x00ccff
      })
      const zAxis = new THREE.Line(zGeo, zMat)
      scene.add(zAxis)
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
