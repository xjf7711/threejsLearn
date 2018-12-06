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
      this.cameraControls.maxDistance = 4000
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(25)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(40, 20)
      this.scene.add(gridHelper)
    },
    async initModels() {
      // this.fbxLoadA()
      // this.fbxLoadB()
      this.fbxLoad()
    },
    fbxLoadA() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/property/men.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        const mesh = result.children[0]
        console.log('mesh is ', mesh)
        // correctly position the scene
        mesh.position.set(0, 0, -16)
        mesh.rotation.x = 0
        mesh.scale.set(0.1, 0.1, 0.1)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)
      })
    },
    fbxLoadB() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/property/menKuang.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        const mesh = result.children[0]
        console.log('mesh is ', mesh)
        // correctly position the scene
        mesh.position.set(0, 0, -16)
        mesh.rotation.x = 0
        mesh.scale.set(0.1, 0.1, 0.1)
        // result.translateY(-13)
        // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)
      })
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/property/menWhole.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        const mesh = result.children[0]
        console.log('mesh is ', mesh)
        // correctly position the scene
        mesh.position.set(0, 0, -16)
        mesh.rotation.x = 0
        mesh.scale.set(0.1, 0.1, 0.1)
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
