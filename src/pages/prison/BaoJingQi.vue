<template>
  <div class="example">
    <h2>对讲机</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../mixin/index'
import FBXLoader from 'three-fbxloader-offical'
export default {
  name: 'DuiJiangJi',
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
      this.fbxLoad()
      // this.jsonLoad()
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/property/baoJingQi.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // correctly position the scene
        result.children[0].position.set(0, 1, 0)
        // result.children[0].rotation.x = 0
        result.children[0].scale.set(3, 3, 3)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result.children[0])
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
