<template>
  <div class="example">
    <h2>Example 02.06 - Mesh Properties</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Example0206',
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
      // this.plane = plane
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
      spotLight.position.set(-40, 60, 20)
      spotLight.castShadow = true
      scene.add(spotLight)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      const material = new THREE.MeshLambertMaterial({ color: 0x44ff44 })
      const geom = new THREE.BoxGeometry(5, 8, 3)
      const cube = new THREE.Mesh(geom, material)
      cube.position.y = 4
      cube.castShadow = true
      this.cube = cube
      scene.add(cube)

      // call the render function
      this.controls = {
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,

        positionX: 0,
        positionY: 4,
        positionZ: 0,

        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,

        translateX: 0,
        translateY: 0,
        translateZ: 0,

        visible: true,

        translate: () => {
          this.cube.translateX(this.controls.translateX)
          this.cube.translateY(this.controls.translateY)
          this.cube.translateZ(this.controls.translateZ)

          this.controls.positionX = this.cube.position.x
          this.controls.positionY = this.cube.position.y
          this.controls.positionZ = this.cube.position.z
        }
      }
      const gui = new dat.GUI()

      const guiScale = gui.addFolder('scale')
      guiScale.add(this.controls, 'scaleX', 0, 5)
      guiScale.add(this.controls, 'scaleY', 0, 5)
      guiScale.add(this.controls, 'scaleZ', 0, 5)
      const guiPosition = gui.addFolder('position')
      const contX = guiPosition.add(this.controls, 'positionX', -10, 10)
      const contY = guiPosition.add(this.controls, 'positionY', -4, 20)
      const contZ = guiPosition.add(this.controls, 'positionZ', -10, 10)

      contX.listen()
      contX.onChange(() => {
        cube.position.x = this.controls.positionX
      })

      contY.listen()
      contY.onChange(() => {
        cube.position.y = this.controls.positionY
      })

      contZ.listen()
      contZ.onChange(() => {
        cube.position.z = this.controls.positionZ
      })

      const guiRotation = gui.addFolder('rotation')
      guiRotation.add(this.controls, 'rotationX', -4, 4)
      guiRotation.add(this.controls, 'rotationY', -4, 4)
      guiRotation.add(this.controls, 'rotationZ', -4, 4)

      const guiTranslate = gui.addFolder('translate')

      guiTranslate.add(this.controls, 'translateX', -10, 10)
      guiTranslate.add(this.controls, 'translateY', -10, 10)
      guiTranslate.add(this.controls, 'translateZ', -10, 10)
      guiTranslate.add(this.controls, 'translate')

      gui.add(this.controls, 'visible')

      this.scene = scene
      this.render()
    },
    addControl(x, y, z) {
      return { x, y, z }
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
      const cube = this.cube
      // const controls = this.controls
      cube.visible = this.controls.visible

      cube.rotation.x = this.controls.rotationX
      cube.rotation.y = this.controls.rotationY
      cube.rotation.z = this.controls.rotationZ

      cube.scale.set(this.controls.scaleX, this.controls.scaleY, this.controls.scaleZ)

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
