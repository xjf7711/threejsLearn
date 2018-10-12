<template>
  <div>
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example421',
  data() {
    return {
      msg: '例 4.2.1',
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

      const material = new THREE.MeshLambertMaterial({
        color: 0xffff00
        // emissive: 0xff0000
      })

      const cube = new THREE.Mesh(new THREE.CubeGeometry(4, 4, 4), material)
      scene.add(cube)
      // const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 20, 8), material);
      // scene.add(sphere);

      renderer.render(scene, camera)
    }
  }
}
</script>

<style scoped>
</style>
