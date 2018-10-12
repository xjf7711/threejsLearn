<template>
  <div class="example">
    <h2>Example 01.03 - Materials and light</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example0103',
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
      const renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      renderer.setClearColor(0xEEEEEE, 1.0)
      // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
      renderer.setSize(this.width, this.height)
      renderer.shadowMap.enabled = true

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(60, 20)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0

      // add the plane to the scene
      scene.add(plane)

      // create a cube
      const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.castShadow = true

      // position the cube
      cube.position.x = -4
      cube.position.y = 3
      cube.position.z = 0

      // add the cube to the scene
      scene.add(cube)

      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      // position the sphere
      sphere.position.x = 20
      sphere.position.y = 4
      sphere.position.z = 2
      sphere.castShadow = true

      // add the sphere to the scene
      scene.add(sphere)

      // position and point the camera to the center of the scene
      camera.position.x = -30
      camera.position.y = 40
      camera.position.z = 30
      camera.lookAt(scene.position)

      // add spotlight for the shadows
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, -10)
      spotLight.castShadow = true
      scene.add(spotLight)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      // call the render function
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
