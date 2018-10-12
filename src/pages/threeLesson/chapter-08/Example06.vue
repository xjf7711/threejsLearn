<template>
  <div class="example">
    <h2>Example 08.06 - Load OBJ model </h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
// import OBJLoader from '@/assets/threejs/js/loaders/OBJLoader'
import { OBJLoader } from 'three-obj-mtl-loader'
export default {
  name: 'Examples06',
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

      this.camera.position.set(130, 40, 50)
      this.camera.lookAt(this.scene.position)
      this.scene.add(this.camera)
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
      spotLight.position.set(30, 40, 50)
      spotLight.intensity = 2
      this.scene.add(spotLight)
    },
    initGui() {
      // this.controls = {
      //   // we need the first child, since it's a multimaterial
      // }
      //
      // this.gui = new dat.GUI()
      // this.gui.domElement.style.position = 'absolute'
      // this.gui.domElement.style.right = '5px'
      // this.gui.domElement.style.top = '137px'
    },
    initModels() {
      const loader = new OBJLoader()
      // const uri = 'static/threejs/models/juxing.obj'
      // const uri = 'static/threejs/models/warship/jianjiaBan.obj'
      const uri = 'static/threejs/models/pinecone.obj'
      // console.log('uri is ' + uri)
      // const baseUri = require('@/assets/threejs/models/')
      loader.load(uri, loadedMesh => {
        const material = new THREE.MeshLambertMaterial({ color: 0x5C3A21 })

        // loadedMesh is a group of meshes. For
        // each mesh set the material, and compute the information
        // three.js needs for rendering.
        loadedMesh.children.forEach(function(child) {
          child.material = material
          child.geometry.computeFaceNormals()
          child.geometry.computeVertexNormals()
        })

        this.mesh = loadedMesh
        loadedMesh.scale.set(200, 200, 200)
        loadedMesh.rotation.x = -0.3
        this.scene.add(loadedMesh)
      })
    },

    render() {
      this.stats.update()
      if (this.mesh) {
        this.mesh.rotation.y += 0.006
        this.mesh.rotation.x += 0.006
        //                mesh.rotation.y+=0.006;
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
  /*background-color: #ddd;*/
  width: 100%;
  height: 800px;
}
</style>
