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
  name: 'BaChangFangA',
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
      this.cameraControls.minDistance = 60
      this.cameraControls.maxDistance = 2000
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(300)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(500, 20)
      this.scene.add(gridHelper)
    },
    initModels() {
      this.fbxLoadA()
      this.fbxLoadB()
      // this.jsonLoad()
    },
    fbxLoadA() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/scene/baChangFangA.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        const mesh = result.children[0].children[0].children[0]
        // correctly position the scene
        mesh.position.set(0, 3, 0)
        // result.rotation.x = -Math.PI / 2
        mesh.scale.set(0.03, 0.03, 0.03)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(mesh)
      })
    },
    fbxLoadB() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/scene/baChangFangB.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        const mesh = result.children[0].children[0].children[0]
        // correctly position the scene
        mesh.position.set(-326, 0, 105)
        // // result.rotation.x = -Math.PI / 2
        mesh.scale.set(0.03, 0.03, 0.03)
        // // result.translateY(-13)
        // // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(mesh)
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
