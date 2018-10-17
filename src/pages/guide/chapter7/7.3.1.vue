<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
// import { OBJLoader } from 'static/threejs/examples/js/loaders.js' // 有问题
// import OBJLoader from '@/assets/threejs/js/loaders/OBJLoader'
import { OBJLoader } from 'three-obj-mtl-loader'
import stats from '../../mixin/stats'
import animate from '../../mixin/animate'
export default {
  name: 'Teapot731',
  mixins: [stats, animate],
  data() {
    return {
      msg: '例 7.3.1',
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
      this.camera.position.set(15, 25, 25)
      this.camera.lookAt(new THREE.Vector3(0, 2, 0))
      this.scene.add(this.camera)

      const loader = new OBJLoader()
      const url = 'static/threejs/guide/lib/port.obj'
      // const url = 'static/threejs/guide/lib/y5.obj'
      loader.load(url, obj => {
        obj.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({
              color: 0xffff00,
              side: THREE.DoubleSide
            })
          }
        })

        this.mesh = obj
        this.scene.add(obj)
      })

      const light = new THREE.DirectionalLight(0xffffff)
      light.position.set(20, 10, 5)
      this.scene.add(light)

      // this.id = setInterval(this.draw, 20)
    }
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
