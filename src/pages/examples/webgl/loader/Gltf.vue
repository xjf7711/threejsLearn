<template>
  <div id="gltf">
    <h2>gltf加载</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import GLTFLoader from 'three-gltf-loader'
// import GLTFLoader from '@/assets/threejs/js/loaders/GLTFLoader'
// import OrbitControls from "threejs-orbit-controls";
// import Stats from "stats.js";
// import Detector from '@/assets/threejs/Detector.js'
// import stats from "../mixin/stats";
// import animate from "../mixin/animate";
// import windowResize from "../mixin/windowResize";
// import clearWebGLContext from "../mixin/clearWebGLContext";
import mixin from '../../../mixin/index'
export default {
  name: 'LoaderGLTF',
  mixins: [mixin],
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      envMap: null
    }
  },
  methods: {
    setScene() {
      // envmap
      var path = 'static/threejs/examples/textures/cube/Bridge2/'
      var format = '.jpg'
      this.envMap = new THREE.CubeTextureLoader().load([
        path + 'posx' + format,
        path + 'negx' + format,
        path + 'posy' + format,
        path + 'negy' + format,
        path + 'posz' + format,
        path + 'negz' + format
      ])

      // this.scene = new THREE.Scene();
      this.scene.background = this.envMap
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.25,
        20
      )
      this.camera.position.set(-1.8, 0.9, 2.7)
    },
    setLight() {
      const light = new THREE.HemisphereLight(0xbbbbff, 0x444422)
      light.position.set(0, 1, 0)
      this.scene.add(light)
    },
    setCameraControls() {
      // const controls = new OrbitControls(this.camera);
      this.cameraControls.minDistance = 1
      this.cameraControls.maxDistance = 1000
      this.cameraControls.target.set(0, -0.2, -0.2)
      this.cameraControls.update()
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(20)
      this.scene.add(axesHelper)
    },
    initModels() {
      this.gltfLoad()
    },
    setRenderer() {
      this.renderer.gammaOutput = true
    },
    gltfLoad() {
      // model
      const loader = new GLTFLoader()
      const that = this
      loader.load('static/threejs/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf', gltf => {
        console.log('gltf.this.scene is ', gltf.scene)
        gltf.scene.traverse(child => {
          console.log('gltf.this.scene child is ', child)
          if (child.isMesh) {
            child.material.envMap = that.envMap
          }
        })

        this.scene.add(gltf.scene)
      })
    }
  }
}
</script>

<style scoped>
  #gltf {
    font-family: Monospace;
    background-color: #cccccc;
    color: #fff;
    margin: 0;
    overflow: hidden;
    height: 900px;
  }
  #info {
    color: #fff;
    /*position: absolute;*/
    top: 10px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display: block;
  }
  #info a {
    color: #f00;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
