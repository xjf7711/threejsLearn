<template>
  <div class="example">
    <h2>罗经甲板</h2>

    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import * as THREE from 'three'
import * as Stats from 'stats.js'
// import * as dat from 'dat.gui'
import OrbitControls from 'threejs-orbit-controls'
import clearWebGLContext from '../mixin/clearWebGLContext'
export default {
  name: 'LuojingJiaBan05',
  mixins: [clearWebGLContext],
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
      stats: null
    }
  },
  mounted() {
    this.width = this.$el.clientWidth - 40
    this.height = this.$el.clientHeight - 100
    this.initStats()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initRenderer()
    this.initMouseControls()
    this.initHelper()
    this.initGui()
    this.initModels()
    this.render()
    window.onresize = this.onWindowResize
  },
  methods: {
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

      this.camera.position.set(30, 40, 50)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
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
      const ambientLigth = new THREE.AmbientLight(0x404040, 0, 5) // soft white light
      this.scene.add(ambientLigth)
      // white spotlight shining from the side, casting a shadow
      // const spotLight = new THREE.SpotLight(0xffffff)
      // spotLight.position.set(0, 20, 0)

      // spotLight.castShadow = true
      //
      // spotLight.shadow.mapSize.width = 1024
      // spotLight.shadow.mapSize.height = 1024
      //
      // spotLight.shadow.camera.near = 500
      // spotLight.shadow.camera.far = 4000
      // spotLight.shadow.camera.fov = 30

      // this.scene.add(spotLight)

      // add pointlight for the shadows
      // const pointLight = new THREE.PointLight(0xffffff, 0.8)
      // // pointLight.position.set(0, 14, 0)
      // this.camera.add(pointLight)
      // this.scene.add(pointLight)
      // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
      // directionalLight.position.set(-50, 50, -50)
      // this.scene.add(directionalLight)
      // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x080820, 1)
      // hemiLight.position.set(0, 50, 0)
      // this.scene.add(hemiLight)
      // const hemiLight = new THREE.HemisphereLight(0xffffFF, 0x080820, 1)
      // hemiLight.position.set(0, 500, 0)
      // this.scene.add(hemiLight)
      // const hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6)
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1)
      // hemiLight.color.setHSL(0.6, 1, 0.6)
      // hemiLight.groundColor.setHSL(0.095, 1, 0.75)
      hemiLight.position.set(0, 10, 0)
      this.scene.add(hemiLight)

      const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 1)
      this.scene.add(hemiLightHelper)
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
      this.mouseCtrols.minDistance = 3
      this.mouseCtrols.maxDistance = 80
      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      // 最大仰视角和俯视角
      this.mouseCtrols.minPolarAngle = 0.1 * Math.PI // radians
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
      this.mouseCtrols.dampingFactor = 0.15

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
    initHelper() {
      const axesHelper = new THREE.AxesHelper(30)
      this.scene.add(axesHelper)
      const gridHelper = new THREE.GridHelper(50, 20)
      this.scene.add(gridHelper)
    },
    initGui() {
      // this.controls = {
      //   // we need the first child, since it's a multimaterial
      // }
      //
      // this.gui = new dat.GUI()
    },
    initModels() {
      const loader = new THREE.JSONLoader()
      const uri = 'static/threejs/models/warship/luoJingJiaBan05.json'
      console.log('uri is ' + uri)
      loader.load(uri, (geometry, mat) => {
        console.log('loader.load onload geometry is ', geometry)
        console.log('loader.load mat is ', mat)
        this.mesh = new THREE.Mesh(geometry, mat[0])

        // this.mesh.scale.x = 10
        // this.mesh.scale.y = 10
        // this.mesh.scale.z = 10

        this.scene.add(this.mesh)
      }, res => {
        console.log('load onProgress res is ', res)
      }, error => {
        console.log('error is ', error)
      })
    },

    render() {
      this.stats.update()
      // if (this.mesh) {
      //   this.mesh.rotation.y += 0.006
      // }
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
      this.renderer.setSize(this.width, this.height)
    }
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  background-color: #eeeeee;
  width: 100%;
  height: 900px;
}
</style>
