<template>
  <div class="example">
    <h2>罗经甲板</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
// import * as Stats from 'stats.js'
// // import * as dat from 'dat.gui'
// import OrbitControls from 'threejs-orbit-controls'
// import clearWebGLContext from '../mixin/clearWebGLContext'
import threeMixin from '../mixin/index'
import FBXLoader from 'three-fbxloader-offical'
export default {
  name: 'LuojingJiaBan05',
  mixins: [threeMixin],
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    initModels() {
      this.fbxLoad()
      // this.jsonLoad()
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/warship/luoJingJiaBan05.json'
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
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/warship/luoJingJiaBan05.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        result.position.set(0, 4, 0)
        result.rotation.x = -Math.PI / 2
        result.scale.set(0.02, 0.02, 0.02)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)
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
