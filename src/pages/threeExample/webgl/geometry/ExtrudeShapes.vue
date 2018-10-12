<template>
  <div class="example">
    <h2>three.js webgl - geometry - extrude shapes</h2>
    <div style="position:absolute;top:10px;width:100%;text-Align:center;color:#fff;link:#f80">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a>
      webgl - geometry extrude shapes
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
export default {
  name: 'ExtrudeShapes',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      cameraControls: null,
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
    // 绘制
    this.initStats()
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initLight()
    this.initHelper()
    // this.initGui()
    this.initModels()
    this.initCameraControls()
    this.animate()
    window.onresize = this.onWindowResize
  },
  methods: {
    // 场景
    initScene() {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0x222222)
    },
    // 相机

    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        10000
      )

      this.camera.position.set(530, 750, 600)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 渲染器
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0xDDDDDD, 1.0)
      this.renderer.setSize(this.width, this.height)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.$el.appendChild(this.renderer.domElement)
    },
    initLight() {
      const ambientLight = new THREE.AmbientLight(0xDDDDDD)
      this.scene.add(ambientLight)
      const light = new THREE.PointLight(0xffffff)
      light.position.copy(this.camera.position)
      // light.position.set(this.camera.position)
      this.scene.add(light)
      // const directLight = new THREE.DirectionalLight(0xFFFFFF)
      // this.scene.add(directLight)
      // const hemiLight = new THREE.HemisphereLight(0xeeeeee, 0x222222)
      // this.scene.add(hemiLight)
    },
    initHelper() {
      const axesHelper = new THREE.AxesHelper(1000)
      this.scene.add(axesHelper)
    },
    initCameraControls() {
      this.cameraControls = new TrackballControls(this.camera, this.renderer.domElement)
      this.cameraControls.minDistance = 200
      this.cameraControls.maxDistance = 1800
    },
    initGui() {
      this.controls = {
        // we need the first child, since it's a multimaterial
      }

      this.gui = new dat.GUI()
    },
    initModels() {
      // this.drawClosedSpline()
      // this.drawRandomSpline()
      // this.drawStarShape()
      this.drawPathCube()
      // this.drawPath()
    },
    drawClosedSpline() {
      // const closedSpline = new THREE.CatmullRomCurve3([
      //   new THREE.Vector3(-60, -100, 60),
      //   new THREE.Vector3(-60, 20, 60),
      //   new THREE.Vector3(-60, 120, 60),
      //   new THREE.Vector3(60, 20, -60),
      //   new THREE.Vector3(60, -100, -60)
      // ])
      //
      // closedSpline.curveType = 'catmullrom'
      // closedSpline.closed = true
      const closedSpline = this.createClosedSpline()
      const extrudeSettings = {
        steps: 100,
        bevelEnabled: false,
        extrudePath: closedSpline
      }

      const shape = this.createShape(3)

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

      const material = new THREE.MeshLambertMaterial({ color: 0xb00000, wireframe: false })

      const mesh = new THREE.Mesh(geometry, material)

      this.scene.add(mesh)
    },
    createClosedSpline() {
      const closedSpline = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 20, 0),
        new THREE.Vector3(460, 20, 0),
        new THREE.Vector3(460, 20, 220),
        new THREE.Vector3(220, 20, 220),
        new THREE.Vector3(220, 20, 460),
        new THREE.Vector3(0, 20, 460)
      ])
      closedSpline.curveType = 'catmullrom' // centripetal, chordal and catmullrom.
      closedSpline.tension = 0.05 // When .type is catmullrom, defines catmullrom's tension.
      closedSpline.closed = true
      return closedSpline
    },
    createCurePath() {
      // create curePath
      const vector1 = new THREE.Vector3(0, 20, 0)
      const vector2 = new THREE.Vector3(160, 20, 0)
      const vector3 = new THREE.Vector3(160, 20, 120)
      const vector4 = new THREE.Vector3(120, 20, 120)
      const vector5 = new THREE.Vector3(120, 20, 160)
      const vector6 = new THREE.Vector3(0, 20, 160)
      const line1 = new THREE.LineCurve3(vector1, vector2)
      const line2 = new THREE.LineCurve3(vector2, vector3)
      const line3 = new THREE.LineCurve3(vector3, vector4)
      const line4 = new THREE.LineCurve3(vector4, vector5)
      const line5 = new THREE.LineCurve3(vector5, vector6)
      const line6 = new THREE.LineCurve3(vector6, vector1)
      const curePath = new THREE.CurvePath()

      curePath.curves = [line1, line2, line3, line4, line5, line6]
      // curePath.closePath()
      curePath.autoClose = true
      return curePath
    },
    createShape(count) {
      const pts = []
      // const count = 3

      for (let i = 0; i < count; i++) {
        const l = 20

        const a = 2 * i / count * Math.PI

        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l))
      }
      return new THREE.Shape(pts)
    },
    createRectangleShape(x, y) {
      var shape = new THREE.Shape()
      shape.moveTo(0, 0)
      shape.lineTo(0, y)
      shape.lineTo(x, y)
      shape.lineTo(x, 0)
      shape.lineTo(0, 0)
      return shape
    },
    drawPath() {
      // const geometry = this.createCurePath()
      const points = [
        new THREE.Vector3(0, 20, 0),
        new THREE.Vector3(160, 20, 0),
        new THREE.Vector3(160, 20, 120),
        new THREE.Vector3(120, 20, 120),
        new THREE.Vector3(120, 20, 160),
        new THREE.Vector3(0, 20, 160),
        new THREE.Vector3(0, 20, 0)
      ]
      const geometry = new THREE.Geometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial(0x777777)
      const mesh = new THREE.Line(geometry, material)
      this.scene.add(mesh)
    },
    drawPathCube() {
      const width = 10
      const height = 50
      const pathData = [
        [0, 0],
        [160, 0],
        [160, 120],
        [120, 120],
        [120, 160],
        [0, 160],
        [0, 0]
      ]
      const group = new THREE.Group()
      for (var j = 1; j < pathData.length; j++) {
        const startPoint = pathData[j - 1]
        const endPoint = pathData[j]
        console.log('pathData[j] is ', pathData[j])
        // if (path) {
        const x = Math.abs(endPoint[0] - startPoint[0]) + width || width
        const y = height
        const z = Math.abs(endPoint[1] - startPoint[1]) + width || width
        const cubeGeometry = new THREE.CubeGeometry(x, y, z)
        const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x666666 })
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.position.set((endPoint[0] + startPoint[0]) / 2, y / 2, (endPoint[1] + startPoint[1]) / 2)
        // path.lineTo(point[0], point[1], 0)
        group.add(cube)
        // } else {
        //
        // }
      }
      this.scene.add(group)
    },

    drawPathCubeShape() {
      const shape = this.createRectangleShape(10, 50)
      // 画长方形
      // const shapeGeometry = new THREE.ShapeGeometry(shape, 2)
      // const shapeMaterial = new THREE.MeshLambertMaterial({ color: 0xb00000, wireframe: false })
      // const shapeMesh = new THREE.Mesh(shapeGeometry, shapeMaterial)
      // this.scene.add(shapeMesh)

      const curePath = this.createCurePath()
      // const closedSpline = this.createClosedSpline()
      const extrudeSettings = {
        steps: 4000, // 100
        bevelEnabled: false,
        extrudePath: curePath //  closedSpline //
      }
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

      const material = new THREE.MeshLambertMaterial({ color: 0x999999, wireframe: false })

      const mesh = new THREE.Mesh(geometry, material)

      this.scene.add(mesh)
    },
    drawRandomSpline() {
      const randomPoints = []
      for (let i = 0; i < 10; i++) {
        randomPoints.push(new THREE.Vector3((i - 4.5) * 50, THREE.Math.randFloat(-50, 50), THREE.Math.randFloat(-50, 50)))
      }
      const randomSpline = new THREE.CatmullRomCurve3(randomPoints)
      //
      const extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: randomSpline
      }

      const pts = []
      const numPts = 5

      for (let i = 0; i < numPts * 2; i++) {
        const l = i % 2 === 1 ? 10 : 20

        const a = i / numPts * Math.PI

        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l))
      }

      const shape = new THREE.Shape(pts)

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

      const material2 = new THREE.MeshLambertMaterial({ color: 0xff8000, wireframe: false })

      const mesh = new THREE.Mesh(geometry, material2)

      this.scene.add(mesh)
    },
    drawStarShape() {
      //
      const material = new THREE.MeshLambertMaterial({ color: 0xb00000, wireframe: false })
      const material2 = new THREE.MeshLambertMaterial({ color: 0xff8000, wireframe: false })
      const materials = [material, material2]

      const extrudeSettings = {
        // amount: 20,THREE.ExtrudeBufferGeometry: amount has been renamed to depth.
        depth: 20,
        steps: 1,
        material: 1,
        extrudeMaterial: 0,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 4,
        bevelSegments: 1
      }
      const pts = []
      const numPts = 5

      for (let i = 0; i < numPts * 2; i++) {
        const l = i % 2 === 1 ? 10 : 20

        const a = i / numPts * Math.PI

        pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l))
      }

      const shape = new THREE.Shape(pts)

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

      const mesh = new THREE.Mesh(geometry, materials)

      mesh.position.set(50, 100, 50)

      this.scene.add(mesh)
    },
    animate() {
      this.stats.update()
      // render using requestAnimationFrame
      requestAnimationFrame(this.animate)
      this.cameraControls.update()
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
  height: 900px;
}
</style>
