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
import { addGeometryWithMaterial } from './js/util'
// import { addLargeGroundPlane } from '../../mixin/create'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      pointLight: null,
      sphereLightMesh: null,
      controls: null,
      sphereMaterial: null,
      sphereMesh: null,
      cubeMesh: null,
      invert: 1,
      phase: 1
    }
  },
  created() {
    this.controls = {
      // material: null,
      displacementScale: 1,
      displacementBias: 0
    }
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
      this.scene.add(new THREE.AmbientLight(0x888888))
      const pointLight = new THREE.PointLight('#ffffff')
      this.scene.add(pointLight)
      const sphereLight = new THREE.SphereGeometry(0.2)
      const sphereLightMaterial = new THREE.MeshStandardMaterial({ color: 0xff5808 })
      const sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial)
      this.scene.add(sphereLightMesh)
    },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {

    },
    setGui() {
      const textureLoader = new THREE.TextureLoader()
      const urls = [
        'static/threejs/learning/assets/textures/cubemap/car/right.png',
        'static/threejs/learning/assets/textures/cubemap/car/left.png',
        'static/threejs/learning/assets/textures/cubemap/car/top.png',
        'static/threejs/learning/assets/textures/cubemap/car/bottom.png',
        'static/threejs/learning/assets/textures/cubemap/car/front.png',
        'static/threejs/learning/assets/textures/cubemap/car/back.png'
      ]

      const cubeLoader = new THREE.CubeTextureLoader()
      this.scene.background = cubeLoader.load(urls)

      // let alternativeMap = textureLoader.load("../../assets/textures/cubemap/2294472375_24a3b8ef46_o.jpg")
      // alternativeMap.mapping = THREE.EquirectangularReflectionMapping;
      // alternativeMap.magFilter = THREE.LinearFilter;
      // alternativeMap.minFilter = THREE.LinearMipMapLinearFilter;
      // scene.background = alternativeMap;

      const sphere = new THREE.SphereGeometry(8, 50, 50)
      // let sphere = new THREE.CubeGeometry(12, 12, 12)
      const cubeMaterial = new THREE.MeshStandardMaterial({
        envMap: this.scene.background,
        // envMap: alternativeMap,
        color: 0xffffff,
        metalness: 1,
        roughness: 0.5
      })

      const cubeMaterialWithMetalMap = cubeMaterial.clone()
      cubeMaterialWithMetalMap.metalnessMap = textureLoader.load('static/threejs/learning/assets/textures/engraved/roughness-map.jpg')

      const cubeMaterialWithRoughnessMap = cubeMaterial.clone()
      cubeMaterialWithRoughnessMap.roughnessMap = textureLoader.load('static/threejs/learning/assets/textures/engraved/roughness-map.jpg')

      const cube1 = addGeometryWithMaterial(this.scene, sphere, 'metal', this.gui, this.controls, cubeMaterialWithMetalMap)
      cube1.position.x = -10
      cube1.rotation.y = 1 / 3 * Math.PI

      const cube2 = addGeometryWithMaterial(this.scene, sphere, 'rough', this.gui, this.controls, cubeMaterialWithRoughnessMap)
      cube2.position.x = 10
      cube2.rotation.y = -1 / 3 * Math.PI
      this.gui.add(this.controls, 'displacementScale', -5, 5, 0.01)
        .onChange((e) => {
          if (this.sphereMaterial) this.sphereMaterial.displacementScale = e
        })
      this.gui.add(this.controls, 'displacementBias', -5, 5, 0.01)
        .onChange((e) => {
          if (this.sphereMaterial) this.sphereMaterial.displacementBias = e
        })
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
        const pivot = 0
        if (this.sphereLightMesh) this.sphereLightMesh.position.x = (this.invert * (this.sphereLightMesh.position.x - pivot)) + pivot
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
