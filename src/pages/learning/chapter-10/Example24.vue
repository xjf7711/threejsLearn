<template>
  <div class="example">
    <h2>Example 10.24 - Video texture</h2>
    <video
      id="video"
      style="display: none; position: absolute; left: 15px; top: 75px;"
      src="static/threejs/learning/assets/movies/Big_Buck_Bunny_small.ogv"
      controls="true"
      autoplay="true"/>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
// import GLTFLoader from 'three-gltf-loader'
// import GLTFLoader from '../../../assets/threejs/js/loaders/GLTFLoader'
// import { addGeometry } from './js/util'
// import { addLargeGroundPlane } from '../../mixin/create'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock(),
      controls: null,
      polyhedronMesh: null,
      sphereMesh: null,
      cubeMesh: null
    }
  },
  mounted() {
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    // setScene() {
    //   // create a scene, that will hold all our elements such as objects, cameras and lights.
    // },
    // setRenderer() {
    //   // this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
    //   // this.renderer.sortObjects = false
    // },
    setCamera() {
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(new THREE.Vector3(0, 20, 40))

      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initLight() {
      this.setSpotLight()
      this.scene.add(new THREE.AmbientLight(0x444444))
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
    },
    initModels() {
      // var groundPlane = addLargeGroundPlane(this.scene)
      // groundPlane.position.y = -10
      // this.fbxLoad()
    },
    setGui() {
      // this.controls = {
      //   material: null
      // }
      // const video = document.getElementById('video')
      // const texture = new THREE.VideoTexture(video)
      // texture.minFilter = THREE.LinearFilter
      // texture.magFilter = THREE.LinearFilter
      // texture.format = THREE.RGBFormat
      // const polyhedron = new THREE.IcosahedronGeometry(8, 0)
      // this.polyhedronMesh = addGeometry(this.scene, polyhedron, 'polyhedron', texture, this.gui, this.controls)
      // this.polyhedronMesh.position.x = 20
      // this.scene.add(this.polyhedronMesh)
      // const sphere = new THREE.SphereGeometry(5, 20, 20)
      // this.sphereMesh = addGeometry(this.scene, sphere, 'sphere', texture, this.gui, this.controls)
      //
      // var cube = new THREE.BoxGeometry(10, 10, 10)
      // // this.cubeMesh = addGeometry(this.scene, cube, 'cube', texture, this.gui, this.controls)
      // const cubeMaterial = new THREE.MeshLambertMaterial({
      //   map: texture
      // })
      // this.cubeMesh = new THREE.Mesh(cube, cubeMaterial)
      // this.cubeMesh.position.x = -20
      // this.scene.add(this.cubeMesh)
    },
    render() {
      // if (this.polyhedronMesh) this.polyhedronMesh.rotation.x += 0.01
      // if (this.sphereMesh) this.sphereMesh.rotation.y += 0.01
      // if (this.cubeMesh) this.cubeMesh.rotation.z += 0.01
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 900px;
    background-color: #eeeeee;
  }
</style>
