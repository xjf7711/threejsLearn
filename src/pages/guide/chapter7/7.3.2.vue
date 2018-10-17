<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
// import { MTLLoader, OBJLoader } from 'static/threejs/examples/js/loaders.js'
// import OBJLoader from '@/assets/threejs/js/loaders/OBJLoader'
// import MTLLoader from '@/assets/threejs/js/loaders/MTLLoader'
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'
import stats from '../../mixin/stats'
import animate from '../../mixin/animate'
export default {
  name: 'Teapot732',
  mixins: [stats, animate],
  data() {
    return {
      msg: '例 7.3.2',
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,
      mesh: null,
      id: null,

      ballMesh: null,
      ballRadius: 0.5,
      isMoving: false,
      maxHeight: 5,
      v: 0,
      a: -0.01
    }
  },
  mounted() {
    // THREE.MTLLoader = MTLLoader()
    // THREE.OBJLoader = OBJLoader()
    this.init()
  },
  methods: {
    init() {
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      this.renderer.setClearColor(0x000000)
      this.scene = new THREE.Scene()

      this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100)
      this.camera.position.set(20, 5, 15)
      this.camera.lookAt(new THREE.Vector3(0, 2, -1))
      // this.scene.add(this.camera)

      // material loader
      const mtlLoader = new MTLLoader()
      mtlLoader.setPath('static/threejs/guide/lib/')
      mtlLoader.load('port.mtl', materials => {
        materials.preload()

        // model loader
        const objLoader = new OBJLoader()
        objLoader.setMaterials(materials)
        objLoader.setPath('static/threejs/guide/lib/')
        objLoader.load('port.obj', object => {
          object.position.y = -95
          // if has object, add to scene
          if (object.children.length > 0) {
            this.scene.add(object.children[0])
          }
        })
      })

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      this.scene.add(light)

      // this.id = setInterval(this.draw, 20)
    }
    // draw() {
    //   this.renderer.render(this.scene, this.camera)
    // }
  }
}
</script>

<style scoped>
.example {
  background-color: #dddddd;
  width: 100%;
  height: 800px;
}
</style>
