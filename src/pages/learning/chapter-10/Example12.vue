<template>
  <div class="example">
    <h2>Example 10.10 - Displacement map</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
export default {
  name: 'Example16',
  mixins: [threeMixin],
  data() {
    return {
      controls: null,
      plane: null
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

      this.camera.lookAt(new THREE.Vector3(0, 15, 0))
    },
    initLight() {
      this.setSpotLight()
      this.scene.add(new THREE.AmbientLight(0x444444))
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
    },
    initModels() {
      const loader = new THREE.ObjectLoader()
      const textureLoader = new THREE.TextureLoader()
      loader.load('static/threejs/learning/assets/models/lightmap/lightmap.json', (sceneGroup) => {
        sceneGroup.scale.set(7, 7, 7)
        this.plane = sceneGroup.getObjectByName('Plane')
        this.plane.geometry.faceVertexUvs.push(this.plane.geometry.faceVertexUvs[0])
        this.plane.material = new THREE.MeshBasicMaterial({
          map: textureLoader.load('static/threejs/learning/assets/textures/general/floor-wood.jpg'),
          lightMap: textureLoader.load('static/threejs/learning/assets/textures/lightmap/lightmap.png')
        })

        // add some color and a different material to the head
        const suzanne = sceneGroup.getObjectByName('Suzanne')
        suzanne.geometry.computeVertexNormals()
        suzanne.geometry.computeFaceNormals()
        suzanne.geometry.normalsNeedUpdate = true
        suzanne.material = new THREE.MeshStandardMaterial({ color: 0x445566 })

        // call the default render loop.
        // loaderScene.render(sceneGroup, camera);
        this.scene.add(sceneGroup)
      })
    },
    setGui() {
      this.controls = {
        lightMapIntensity: 1
      }
      this.gui.add(this.controls, 'lightMapIntensity', 0, 5, 0.01)
        .onChange((e) => { this.plane.material.lightMapIntensity = e })
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
