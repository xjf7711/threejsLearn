<template>
  <div class="example">
    <h2>Example 08.05 - Load blender model</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Examples05',
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
      this.renderer.setClearColor(0xEEEEEE, 1.0)
      this.renderer.setSize(this.width, this.height)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.$el.appendChild(this.renderer.domElement)
    },
    initLight() {
      // add spotlight for the shadows
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(0, 50, 30)
      spotLight.intensity = 2
      this.scene.add(spotLight)
    },
    initGui() {
      this.controls = {
        // we need the first child, since it's a multimaterial
      }

      this.gui = new dat.GUI()
    },
    initModels() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/misc_chair01.json'
      console.log('uri is ' + uri)

      loader.load(uri, (geometry, mat) => {
        console.log('loader.load onload geometry is ', geometry)
        console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])

        this.mesh.scale.x = 10
        this.mesh.scale.y = 10
        this.mesh.scale.z = 10

        this.scene.add(this.mesh)
      }, res => {
        console.log('load onProgress res is ', res)
      }, error => {
        console.log('error is ', error)
      })
    },

    render() {
      this.stats.update()
      if (this.mesh) {
        this.mesh.rotation.y += 0.02
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
      this.stats.domElement.style.left = '0px'
      this.stats.domElement.style.top = '0px'
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
