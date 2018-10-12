<template>
  <div class="example">
    <h2>Example 08.01 - Grouping</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import SceneUtils from '@/assets/threejs/js/utils/SceneUtils'
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
      // step: 0.03,
      gui: null,
      stats: null,
      clock: new THREE.Clock(),
      mixer: null,
      meshHelper: null,
      action: null,
      group: null,
      bboxMesh: null,
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
      this.initScene()
      this.initCamera()
      this.initRenderer()
      this.initStats()
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

      this.camera.position.set(30, 30, 30)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
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
      this.controls = {
        cubePosX: 0,
        cubePosY: 3,
        cubePosZ: 10,

        spherePosX: 10,
        spherePosY: 5,
        spherePosZ: 0,

        groupPosX: 10,
        groupPosY: 5,
        groupPosZ: 0,

        grouping: false,
        rotate: false,

        groupScale: 1,
        cubeScale: 1,
        sphereScale: 1,
        redraw: () => {
          // remove the old plane
          // scene.remove(sphere);
          // scene.remove(cube);
          this.scene.remove(this.group)

          // create a new one
          this.sphere = this.createMesh(new THREE.SphereGeometry(5, 10, 10))
          this.cube = this.createMesh(new THREE.BoxGeometry(6, 6, 6))

          this.sphere.position.set(this.controls.spherePosX, this.controls.spherePosY, this.controls.spherePosZ)
          this.cube.position.set(this.controls.cubePosX, this.controls.cubePosY, this.controls.cubePosZ)
          // add it to the scene.

          // also create a group, only used for rotating
          this.group = new THREE.Group()
          this.group.add(this.sphere)
          this.group.add(this.cube)

          this.scene.add(this.group)
          this.controls.positionBoundingBox()

          const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), this.group.position, 10, 0x0000ff)
          this.scene.add(arrow)
        },
        positionBoundingBox: () => {
          this.scene.remove(this.bboxMesh)
          const box = this.setFromObject(this.group)
          const width = box.max.x - box.min.x
          const height = box.max.y - box.min.y
          const depth = box.max.z - box.min.z

          const bbox = new THREE.BoxGeometry(width, height, depth)
          this.bboxMesh = new THREE.Mesh(bbox, new THREE.MeshBasicMaterial({
            color: 0x000000,
            vertexColors: THREE.VertexColors,
            wireframeLinewidth: 2,
            wireframe: true
          }))
          //            scene.add(bboxMesh);

          this.bboxMesh.position.x = ((box.min.x + box.max.x) / 2)
          this.bboxMesh.position.y = ((box.min.y + box.max.y) / 2)
          this.bboxMesh.position.z = ((box.min.z + box.max.z) / 2)
        }
      }

      const gui = new dat.GUI()
      const sphereFolder = gui.addFolder('sphere')
      sphereFolder.add(this.controls, 'spherePosX', -20, 20).onChange(e => {
        this.sphere.position.x = e
        this.controls.positionBoundingBox()
      })
      sphereFolder.add(this.controls, 'spherePosZ', -20, 20).onChange(e => {
        this.sphere.position.z = e
        this.controls.positionBoundingBox()
      })
      sphereFolder.add(this.controls, 'spherePosY', -20, 20).onChange(e => {
        this.sphere.position.y = e
        this.controls.positionBoundingBox()
      })
      sphereFolder.add(this.controls, 'sphereScale', 0, 3).onChange(e => {
        this.sphere.scale.set(e, e, e)
        this.controls.positionBoundingBox()
      })

      const cubeFolder = gui.addFolder('cube')
      cubeFolder.add(this.controls, 'cubePosX', -20, 20).onChange(e => {
        this.cube.position.x = e
        this.controls.positionBoundingBox()
      })
      cubeFolder.add(this.controls, 'cubePosZ', -20, 20).onChange(e => {
        this.cube.position.z = e
        this.controls.positionBoundingBox()
      })
      cubeFolder.add(this.controls, 'cubePosY', -20, 20).onChange(e => {
        this.cube.position.y = e
        this.controls.positionBoundingBox()
      })
      cubeFolder.add(this.controls, 'cubeScale', 0, 3).onChange(e => {
        this.cube.scale.set(e, e, e)
        this.controls.positionBoundingBox()
      })

      const groupFolder = gui.addFolder('group')
      groupFolder.add(this.controls, 'groupPosX', -20, 20).onChange(e => {
        this.group.position.x = e
        this.controls.positionBoundingBox()
      })
      groupFolder.add(this.controls, 'groupPosZ', -20, 20).onChange(e => {
        this.group.position.z = e
        this.controls.positionBoundingBox()
      })
      groupFolder.add(this.controls, 'groupPosY', -20, 20).onChange(e => {
        this.group.position.y = e
        this.controls.positionBoundingBox()
      })
      groupFolder.add(this.controls, 'groupScale', 0, 3).onChange(e => {
        this.group.scale.set(e, e, e)
        this.controls.positionBoundingBox()
      })

      gui.add(this.controls, 'grouping')
      gui.add(this.controls, 'rotate')
      this.controls.redraw()
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

    render() {
      this.stats.update()
      const step = 0.03
      if (this.controls.grouping && this.controls.rotate) {
        this.group.rotation.y += step
      }

      if (this.controls.rotate && !this.controls.grouping) {
        this.sphere.rotation.y += step
        this.cube.rotation.y += step
      }

      //        this.controls.positionBoundingBox();
      // render using requestAnimationFrame
      requestAnimationFrame(this.render)
      this.renderer.render(this.scene, this.camera)
    },
    createMesh(geom) {
      // assign two materials
      const meshMaterial = new THREE.MeshNormalMaterial()
      meshMaterial.side = THREE.DoubleSide
      const wireFrameMat = new THREE.MeshBasicMaterial()
      wireFrameMat.wireframe = true

      // create a multimaterial
      const plane = SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat])

      return plane
    },
    // http://jsfiddle.net/MREL4/
    setFromObject(object) {
      const box = new THREE.Box3()
      const v1 = new THREE.Vector3()
      object.updateMatrixWorld(true)
      box.makeEmpty()
      object.traverse(function(node) {
        if (node.geometry !== undefined && node.geometry.vertices !== undefined) {
          const vertices = node.geometry.vertices
          for (let i = 0, il = vertices.length; i < il; i++) {
            v1.copy(vertices[i])
            v1.applyMatrix4(node.matrixWorld)
            box.expandByPoint(v1)
          }
        }
      })
      return box
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
  height: 900px;
}
</style>
