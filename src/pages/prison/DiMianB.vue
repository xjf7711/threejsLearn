<template>
  <div class="example">
    <h2>地面B</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../mixin/index'
import GLTFLoader from 'three-gltf-loader'
import FBXLoader from 'three-fbxloader-offical'
export default {
  name: 'DimianB',
  mixins: [threeMixin],
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    setCamera() {
      this.camera.position.set(30, 40, 50)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    setCameraControls() {
      this.cameraControls.minDistance = 1
      this.cameraControls.maxDistance = 1000
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(30)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(50, 20)
      this.scene.add(gridHelper)
    },
    initModels() {
      // this.gltfLoad()
      this.fbxLoad()
      // this.jsonLoad()
    },
    gltfLoad() {
      const loader = new GLTFLoader()
      const uri = 'static/threejs/models/prison/diMianB.gltf'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        result.scene.children[0].position.set(0, 0.1, 0)
        result.scene.children[0].rotation.x = Math.PI / 2
        result.scene.children[0].scale.set(0.001, 0.001, 0.001)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result.scene.children[0])
      })
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/scene/diMianB.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        result.position.set(0, 0.1, 0)
        result.rotation.x = -Math.PI / 2
        result.scale.set(0.1, 0.1, 0.1)
        // // result.translateY(-13)
        // // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)
      })
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/prison/scene/diMianB.json'
      console.log('uri is ' + uri)
      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])
        this.mesh.position.set(43, 23.5, 10)

        this.scene.add(this.mesh)
      }, res => {
        console.log('load onProgress res is ', res)
      }, error => {
        console.log('error is ', error)
      })
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    background-color: #eeeeee;
    width: 100%;
    height: 900px;
  }
</style>
