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
  name: 'JianYuDaMen',
  mixins: [threeMixin],
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    setScene() {
      // this.scene.position.set(0, -100, 0)
    },
    setCamera() {
      this.camera.position.set(300, 400, 500)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    setCameraControls() {
      this.cameraControls.minDistance = 60
      this.cameraControls.maxDistance = 6000
    },
    initHelper() {
      // const axesHelper = new THREE.AxesHelper(300)
      // this.scene.add(axesHelper)
      // const gridHelper = new THREE.GridHelper(500, 20)
      // this.scene.add(gridHelper)
    },
    initModels() {
      // create the ground plane
      const planeGeometry = new THREE.PlaneGeometry(500, 500, 2, 2)
      this.planeGeometry = planeGeometry
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x7FFFD4 })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 0
      plane.position.y = 0
      plane.position.z = 0
      this.plane = plane
      // add the plane to the scene
      this.scene.add(plane)
      this.fbxLoad()
      // this.jsonLoad()
    },
    fbxLoad() {
      const loader = new FBXLoader()
      const uri = 'static/threejs/models/prison/scene/jianZhuA.fbx'
      loader.load(uri, (result) => {
        console.log('result is ', result)
        const mesh = result
        console.log('mesh is ', mesh)
        // // correctly position the scene
        mesh.position.set(70, 0, 0)
        mesh.rotation.x = -Math.PI / 2
        mesh.scale.set(0.8, 0.8, 0.8)
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
