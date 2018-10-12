<template>
  <div>
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example121',
  data() {
    return {
      msg: '例 1.2.1',
      width: 700,
      height: 500
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      renderer.setClearColor(0x000000) // black

      // scene
      const scene = new THREE.Scene()

      // camera
      const camera = new THREE.PerspectiveCamera(55, 4 / 3, 1, 1000)
      camera.position.set(2, 2, 5)
      scene.add(camera)

      // a cube in the scene
      const cube = new THREE.Mesh(
        new THREE.CubeGeometry(1, 2, 3),
        new THREE.MeshBasicMaterial({
          color: 0xff0000
        })
      )
      scene.add(cube)

      // render
      renderer.render(scene, camera)
    }
  }
}
</script>
