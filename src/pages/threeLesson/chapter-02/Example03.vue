<template>
  <div class="example">
    <h2>Example 02.03 - Override Material</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Example0203',
  data() {
    return {
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      step: 0,
      plane: null,
      planeGeometry: null,
      stats: null
    }
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
      // Override Material
      scene.overrideMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF })

      this.scene = scene
      // create a camera, which defines where we're looking at.
      const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      this.camera = camera
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
      const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1)
      this.planeGeometry = planeGeometry
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 0
      plane.position.y = 0
      plane.position.z = 0
      this.plane = plane
      // add the plane to the scene
      scene.add(plane)

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
      this.$el.appendChild(renderer.domElement)

      // call the render function
      // const step = 0
      this.controls = {
        rotationSpeed: 0.02,
        numberOfObjects: this.scene.children.length,
        removeCube: () => {
          const allChildren = this.scene.children
          const lastObject = allChildren[allChildren.length - 1]
          if (lastObject instanceof THREE.Mesh) {
            this.scene.remove(lastObject)
            this.numberOfObjects = this.scene.children.length
          }
        },
        addCube: () => {
          const cubeSize = Math.ceil((Math.random() * 3))
          const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
          const cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
          const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
          cube.castShadow = true
          cube.name = 'cube-' + this.scene.children.length

          // position the cube randomly in the scene

          cube.position.x = -30 + Math.round((Math.random() * this.planeGeometry.parameters.width))
          cube.position.y = Math.round((Math.random() * 5))
          cube.position.z = -20 + Math.round((Math.random() * this.planeGeometry.parameters.height))

          // add the cube to the scene
          this.scene.add(cube)
          this.controls.numberOfObjects = this.scene.children.length
        },
        outputObjects: () => {
          console.log(this.scene.children)
        }
      }

      const gui = new dat.GUI()
      gui.add(this.controls, 'rotationSpeed', 0, 0.5)
      gui.add(this.controls, 'addCube')
      gui.add(this.controls, 'removeCube')
      gui.add(this.controls, 'outputObjects')
      gui.add(this.controls, 'numberOfObjects').listen()

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
      // rotate the cubes around its axes
      this.scene.traverse((e) => {
        if (e instanceof THREE.Mesh && e !== this.plane) {
          e.rotation.x += this.controls.rotationSpeed
          e.rotation.y += this.controls.rotationSpeed
          e.rotation.z += this.controls.rotationSpeed
        }
      })

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
