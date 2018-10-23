<template>
  <div class="example">
    <h2>Example 10.09 - Normal map</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
// import GLTFLoader from 'three-gltf-loader'
// import GLTFLoader from '../../../assets/threejs/js/loaders/GLTFLoader'
import { addGeometryWithMaterial } from './js/util'
import { addLargeGroundPlane } from '../../mixin/create'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock(),
      controls: null,
      polyhedronMesh: null,
      sphereMesh: null,
      pointLight: null,
      sphereLightMesh: null,
      cubeMesh: null,
      invert: 1,
      phase: 0
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
      this.camera.position.set(0, 20, 40)

      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initLight() {
      this.setSpotLight()
      this.scene.add(new THREE.AmbientLight(0x444444))

      this.pointLight = new THREE.PointLight('#ff5808')
      this.scene.add(this.pointLight)
      var sphereLight = new THREE.SphereGeometry(0.2)
      var sphereLightMaterial = new THREE.MeshStandardMaterial({ color: 0xff5808 })
      this.sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial)
      this.scene.add(this.sphereLightMesh)
    },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {
      const groundPlane = addLargeGroundPlane(this.scene)
      groundPlane.position.y = -8
      // this.fbxLoad()
    },
    setGui() {
      this.controls = {
        // material: null,
        normalScaleX: 1,
        normalScaleY: 1
      }
      const textureLoader = new THREE.TextureLoader()
      const cube = new THREE.BoxGeometry(16, 16, 16)
      const cubeMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('static/threejs/learning/assets/textures/general/plaster-normal.jpg'),
        metalness: 0.2,
        roughness: 0.07
      })

      const cubeMaterialWithNormalMap = cubeMaterial.clone()
      cubeMaterialWithNormalMap.normalMap = textureLoader.load('static/threejs/learning/assets/textures/general/plaster-normal.jpg')

      var cube1 = addGeometryWithMaterial(this.scene, cube, 'cube-1', this.gui, this.controls, cubeMaterial)
      cube1.position.x = -17
      cube1.rotation.y = 1 / 3 * Math.PI

      var cube2 = addGeometryWithMaterial(this.scene, cube, 'cube-2', this.gui, this.controls, cubeMaterialWithNormalMap)
      cube2.position.x = 17
      cube2.rotation.y = -1 / 3 * Math.PI

      this.gui.add(this.controls, 'normalScaleX', -3, 3, 0.001).onChange(function(e) { cubeMaterialWithNormalMap.normalScale.set(this.controls.normalScaleX, this.controls.normalScaleY) })
      this.gui.add(this.controls, 'normalScaleY', -3, 3, 0.001).onChange(function(e) { cubeMaterialWithNormalMap.normalScale.set(this.controls.normalScaleX, this.controls.normalScaleY) })
    },
    render() {
      if (this.phase > 2 * Math.PI) {
        this.invert = this.invert * -1
        this.phase -= 2 * Math.PI
      } else {
        this.phase += 0.02
      }

      if (this.sphereLightMesh) this.sphereLightMesh.position.z = +(21 * (Math.sin(this.phase)))
      if (this.sphereLightMesh) this.sphereLightMesh.position.x = -14 + (14 * (Math.cos(this.phase)))
      if (this.sphereLightMesh) this.sphereLightMesh.position.y = 5

      if (this.invert < 0) {
        var pivot = 0
        this.sphereLightMesh.position.x = (this.invert * (this.sphereLightMesh.position.x - pivot)) + pivot
      }
      if (this.pointLight) this.pointLight.position.copy(this.sphereLightMesh.position)
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
