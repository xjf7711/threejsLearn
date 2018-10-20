<template>
  <div class="example">
    <h2>底层</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../mixin/index'
import FBXLoader from 'three-fbxloader-offical'
export default {
  name: 'DiCeng',
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
      this.cameraControls.minDistance = 400
      this.cameraControls.maxDistance = 1000
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
      const uri = 'static/threejs/models/prison/diCeng.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        // // correctly position the scene
        result.position.set(0, 70, 0)
        result.rotation.x = -Math.PI / 2
        result.scale.set(0.4, 0.4, 0.4)
        // // result.translateY(-13)
        // // result.scene.rotateY(-0.3 * Math.PI)
        this.scene.add(result)
      })
    },
    jsonLoad() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/prison/diCeng.json'
      console.log('uri is ' + uri)
      loader.load(uri, (geometry, mat) => {
        // console.log('loader.load onload geometry is ', geometry)
        // console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])
        this.mesh.scale.set(0.5, 0.5, 0.5)
        this.mesh.position.set(0, 80, 0)

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
