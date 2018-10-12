<template>
  <div class="example">
    <h2>Example 03.05 - Hemisphere Light</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Example0305',
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
      step: 0,
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
      const renderer = new THREE.WebGLRenderer()
      this.renderer = renderer
      renderer.setClearColor(0xaaaaff, 1.0)
      // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
      renderer.setSize(this.width, this.height)
      renderer.shadowMap.enabled = true
      // renderer.shadowMap.type = THREE.PCFShadowMap

      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

      // create the ground plane
      const loader = new THREE.TextureLoader()
      const url = 'static/threejs/learning/textures/ground/grasslight-big.jpg'
      const textureGrass = loader.load(url)
      textureGrass.wrapS = THREE.RepeatWrapping
      textureGrass.wrapT = THREE.RepeatWrapping
      textureGrass.repeat.set(4, 4)

      // const textureGrass = THREE.ImageUtils.loadTexture('static/threejs/learning/textures/ground/grasslight-big.jpg')

      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(1000, 200, 20, 20)
      const planeMaterial = new THREE.MeshLambertMaterial({ map: textureGrass })
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

      const sphereGeometry = new THREE.SphereGeometry(4, 25, 25)
      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

      // position the sphere
      sphere.position.x = 10
      sphere.position.y = 5
      sphere.position.z = 10
      sphere.castShadow = true
      this.sphere = sphere
      // add the sphere to the scene
      scene.add(sphere)

      // create a camera, which defines where we're looking at.
      this.camera.position.x = -20
      this.camera.position.y = 5
      this.camera.position.z = 10
      this.camera.lookAt(new THREE.Vector3(10, 0, 0))

      // // add subtle ambient lighting
      // const ambiColor = '#1c1c1c'
      // const ambientLight = new THREE.AmbientLight(ambiColor)
      // scene.add(ambientLight)

      const spotLight0 = new THREE.SpotLight(0xcccccc)
      spotLight0.position.set(-40, 60, -10)
      spotLight0.lookAt(plane)
      scene.add(spotLight0)

      const target = new THREE.Object3D()
      target.position.set(new THREE.Vector3(5, 0, 0)) // = new THREE.Vector3(5, 0, 0)

      const hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6)
      hemiLight.position.set(0, 500, 0)
      scene.add(hemiLight)

      const pointColor = '#ffffff'
      //    let dirLight = new THREE.SpotLight( pointColor);
      const dirLight = new THREE.DirectionalLight(pointColor)
      dirLight.position.set(30, 10, -50)
      dirLight.castShadow = true
      //        dirLight.shadowCameraNear = 0.1;
      //        dirLight.shadowCameraFar = 100;
      //        dirLight.shadowCameraFov = 50;
      dirLight.target = plane
      dirLight.shadow.camera.near = 0.1
      dirLight.shadow.camera.far = 200
      dirLight.shadow.camera.left = -50
      dirLight.shadow.camera.right = 50
      dirLight.shadow.camera.top = 50
      dirLight.shadow.camera.bottom = -50
      dirLight.shadow.mapSize.width = 2048
      dirLight.shadow.mapSize.height = 2048

      scene.add(dirLight)

      // add the output of the renderer to the html element
      this.$el.appendChild(renderer.domElement)

      const controls = {
        rotationSpeed: 0.03,
        bouncingSpeed: 0.03,

        hemisphere: true,
        color: 0x00ff00,
        skyColor: 0x0000ff,
        intensity: 0.6
      }

      const gui = new dat.GUI()

      gui.add(controls, 'hemisphere').onChange(function(e) {
        if (!e) {
          hemiLight.intensity = 0
        } else {
          hemiLight.intensity = controls.intensity
        }
      })
      gui.addColor(controls, 'color').onChange(function(e) {
        hemiLight.groundColor = new THREE.Color(e)
      })
      gui.addColor(controls, 'skyColor').onChange(function(e) {
        hemiLight.color = new THREE.Color(e)
      })
      gui.add(controls, 'intensity', 0, 5).onChange(function(e) {
        hemiLight.intensity = e
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
