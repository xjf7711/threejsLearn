<template>
  <div class="example">
    <h2>Example 02.07 - Cameras</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Example0207',
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      controls: null,
      stats: null,
      cube: null
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

      // create a camera, which defines where we're looking at.
      this.camera.position.x = 120
      this.camera.position.y = 60
      this.camera.position.z = 180
      // this.camera.lookAt(scene.position)

      // create a render and set the size
      const renderer = new THREE.WebGLRenderer()
      this.renderer = renderer
      renderer.setClearColor(0xEEEEEE, 1.0)
      // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
      renderer.setSize(this.width, this.height)
      // renderer.shadowMap.enabled = true

      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(180, 180)
      this.planeGeometry = planeGeometry
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 0
      plane.position.y = 0
      plane.position.z = 0
      // this.plane = plane
      // add the plane to the scene
      scene.add(plane)

      const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)

      for (let j = 0; j < (planeGeometry.parameters.height / 5); j++) {
        for (let i = 0; i < planeGeometry.parameters.width / 5; i++) {
          const rnd = Math.random() * 0.75 + 0.25
          const cubeMaterial = new THREE.MeshLambertMaterial()
          cubeMaterial.color = new THREE.Color(rnd, 0, 0)
          const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

          cube.position.z = -((planeGeometry.parameters.height) / 2) + 2 + (j * 5)
          cube.position.x = -((planeGeometry.parameters.width) / 2) + 2 + (i * 5)
          cube.position.y = 2

          scene.add(cube)
        }
      }

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
      directionalLight.position.set(-20, 40, 60)
      scene.add(directionalLight)

      // add subtle ambient lighting
      const ambientLight = new THREE.AmbientLight(0x0c0c0c)
      scene.add(ambientLight)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      this.controls = {
        perspective: 'Perspective',
        switchCamera: () => {
          if (this.camera instanceof THREE.PerspectiveCamera) {
            this.camera = new THREE.OrthographicCamera(this.width / -16, this.width / 16, this.height / 16, this.height / -16, -200, 500)
            this.camera.position.x = 120
            this.camera.position.y = 60
            this.camera.position.z = 180
            this.camera.lookAt(scene.position)
            this.controls.perspective = 'Orthographic'
          } else {
            this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
            this.camera.position.x = 120
            this.camera.position.y = 60
            this.camera.position.z = 180
            this.camera.lookAt(scene.position)
            this.controls.perspective = 'Perspective'
          }
        }
      }
      const gui = new dat.GUI()
      gui.add(this.controls, 'switchCamera')
      gui.add(this.controls, 'perspective').listen()

      // make sure that for the first time, the
      // camera is looking at the scene
      this.camera.lookAt(scene.position)

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
