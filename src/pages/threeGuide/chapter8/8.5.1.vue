<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <div id="canvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example851',
  data() {
    return {
      msg: '例 8.5.1',
      width: 700,
      height: 500,

      render: null,
      scene: null,
      camera: null,
      mesh: null,
      id: null,

      cube: null,
      alpha: 0
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(this.width, this.height)

      const container = document.getElementById('canvas')
      container.appendChild(this.renderer.domElement)
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMapSoft = true

      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      this.camera.position.set(5, 15, 25)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.scene.add(this.camera)

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 8, 16, 16),
        new THREE.MeshLambertMaterial({ color: 0xcccccc })
      )
      plane.rotation.x = -Math.PI / 2
      plane.position.y = -1
      plane.receiveShadow = true
      this.scene.add(plane)

      this.cube = new THREE.Mesh(
        new THREE.CubeGeometry(1, 1, 1),
        new THREE.MeshLambertMaterial({ color: 0x00ff00 })
      )
      this.cube.position.x = 2
      this.cube.castShadow = true
      this.scene.add(this.cube)

      const light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25)
      light.position.set(2, 5, 3)
      light.target = this.cube
      light.castShadow = true

      light.shadow.camera.near = 2
      light.shadow.camera.far = 10
      light.shadow.camera.fov = 30
      // light.shadowCameraVisible = true; // has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.

      light.shadow.mapSize.width = 1024
      light.shadow.mapSize.height = 1024
      // light.shadowDarkness = 0.3; // has been removed

      this.scene.add(light)

      // ambient light
      const ambient = new THREE.AmbientLight(0x666666)
      this.scene.add(ambient)

      requestAnimationFrame(this.draw)
    },
    draw() {
      this.alpha += 0.01
      if (this.alpha > Math.PI * 2) {
        this.alpha -= Math.PI * 2
      }

      this.cube.position.set(
        2 * Math.cos(this.alpha),
        0,
        2 * Math.sin(this.alpha)
      )

      this.renderer.render(this.scene, this.camera)

      requestAnimationFrame(this.draw)
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
