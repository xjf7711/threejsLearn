<template>
  <div class="example">
    <h2>Example 08.08 - Load collada model </h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
// import ColladaLoader from '@/assets/threejs/js/loaders/ColladaLoader'
import ColladaLoader from 'three-collada-loader'
import OrbitControls from 'threejs-orbit-controls'
export default {
  name: 'Example08',
  data() {
    return {
      width: 700,
      height: 500,
      scene: null,
      camera: null,
      renderer: null,
      mouseControls: null,
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
      this.initRenderer()
      this.initLight()
      this.initMouseControls()
      this.initModels()
      this.initHelper()
      this.initGui()
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
      // this.scene.position.x = -900
      // this.scene.position.y = -300
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
    initLight() {
      const ambientLight = new THREE.AmbientLight(0xffffff)
      this.scene.add(ambientLight)
      // add spotlight for the shadows
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(150, 150, 150)
      spotLight.intensity = 2
      this.scene.add(spotLight)
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
      this.mouseCtrols.minDistance = 8
      this.mouseCtrols.maxDistance = 180
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
      // this.controls = {
      //   // we need the first child, since it's a multimaterial
      // }

      // this.gui = new dat.GUI()
    },
    initModels() {
      const loader = new ColladaLoader()
      // loader.setPath('static/threejs/models/dae/') // 路径 无效
      const uri = 'static/threejs/learning/assets/models/dae/Truck_dae.dae'
      // const uri = 'static/threejs/models/dimaianA.dae'
      // const uri = 'static/threejs/models/dae/zx503.dae'
      loader.load(uri, result => {
        console.log('loader.load onload result is ', result)
        this.mesh = result.scene.children[0].children[0].clone()
        // this.mesh = result.scene.children[0].clone()
        // this.mesh = result.scene.children[4].clone()
        // this.mesh = result.scene.clone()
        // this.mesh.scale.set(4, 4, 4)
        this.mesh.position.set(0, 0, 0)
        // this.mesh.rotation.x = 0
        // this.mesh.rotation.y = 0
        // this.mesh.rotation.z = 0
        this.scene.add(this.mesh)
      })
    },

    render() {
      this.stats.update()

      // render using requestAnimationFrame
      requestAnimationFrame(this.render) // 异步加载，没有这个模型不能显示出来
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
