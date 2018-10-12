<template>
  <div>
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
const jsonUrl = 'static/threejs/guide/lib/helvetiker_regular.typeface.json'
console.log('jsonUrl is ', jsonUrl)
// console.log(process.env.BASE_URL);
export default {
  name: 'Example241',
  data() {
    return {
      msg: '例 2.4.1',
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
      camera.lookAt(new THREE.Vector3(1, 0, 0))
      scene.add(camera)

      // draw axes to help you understand the coordinate
      this.drawAxes(scene)

      const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
      })

      // const light = new THREE.DirectionalLight(0xffffff);
      // light.position.set(-5, 10, 5);
      // scene.add(light);

      // load font
      const loader = new THREE.FontLoader()

      loader.load(jsonUrl, font => {
        const mesh = new THREE.Mesh(
          new THREE.TextGeometry('Hello', {
            font: font,
            size: 1,
            height: 1
          }),
          material
        )
        scene.add(mesh)

        // render
        renderer.render(scene, camera)
      })
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
</style>
