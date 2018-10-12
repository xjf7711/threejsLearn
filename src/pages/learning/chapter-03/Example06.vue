<template>
  <div class="example">
    <h2>Example 03.06 - Area Light</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import WebGLDeferredRenderer from '@/assets/threejs/libs/WebGLDeferredRenderer'
import AreaLight from '@/assets/threejs/libs/AreaLight'

// tonemapping operator types

// const NoOperator = 0
// const SimpleOperator = 1
// const LinearOperator = 2
// const ReinhardOperator = 3
const FilmicOperator = 4
// const UnchartedOperator = 5

export default {
  name: 'Example0302',
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      // used to determine the switch point for the light animation
      invert: 1,
      phase: 0,
      light: null,
      spotLight: null,
      pointLight: null,
      sphereLightMesh: null,
      sphereLight: null,
      stopMovingLight: false,
      directionalLight: null,
      controls: null,
      stats: null,
      cube: null,
      sphere: null,
      // step: 0,
      lookAtMesh: null
    }
  },
  created() {
  },
  mounted() {
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
      scene.fog = new THREE.Fog(0xaaaaaa, 0.010, 200)

      // create a camera, which defines where we're looking at.
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)

      // create a render and set the size
      //        let renderer = new THREE.WebGLRenderer();
      const renderer = new WebGLDeferredRenderer({
        width: this.width,
        height: this.height,
        scale: 1,
        antialias: true,
        tonemapping: FilmicOperator, brightness: 2.5
      })
      this.renderer = renderer
      //        renderer.setSize(window.innerWidth, window.innerHeight);
      //        renderer.shadowMapEnabled = true;

      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(70, 70, 1, 1)
      const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff
        // specular: 0xffffff, // 'specular' is not a property of this material.
        // shininess: 200 // 'shininess' is not a property of this material.
      })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      // plane.receiveShadow = true

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0
      // this.plane = plane
      // add the plane to the scene
      scene.add(plane)

      // create a camera, which defines where we're looking at.
      this.camera.position.x = 20
      this.camera.position.y = 30
      this.camera.position.z = 21
      this.camera.lookAt(new THREE.Vector3(0, 0, -30))

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      // // add subtle ambient lighting
      // const ambiColor = '#1c1c1c'
      // const ambientLight = new THREE.AmbientLight(ambiColor)
      // scene.add(ambientLight)

      const spotLight0 = new THREE.SpotLight(0xcccccc)
      spotLight0.position.set(-40, 60, -10)
      spotLight0.lookAt(plane)
      scene.add(spotLight0)

      const areaLight1 = new AreaLight(0xff0000, 3)
      areaLight1.position.set(-10, 10, -35)
      areaLight1.rotation.set(-Math.PI / 2, 0, 0)
      areaLight1.width = 4
      areaLight1.height = 9.9
      scene.add(areaLight1)

      const areaLight2 = new AreaLight(0x00ff00, 3)
      areaLight2.position.set(0, 10, -35)
      areaLight2.rotation.set(-Math.PI / 2, 0, 0)
      areaLight2.width = 4
      areaLight2.height = 9.9
      scene.add(areaLight2)

      const areaLight3 = new AreaLight(0x0000ff, 3)
      areaLight3.position.set(10, 10, -35)
      areaLight3.rotation.set(-Math.PI / 2, 0, 0)
      areaLight3.width = 4
      areaLight3.height = 9.9
      scene.add(areaLight3)

      const planeGeometry1 = new THREE.BoxGeometry(4, 10, 0)
      const planeGeometry1Mat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
      let plane1 = new THREE.Mesh(planeGeometry1, planeGeometry1Mat)
      plane1.position.copy(areaLight1.position)
      scene.add(plane1)

      const planeGeometry2 = new THREE.BoxGeometry(4, 10, 0)
      const planeGeometry2Mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      let plane2 = new THREE.Mesh(planeGeometry2, planeGeometry2Mat)

      plane2.position.copy(areaLight2.position)
      scene.add(plane2)

      const planeGeometry3 = new THREE.BoxGeometry(4, 10, 0)
      const planeGeometry3Mat = new THREE.MeshBasicMaterial({ color: 0x0000ff })
      let plane3 = new THREE.Mesh(planeGeometry3, planeGeometry3Mat)

      plane3.position.copy(areaLight3.position)
      scene.add(plane3)

      const controls = {
        rotationSpeed: 0.03,
        color1: 0xff0000,
        intensity1: 2,
        color2: 0x00ff00,
        intensity2: 2,
        color3: 0x0000ff,
        intensity3: 2
      }

      const gui = new dat.GUI()

      gui.addColor(controls, 'color1').onChange(function(e) {
        areaLight1.color = new THREE.Color(e)
        planeGeometry1Mat.color = new THREE.Color(e)
        scene.remove(plane1)
        plane1 = new THREE.Mesh(planeGeometry1, planeGeometry1Mat)
        plane1.position.copy(areaLight1.position)
        scene.add(plane1)
      })
      gui.add(controls, 'intensity1', 0, 5).onChange(function(e) {
        areaLight1.intensity = e
      })
      gui.addColor(controls, 'color2').onChange(function(e) {
        areaLight2.color = new THREE.Color(e)
        planeGeometry2Mat.color = new THREE.Color(e)
        scene.remove(plane2)
        plane2 = new THREE.Mesh(planeGeometry2, planeGeometry2Mat)
        plane2.position.copy(areaLight2.position)
        scene.add(plane2)
      })
      gui.add(controls, 'intensity2', 0, 5).onChange(function(e) {
        areaLight2.intensity = e
      })
      gui.addColor(controls, 'color3').onChange(function(e) {
        areaLight3.color = new THREE.Color(e)
        planeGeometry3Mat.color = new THREE.Color(e)
        scene.remove(plane3)
        plane3 = new THREE.Mesh(planeGeometry1, planeGeometry3Mat)
        plane3.position.copy(areaLight3.position)
        scene.add(plane3)
      })
      gui.add(controls, 'intensity3', 0, 5).onChange(function(e) {
        areaLight3.intensity = e
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
