<template>
  <div class="example">
    <h2>下甲板</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../mixin/index'
import FBXLoader from 'three-fbxloader-offical'
export default {
  name: 'XiaJiaBan',
  mixins: [threeMixin],
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    setCamera() {
      this.camera.position.set(300, 400, 500)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    setCameraControls() {
      // 最大最小相机移动距离(景深相机)
      this.cameraControls.minDistance = 3
      this.cameraControls.maxDistance = 1800
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(300)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(500, 20)
      this.scene.add(gridHelper)
    },
    initModels() {
      this.fbxLoad()
      // this.jsonLoad()
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/warship/xiaJiaBan.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        result.children[0].position.set(0, 1, 0)
        result.children[0].rotation.x = 0
        result.children[0].scale.set(0.02, 0.02, 0.02)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result.children[0])
      })
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      // const uri = 'static/threejs/models/dimianA.json'
      const uri = 'static/threejs/models/warship/xiaJiaBan.json'
      // const uri = 'static/threejs/models/misc_chair01.json'
      console.log('uri is ' + uri)
      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])

        // this.mesh.scale.x = 10
        // this.mesh.scale.y = 10
        // this.mesh.scale.z = 10

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
