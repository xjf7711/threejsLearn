<template>
  <div class="fbx">
    <h2>fbx-loader</h2>
    <div id="info">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - FBXLoader test
    </div>

  </div>
</template>

<script>
import * as THREE from 'three'
// import OrbitControls from 'threejs-orbit-controls'
// // import NURBSCurve from '@/assets/three/curves/NURBSCurve.js'
// // import NURBSUtils from '@/assets/three/curves/NURBSUtils.js'
// import '@/assets/threejs/js/libs/inflate.min'
// import FBXLoader from '@/assets/threejs/js/loaders/FBXLoader'
// import Detector from '@/assets/threejs/Detector'
// import * as Stats from 'stats.js'
// import { initThree } from './Fbx.js'
import FBXLoader from 'three-fbxloader-offical'
import threeMixin from '../../../mixin/index'
export default {
  name: 'LoaderFbx',
  mixins: [threeMixin],
  data() {
    return {
      title: 'fbxLoader'
    }
  },
  methods: {
    setScene() {
      this.scene.background = new THREE.Color(0xa0a0a0)
    },
    setCamera() {
      this.camera.position.set(100, 200, 300)
    },
    setCameraControls() {
      this.cameraControls.minDistance = 1
      this.cameraControls.maxDistance = 9000
      this.cameraControls.target.set(0, 10, 0)
    },
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
    },
    initHelper() {
      const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000)
      grid.material.opacity = 0.2
      grid.material.transparent = true
      this.scene.add(grid)
    },
    initModels() {
      this.createGround()
      this.fbxLoad()
    },
    fbxLoad() {
      console.log('initModels begins. ')
      const loader = new FBXLoader()
      // console.log('loader is ', loader)
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
    },
    createGround() {
      console.log('initGround begins. ')
      const plane = new THREE.PlaneBufferGeometry(2000, 2000)
      const material = new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
      const mesh = new THREE.Mesh(plane, material)
      mesh.rotation.x = -Math.PI / 2
      mesh.receiveShadow = true
      this.scene.add(mesh)
    }
  }
}
</script>

<style scoped>
#loader-fbx {
  font-family: Monospace;
  background-color: #eeeeee;
  color: #fff;
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 900px;
}
#info {
  color: #444444;
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
/*#info a,*/
/*.button {*/
  /*color: #f00;*/
  /*font-weight: bold;*/
  /*text-decoration: underline;*/
  /*cursor: pointer;*/
/*}*/
/*.example {*/
  /*padding: 20px;*/
  /*!*background-color: #ddd;*!*/
  /*width: 100%;*/
  /*height: 900px;*/
/*}*/
</style>
