<template>
  <div class="example">
    <h2>舰甲板4</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import FBXLoader from 'three-fbxloader-offical'
// import * as dat from 'dat.gui'
// import OrbitControls from 'threejs-orbit-controls'
// import clearWebGLContext from '../mixin/clearWebGLContext'
// import windowResize from '../mixin/windowResize'
// import stats from '../mixin/stats'
// import animate from '../mixin/animate'
import mixin from '../mixin/index'
export default {
  name: 'Jianjiaban4',
  mixins: [mixin],
  methods: {
    initModels() {
      this.fbxLoad()
      // this.jsonLoad()
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/warship/jiaShiJiaBan04.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        result.position.set(0, 2, 0)
        result.rotation.x = -Math.PI / 2
        result.scale.set(0.01, 0.01, 0.01)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)
      })
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      // const uri = 'static/threejs/models/dimianA.json'
      const uri = 'static/threejs/models/warship/jianjiaban4.json'
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
