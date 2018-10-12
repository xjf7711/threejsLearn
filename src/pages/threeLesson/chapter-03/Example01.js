import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'

export function createThree(fId) {
  const threeObj = new ThreeClass(fId)
  threeObj.initThree()
}

let obj = null
class ThreeClass {
  constructor(fId) {
    this.fDiv = document.getElementById(fId)
    this.step = 0
    this.ambiColor = '#0c0c0c'
    this.controls = {
      rotationSpeed: 0.02,
      bouncingSpeed: 0.03,
      ambientColor: this.ambiColor,
      disableSpotlight: false
    }
  }
  initThree() {
    // console.log('this.fDiv is ', this.fDiv)
    obj = this
    this.width = this.fDiv.clientWidth - 40
    this.height = this.fDiv.clientHeight - 100
    this.initStats()
    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initHelper()
    this.initGround()
    this.initModels()
    this.render()
    this.initGui()
  }
  initRenderer() {
    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setClearColor(0xEEEEEE, 1.0)
    // renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
    this.renderer.setSize(this.width, this.height)
    this.renderer.shadowMap.enabled = true

    // add the output of the renderer to the html element
    this.fDiv.appendChild(this.renderer.domElement)
  }
  initScene() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    this.scene = new THREE.Scene()
  }
  initCamera() {
    // create a camera, which defines where we're looking at.
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)

    // create a camera, which defines where we're looking at.
    this.camera.position.x = -25
    this.camera.position.y = 30
    this.camera.position.z = 25
    this.camera.lookAt(new THREE.Vector3(10, 0, 0))
  }
  initLight() {
    /** ambient-light */
    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(this.ambiColor)
    this.scene.add(this.ambientLight)

    this.spotLight = new THREE.SpotLight(0xffffff)
    this.spotLight.position.set(-40, 60, -10)
    this.scene.add(this.spotLight)
  }
  initHelper() {
    const axes = new THREE.AxesHelper(20)
    this.scene.add(axes)
  }
  initGround() {
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
    this.scene.add(plane)
  }
  initModels() {
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
    this.scene.add(cube)

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
    this.scene.add(this.sphere)
  }
  initGui() {
    const gui = new dat.GUI()
    gui.addColor(this.controls, 'ambientColor').onChange(function(e) {
      this.ambientLight.color = new THREE.Color(e)
    })
    gui.add(this.controls, 'disableSpotlight').onChange(function(e) {
      this.spotLight.visible = !e
    })
  }
  initStats() {
    this.stats = new Stats()

    this.stats.setMode(0) // 0: fps, 1: ms

    // Align top-left
    this.stats.domElement.style.position = 'absolute'
    this.stats.domElement.style.left = '0px'
    this.stats.domElement.style.top = '0px'

    this.fDiv.appendChild(this.stats.domElement)
  }
  render() {
    const _this = obj
    _this.stats.update()
    // rotate the cube around its axes
    _this.cube.rotation.x += _this.controls.rotationSpeed
    _this.cube.rotation.y += _this.controls.rotationSpeed
    _this.cube.rotation.z += _this.controls.rotationSpeed

    // bounce the sphere up and down
    _this.step += _this.controls.bouncingSpeed
    _this.sphere.position.x = 20 + (10 * (Math.cos(_this.step)))
    _this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(_this.step)))

    requestAnimationFrame(_this.render)
    _this.renderer.render(_this.scene, _this.camera)
  }
  onResize() {
    this.width = this.fDiv.clientWidth - 40
    this.height = this.fDiv.clientHeight - 100
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }
}
