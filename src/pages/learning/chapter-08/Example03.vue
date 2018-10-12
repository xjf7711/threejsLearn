<template>
  <div class="example">
    <h2>Example 08.03 - Save & Load</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'Examples01',
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
      guiControls: null,
      datGui: null,
      stats: null,
      // cubeMaterial: null,
      // sphere: null,
      // cube: null,
      loadedMesh: null
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
      this.initRenderer()
      this.initModels()
      this.initGui()
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

      // position and point the camera to the center of the scene
      this.camera.position.x = -30
      this.camera.position.y = 40
      this.camera.position.z = 50
      this.camera.lookAt(new THREE.Vector3(-20, 0, 0))
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
    initModels() {
      // THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.
      // function TorusKnotGeometry( radius, tube, tubularSegments, radialSegments, p, q, heightScale ) {
      this.knot = this.createMesh(new THREE.TorusKnotGeometry(10, 1, 64, 8, 2, 3, 1))
      // const torusKnotGeometry = new THREE.TorusKnotGeometry(10, 1, 64, 8)
      // torusKnotGeometry.scale(1, 1, 1)
      // this.knot = this.createMesh(torusKnotGeometry)
      // add the mesh to the scene
      this.scene.add(this.knot)
    },
    // setup the control gui
    initGui() {
      this.cubeMaterial = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.5 })
      console.log(this.knot.geometry.parameters)
      this.guiControls = {
        // we need the first child, since it's a multimaterial
        radius: this.knot.geometry.parameters.radius,
        tube: 0.3,
        radialSegments: this.knot.geometry.parameters.radialSegments,
        tubularSegments: this.knot.geometry.parameters.tubularSegments,
        p: this.knot.geometry.parameters.p,
        q: this.knot.geometry.parameters.q,
        // heightScale: this.knot.geometry.parameters.heightScale,
        redraw: () => {
          // remove the old plane
          this.scene.remove(this.knot)
          // create a new one
          this.knot = this.createMesh(new THREE.TorusKnotGeometry(
            this.guiControls.radius,
            this.guiControls.tube,
            Math.round(this.guiControls.radialSegments),
            Math.round(this.guiControls.tubularSegments),
            Math.round(this.guiControls.p),
            Math.round(this.guiControls.q)
            // this.guiControls.heightScale
          ))
          // add it to the scene.
          this.scene.add(this.knot)
        },

        save: () => {
          const result = this.knot.toJSON()
          localStorage.setItem('json', JSON.stringify(result))
        },

        load: () => {
          this.scene.remove(this.loadedMesh)

          const json = localStorage.getItem('json')

          if (json) {
            const loadedGeometry = JSON.parse(json)
            const loader = new THREE.ObjectLoader()

            this.loadedMesh = loader.parse(loadedGeometry)
            this.loadedMesh.position.x -= 50
            this.scene.add(this.loadedMesh)
          }
        }
      }

      const gui = new dat.GUI()
      gui.domElement.style.position = 'absolute'
      gui.domElement.style.right = '5px'
      gui.domElement.style.top = '55px'
      const ioGui = gui.addFolder('Save & Load')
      ioGui.add(this.guiControls, 'save').onChange(this.guiControls.save)
      ioGui.add(this.guiControls, 'load').onChange(this.guiControls.load)
      const meshGui = gui.addFolder('mesh')
      meshGui.add(this.guiControls, 'radius', 0, 40).onChange(this.guiControls.redraw)
      meshGui.add(this.guiControls, 'tube', 0, 40).onChange(this.guiControls.redraw)
      meshGui.add(this.guiControls, 'radialSegments', 0, 400).step(1).onChange(this.guiControls.redraw)
      meshGui.add(this.guiControls, 'tubularSegments', 1, 20).step(1).onChange(this.guiControls.redraw)
      meshGui.add(this.guiControls, 'p', 1, 10).step(1).onChange(this.guiControls.redraw)
      meshGui.add(this.guiControls, 'q', 1, 15).step(1).onChange(this.guiControls.redraw)
      // meshGui.add(this.guiControls, 'heightScale', 0, 5).onChange(this.guiControls.redraw)
    },
    createMesh(geom) {
      // assign two materials
      const meshMaterial = new THREE.MeshBasicMaterial({
        vertexColors: THREE.VertexColors,
        wireframe: true,
        wireframeLinewidth: 2,
        color: 0xaaaaaa
      })
      meshMaterial.side = THREE.DoubleSide

      // create a multimaterial
      const mesh = new THREE.Mesh(geom, meshMaterial)

      return mesh
    },

    render() {
      this.knot.rotation.y = this.step += 0.01
      this.stats.update()

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
      this.stats.domElement.style.top = '90px'
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
