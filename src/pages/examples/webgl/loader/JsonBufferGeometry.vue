<template>
  <div id="loader-json-buffergeometry">
    <h2>{{ title }}</h2>

  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'LoaderJsonBuffergeometry',
  data() {
    return {
      title: 'loader-json-buffergeometry',
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,

      objects: [],
      mouseX: 0,
      mouseY: 0
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = document.createElement('div')
      this.$el.appendChild(container)

      this.camera = new THREE.PerspectiveCamera(
        60,
        this.width / this.height,
        1,
        10000
      )
      this.camera.position.z = 3200

      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xffffff)

      // this.objects = [];

      // const material = new THREE.MeshNormalMaterial()

      const loader = new THREE.BufferGeometryLoader()
      const url = 'static/threejs/examples/models/json/suzanne.json'
      // const url = 'static/threejs/examples/json/cube.json'
      loader.load(url, (geometry, material) => {
        geometry.computeVertexNormals()

        for (let i = 0; i < 5000; i++) {
          const mesh = new THREE.Mesh(geometry, material)

          mesh.position.x = Math.random() * 8000 - 4000
          mesh.position.y = Math.random() * 8000 - 4000
          mesh.position.z = Math.random() * 8000 - 4000
          mesh.rotation.x = Math.random() * 2 * Math.PI
          mesh.rotation.y = Math.random() * 2 * Math.PI
          mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50 + 100

          this.objects.push(mesh)

          this.scene.add(mesh)
        }
      })

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      container.appendChild(this.renderer.domElement)

      // stats = new Stats();
      // container.appendChild( stats.dom );

      //

      window.addEventListener('resize', this.onWindowResize, false)
    },
    onWindowResize() {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.width, this.height)
    },
    onDocumentMouseMove(event) {
      const windowHalfX = this.width / 2
      const windowHalfY = this.height / 2
      this.mouseX = (event.clientX - windowHalfX) * 10
      this.mouseY = (event.clientY - windowHalfY) * 10
    },
    animate() {
      // stats.update();
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05
      this.camera.lookAt(this.scene.position)

      for (let i = 0, il = this.objects.length; i < il; i++) {
        this.objects[i].rotation.x += 0.01
        this.objects[i].rotation.y += 0.02
      }
      requestAnimationFrame(this.animate)

      this.render()
    },
    render() {
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#loader-json-buffergeometry {
  background: #fff;
  padding: 0;
  margin: 0;
  font-weight: bold;
  overflow: hidden;
}
</style>
