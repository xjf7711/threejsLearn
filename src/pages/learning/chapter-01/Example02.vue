<template>
  <div class="example">
    <h2>Example 01.02 - First Scene</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import clearWebGLContext from '../../mixin/clearWebGLContext'
export default {
  name: 'Example0102',
  mixins: [clearWebGLContext],
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      cube: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      const scene = new THREE.Scene()

      // create a camera, which defines where we're looking at.
      const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)

      // create a render and set the size
      const renderer = new THREE.WebGLRenderer()
      renderer.setClearColor()
      renderer.setClearColor(new THREE.Color(0xEEEEEE))
      renderer.setSize(this.width, this.height)

      // show axes in the screen
      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(60, 20)
      const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0
      scene.add(plane)

      const planeGeometry2 = new THREE.PlaneGeometry(60, 5)
      const planeMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2)
      plane2.rotation.x = -0.5 * Math.PI
      plane2.position.set(15, 0.01, 0)
      // add the plane to the scene
      scene.add(plane2)

      // create a cube
      const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

      // position the cube
      cube.position.x = -4
      cube.position.y = 3
      cube.position.z = 0

      // add the cube to the scene
      scene.add(cube)

      // create a sphere
      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      // position the sphere
      sphere.position.x = 20
      sphere.position.y = 4
      sphere.position.z = 2

      // add the sphere to the scene
      scene.add(sphere)

      // position and point the camera to the center of the scene
      camera.position.x = -30
      camera.position.y = 40
      camera.position.z = 30
      camera.lookAt(scene.position)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      // render the scene
      renderer.render(scene, camera)
    }
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  background-color: #ddd;
  width: 100%;
  height: 800px;
}
</style>
