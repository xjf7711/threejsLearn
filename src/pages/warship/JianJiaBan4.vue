<template>
  <div class="example">
    <h2>舰甲板4</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
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
