<template>
  <div class="example">
    <h2>Example 01.06 - Screen size change</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import clearWebGLContext from '../../mixin/clearWebGLContext'
export default {
  name: 'Example0106',
  mixins: [clearWebGLContext],
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      step: 0,
      cube: null,
      stats: null
    }
  },
  mounted() {
    this.controls = {
      rotationSpeed: 0.02,
      bouncingSpeed: 0.03
    }
    this.init()
    // listen to the resize events
    window.addEventListener('resize', this.onResize, false)
  },
  methods: {
    init() {
      // console.log('this.$el is ', this.$el)
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.stats = this.initStats()

      // create a scene, that will hold all our elements such as objects, cameras and lights.
      const scene = new THREE.Scene()
      this.scene = scene
      // create a camera, which defines where we're looking at.
      const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      this.camera = camera
      // create a render and set the size
      this.renderer = new THREE.WebGLRenderer()
      // this.renderer = renderer
      this.renderer.setClearColor(0xEEEEEE, 1.0)
      // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
      this.renderer.setSize(this.width, this.height)
      this.renderer.shadowMap.enabled = true

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
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
      this.cube = cube
      // add the cube to the scene
      scene.add(cube)

      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      // position the sphere
      sphere.position.x = 20
      sphere.position.y = 0
      sphere.position.z = 2
      sphere.castShadow = true
      this.sphere = sphere
      // add the sphere to the scene
      scene.add(sphere)

      // position and point the camera to the center of the scene
      camera.position.x = -30
      camera.position.y = 40
      camera.position.z = 30
      camera.lookAt(scene.position)

      // add subtle ambient lighting
      const ambientLight = new THREE.AmbientLight(0x0c0c0c)
      scene.add(ambientLight)

      // add spotlight for the shadows
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, -10)
      spotLight.castShadow = true
      scene.add(spotLight)

      // add the output of the renderer to the html element
      this.$el.appendChild(this.renderer.domElement)

      // call the render function
      // const step = 0

      let gui = {}
      gui = new dat.GUI()
      gui.add(this.controls, 'rotationSpeed', 0, 0.5)
      gui.add(this.controls, 'bouncingSpeed', 0, 0.5)

      this.render()
    },
    initStats() {
      const stats = new Stats()

      stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      stats.domElement.style.position = 'absolute'
      stats.domElement.style.left = '0px'
      stats.domElement.style.top = '0px'

      this.$el.appendChild(stats.domElement)

      return stats
    },
    render() {
      this.stats.update()
      // rotate the cube around its axes
      const cube = this.cube
      cube.rotation.x += this.controls.rotationSpeed
      cube.rotation.y += this.controls.rotationSpeed
      cube.rotation.z += this.controls.rotationSpeed

      // bounce the sphere up and down
      this.step += this.controls.bouncingSpeed
      const sphere = this.sphere
      sphere.position.x = 20 + (10 * (Math.cos(this.step)))
      sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step)))

      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    onResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.width, this.height)
    }
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  background-color: #ddd;
  width: 100%;
  height: 900px;
}
</style>
