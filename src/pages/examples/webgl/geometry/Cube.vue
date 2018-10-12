<template>
  <div id="cube" :width="width" :height="height">
    <div> Drag to spin the cube </div>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'GeometryCube',
  data() {
    return {
      width: 800,
      height: 600,
      renderer: null,
      scene: null,
      camera: null,
      mesh: null
    }
  },
  mounted() {
    // this.threeStart()
    this.init()
    this.animate()
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(
        70,
        this.width / this.height,
        1,
        1000
      )
      this.camera.position.z = 400

      this.scene = new THREE.Scene()

      const texture = new THREE.TextureLoader().load(
        'static/threejs/examples/textures/crate.gif'
      )

      const geometry = new THREE.BoxBufferGeometry(200, 200, 200)
      const material = new THREE.MeshBasicMaterial({ map: texture })

      this.mesh = new THREE.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)

      // 当需要加载图片时，需要用该方式添加dom
      document.getElementById('cube').appendChild(this.renderer.domElement)
      //
      // window.addEventListener( 'resize', this.onWindowResize, false );
    },

    onWindowResize() {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.width, this.height)
    },

    animate() {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.005
      this.mesh.rotation.y += 0.01
      this.renderer.render(this.scene, this.camera)
      // this.renderer.setSize( this.width, this.height )
    }
  }
}
</script>

<style scoped>
#cube {
  background: #dddddd;
  width: 100%;
  height: 900px;
}
</style>
