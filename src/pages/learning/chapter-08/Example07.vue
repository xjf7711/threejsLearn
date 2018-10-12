<template>
  <div class="example">
    <h2>Example 08.07 - Load OBJ and MTL</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
// import OBJLoader from '@/assets/threejs/js/loaders/OBJLoader'
// import MTLLoader from '@/assets/threejs/js/loaders/MTLLoader'
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'
export default {
  name: 'Examples07',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      // directionalLight: null,
      step: 0,
      rotation: 0,
      gui: null,
      stats: null,
      mesh: null,
      sphere: null,
      cube: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.draw()
  },
  methods: {

    // 绘制

    draw() {
      this.initStats()
      this.initScene()
      this.initCamera()
      this.initLight()
      this.initRenderer()
      this.initGui()
      this.initModels()
      this.render()
      window.onresize = this.onWindowResize
    },
    // 场景
    initScene() {
      this.scene = new THREE.Scene()
    },
    // 相机

    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.1,
        1000
      )

      this.camera.position.set(-30, 40, 50)
      this.camera.lookAt(new THREE.Vector3(0, 10, 0))
    },
    // 渲染器
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0xaaaaff, 1.0)
      this.renderer.setSize(this.width, this.height)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.$el.appendChild(this.renderer.domElement)
    },
    initLight() {
      // add spotlight for the shadows
      const spotLight = new THREE.DirectionalLight(0xffffff)
      spotLight.position.set(0, 40, 30)
      spotLight.intensity = 2
      this.scene.add(spotLight)
    },
    initGui() {
      // this.controls = {
      //   // we need the first child, since it's a multimaterial
      // }
      //
      // this.gui = new dat.GUI()
    },
    initModels() {
      const mtlLoader = new MTLLoader()
      mtlLoader.setPath('static/threejs/models/') // 路径

      mtlLoader.load('butterfly.mtl', mtl => {
        mtl.preload() // 预加载
        console.log('mtl is ', mtl)
        const objLoader = new OBJLoader()
        objLoader.setMaterials(mtl)
        objLoader.setPath('static/threejs/models/')
        objLoader.load('butterfly.obj', object => {
          console.log('object is ', object)
          // configure the wings
          const wing2 = object.children[5]
          const wing1 = object.children[4]

          wing1.material.opacity = 0.6
          wing1.material.transparent = true
          wing1.material.depthTest = false
          wing1.material.side = THREE.DoubleSide

          wing2.material.opacity = 0.6
          wing2.material.depthTest = false
          wing2.material.transparent = true
          wing2.material.side = THREE.DoubleSide

          object.scale.set(140, 140, 140)
          this.mesh = object
          this.scene.add(this.mesh)

          object.rotation.x = 0.2
          object.rotation.y = -1.3
        })
      })
    },

    render() {
      this.stats.update()
      if (this.mesh) {
        this.mesh.rotation.y += 0.006
      }
      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    // 初始化性能插件

    initStats() {
      this.stats = new Stats()
      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'
      this.$el.appendChild(this.stats.domElement)
    },
    // 窗口变动触发的函数

    onWindowResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height

      this.camera.updateProjectionMatrix()

      // this.render()

      this.renderer.setSize(this.width, this.height)
    }
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  background-color: #ddd;
  width: 100%;
  height: 900px;
}
</style>
