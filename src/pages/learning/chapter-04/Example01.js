import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'

export function createThree(fId) {
  const obj = new ThreeDirections(fId)
  obj.initThree()
}

let threeObj = null
class ThreeDirections {
  constructor(fId) {
    this.fId = fId
  }
  initThree() {
    threeObj = this
    const fDiv = document.getElementById(this.fId)
    this.width = fDiv.clientWidth - 40
    this.height = fDiv.clientHeight - 100
    console.log('this.width is ' + this.width + ', this.height is ' + this.height)
    this.initStats()
    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initGround()
    this.initModels()
    this.initGui()
    this.render()
    window.onresize = this.onResize
  }
  initScene() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    this.scene = new THREE.Scene()
  }
  initCamera() {
    // create a camera, which defines where we're looking at.
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)

    // position and point the camera to the center of the scene
    this.camera.position.x = -20
    this.camera.position.y = 50
    this.camera.position.z = 40
    this.camera.lookAt(new THREE.Vector3(10, 0, 0))
  }
  initRenderer() {
    // create a render and set the size
    // let renderer;
    const webGLRenderer = new THREE.WebGLRenderer()
    webGLRenderer.setClearColor(0xcccccc, 1.0)
    webGLRenderer.setSize(this.width, this.height)
    webGLRenderer.shadowMap.enabled = true

    // const canvasRenderer = new THREE.CanvasRenderer()
    // canvasRenderer.setSize(this.width, this.height)
    this.renderer = webGLRenderer

    // add the output of the renderer to the html element
    document.getElementById('WebGL-output').appendChild(this.renderer.domElement)
  }
  initGround() {
    const groundGeom = new THREE.PlaneGeometry(100, 100, 4, 4)
    const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x777777 })
    const groundMesh = new THREE.Mesh(groundGeom, groundMaterial)
    groundMesh.rotation.x = -Math.PI / 2
    groundMesh.position.y = -20
    this.scene.add(groundMesh)
  }
  initModels() {
    console.log('initModels begins. this is ', this)
    const sphereGeometry = new THREE.SphereGeometry(14, 20, 20)
    const cubeGeometry = new THREE.BoxGeometry(15, 15, 15)
    const planeGeometry = new THREE.PlaneGeometry(14, 14, 4, 4)

    this.meshMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff })

    this.sphere = new THREE.Mesh(sphereGeometry, this.meshMaterial)
    this.cube = new THREE.Mesh(cubeGeometry, this.meshMaterial)
    this.plane = new THREE.Mesh(planeGeometry, this.meshMaterial)

    // position the sphere
    this.sphere.position.x = 0
    this.sphere.position.y = 3
    this.sphere.position.z = 2

    this.cube.position.set(0, 3, 2)
    this.plane.position.set(0, 3, 2)

    // add the sphere to the scene
    // this.scene.add(this.cube)
    // this.scene.add(this.sphere)

    this.cube = new THREE.Mesh(cubeGeometry, this.meshMaterial)
    this.cube.position.set(0, 3, 2)
    this.scene.add(this.cube)
  }
  initLight() {
    // add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0x0c0c0c)
    this.scene.add(ambientLight)

    // add spotlight for the shadows
    const spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-40, 60, -10)
    spotLight.castShadow = true
    this.scene.add(spotLight)
  }
  initGui() {
    const controls = {
      rotationSpeed: 0.02,
      bouncingSpeed: 0.03,
      opacity: this.meshMaterial.opacity,
      transparent: this.meshMaterial.transparent,
      overdraw: this.meshMaterial.overdraw,
      visible: this.meshMaterial.visible,
      side: 'front',
      color: this.meshMaterial.color.getStyle(),
      wireframe: this.meshMaterial.wireframe,
      wireframeLinewidth: this.meshMaterial.wireframeLinewidth,
      wireFrameLineJoin: this.meshMaterial.wireframeLinejoin,
      selectedMesh: 'cube',
      switchRenderer: () => {
        if (this.renderer instanceof THREE.WebGLRenderer) {
          // this.renderer = canvasRenderer
          // document.getElementById('WebGL-output').empty()
          // document.getElementById('WebGL-output').appendChild(this.renderer.domElement)
        } else {
          // this.renderer = webGLRenderer
          // document.getElementById('WebGL-output').empty()
          // document.getElementById('WebGL-output').appendChild(this.renderer.domElement)
        }
      }
    }

    const gui = new dat.GUI()

    const spGui = gui.addFolder('Mesh')
    spGui.add(controls, 'opacity', 0, 1).onChange(e => {
      this.meshMaterial.opacity = e
    })
    spGui.add(controls, 'transparent').onChange(e => {
      this.meshMaterial.transparent = e
    })
    spGui.add(controls, 'wireframe').onChange(e => {
      this.meshMaterial.wireframe = e
    })
    spGui.add(controls, 'wireframeLinewidth', 0, 20).onChange(e => {
      this.meshMaterial.wireframeLinewidth = e
    })
    spGui.add(controls, 'visible').onChange(e => {
      this.meshMaterial.visible = e
    })
    spGui.add(controls, 'side', ['front', 'back', 'double']).onChange(e => {
      switch (e) {
        case 'front':
          this.meshMaterial.side = THREE.FrontSide
          break
        case 'back':
          this.meshMaterial.side = THREE.BackSide
          break
        case 'double':
          this.meshMaterial.side = THREE.DoubleSide
          break
      }
      this.meshMaterial.needsUpdate = true
    })
    spGui.addColor(controls, 'color').onChange((e) => {
      this.meshMaterial.color.setStyle(e)
    })
    spGui.add(controls, 'selectedMesh', ['cube', 'sphere', 'plane']).onChange(e => {
      this.scene.remove(this.plane)
      this.scene.remove(this.cube)
      this.scene.remove(this.sphere)

      switch (e) {
        case 'cube':
          this.scene.add(this.cube)
          break
        case 'sphere':
          this.scene.add(this.sphere)
          break
        case 'plane':
          this.scene.add(this.plane)
          break
      }

      // this.scene.add(e)
    })

    gui.add(controls, 'switchRenderer')
    const cvGui = gui.addFolder('Canvas renderer')
    cvGui.add(controls, 'overdraw').onChange(e => {
      this.meshMaterial.overdraw = e
    })
    cvGui.add(controls, 'wireFrameLineJoin', ['round', 'bevel', 'miter']).onChange(e => {
      this.meshMaterial.wireframeLinejoin = e
    })
  }
  initStats() {
    this.stats = new Stats()

    this.stats.setMode(0) // 0: fps, 1: ms

    // Align top-left
    this.stats.domElement.style.position = 'absolute'
    this.stats.domElement.style.left = '20px'
    this.stats.domElement.style.top = '88px'

    document.getElementById(this.fId).appendChild(this.stats.domElement)
  }
  render() {
    const _this = threeObj
    _this.stats.update()

    _this.cube.rotation.y = _this.step += 0.01
    _this.plane.rotation.y = _this.step
    _this.sphere.rotation.y = _this.step

    // render using requestAnimationFrame
    window.requestAnimationFrame(_this.render)
    _this.renderer.render(_this.scene, _this.camera)
  }
  onResize() {
    const _this = threeObj
    _this.width = document.getElementById(_this.fId).clientWidth - 40
    _this.height = document.getElementById(_this.fId).clientHeight - 100
    _this.camera.aspect = _this.width / _this.height
    _this.camera.updateProjectionMatrix()
    _this.renderer.setSize(_this.width, _this.height)
  }
}
