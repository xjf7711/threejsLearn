<template>
  <div class="example">
    <h2>Example 09.07 - first person camera</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'

// import OBJLoader from '@/assets/threejs/js/loaders/OBJLoader'
// import MTLLoader from '@/assets/threejs/js/loaders/MTLLoader'
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'
// three.js最新版本'75'相较以前使用的'71'版本obj模型加载的方法发生了变化。
// 移除了OBJMTLLoader.js,并将原来OBJLoader.js和MTLLoader.js加载方法loader.setCrossOrigin更改为loader.setPath。
// import OBJMTLLoader from '@/assets/threejs/js/loaders/OBJMTLLoader' // 已经被移除了
// import FirstPersonControls from '@/assets/threejs/js/controls/FirstPersonControls'
import FirstPersonControls from 'first-person-controls'
// import * as chroma from '@/assets/threejs/js/libs/chroma'
import chroma from 'chroma-js'

export default {
  name: 'Example02',
  data() {
    return {
      stats: null,
      width: 0,
      height: 0,
      scene: null,
      camera: null,
      mouseControls: null,
      renderer: null,
      cube: null,
      sphere: null,
      cylinder: null,
      step: 0,
      scalingStep: 0,
      tube: null,
      raycaster: null,
      clock: new THREE.Clock()
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.mouse = new THREE.Vector2()
    this.raycaster = new THREE.Raycaster()
    this.main()

    // window.onresize = this.onWindowResize
  },
  methods: {
    main() {
      this.initScene()
      this.initCamera()
      this.initRenderer()
      this.initMouseControls()
      this.initLight()
      this.initModels()

      // const projector = new Projector() -- 没有用到
      // call the render function
      this.initStats()
      this.initGui()
      this.animate()
    },
    // once everything is loaded, we run our Three.js stuff.
    initScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new THREE.Scene()
    },
    initRenderer() {
      // create a render and set the size
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      // this.renderer.setClearColor(0xFFFFFF) // , 1.0
      this.renderer.setSize(this.width, this.height)
      this.renderer.sortObjects = false
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true

      // 事件
      // this.renderer.domElement.addEventListener('mousedown', this.onDocumentMouseDown, false)
      // this.renderer.domElement.addEventListener('mousemove', this.onDocumentMouseMove, false)

      // add the output of the renderer to the html element
      this.$el.appendChild(this.renderer.domElement)
    },
    initCamera() {
      // create a camera, which defines where we're looking at.
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.1, 10000)

      // position and point the camera to the center of the scene
      this.camera.position.set(0, 10, 50)
      // this.camera.position.x = 100
      // this.camera.position.y = 10
      // this.camera.position.z = 10
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    initMouseControls() { // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
      this.mouseControls = new FirstPersonControls(this.camera, this.renderer.domElement)
      this.mouseControls.lookSpeed = 0.2 // 0.4 鼠标移动查看的速度
      this.mouseControls.movementSpeed = 20 // 相机移动速度
      this.mouseControls.noFly = true
      // this.mouseControls.lookVertical = true
      this.mouseControls.constrainVertical = true // 约束垂直
      this.mouseControls.verticalMin = 1.0
      this.mouseControls.verticalMax = 2.0
      this.mouseControls.lon = -100 // -100 进入初始视角x轴的角度
      this.mouseControls.lat = 0 // 0 初始视角进入后y轴的角度
    },
    initLight() {
      // add subtle ambient lighting
      const ambientLight = new THREE.AmbientLight(0x444444) // 383838
      this.scene.add(ambientLight)

      // add pointLight for the shadows
      const pointLight = new THREE.PointLight(0xffffff)
      pointLight.position.set(0, 50, 0) // 100, 140, 130
      // 告诉平行光需要开启阴影投射
      pointLight.castShadow = true
      this.scene.add(pointLight)
    },
    initHelper() {
      // 辅助工具
      const axesHelper = new THREE.AxesHelper(50)
      this.scene.add(axesHelper)
    },
    initModels() {
      // OBJMTLLoader方法已移除
      // var loader = new OBJMTLLoader()
      // var load = function(object) {
      //   var scale = chroma.scale(['red', 'green', 'blue'])
      //   this.setRandomColors(object, scale)
      //   const mesh = object
      //   this.scene.add(mesh)
      // }
      //
      // const texture = THREE.ImageUtils.loadTexture('../assets/textures/Metro01.JPG')
      // // texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
      // loader.load('../assets/models/city.obj', '../assets/models/city.mtl', load)
      // // texture.repeat.set( 1 , 1);

      const mtlLoader = new MTLLoader()
      mtlLoader.setPath('static/threejs/models/city/')

      // 加载mtl文件
      mtlLoader.load('city.mtl', (material) => {
        const objLoader = new OBJLoader()

        // 设置当前加载的纹理
        objLoader.setMaterials(material)
        objLoader.setPath('static/threejs/models/city/')
        objLoader.load('city.obj', (object) => {
          // console.log(object)
          // 设置颜色的取值范围
          const scale = chroma.scale(['yellow', '008ae5'])
          console.log(object)
          // 重新设置纹理颜色
          this.setRandomColors(object, scale)

          // 将模型缩放并添加到场景当中
          this.scene.add(object)
        })
      })
    },

    render() {
      this.renderer.clear()
      this.renderer.render(this.scene, this.camera)
    },

    animate() {
      // 更新性能插件
      this.stats.update()
      const delta = this.clock.getDelta()
      // 更新控制器
      this.mouseControls.update(delta)

      requestAnimationFrame(this.animate)
      this.render()
    },

    initGui() {
      // setup the control gui
      this.controls = {
        // we need the first child, since it's a multimaterial
      }

      // const datGui = new dat.GUI()
    },
    initStats() { // 初始化性能插件
      this.stats = new Stats()

      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'

      this.$el.appendChild(this.stats.domElement)
    },
    setRandomColors(object, scale) { // 添加纹理的方法
      // console.log('setRandomColor object.children is ', object.children)
      var children = object.children // 获取children数组
      // 如果当前模型有子元素，则遍历子元素
      if (children && children.length > 0) {
        children.forEach((e) => {
          this.setRandomColors(e, scale)
        })
      } else {
        // no children assume contains a mesh
        if (object instanceof THREE.Mesh) {
          // object.material.color = new THREE.Color(scale(Math.random()).hex())
          // if (object.material.name && object.material.name.indexOf('building') === 0) {
          //   object.material.emissive = new THREE.Color(0x444444)
          //   object.material.transparent = true
          //   object.material.opacity = 0.8
          // }

          // 如果当前的模型是楼层，则设置固定的颜色，并且透明化
          if (Array.isArray(object.material)) {
            for (let i = 0; i < object.material.length; i++) {
              const material = object.material[i]

              const color = scale(Math.random()).hex()

              if (material.name.indexOf('building') === 0) {
                material.color = new THREE.Color(color)

                material.transparent = true

                material.opacity = 0.7

                material.depthWrite = false
              }
            }
          } else { // 如果不是场景组，则给当前mesh添加纹理
            // 随机当前模型的颜色
            object.material.color = new THREE.Color(scale(Math.random()).hex())
          }
        }
      }
    },
    // 窗口变动触发的函数
    onWindowResize() {
      this.camera.aspect = this.idth / this.height

      this.camera.updateProjectionMatrix()

      this.render()

      this.WebGLRenderer.setSize(this.width, this.height)
    },
    onDocumentMouseDown(event) {
      // event.preventDefault()
      // 将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
      // const mouse = new THREE.Vector2()
      // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
      this.mouse.y = -((event.clientY - 180) / this.height) * 2 + 1

      // 新建一个三维单位向量 假设z方向就是0.5
      // 根据照相机，把这个向量转换到视点坐标系
      // const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(this.camera)
      // 在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
      // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())

      // const vector = new THREE.Vector3((event.clientX / this.width) * 2 - 1, -(event.clientY / this.height) * 2 + 1, 0.5)
      // // vector = vector.unproject(this.camera)
      // this.projector.unprojectVector(vector, this.camera)
      // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
      // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera)

      // 获取raycaster直线和所有模型相交的数组集合
      const intersects = this.raycaster.intersectObjects([this.sphere, this.cylinder, this.cube])

      if (intersects.length > 0) {
        console.log(intersects[0])

        intersects[0].object.material.transparent = true
        intersects[0].object.material.opacity = 0.1
      }
    },
    onDocumentMouseMove(event) {
      if (this.controls.showRay) {
        // const vector = new THREE.Vector3((event.clientX / this.width) * 2 - 1, -(event.clientY / this.height) * 2 + 1, 0.5)
        // // unproject函数，将屏幕上的点击位置转换成Three.js场景中的坐标 --无效
        // // vector = vector.unproject(this.camera)
        // this.projector.unprojectVector(vector, this.camera) -- 偏上
        // const raycaster = new THREE.Raycaster()
        // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.

        this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
        this.mouse.y = -((event.clientY - 180) / this.height) * 2 + 1

        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera)
        // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
        const intersects = this.raycaster.intersectObjects([this.sphere, this.cylinder, this.cube])

        if (intersects.length > 0) {
          const points = []
          points.push(new THREE.Vector3(-30, 39.8, 30))
          points.push(intersects[0].point)

          const mat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 })
          const tubeGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 60, 0.001)

          if (this.tube) this.scene.remove(this.tube)

          if (this.controls.showRay) {
            this.tube = new THREE.Mesh(tubeGeometry, mat)
            this.scene.add(this.tube)
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 900px;
    background-color: #eeeeee;
  }
</style>
