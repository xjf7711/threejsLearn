<template>
  <div id="loader-fbx-dancing">
    <div id="info">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - FBXLoader<br >
      Character and animation from <a href="https://www.mixamo.com/" target="_blank" rel="noopener">Mixamo</a>
    </div>
  </div>
</template>

<script>
import { initThree } from './FbxDancer.js'
export default {
  name: 'LoaderFbx',
  data() {
    return {
      title: 'fbxLoader'
    }
  },
  mounted() {
    initThree('loader-fbx-dancing')
  },
  methods: {

  }
}
</script>

<style scoped>
#loader-fbx-dancing {
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
  display:block;
}
#info a {
  color: #046;
  font-weight: bold;
}
</style>
