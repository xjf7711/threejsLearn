<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example311',
  data() {
    return {
      msg: '例 3.1.1',
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

      // this.drawCube(scene, material);
      // this.drawPlane(scene, material);
      this.drawSphere(scene, material)
      // this.drawCircle(scene, material);
      // this.drawCylinder(scene, material);
      // this.drawTetra(scene, material);
      // this.drawOcta(scene, material);
      // this.drawIcosa(scene, material);
      // this.drawTorus(scene, material);
      // this.drawTorusKnot(scene, material);

      // render
      renderer.render(scene, camera)
    },
    drawCube(scene, material) {
      const cube = new THREE.Mesh(
        new THREE.CubeGeometry(1, 2, 3, 2, 2, 3),
        material
      )
      scene.add(cube)
    },
    drawPlane(scene, material) {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), material)
      scene.add(plane)
    },
    drawSphere(scene, material) {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(3, 8, 6),
        material
      )
      // const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
      //      0, Math.PI * 2, Math.PI / 6, Math.PI / 2), material);
      // const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
      //      Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2), material);
      // const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
      //      Math.PI / 6, Math.PI / 3), material);
      // const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
      //      0, Math.PI * 2, Math.PI / 6, Math.PI / 3), material);
      // const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
      //      Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2), material);
      scene.add(sphere)
    },
    drawCircle(scene, material) {
      const circle = new THREE.Mesh(
        new THREE.CircleGeometry(3, 18, Math.PI / 3, (Math.PI / 3) * 4),
        material
      )
      scene.add(circle)
    },
    drawCylinder(scene, material) {
      const cylinder = new THREE.Mesh(
        new THREE.CylinderGeometry(2, 2, 4, 18, 3),
        material
      )
      // const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 4, 18, 3), material);
      // const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 4, 18, 3, true), material);
      scene.add(cylinder)
    },
    drawTetra(scene, material) {
      const tetra = new THREE.Mesh(new THREE.TetrahedronGeometry(3), material)
      scene.add(tetra)
    },
    drawOcta(scene, material) {
      const octa = new THREE.Mesh(new THREE.OctahedronGeometry(3), material)
      scene.add(octa)
    },
    drawIcosa(scene, material) {
      const icosa = new THREE.Mesh(new THREE.IcosahedronGeometry(3), material)
      scene.add(icosa)
    },
    drawTorus(scene, material) {
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(3, 1, 4, 8),
        material
      )
      // const torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 12, 18), material);
      // const torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 4, 8, Math.PI / 3 * 2), material);
      scene.add(torus)
    },
    drawTorusKnot(scene, material) {
      const torus = new THREE.Mesh(
        new THREE.TorusKnotGeometry(2, 0.5, 32, 8),
        material
      )
      scene.add(torus)
    },
    drawTube(scene, material) {
      const tube = new THREE.Mesh(new THREE.TubeGeometry(1, 0.5), material)
      scene.add(tube)
    },

    drawAxes(scene) {
      // x-axis
      const xGeo = new THREE.Geometry()
      xGeo.vertices.push(new THREE.Vector3(0, 0, 0))
      xGeo.vertices.push(new THREE.Vector3(3, 0, 0))
      const xMat = new THREE.LineBasicMaterial({
        color: 0xff0000
      })
      const xAxis = new THREE.Line(xGeo, xMat)
      scene.add(xAxis)

      // y-axis
      const yGeo = new THREE.Geometry()
      yGeo.vertices.push(new THREE.Vector3(0, 0, 0))
      yGeo.vertices.push(new THREE.Vector3(0, 3, 0))
      const yMat = new THREE.LineBasicMaterial({
        color: 0x00ff00
      })
      const yAxis = new THREE.Line(yGeo, yMat)
      scene.add(yAxis)

      // z-axis
      const zGeo = new THREE.Geometry()
      zGeo.vertices.push(new THREE.Vector3(0, 0, 0))
      zGeo.vertices.push(new THREE.Vector3(0, 0, 3))
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
