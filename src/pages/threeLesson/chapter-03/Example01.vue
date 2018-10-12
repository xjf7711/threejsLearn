<template>
  <div id="example01" class="example">
    <h2>Example 03.01 - Ambient Light</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import { createThree } from './Example01'
export default {
  name: 'Example0301',
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      stats: null,
      cube: null,
      sphere: null,
      step: 0,
      lookAtMesh: null
    }
  },
  created() {
  },
  mounted() {
    createThree('example01')
    // this.init()
    // listen to the resize events
    // window.addEventListener('resize', this.onResize, false)
    // window.onresize = this.onResize
  },
  methods: {
    init() {
      // console.log('this.$el is ', this.$el)
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.stats = this.initStats()

      // create a scene, that will hold all our elements such as objects, cameras and lights.
      const scene = new THREE.Scene()

      // create a camera, which defines where we're looking at.
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)

      // create a render and set the size
      const renderer = new THREE.WebGLRenderer()
      this.renderer = renderer
      renderer.setClearColor(0xEEEEEE, 1.0)
      // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
      renderer.setSize(this.width, this.height)
      renderer.shadowMap.enabled = true

      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

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
      // this.plane = plane
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

      // create a camera, which defines where we're looking at.
      this.camera.position.x = -25
      this.camera.position.y = 30
      this.camera.position.z = 25
      this.camera.lookAt(new THREE.Vector3(10, 0, 0))

      /** ambient-light */
      // add subtle ambient lighting
      const ambiColor = '#0c0c0c'
      const ambientLight = new THREE.AmbientLight(ambiColor)
      scene.add(ambientLight)

      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, -10)
      scene.add(spotLight)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      const controls = {
        rotationSpeed: 0.02,
        bouncingSpeed: 0.03,
        ambientColor: ambiColor,
        disableSpotlight: false
      }

      const gui = new dat.GUI()
      gui.addColor(controls, 'ambientColor').onChange(function(e) {
        ambientLight.color = new THREE.Color(e)
      })
      gui.add(controls, 'disableSpotlight').onChange(function(e) {
        spotLight.visible = !e
      })
      this.controls = controls

      this.scene = scene
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
      const controls = this.controls
      cube.rotation.x += controls.rotationSpeed
      cube.rotation.y += controls.rotationSpeed
      cube.rotation.z += controls.rotationSpeed

      // bounce the sphere up and down
      this.step += controls.bouncingSpeed
      this.sphere.position.x = 20 + (10 * (Math.cos(this.step)))
      this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step)))

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
