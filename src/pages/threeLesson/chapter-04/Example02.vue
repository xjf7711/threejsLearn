<template>
  <div class="example">
    <h2>Example 04.02 - Depth Material</h2>
    <!-- Div which will hold the Output -->
    <div id="WebGL-output"/>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Example0402',
  data() {
    return {
      width: 0,
      height: 0,

      scene: null,
      camera: null,
      renderer: null,
      light: null,
      spotLight: null,
      pointLight: null,
      sphereLight: null,
      stopMovingLight: false,
      directionalLight: null,
      // used to determine the switch point for the light animation
      invert: 1,
      phase: 0,
      sphereLightMesh: null,
      meshMaterial: null,

      controls: null,
      stats: null,
      cube: null,
      sphere: null,
      step: 0,
      oldContext: null,
      lookAtMesh: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.draw()
    // listen to the resize events
    // window.addEventListener('resize', this.onResize, false)
    window.onResize = this.onResize
  },
  methods: {
    draw() {
      this.initStats()
      this.initScene()
      this.initCamera()
      this.initRenderer()
      this.initGui()
      this.render()
    },
    initScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new THREE.Scene()
      this.scene.overrideMaterial = new THREE.MeshDepthMaterial()
    },
    initCamera() {
      // create a camera, which defines where we're looking at.
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)

      // position and point the camera to the center of the scene
      this.camera.position.x = 50
      this.camera.position.y = 40
      this.camera.position.z = 50
      this.camera.lookAt(this.scene.position)
    },
    initRenderer() {
      // create a render and set the size
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0xeeeeee, 1.0)
      this.renderer.setSize(this.width, this.height)
      this.renderer.shadowMap.enabled = true

      // add the output of the renderer to the html element
      this.$el.appendChild(this.renderer.domElement)
    },
    initGui() {
      this.controls = {
        cameraNear: this.camera.near,
        cameraFar: this.camera.far,
        rotationSpeed: 0.02,
        numberOfObjects: this.scene.children.length,
        removeCube: () => {
          var allChildren = this.scene.children
          var lastObject = allChildren[allChildren.length - 1]
          if (lastObject instanceof THREE.Mesh) {
            this.scene.remove(lastObject)
            this.controls.numberOfObjects = this.scene.children.length
          }
        },
        addCube: () => {
          const cubeSize = Math.ceil(3 + (Math.random() * 3))
          const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
          const cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
          const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
          cube.castShadow = true

          // position the cube randomly in the scene
          cube.position.x = -60 + Math.round((Math.random() * 100))
          cube.position.y = Math.round((Math.random() * 10))
          cube.position.z = -100 + Math.round((Math.random() * 150))

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
      gui.add(this.controls, 'cameraNear', 0, 50).onChange((e) => {
        this.camera.near = e
      })
      gui.add(this.controls, 'cameraFar', 50, 200).onChange((e) => {
        this.camera.far = e
      })

      let i = 0
      while (i < 10) {
        this.controls.addCube()
        i++
      }
    },
    initStats() {
      this.stats = new Stats()

      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '0px'
      this.stats.domElement.style.top = '0px'

      this.$el.appendChild(this.stats.domElement)
    },
    render() {
      this.stats.update()

      // rotate the cubes around its axes
      this.scene.traverse((e) => {
        if (e instanceof THREE.Mesh) {
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
    background-color: #eee;
    width: 100%;
    height: 800px;
  }
</style>
