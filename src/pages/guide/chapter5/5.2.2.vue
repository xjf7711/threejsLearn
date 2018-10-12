<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example522',
  data() {
    return {
      msg: '例 5.2.2',
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
      const camera = new THREE.OrthographicCamera(
        -2.5,
        2.5,
        1.875,
        -1.875,
        0.1,
        100
      )
      camera.position.set(5, 5, 20)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      const material = new THREE.MeshLambertMaterial({
        color: 0xffff00
      })
      const geometry = new THREE.CubeGeometry(1, 2, 3)
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      mesh.position.set(1.5, -0.5, 0)
      // mesh.position = new THREE.Vector3(1.5, -0.5, 0);//Cannot assign to read only property 'position' of object '#<Mesh>
      mesh.position.z = 1

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      scene.add(light)

      this.drawAxes(scene)

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
