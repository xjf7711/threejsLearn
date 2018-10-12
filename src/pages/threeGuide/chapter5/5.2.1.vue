<template>
  <div>
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example521',
  data() {
    return {
      msg: '例 5.2.1',
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

      mesh.material = new THREE.MeshLambertMaterial({
        color: 0xff0000
      })

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      scene.add(light)

      // render
      renderer.render(scene, camera)
    }
  }
}
</script>

<style scoped>
</style>
