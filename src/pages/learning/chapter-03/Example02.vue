<template>
  <div class="example">
    <h2>Example 03.02 - point Light</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Example0302',
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
      lookAtMesh: null,
      // used to determine the switch point for the light animation
      invert: 1,
      phase: 0,
      pointLight: null,
      sphereLightMesh: null,
      sphereLight: null
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
      const planeGeometry = new THREE.PlaneGeometry(60, 20, 20, 20)
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
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff7777 })
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
      // scene.add(spotLight)

      const pointColor = '#ccffcc'
      const pointLight = new THREE.PointLight(pointColor)
      pointLight.distance = 100
      this.pointLight = pointLight
      scene.add(pointLight)

      // add a small sphere simulating the pointlight
      const sphereLight = new THREE.SphereGeometry(0.2)
      const sphereLightMaterial = new THREE.MeshBasicMaterial({ color: 0xac6c25 })
      const sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial)
      sphereLightMesh.castShadow = true
      // console.log(sphereLightMesh)
      // Cannot assign to read only property 'position' of object '#<Mesh>
      sphereLightMesh.position.set(3, 0, 3) // = new THREE.Vector3(3, 0, 3)
      this.sphereLightMesh = sphereLightMesh
      scene.add(sphereLightMesh)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      const controls = {
        rotationSpeed: 0.03,
        bouncingSpeed: 0.03,
        ambientColor: ambiColor,
        pointColor: pointColor,
        intensity: 1,
        distance: 100
      }

      const gui = new dat.GUI()
      gui.addColor(controls, 'ambientColor').onChange(function(e) {
        ambientLight.color = new THREE.Color(e)
      })

      gui.addColor(controls, 'pointColor').onChange(function(e) {
        pointLight.color = new THREE.Color(e)
      })

      gui.add(controls, 'intensity', 0, 3).onChange(function(e) {
        pointLight.intensity = e
      })

      gui.add(controls, 'distance', 0, 100).onChange(function(e) {
        pointLight.distance = e
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

      // move the light simulation
      if (this.phase > 2 * Math.PI) {
        this.invert = this.invert * -1
        this.phase -= 2 * Math.PI
      } else {
        this.phase += controls.rotationSpeed
      }
      const sphereLightMesh = this.sphereLightMesh
      sphereLightMesh.position.z = +(7 * (Math.sin(this.phase)))
      sphereLightMesh.position.x = +(14 * (Math.cos(this.phase)))
      sphereLightMesh.position.y = 5

      if (this.invert < 0) {
        const pivot = 14
        sphereLightMesh.position.x = (this.invert * (sphereLightMesh.position.x - pivot)) + pivot
      }

      this.pointLight.position.copy(sphereLightMesh.position)

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
