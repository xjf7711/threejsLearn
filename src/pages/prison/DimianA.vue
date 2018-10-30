<template>
  <div class="example">
    <h2>地面</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../mixin/index'
import FBXLoader from 'three-fbxloader-offical'
export default {
  name: 'DimianA',
  mixins: [threeMixin],
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    setCamera() {
      this.camera.position.set(500, 700, 900)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    setCameraControls() {
      this.cameraControls.minDistance = 200
      this.cameraControls.maxDistance = 1800
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(600)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(1000, 20)
      this.scene.add(gridHelper)
    },
    initModels() {
      this.fbxLoad()
      this.fbxLoadB()
      // this.jsonLoad()
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/scene/diMianA.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        const mesh = result.children[0]
        // correctly position the scene
        mesh.position.set(150, 1, 0)
        mesh.rotation.x = 0
        mesh.scale.set(0.015, 0.015, 0.015)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(mesh)
      })
    },
    fbxLoadB() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/scene/diMianB.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        const mesh = result.children[0]
        // correctly position the scene
        mesh.position.set(150, 1, 0)
        mesh.rotation.x = 0
        mesh.scale.set(0.015, 0.015, 0.015)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(mesh)
      })
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/prison/scene/dimianA.json'
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
