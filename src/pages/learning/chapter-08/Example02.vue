<template>
  <div class="example">
    <h2>Example 08.02 - Merge objects</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import SceneUtils from '@/assets/threejs/js/utils/SceneUtils'
export default {
  name: 'Example01',
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
      cubeMaterial: null,
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
      this.initRenderer()
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
        500
      )

      this.camera.position.set(0, 40, 50)
      this.camera.lookAt(this.scene.position)
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
    initGround() {
      const ground = new THREE.PlaneGeometry(100, 100, 50, 50)

      const groundMesh = SceneUtils.createMultiMaterialObject(ground,
        [new THREE.MeshBasicMaterial({ wireframe: true, overdraw: true, color: 0x0000ff }),
          new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 }
          )
        ])
      groundMesh.rotation.x = -0.5 * Math.PI
      this.scene.add(groundMesh)
    },
    initGui() {
      this.cubeMaterial = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.5 })
      this.controls = {
        cameraNear: this.camera.near,
        cameraFar: this.camera.far,
        rotationSpeed: 0.02,
        combined: false,
        numberOfObjects: 500,
        redraw: () => {
          const toRemove = []
          this.scene.traverse(e => {
            if (e instanceof THREE.Mesh) toRemove.push(e)
          })
          toRemove.forEach(e => {
            this.scene.remove(e)
          })

          // add a large number of cubes
          if (this.controls.combined) {
            const geometry = new THREE.Geometry()
            for (let i = 0; i < this.controls.numberOfObjects; i++) {
              const cubeMesh = this.addcube()
              cubeMesh.updateMatrix()
              geometry.merge(cubeMesh.geometry, cubeMesh.matrix)
            }
            this.scene.add(new THREE.Mesh(geometry, this.cubeMaterial))
          } else {
            for (let i = 0; i < this.controls.numberOfObjects; i++) {
              this.scene.add(this.controls.addCube())
            }
          }
        },
        addCube: this.addcube,

        outputObjects: () => {
          console.log(this.scene.children)
        }
      }

      const gui = new dat.GUI()

      gui.add(this.controls, 'numberOfObjects', 0, 20000)
      gui.add(this.controls, 'combined').onChange(this.controls.redraw)
      gui.add(this.controls, 'redraw')
      this.controls.redraw()
    },
    addcube() {
      const cubeSize = 1.0
      const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)

      const cube = new THREE.Mesh(cubeGeometry, this.cubeMaterial)
      cube.castShadow = true

      // position the cube randomly in the scene
      cube.position.x = -60 + Math.round((Math.random() * 100))
      cube.position.y = Math.round((Math.random() * 10))
      cube.position.z = -150 + Math.round((Math.random() * 175))

      // add the cube to the scene
      return cube
    },

    render() {
      this.rotation += 0.005
      this.stats.update()

      //            scene.rotation.x+=0.02;

      // rotate the cubes around its axes
      //            scene.traverse(e => {
      //                if (e instanceof THREE.Mesh ) {
      //
      //                    e.rotation.x+=controls.rotationSpeed;
      //                    e.rotation.y+=controls.rotationSpeed;
      //                    e.rotation.z+=controls.rotationSpeed;
      //                }
      //            });

      this.camera.position.x = Math.sin(this.rotation) * 50
      // camera.position.y = Math.sin(rotation) * 40;
      this.camera.position.z = Math.cos(this.rotation) * 50
      this.camera.lookAt(this.scene.position)

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
