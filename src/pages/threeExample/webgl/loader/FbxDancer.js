import * as THREE from 'three'
import OrbitControls from 'threejs-orbit-controls'
// import NURBSCurve from '@/assets/three/curves/NURBSCurve.js'
// import NURBSUtils from '@/assets/three/curves/NURBSUtils.js'
// import '@/assets/threejs/js/libs/inflate.min'
// import '../libs/inflate.min'
// import FBXLoader from '@/assets/threejs/js/loaders/FBXLoader'
// import FBXLoader from 'three-fbxloader-offical'
const FBXLoader = require('three-fbxloader-offical')
// import FBXLoader from 'three-fbx-loader'
// import FBXLoader from 'threejs-fbxloader'
// FBXLoader(THREE)

import Detector from '@/assets/threejs/Detector'

import * as Stats from 'stats.js'

let container
let canvasWidth = 0
let canvasHeight = 0
let stats
let controls

let camera
let scene
let renderer
let light

const clock = new THREE.Clock()

const mixers = []

export function initThree(fId) {
  if (!Detector.webgl) Detector.addGetWebGLMessage()

  init(fId)
  animate()
}

function init(fId) {
  // container = document.createElement('div')
  // document.body.appendChild(container)
  container = document.getElementById(fId)
  canvasWidth = container.clientWidth - 40
  canvasHeight = container.clientWidth - 100
  camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 2000)
  camera.position.set(100, 200, 300)

  controls = new OrbitControls(camera)
  controls.target.set(0, 100, 0)
  controls.update()

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xa0a0a0)
  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000)

  light = new THREE.HemisphereLight(0xffffff, 0x444444)
  light.position.set(0, 200, 0)
  scene.add(light)

  light = new THREE.DirectionalLight(0xffffff)
  light.position.set(0, 200, 100)
  light.castShadow = true
  light.shadow.camera.top = 180
  light.shadow.camera.bottom = -100
  light.shadow.camera.left = -120
  light.shadow.camera.right = 120
  scene.add(light)

  // scene.add( new THREE.CameraHelper( light.shadow.camera ) );

  // ground
  const planeGeometry = new THREE.PlaneBufferGeometry(2000, 2000)
  const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -Math.PI / 2
  plane.receiveShadow = true
  scene.add(plane)

  const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000)
  grid.material.opacity = 0.2
  grid.material.transparent = true
  scene.add(grid)

  // model
  const loader = new FBXLoader()
  console.log('loader is ', loader)
  loader.load('static/threejs/examples/models/fbx/Samba Dancing.fbx', function(object) {
    console.log('loader object is ', object)
    object.mixer = new THREE.AnimationMixer(object)
    mixers.push(object.mixer)

    const action = object.mixer.clipAction(object.animations[ 0 ])
    action.play()

    object.traverse(function(child) {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    scene.add(object)
  })

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvasWidth, canvasHeight)
  renderer.shadowMap.enabled = true
  container.appendChild(renderer.domElement)

  window.addEventListener('resize', onWindowResize, false)

  // stats
  stats = new Stats()
  container.appendChild(stats.dom)
}

function onWindowResize() {
  camera.aspect = canvasWidth / canvasHeight
  camera.updateProjectionMatrix()

  renderer.setSize(canvasWidth, canvasHeight)
}

//

function animate() {
  requestAnimationFrame(animate)

  if (mixers.length > 0) {
    for (let i = 0; i < mixers.length; i++) {
      mixers[ i ].update(clock.getDelta())
    }
  }

  renderer.render(scene, camera)

  stats.update()
}
