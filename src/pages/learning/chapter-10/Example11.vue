<template>
  <div class="example">
    <h2>Example 10.10 - Displacement map</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
// import GLTFLoader from 'three-gltf-loader'
// import GLTFLoader from '../../../assets/threejs/js/loaders/GLTFLoader'
// import { addGeometryWithMaterial } from './js/util'
// import { addLargeGroundPlane } from '../../mixin/create'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      controls: null,
      mesh: null
    }
  },
  mounted() {
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    // setScene() {
    //   // create a scene, that will hold all our elements such as objects, cameras and lights.
    // },
    // setRenderer() {
    //   // this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
    //   // this.renderer.sortObjects = false
    // },
    setCamera() {
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(50, 50, 50)

      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initLight() {
      this.setSpotLight()
      this.scene.add(new THREE.AmbientLight(0xffffff, 0.2))
      const sun = new THREE.DirectionalLight(0xffffff)
      sun.position.set(300, 100, 100)
    },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {
      const loader = new THREE.JSONLoader()
      const textureLoader = new THREE.TextureLoader()
      const uri = 'static/threejs/learning/assets/models/baymax/bm.json'
      loader.load(uri, (geometry) => {
        geometry.computeFaceNormals()
        geometry.computeVertexNormals(false)
        geometry.normalsNeedUpdate = true
        geometry.faceVertexUvs.push(geometry.faceVertexUvs[0])

        const material = new THREE.MeshStandardMaterial({
          aoMap: textureLoader.load('static/threejs/learning/assets/models/baymax/ambient.png'),
          aoMapIntensity: 2,
          color: 0xffffff,
          metalness: 0,
          roughness: 1
        })

        // let material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.scale.set(20, 20, 20)
        this.mesh.translateY(-50)
        this.scene.add(this.mesh)
      })
    },
    setGui() {
      this.controls = {
        aoMapIntenisty: 1
      }
      this.gui.add(this.controls, 'aoMapIntenisty', 0, 5, 0.01)
        .onChange((e) => {
          this.mesh.material.aoMapIntensity = e
        })
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 900px;
    background-color: #eeeeee;
  }
</style>
