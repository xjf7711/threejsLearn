import * as THREE from 'three'
import OrbitControls from 'threejs-orbit-controls'
// import NURBSCurve from '@/assets/three/curves/NURBSCurve.js'
// import NURBSUtils from '@/assets/three/curves/NURBSUtils.js'
// import '@/assets/threejs/js/libs/inflate.min'
// import '../libs/inflate.min'
// import FBXLoader from '@/assets/threejs/js/loaders/FBXLoader'
import FBXLoader from 'three-fbxloader-offical'
import Detector from '@/assets/threejs/Detector'
import * as Stats from 'stats.js'

class Fbx {
  constructor(fId) {
    console.log('Fbx class new begins. fId is ' + fId)
    this.fId = fId
    this.renderer = null
    this.scene = null
    this.camera = null
    this.controls = null
    this.clock = new THREE.Clock()
    this.mixers = []
    this.action = null
    this.stats = null
  }

  draw() {
    console.log('draw begins. this.fId is ' + this.fId)
    if (!Detector.webgl) Detector.addGetWebGLMessage()
    this.width = document.getElementById(this.fId).clientWidth - 40
    this.height = document.getElementById(this.fId).clientHeight - 100
    this.initRenderer()
    this.initCamera()
    this.initCamControls()
    this.initScene()
    this.initLight()
    this.initGround()

    this.initModels()

    this.initStats()
    // this.animate()
  }
  initRenderer() {
    console.log('initRenderer begins. ')
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    this.renderer.shadowMap.enabled = true
    document.getElementById(this.fId).appendChild(this.renderer.domElement)
  }
  initCamera() {
    console.log('initCamera begins.')
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 2000)
    this.camera.position.set(100, 200, 300)
  }
  initCamControls() {
    console.log('initCamControls begins.')
    this.controls = new OrbitControls(this.camera)
    this.controls.target.set(0, 100, 0)
    this.controls.update()
  }
  initScene() {
    console.log('initScene begins.')
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xa0a0a0)
    // this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000)
  }
  initLight() {
    console.log('initLight begins. ')
    const HemiLight = new THREE.HemisphereLight(0xffffff, 0x444444)
    HemiLight.position.set(0, 200, 0)
    this.scene.add(HemiLight)

    const DirectionalLight = new THREE.DirectionalLight(0xffffff)
    DirectionalLight.position.set(0, 200, 100)
    DirectionalLight.castShadow = true
    DirectionalLight.shadow.camera.top = 180
    DirectionalLight.shadow.camera.bottom = -100
    DirectionalLight.shadow.camera.left = -120
    DirectionalLight.shadow.camera.right = 120
    this.scene.add(DirectionalLight)
  }
  initGround() {
    console.log('initGround begins. ')
    const plane = new THREE.PlaneBufferGeometry(2000, 2000)
    const material = new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
    const mesh = new THREE.Mesh(plane, material)
    mesh.rotation.x = -Math.PI / 2
    mesh.receiveShadow = true
    this.scene.add(mesh)
    const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000)
    grid.material.opacity = 0.2
    grid.material.transparent = true
    this.scene.add(grid)
  }
  initModels() {
    console.log('initModels begins. ')
    const loader = new FBXLoader()
    console.log('loader is ', loader)
    loader.load('static/threejs/examples/models/fbx/Samba Dancing.fbx', object => {
      console.log('load object is ', object)
      object.mixer = new THREE.AnimationMixer(object)
      this.mixers.push(object.mixer)

      this.action = object.mixer.clipAction(object.animations[ 0 ])
      this.action.play()
      object.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
      this.scene.add(object)
    })
  }

  initStats() {
    console.log('initStats begins. ')
    this.stats = new Stats()
    this.stats.domElement.style.position = 'absolute'
    document.getElementById(this.fId).appendChild(this.stats.domElement)
  }
  onWindowResize() {
    console.log('onWindowResize begins. ')
    this.width = document.getElementById(this.fId).clientWidth - 40
    this.height = document.getElementById(this.fId).clientHeight - 100
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }
  animate() {
    requestAnimationFrame(animate)
    if (this.mixers.length > 0) {
      for (let i = 0; i < this.mixers.length; i++) {
        this.mixers[ i ].update(this.clock.getDelta())
      }
    }
    this.renderer.render(this.scene, this.camera)
    this.stats.update()
  }
}

let fbxObj

export function initThree(fId) {
  console.log('initThree begins.')
  fbxObj = new Fbx(fId)
  fbxObj.draw()
  animate()
  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize() {
  fbxObj.width = document.getElementById(fbxObj.fId).clientWidth - 40
  fbxObj.height = document.getElementById(fbxObj.fId).clientHeight - 100
  fbxObj.camera.aspect = fbxObj.width / fbxObj.height
  fbxObj.camera.updateProjectionMatrix()
  fbxObj.renderer.setSize(fbxObj.width, fbxObj.height)
}
function animate() {
  requestAnimationFrame(animate)
  if (fbxObj.mixers.length > 0) {
    for (let i = 0; i < fbxObj.mixers.length; i++) {
      fbxObj.mixers[ i ].update(fbxObj.clock.getDelta())
    }
  }
  fbxObj.renderer.render(fbxObj.scene, fbxObj.camera)
  fbxObj.stats.update()
}
