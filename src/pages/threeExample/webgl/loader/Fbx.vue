<template>
  <div id="loader-fbx">
    <!--<h2>fbx-loader</h2>-->
    <div id="info">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - FBXLoader test
    </div>

  </div>
</template>

<script>
// import * as THREE from 'three'
// import OrbitControls from 'threejs-orbit-controls'
// // import NURBSCurve from '@/assets/three/curves/NURBSCurve.js'
// // import NURBSUtils from '@/assets/three/curves/NURBSUtils.js'
// import '@/assets/threejs/js/libs/inflate.min'
// import FBXLoader from '@/assets/threejs/js/loaders/FBXLoader'
// import Detector from '@/assets/threejs/Detector'
// import * as Stats from 'stats.js'
import { initThree } from './Fbx.js'
export default {
  name: 'LoaderFbx',
  data() {
    return {
      title: 'fbxLoader',
      width: 0,
      height: 0
    }
  },
  mounted() {
    // this.width = this.$el.clientWidth - 40
    // this.height = this.$el.clientHeight - 100
    initThree('loader-fbx')
    // window.addEventListener('resize', this.onWindowResize, false)
  },
  methods: {

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
  color: #fff;
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
#info a,
.button {
  color: #f00;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
