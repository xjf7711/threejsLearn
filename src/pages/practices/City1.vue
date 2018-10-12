<template>
  <div class="example">
    <h2>City</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import OrbitControls from 'threejs-orbit-controls'
import ColladaLoader from '@/assets/threejs/js/loaders/ColladaLoader'
export default {
  name: 'City',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      cameraControls: null,
      // directionalLight: null,
      rotation: 0,
      gui: null,
      stats: null,
      cube: null,
      clock: new THREE.Clock(),
      cityMesh: null,
      cityGeometry: null
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
      this.initHelper()
      this.initCamera()
      this.initLight()
      this.initRenderer()
      this.initControls()
      this.initGui()
      this.initModels()
      this.render()
      window.onresize = this.onWindowResize
    },
    initHelper() {
      const axexHelper = new THREE.AxesHelper(100)
      this.scene.add(axexHelper)
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

      this.camera.position.set(150, 150, 150)
      this.camera.lookAt(new THREE.Vector3(0, 20, 0))
    },
    // 渲染器
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(0xcccccc, 1.0)
      this.renderer.setSize(this.width, this.height)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.$el.appendChild(this.renderer.domElement)
    },
    initControls() {
      this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement)
    },
    initLight() {
      // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不同
      // A start, 第二个参数是光源强度
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)// 模拟远处类似太阳的光源
      directionalLight.position.set(0, 100, 0).normalize()
      this.scene.add(directionalLight)
      // A end
      const ambient = new THREE.AmbientLight(0xffffff, 1) // AmbientLight,影响整个场景的光源
      ambient.position.set(0, 0, 0)
      this.scene.add(ambient)
      // let pointlight = new THREE.PointLight(0x000000,1.5,2000);
      // scene.add(pointlight);
    },
    initGui() {
      this.controls = {
        // we need the first child, since it's a multimaterial
      }

      this.gui = new dat.GUI()
    },
    initModels() {
      // build the base geometry for each building
      const cubeGeometry = new THREE.CubeGeometry(1, 1, 1)
      // translate the geometry to place the pivot point at the bottom instead of the center
      cubeGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0))
      // get rid of the bottom face - it is never seen
      cubeGeometry.faces.splice(3, 1)
      cubeGeometry.faceVertexUvs[0].splice(3, 1)
      // change UVs for the top face
      // - it is the roof so it wont use the same texture as the side of the building
      // - set the UVs to the single coordinate 0,0. so the roof will be the same color
      //   as a floor row.
      console.log('cubeGeometry is ', cubeGeometry)
      cubeGeometry.faceVertexUvs[0][2][0].set(0, 0)
      cubeGeometry.faceVertexUvs[0][2][1].set(0, 0)
      cubeGeometry.faceVertexUvs[0][2][2].set(0, 0)
      // geometry.faceVertexUvs[0][2][3].set(0, 0)
      // buildMesh
      const buildingMesh = new THREE.Mesh(cubeGeometry)

      // base colors for vertexColors. light is for vertices at the top, shaddow is for the ones at the bottom
      const light = new THREE.Color(0xffffff)
      const shadow = new THREE.Color(0x303050)

      this.cityGeometry = new THREE.Geometry()
      for (let i = 0; i < 200; i++) {
        // put a random position
        buildingMesh.position.x = Math.floor(Math.random() * 200 - 100) * 10
        buildingMesh.position.z = Math.floor(Math.random() * 200 - 100) * 10
        // put a random rotation
        buildingMesh.rotation.y = Math.random() * Math.PI * 2
        // put a random scale
        buildingMesh.scale.x = Math.random() * Math.random() * Math.random() * Math.random() * 50 + 10
        buildingMesh.scale.y = (Math.random() * Math.random() * Math.random() * buildingMesh.scale.x) * 8 + 8
        buildingMesh.scale.z = buildingMesh.scale.x

        // establish the base color for the buildingMesh
        const value = 1 - Math.random() * Math.random()
        const baseColor = new THREE.Color().setRGB(value + Math.random() * 0.1, value, value + Math.random() * 0.1)
        // set topColor/bottom vertexColors as adjustement of baseColor
        const topColor = baseColor.clone().multiply(light)
        const bottomColor = baseColor.clone().multiply(shadow)
        // set .vertexColors for each face
        const buildGeometry = buildingMesh.geometry
        for (let j = 0, jl = buildGeometry.faces.length; j < jl; j++) {
          if (j === 2) {
            // set face.vertexColors on root face
            buildGeometry.faces[ j ].vertexColors = [baseColor, baseColor, baseColor, baseColor]
          } else {
            // set face.vertexColors on sides faces
            buildGeometry.faces[ j ].vertexColors = [topColor, bottomColor, bottomColor, topColor]
          }
        }
        // merge it with cityGeometry - very important for performance
        // THREE.GeometryUtils.merge(this.cityGeometry, buildingMesh)
        // THREE.GeometryUtils: .merge() has been moved to Geometry.
        // Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.

        this.cityGeometry.merge(buildGeometry, buildingMesh.materialTexture, i)
      }

      // generate the texture
      const texture = new THREE.Texture(this.generateTexture())
      // texture.anisotropy = this.renderer.getMaxAnisotropy() // removed
      texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy()
      texture.needsUpdate = true

      // build the mesh
      const material = new THREE.MeshLambertMaterial({
        map: texture,
        vertexColors: THREE.VertexColors
      })
      this.cityMesh = new THREE.Mesh(this.cityGeometry, material)
      this.scene.add(this.cityMesh)
    },
    generateTexture() {
      // build a small canvas 32x64 and paint it in white
      const canvas = document.createElement('canvas')
      canvas.width = 32
      canvas.height = 64
      const context = canvas.getContext('2d')
      // plain it in white
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, 32, 64)
      // draw the window rows - with a small noise to simulate light variations in each room
      for (let y = 2; y < 64; y += 2) {
        for (let x = 0; x < 32; x += 2) {
          const value = Math.floor(Math.random() * 64)
          context.fillStyle = 'rgb(' + [value, value, value].join(',') + ')'
          context.fillRect(x, y, 2, 1)
        }
      }

      // build a bigger canvas and copy the small one in it
      // This is a trick to upscale the texture without filtering
      const canvas2 = document.createElement('canvas')
      canvas2.width = 512
      canvas2.height = 1024
      const context2 = canvas2.getContext('2d')
      // disable smoothing
      context2.imageSmoothingEnabled = false
      context2.webkitImageSmoothingEnabled = false
      context2.mozImageSmoothingEnabled = false
      // then draw the image
      context2.drawImage(canvas, 0, 0, canvas2.width, canvas2.height)
      // return the just built canvas2
      return canvas2
    },
    render() {
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
