<template>
  <div class="example">
    <h2>Warehouse3D</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
// import * as TWEEN from '@tweenjs/tween.js'
import * as Stats from 'stats.js'
import * as dat from 'dat.gui'
import OrbitControls from 'threejs-orbit-controls'
// import ThreeBSP from '@/assets/threejs/libs/threebsp.js'
// import { InitAddObject } from './createObjects'
// import { objList } from './objectData'
// import { threeObj } from './threeObj'
import Models from './models'
export default {
  name: 'DataCenter',
  data() {
    return {
      width: 0,
      height: 0,
      option: null,
      renderer: null,
      scene: null,
      camera: null,
      light: null,
      mouseCtrols: null,
      stats: null,
      guiControls: null,
      raycaster: new THREE.Raycaster(),
      mouse: new THREE.Vector2(),
      tube: null,
      cube: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    // 画布参数
    this.option = {
      antialias: true,
      loadSyn: false, // 是否启用异步加载
      showHelpGrid: true, // 是否显示网格线
      clearColor: 0x39609B,
      clearColorOpacity: 1
    }

    // this.initThree()
    this.initGui()
    this.initStats()
    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initModels()
    this.initHelpGrid()
    this.initMouseControls()
    this.animation()

    window.onresize = this.onWindowResize
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene()
      this.scene.position.set(0, -300, 0)
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        10000
      )
      this.camera.name = 'mainCamera'
      this.camera.position.x = 800
      this.camera.position.y = 1000
      this.camera.position.z = 2800
      this.camera.up.x = 0
      // this.camera.up.y = 10000 // 无效 右键移动时有问题
      this.camera.up.z = 0
      this.camera.lookAt({ // 无效
        x: 0,
        y: 1000,
        z: 0
      })
    },
    // 渲染
    initRenderer() {
      // const _this = this
      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: this.option.antialias // antialias:true增加抗锯齿效果
      })
      // console.log('initRenderer this.width is ' + this.width + ', this.height is ' + this.height)
      // 设置窗口尺寸
      this.renderer.setSize(this.width, this.height)

      console.log('this.option.clearColor is ' + this.option.clearColor)
      this.renderer.setClearColor(this.option.clearColor, this.option.clearColorOpacity) // 设置窗口背景颜色为this.option.clearColor
      // this.renderer.setClearColor(0xdddddd, 1.0)
      // 告诉渲染器需要阴影效果
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMapSoft = true
      // 将renderer关联到this.$el，这个过程类似于获取canvas元素
      this.$el.appendChild(this.renderer.domElement)

      // 事件
      this.renderer.domElement.addEventListener('dblclick', this.handleDoubleClick, false)
      // this.renderer.domElement.addEventListener('mousedown', this.onMouseDown, false)
      this.renderer.domElement.addEventListener('mousemove', this.onMouseMove, false)
    },
    // 给场景添加光源
    initLight() {
      /*
          AmbientLight: 环境光，基础光源，它的颜色会被加载到整个场景和所有对象的当前颜色上。
          PointLight：点光源，朝着所有方向都发射光线
          SpotLight ：聚光灯光源：类型台灯，天花板上的吊灯，手电筒等
          DirectionalLight：方向光，又称无限光，从这个发出的光源可以看做是平行光.
        */
      const ambientLight = new THREE.AmbientLight(0xcccccc)
      ambientLight.position.set(0, 0, 0)
      this.scene.add(ambientLight)
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(0, 1000, 0)
      // spotLight.position.set(0, 350, 0)
      // spotLight.shadow.camera.near = 1
      // spotLight.shadow.camera.far = 5000
      spotLight.castShadow = true
      this.scene.add(spotLight)
    },
    initModels() {
      // const cubeGeometry = new THREE.BoxGeometry(250, 250, 250)
      // const cubeMaterial = new THREE.MeshNormalMaterial() // MeshBasicMaterial({ color: 0xff0000 })
      // this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      // this.cube.position.set(0, 0, 0)
      // this.scene.add(this.cube)

      // 添加3D对象
      // console.log('this.objList is ', this.objList)
      // objList.forEach(_obj => {
      //   InitAddObject(this, _obj)
      // })
      // threeObj.init(this)

      Models.init(this)
    },
    // 创建网格线
    initHelpGrid() {
      if (this.option.showHelpGrid) {
        // 网格线
        const GridHelper = new THREE.GridHelper(1800, 30)
        this.scene.add(GridHelper)
        // 三维坐标轴
        const axesHelper = new THREE.AxesHelper(1200)
        this.scene.add(axesHelper)
      }
    },
    initMouseControls() {
      // 用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
      // 新建一个轨道控制器
      // 如果初始化时不传入第二个参数，orbitControl默认监听的是document，自然地整个文档范围内的所有相关事件都会被监听。
      // 相应的，解决方法自然是把场景所在的canvas作为第二个参数传进来
      this.mouseCtrols = new OrbitControls(this.camera, this.renderer.domElement)

      // this.mouseControls.addEventListener('change', this.updateControls)

      // Set to false to disable this control
      // 鼠标控制是否可用
      this.mouseCtrols.enabled = true

      // "target" sets the location of focus, where the object orbits around
      // 聚焦坐标
      this.mouseCtrols.target = new THREE.Vector3() // 控制焦点

      // How far you can dolly in and out ( PerspectiveCamera only )
      // 最大最小相机移动距离(景深相机)
      this.mouseCtrols.minDistance = 800
      this.mouseCtrols.maxDistance = 4000
      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      // 最大仰视角和俯视角
      this.mouseCtrols.minPolarAngle = 0.2 * Math.PI // radians
      this.mouseCtrols.maxPolarAngle = 0.49 * Math.PI // radians
      // How far you can orbit horizontally, upper and lower limits.
      // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
      // 水平方向视角限制
      this.mouseCtrols.minAzimuthAngle = -0.95 * Math.PI // -Infinity // radians
      this.mouseCtrols.maxAzimuthAngle = 0.95 * Math.PI // Infinity // radians

      // Set to true to enable damping (inertia)
      // If damping is enabled, you must call controls.update() in your animation loop
      // 惯性滑动，滑动大小默认0.25
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.mouseCtrols.enableDamping = true
      // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
      this.mouseCtrols.dampingFactor = 0.25

      // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
      // Set to false to disable zooming
      // 滚轮是否可控制zoom，zoom速度默认1
      this.mouseCtrols.enableZoom = true
      this.mouseCtrols.zoomSpeed = 1.0

      // Set to false to disable rotating
      // 是否可旋转，旋转速度
      this.mouseCtrols.enableRotate = true
      this.mouseCtrols.rotateSpeed = 1.0

      // Set to false to disable panning
      // 是否可平移，默认移动速度为7px
      this.mouseCtrols.enablePan = true
      this.mouseCtrols.keyPanSpeed = 0.2	// pixels moved per arrow key push

      // Set to true to automatically rotate around the target
      // If auto-rotate is enabled, you must call controls.update() in your animation loop
      // 是否自动旋转，自动旋转速度。默认每秒30圈
      this.mouseCtrols.autoRotate = false
      this.mouseCtrols.autoRotateSpeed = 3.0 // 30 seconds per round when fps is 60

      // Set to false to disable use of the keys
      // 是否能使用键盘
      this.mouseCtrols.enableKeys = true

      // The four arrow keys
      // 默认键盘控制上下左右的键
      this.mouseCtrols.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }
      // Mouse buttons
      // 鼠标点击按钮
      // this.mouseCtrols.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT }
    },
    initGui() {
      this.guiControls = {
        showRay: false,
        rotationSpeed: 0.05
      }

      const datGui = new dat.GUI()
      console.log('datGui is ', datGui)
      // Align top right
      datGui.domElement.style.position = 'absolute'
      datGui.domElement.style.top = '55px'
      datGui.domElement.style.right = '5px'
      // datGui.add(this.guiControls, 'rotationSpeed', 0, 0.5)
      // datGui.add(this.guiControls, 'bouncingSpeed', 0, 0.5)
      // datGui.add(this.guiControls, 'scalingSpeed', 0, 0.5)
      datGui.add(this.guiControls, 'showRay').onChange(() => {
        if (this.tube) this.scene.remove(this.tube)
      })
    },
    initStats() {
      this.stats = new Stats()
      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'

      this.$el.appendChild(this.stats.domElement)
    },
    animation() {
      // 更新控制器
      this.mouseCtrols.update()
      // 通知stats画面已被重新渲染了
      // 更新性能插件
      this.stats.update()

      // rotate the cube around its axes
      // this.cube.rotation.x += this.guiControls.rotationSpeed
      // this.cube.rotation.y += this.guiControls.rotationSpeed
      // this.cube.rotation.z += this.guiControls.rotationSpeed
      // 通过requestAnimationFrame方法在特定时间间隔重新渲染场景
      requestAnimationFrame(this.animation)
      this.render()
    },
    render() {
      // 渲染场景
      this.renderer.render(this.scene, this.camera)
    },
    handleDoubleClick(event) {
      event.preventDefault()
      // 将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
      // const mouse = new THREE.Vector2()
      // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
      this.mouse.y = -((event.clientY - 138) / this.height) * 2 + 1

      // 通过鼠标点的位置和当前相机的矩阵计算出 raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera)

      // 获取 raycaster 直线和所有模型相交的数组集合
      console.log('this.scene.children is ', this.scene.children)
      const intersects = this.raycaster.intersectObjects(this.scene.children)

      if (intersects.length > 0) {
        console.log('intersects[0] is ', intersects[0])
        intersects[0].object.material.transparent = true
        intersects[0].object.material.opacity = 0.4
      }
    },
    onMouseDown(event) {
      event.preventDefault()
      // 将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
      // const mouse = new THREE.Vector2()
      // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
      this.mouse.y = -((event.clientY - 138) / this.height) * 2 + 1

      // 通过鼠标点的位置和当前相机的矩阵计算出 raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera)

      // 获取 raycaster 直线和所有模型相交的数组集合
      console.log('this.scene.children is ', this.scene.children)
      const intersects = this.raycaster.intersectObjects(this.scene.children)

      if (intersects.length > 0) {
        console.log('intersects[0] is ', intersects[0])
        intersects[0].object.material.transparent = true
        intersects[0].object.material.opacity = 0.4
      }
    },
    onMouseMove(event) {
      if (this.guiControls.showRay) {
        // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.

        this.mouse.x = ((event.clientX - 200) / this.width) * 2 - 1
        this.mouse.y = -((event.clientY - 198) / this.height) * 2 + 1

        // 通过鼠标点的位置和当前相机的矩阵计算出 raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera)
        const intersects = this.raycaster.intersectObjects(this.scene.children)

        if (intersects.length > 0) {
          const points = []
          points.push(new THREE.Vector3(1400, 600, 1800))
          points.push(intersects[0].point)

          const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 })
          const tubeGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 60, 1)

          if (this.tube) this.scene.remove(this.tube)

          if (this.guiControls.showRay) {
            this.tube = new THREE.Mesh(tubeGeometry, tubeMaterial)
            this.scene.add(this.tube)
          }
        }
      }
    },
    onWindowResize() {
      this.width = this.$el.clientWidth - 40
      this.height = this.$el.clientHeight - 100
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.width, this.height)
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    background-color: #eee;
    width: 100%;
    height: 920px;
  }
</style>
